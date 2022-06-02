import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import logoImg from "assets/images/xbtc_logo.svg";
import { useRSK } from "context/rskContext";
import React, { useCallback, useEffect, useState } from "react";
import { MdAccountBalanceWallet, MdOutlineAccountCircle } from "react-icons/md";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { truncateString } from "utils";

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const { handleLogout, handleLogin, balance, account, web3, loggedIn } =
    useRSK();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [firstLogin, setFirstLogin] = useState(false);

  const handleMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (account) {
        setAnchorEl(event.currentTarget);
      } else {
        setFirstLogin(true);
        handleLogin();
      }
    },
    [account, handleLogin, navigate, setFirstLogin]
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (account) {
      navigate("/borrow");
    }
  }, [navigate, account]);

  useEffect(() => {
    if (loggedIn && !account) {
      // console.log(firstLogin);
      handleLogin().then(() => {
        toast.success("Automatically logged you in");
      });
    }
  }, [loggedIn, account]);

  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              textDecoration: "none",
              alignItems: "center",
              padding: "0.5rem",
              "& img": {
                display: "inline-block",
                marginRight: "1rem",
                width: "3rem",
              },
            }}
          >
            <img src={logoImg} alt="Logo" />
            XBTC Dash
          </Typography>

          <Box display="flex">
            {account && (
              <Box display="flex" alignItems="center" marginRight="2.5rem">
                <MdAccountBalanceWallet
                  size="1.25rem"
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
                <Typography
                  fontSize="0.875rem"
                  fontWeight="bold"
                  marginRight="1rem"
                >
                  {web3?.utils
                    .fromWei(balance?.xbtc || "0", "ether")
                    .slice(0, 8)}{" "}
                  <small>xBTC</small>
                </Typography>
                <Typography fontSize="0.875rem" fontWeight="bold">
                  {web3?.utils
                    .fromWei(balance?.rbtc || "0", "ether")
                    .slice(0, 8)}{" "}
                  <small>rBTC</small>
                </Typography>
              </Box>
            )}
            <div>
              <Button
                variant="contained"
                sx={{ borderRadius: "24px" }}
                endIcon={
                  account ? (
                    <MdOutlineAccountCircle />
                  ) : (
                    <MdAccountBalanceWallet />
                  )
                }
                onClick={handleMenu}
              >
                {account ? truncateString(account) : "Connect your wallet"}
              </Button>
              {account && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Copy Address</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              )}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 4,
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children ?? <Outlet />}
      </Container>

      <ToastContainer autoClose={3000} />
    </>
  );
};

export default DefaultLayout;
