import { ChangeEvent, useState } from "react";
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

type Props = {};

const TakeDebt = (props: Props) => {
  const [val, setVal] = useState("");
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
          {/* <Typography align="center" variant="h4" marginBottom="1rem">
            Borrow
          </Typography>
          <Typography marginBottom="0.5rem">Amount to borrow</Typography> */}
          <TextField
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">rBTC</InputAdornment>
              ),
            }}
            value={val}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setVal(event.currentTarget.value);
            }}
            placeholder="Enter collateral amount to deposit"
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button>Deposit Collateral</Button>
        </CardActions>
      </Card>

      <Card elevation={4} sx={{ minWidth: "40%" }}>
        <CardContent>
          <TextField
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">xBTC</InputAdornment>
              ),
            }}
            value={val}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setVal(event.currentTarget.value);
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
          <Button>Take Debt</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TakeDebt;
