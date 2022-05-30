import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputBase,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

type Props = {};

const TakeDebt = (props: Props) => {
  return (
    <Card
      elevation={4}
      sx={
        {
          // padding: "3rem",
        }
      }
    >
      <CardContent>
        <Typography align="center" variant="h4" marginBottom="1rem">
          Borrow
        </Typography>
        <Typography marginBottom="0.5rem" fontWeight="bold">
          Amount to borrow
        </Typography>
        <TextField
          placeholder="Enter Amount"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <Typography marginBottom="0.5rem" fontWeight="bold">
          Amount to borrow
        </Typography>
        <TextField placeholder="Enter Amount" fullWidth />
      </CardContent>
      <CardActions>
        <Button>Deposit Collateral</Button>
        <Button>Take Debt</Button>
      </CardActions>
    </Card>
  );
};

export default TakeDebt;
