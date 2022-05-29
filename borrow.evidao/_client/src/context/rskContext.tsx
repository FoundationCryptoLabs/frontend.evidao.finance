import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import Web3 from "web3";
import RLogin from "@rsksmart/rlogin";

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
  account: string | undefined;
  balance: number | undefined;
  fetchBalance: (account: string) => Promise<void>;
  resetBalance: () => void;
  handleLogin: () => void;
  handleLogout: (response: any) => void;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const RSKContext = createContext<IRSKContext | undefined>(undefined);

export const RSKProvider = ({ children }: RSKProviderProps) => {
  const contextBalance = useBalance();

  const value: IRSKContext = contextBalance;

  return <RSKContext.Provider value={value}>{children}</RSKContext.Provider>;
};

const useBalance = () => {
  const [balance, setBalance] = useState<number | undefined>(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return data.balance ?? null;
    }
  });

  const [account, setAccount] = useState(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return data.acount;
    }
    return false;
  });

  const [loggedIn, setLoggedIn] = useState(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      const data = JSON.parse(rawData);
      return !!data.loggedIn;
    }
    return false;
  });

  // Use the rLogin instance to connect to the provider
  const handleLogin = () => {
    rLogin
      .connect()
      .then((response: any) => {
        // set a local variable for the response:
        const provider = response.provider;

        // Use ethQuery to get the user's account and the chainId
        const web3 = new Web3(provider);
        console.log(web3.defaultAccount);
        setAccount(web3.defaultAccount);

        // Listen to the events emitted by the wallet. If changing account, remove the listeners
        // below and connect again. If disconnect or change chains, then logout.
        provider.on("accountsChanged", (accounts: (string | null)[]) => {
          if (accounts.length === 0) {
            return handleLogout(response);
          }
          provider.removeAllListeners && provider.removeAllListeners();
          handleLogin();
        });
        provider.on("chainChanged", () => handleLogout(response));
        provider.on("disconnect", () => handleLogout(response));
      })
      // catch an error and if there is a message display it. Closing WalletConnect without a
      // connection will throw an error with no response, which is why we check:
      .catch((error) => console.log("the error:", error));
    // .catch(err => err && err.message && setConnectResponse(`[ERROR]: ${err.message}`))
  };

  // handle logging out
  const handleLogout = (response: any) => {
    // remove EIP 1193 listeners that were set above
    response.provider.removeAllListeners &&
      response.provider.removeAllListeners();

    // send the disconnect method
    response.disconnect();

    // reset the useState responses (sample app specific):
    setAccount(null);
    setLoggedIn(false);
  };

  const fetchBalance = useCallback(
    async (account: string) => {
      // const balance = await
      setBalance(0);
    },
    [setBalance]
  );

  const resetBalance = () => {
    setBalance(undefined);
  };

  // Rehydrate
  useEffect(() => {
    const rawData = localStorage.getItem("rsk");
    if (rawData) {
      // const data = JSON.parse(rawData);
    }
  }, []);

  // Write to localstorage on state change
  useEffect(() => {
    localStorage.setItem("rsk", JSON.stringify({ balance, loggedIn, account }));
  }, [balance, loggedIn, account]);

  return {
    account,
    balance,
    fetchBalance,
    resetBalance,
    loggedIn,
    setLoggedIn,
    handleLogin,
    handleLogout,
  };
};

export const useRSK = () => {
  const context = useContext(RSKContext);
  if (!context) {
    throw new Error(" No provider found");
  }
  return context;
};