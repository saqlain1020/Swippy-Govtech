import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ImgSrc from "src/Assets/images/login-bg.png";
import Logo from "src/Assets/images/logo.png";
import Login from "src/Components/Login/Login";
import Signup from "src/Components/Signup/Signup";
import { Route } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    background: theme.palette.primary.main,
  },
  container: {
    width: "100%",
    margin: "auto",
    maxWidth: 350,
    height: 700,
    position: "relative",
    borderRadius: 30,
    border: "6px solid black",
    overflow: "hidden",
    boxShadow: "10px 10px 18px 0px rgb(0 0 0 / 67%)",
    background: `url(${ImgSrc})`,
    backgroundColor: "white",
    backgroundSize: "contain",
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",

    [theme.breakpoints.down("xs")]: {
      paddingTop: "50%",
      backgroundPositionY: "-100px",
      border: "none",
      borderRadius: 0,
      height: "auto",
      minHeight: "100vh",
      width: "100%",
      maxWidth: "unset",
    },
  },
  img: {
    width: "100%",
    // objectFit:"contain",
    [theme.breakpoints.down("xs")]: {
      height: "40%",
    },
  },
  logo: {
    width: "50%",
    position: "absolute",
    top: 120,
    left: "10%",
    [theme.breakpoints.down("xs")]: {
      top: "10%",
    },
  },
}));

const Auth = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "center")}>
      <div className={classes.container}>
        <img src={Logo} className={classes.logo} alt="swippy" />

        <div>
          <Route path="/auth" component={Login} exact />
          <Route path="/auth/signup" component={Signup} exact />
        </div>
      </div>
    </div>
  );
};

export default Auth;
