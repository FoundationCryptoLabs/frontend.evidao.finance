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
  MuiCard: {
    styleOverrides: {
      root: {
        padding: "1rem 1rem 0.5rem 1rem",
        border: `3px solid ${theme.palette.divider}`,
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        display: "flex",
        justifyContent: "center",
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
        border: `2px solid ${theme.palette.divider}`,
        outline: "none",
        "& .MuiInputBase-input": {
          borderRadius: 4,
          fontSize: 16,
          padding: "12px 18px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: 0,
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        "&>p": {
          color: theme.palette.text.primary,
          fontWeight: "bold",
          fontSize: "0.75rem",
        },
      },
    },
  },
};

export { theme };
