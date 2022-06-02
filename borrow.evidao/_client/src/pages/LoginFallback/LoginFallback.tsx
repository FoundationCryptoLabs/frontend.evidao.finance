import React from "react";
import LoginImg from "assets/images/login.png";
import { Box, Typography } from "@mui/material";

type Props = {};

const LoginFallback = (props: Props) => {
  return (
    <Box
      marginTop="-3rem"
      sx={{
        "& img": {
          width: "50%",
          marginBottom: 12,
        },
      }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={LoginImg} alt="Login" />
      <Typography align="center" variant="h5">
        Looks like you don't have a wallet connected. <br />
        Please connect one to continue.
      </Typography>
    </Box>
  );
};

export default LoginFallback;
