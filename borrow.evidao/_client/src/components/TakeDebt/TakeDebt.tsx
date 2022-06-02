import { ChangeEvent, useCallback, useState } from "react";
import { useRSK } from "../../context/rskContext";
import { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { toWei } from "web3-utils";
import { toast } from "react-toastify";

type Props = {};

const TakeDebt = (props: Props) => {
  const [collVal, setCollVal] = useState("");
  const { cdp, account, getUserSafeData, fetchBalance } = useRSK();

  const handleSubmit = async () => {
    if (cdp && account) {
      await toast.promise(
        cdp.methods.takeDebt(toWei(collVal, "ether"))?.send({
          from: account,
        }),
        {
          pending: "Running [[TakeDebt]]",
          success: "Success!",
          error: {
            render: (err: any) => {
              return err.data?.message || "Something went wrong";
            },
          },
        }
      );
      await getUserSafeData();
      await fetchBalance(account);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignSelf="stretch"
      gap={4}
    >
      <Card elevation={4} sx={{ minWidth: "40%" }}>
        <CardContent>
          <TextField
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">xBTC</InputAdornment>
              ),
            }}
            value={collVal}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setCollVal(event.currentTarget.value);
            }}
            placeholder="Enter amount to borrow"
            fullWidth
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleSubmit}>Take Debt</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TakeDebt;
