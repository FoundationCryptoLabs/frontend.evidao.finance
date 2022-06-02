import React, { useState } from "react";
import { useRSK } from "../../context/rskContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { toWei } from "web3-utils";

type Props = {};

const Lend = (props: Props) => {
  const [collVal, setCollVal] = useState("");
  const { cdp, account, getUserSafeData, fetchBalance } = useRSK();

  const handleSubmit = async () => {
    if (cdp && account) {
      const res = await cdp?.methods.depositCollateral()?.send({
        from: account,
        value: toWei(collVal, "ether"),
      });
      await getUserSafeData();
      await fetchBalance(account);
    }
  };

  return (
    <Card elevation={4} sx={{ minWidth: "40%" }}>
      <CardContent>
        {/* <Typography align="center" variant="h4" marginBottom="1rem">
            Borrow
          </Typography>
          <Typography marginBottom="0.5rem">Amount to borrow</Typography> */}
        <TextField
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">rBTC</InputAdornment>,
          }}
          value={collVal}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCollVal(event.currentTarget.value);
          }}
          placeholder="Enter collateral amount to deposit"
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button onClick={handleSubmit}>Deposit Collateral</Button>
      </CardActions>
    </Card>
  );
};

export default Lend;
