import makeStyles from "@mui/styles/makeStyles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
export default makeStyles({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
});
