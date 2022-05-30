import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#eeeeee",
    },
  },
  palette: {
    primary: {
      main: "#4075d3",
      dark: "#3361b4",
    },
    secondary: {
      main: "#53bba1",
      dark: "#40917d",
    },
    text: {
      primary: "#eeeeee",
    },
    background: {
      default: "#353741",
      paper: "#353741",
    },
    divider: "#ffffff1f",
  },
});

theme.components = {
  ...theme.components,
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: "1rem 2rem 0.5rem 2rem",
        border: `3px solid ${theme.palette.divider}`,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: "bold",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        // "label + &": {
        //   marginTop: 2,
        // },
        "& .MuiInputBase-input": {
          borderRadius: 4,
          position: "relative",
          border: `2px solid ${theme.palette.divider}`,
          fontSize: 16,
          padding: "12px 18px",
        },
      },
    },
  },
};

export { theme };
