import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

type Props = {};

const Lend = (props: Props) => {
  return (
    <Card
      elevation={3}
      sx={
        {
          // padding: "3rem",
        }
      }
    >
      <CardContent>
        <Typography align="center" variant="h4" marginBottom="1rem">
          Lend
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button>Redeem</Button>
      </CardActions>
    </Card>
  );
};

export default Lend;
