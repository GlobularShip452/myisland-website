import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "nunito"
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto"
  },
  appbarTitle: {
    flexGrow: "2"
  },
  icon: {
    color: "#fff",
    fontSize: "2rem"
  },
  colorText: {
    color: "#5aff3d"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>
        <h1>
          Welcome to <br /> My
          <span className={classes.colorText}>Island.</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
