import makeStyles from "@mui/styles/makeStyles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export default makeStyles({
  media: {
    height: 250,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
});
