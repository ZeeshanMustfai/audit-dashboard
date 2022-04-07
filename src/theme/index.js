import { createTheme } from "@mui/material/styles";
import { orange, green } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "DM Sans",
    },
  },
});
