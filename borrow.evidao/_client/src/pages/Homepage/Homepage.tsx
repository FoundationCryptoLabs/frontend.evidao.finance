import React, { useCallback, useEffect, useState } from "react";
import TakeDebt from "components/TakeDebt/TakeDebt";
import {
  Box,
  FormControlLabel,
  LinearProgress,
  Switch,
  Typography,
} from "@mui/material";
import Lend from "components/Lend/Lend";
import InfoCard from "components/InfoCard/InfoCard";
import { useRSK } from "context/rskContext";
import { fromWei, toWei } from "web3-utils";
import { isCatchClause } from "typescript";
import { toast } from "react-toastify";

const Homepage = () => {
  const [checked, setChecked] = useState(false);
  const { cdp, account, getUserSafeData, safeData, balance, fetchBalance } =
    useRSK();
  const [loading, setLoading] = useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    getUserSafeData();
  }, [getUserSafeData]);

  // Contract Interactions

  const RemoveCollateral = async (value: string) => {
    const res = await cdp?.methods
      .removeCollateral(toWei(value, "ether"))
      ?.send({
        from: account,
      });
  };

  const ReturnDebt = async (value: string) => {
    const res = await cdp?.methods.returnDebt(toWei(value, "ether"))?.send({
      from: account,
    });
  };

  const RedeemCoins = async (value: string) => {
    const res = await cdp?.methods.redeemCoins(toWei(value, "ether"))?.send({
      from: account,
    });
  };

  const contractSubmitWrapper =
    (cb: (val: string) => Promise<void>) => async (val: string) => {
      if (!cdp || !account) return;
      setLoading(true);
      try {
        await toast.promise(cb(val), {
          pending: `Running [[${cb.name}]]`,
          success: "Success!",
          error: {
            render: (err: any) => {
              return err.data?.message || "Something went wrong";
            },
          },
        });
        await getUserSafeData();
        await fetchBalance(account);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

  // END Contract Interactions

  return (
    <>
      {safeData && balance ? (
        <Box
          width="100%"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={4}
          marginY="2rem"
        >
          <InfoCard
            bgColor="#16a085"
            title="Collateral Deposited"
            data={fromWei(`${safeData.collateral}`, "ether")}
            unit="rBTC"
            actionText="Remove Collateral"
            onActionClick={contractSubmitWrapper(RemoveCollateral)}
          />
          <InfoCard
            bgColor="#2980b9"
            title="Debt Taken"
            data={fromWei(`${safeData.debtIssued}`, "ether")}
            unit="xBTC"
            actionText="Return Debt"
            onActionClick={contractSubmitWrapper(ReturnDebt)}
          />
          <InfoCard
            bgColor="#27ae60"
            title="rBTC Balance"
            data={fromWei(`${balance.rbtc}`, "ether")}
            unit="rBTC"
          />
          <InfoCard
            bgColor="#9b59b6"
            title="xBTC Balance"
            data={fromWei(`${balance.xbtc}`, "ether")}
            unit="xBTC"
            actionText="Redeem for rBTC"
            onActionClick={contractSubmitWrapper(RedeemCoins)}
          />
        </Box>
      ) : (
        <Box marginY="2rem" width="100%">
          <LinearProgress />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Deposit</Typography>
        <Switch
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "inherit",
              "& +.MuiSwitch-track": {
                background: "#000",
              },
            },
          }}
          checked={checked}
          onChange={handleSwitch}
        />
        <Typography variant="h5">Borrow</Typography>
      </Box>
      {checked ? <TakeDebt /> : <Lend />}
    </>
  );
};

export default Homepage;
