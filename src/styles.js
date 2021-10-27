import { makeStyles } from "@mui/styles";

const drawerWidth = 240;
const useStyles = makeStyles({
  title: {
    padding: 3,
  },
  field: {
    marginTop: "15px !important",
    marginBottom: "15px !important",
  },
  fields: {
    marginTop: "0px !important",
    marginBottom: "15px !important",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  page: {
    // backgroundColor: "#1e1e28",
  },
});

export default useStyles;
