"use client";

import { createTheme } from "@mui/material/styles";

// Create your theme
const theme = createTheme({
  palette: {
    mode: "light", // change to "dark" if needed
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#9c27b0", // purple
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none", // disable uppercase
    },
  },
  components: {
    // Override MUI components here
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // rounded buttons
          padding: "10px 20px",
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
