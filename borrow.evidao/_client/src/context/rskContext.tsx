import Contracts from "contracts/contracts.json";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import RLogin from "@rsksmart/rlogin";
import { toast } from "react-toastify";

const rpcUrls = {
  30: "https://public-node.rsk.co",
  31: "https://public-node.testnet.rsk.co",
  1: "https://mainnet.infura.io/v3/7d5d71df32d548249ff444f6a43b43c5", // Ethereum Mainnet
  3: "https://ropsten.infura.io/v3/7d5d71df32d548249ff444f6a43b43c5", // Ropsten
  4: "https://rinkeby.infura.io/v3/7d5d71df32d548249ff444f6a43b43c5", // Rinkeby
  5: "https://goerli.infura.io/v3/7d5d71df32d548249ff444f6a43b43c5", // Goerli
  42: "https://kovan.infura.io/v3/7d5d71df32d548249ff444f6a43b43c5", // Kovan
};

const supportedChains = Object.keys(rpcUrls).map(Number);

// Create a new rLogin instance with your custom providerOptions outside of the
// component.
const rLogin = new RLogin({
  cacheProvider: false,
  providerOptions: {},
  rpcUrls,
  supportedChains,
});

type RSKProviderProps = { children: React.ReactNode };

interface IRSKContext {
  account: string | null;
  balance: IBalance | null;
  fetchBalance: (account: string) => Promise<void>;
  resetBalance: () => void;
  handleLogin: () => Promise<void>;
  handleLogout: (response: any) => void;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  web3: Web3 | null;
  coin: Contract | null;
  cdp: Contract | null;
  safeData: ISafeData | null;
  getUserSafeData: () => Promise<void>;
}
interface IBalance {
  rbtc?: string;
  xbtc?: string;
}

const RSKContext = createContext<IRSKContext | undefined>(undefined);

export const RSKProvider = ({ children }: RSKProviderProps) => {
  const contextBalance = useBalance();

  const value: IRSKContext = contextBalance;

  return <RSKContext.Provider value={value}>{children}</RSKContext.Provider>;
};

interface ISafeData {
  collateral: number;
  debtIssued: number;
  // globalDebt: number;
  // rate: number;
}

const useBalance = () => {
  const [web3, setWeb3] = useState<null | Web3>(null);
  const [loginResponse, setLoginResponse] = useState<any>(null);
  const [coin, setCoin] = useState<Contract | null>(null);
  const [cdp, setCdp] = useState<Contract | null>(null);

  const [safeData, setSafeData] = useState<ISafeData | null>(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return data.safeData ?? null;
    }
  });

  const [balance, setBalance] = useState<IBalance | null>(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return data.balance ?? { xbtc: "0", rbtc: "0" };
    }
  });

  const [account, setAccount] = useState<string | null>(null);

  const [loggedIn, setLoggedIn] = useState(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return !!data.loggedIn;
    }
    return false;
  });

  // Use the rLogin instance to connect to the provider
  const handleLogin = async () => {
    try {
      const response = await rLogin.connect();
      setLoginResponse(response);
      // set a local variable for the response:
      const provider = response.provider;

      // Use ethQuery to get the user's account and the chainId
      const web3Obj = new Web3(provider);
      setWeb3(web3Obj);

      const accounts = await web3Obj.eth.getAccounts();
      setAccount(accounts[0]);

      const coinContract = new web3Obj.eth.Contract(
        Contracts.contracts.Coin.abi as any,
        Contracts.contracts.Coin.address
      );
      setCoin(coinContract);

      const cdpContract = new web3Obj.eth.Contract(
        Contracts.contracts.CDPTracker.abi as any,
        Contracts.contracts.CDPTracker.address
      );
      setCdp(cdpContract);

      // Listen to the events emitted by the wallet. If changing account, remove the listeners
      // below and connect again. If disconnect or change chains, then logout.
      provider.on("accountsChanged", (accounts: (string | null)[]) => {
        if (accounts.length === 0) {
          return handleLogout();
        }
        provider?.removeAllListeners?.();
        handleLogin();
      });
      provider.on("chainChanged", () => {
        toast.error(
          `Please make sure that you're connected to the RSK ${
            process.env.REACT_APP_FRONTEND_NETWORK || "Testnet"
          }`
        );

        handleLogout();
      });
      provider.on("disconnect", () => handleLogout());
      setLoggedIn(true);
    } catch (error: any) {
      // catch an error and if there is a message display it. Closing WalletConnect without a
      // connection will throw an error with no response, which is why we check:
      throw error;
    }
    // .catch(err => err && err.message && setConnectResponse(`[ERROR]: ${err.message}`))
  };

  // handle logging out
  const handleLogout = useCallback(() => {
    // remove EIP 1193 listeners that were set above
    if (loginResponse) {
      loginResponse.provider.removeAllListeners();

      // send the disconnect method
      loginResponse.disconnect();
    }
    // reset the useState responses (sample app specific):
    setAccount(null);
    setLoggedIn(false);
    localStorage.removeItem("rsk");
  }, [loginResponse]);

  const fetchBalance = useCallback(
    async (account: string) => {
      const newBal: IBalance = { ...balance };
      if (web3) {
        const bal = await web3?.eth.getBalance(account);
        newBal.rbtc = bal;
      }
      if (coin) {
        const bal = await coin.methods.balanceOf(account).call();
        newBal.xbtc = bal;
      }
      setBalance(newBal);
    },
    [setBalance, web3, balance, coin]
  );

  const getUserSafeData = useCallback(async () => {
    if (cdp && account) {
      const collateral: number = await cdp.methods.collateral(account).call();
      const debtIssued: number = await cdp.methods.debtIssued(account).call();
      // const rate: number = await cdp.methods.lastAR().call();
      // const globalDebt: number = await cdp.methods.globalDebt().call();
      setSafeData({ collateral, debtIssued });
    }
  }, [cdp, account]);

  useEffect(() => {
    if (account && coin) {
      fetchBalance(account);
    }
  }, [account, coin]);

  const resetBalance = () => {
    setBalance(null);
  };

  // Rehydrate
  useEffect(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
    }
  }, []);

  // Write to localstorage on state change
  useEffect(() => {
    localStorage.setItem(
      "rsk",
      JSON.stringify({ balance, loggedIn, account, safeData })
    );
  }, [balance, loggedIn, account, safeData]);

  return {
    account,
    balance,
    fetchBalance,
    resetBalance,
    loggedIn,
    setLoggedIn,
    handleLogin,
    handleLogout,
    web3,
    coin,
    cdp,
    safeData,
    getUserSafeData,
  };
};

export const useRSK = () => {
  const context = useContext(RSKContext);
  if (!context) {
    throw new Error(" No provider found");
  }
  return context;
};
