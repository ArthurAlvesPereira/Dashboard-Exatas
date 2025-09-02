import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Definition of custom colors

// Here I will use the Exatas color palette (Purple and yellow)
const primaryPurple = "#673ab7";
const secondaryYellow = "#ffeb3b";
const secondaryYellowDark = "#fbc02d";
const errorRed = "#d32f2f";

// Main theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryPurple,
      light: "#9a67ea",
      dark: "#320b86",
      contrastText: "#fff",
    },
    secondary: {
      main: secondaryYellow,
      light: "#ffff72",
      dark: secondaryYellowDark,
      contrastText: "#000",
    },
    error: {
      main: errorRed,
    },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: primaryPurple,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: primaryPurple,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  // Styling of Material-UI components
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#320b86",
          },
        },
        containedSecondary: {
          color: "#212121",
          "&:hover": {
            backgroundColor: secondaryYellowDark,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: primaryPurple,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
