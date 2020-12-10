import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage:
      "url('https://github.com/Chensokheng/island/blob/master/public/assets/bg.jpg?raw=true')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  );
};

export default App;
