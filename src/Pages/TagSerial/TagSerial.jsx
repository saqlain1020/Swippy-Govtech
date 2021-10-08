import React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "src/Assets/images/logo.png";
import { Button } from "@material-ui/core";
import Particles from "react-particles-js";
import config from 'src/Util/particles.json'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    flexFlow: "column",
    margin:20,
    paddingTop:30,
    paddingBottom:30,
    background: theme.colors.bg,
    boxShadow: theme.custom.shadow.paper,
    zIndex:1,
    borderRadius:20,
  },
  img: {
    maxWidth: 400,
    filter: "invert(1)",
  },
  btn: {
    marginTop: 50,
  },
}));

const TagSerial = () => {
  const classes = useStyles();

  return (
    <div className={`center ${classes.root}`}>
      <Particles
        width="100%"
        height="100%"
        className={classes.particlesContainer}
        params={config}
      />
      <div className={`center ${classes.container}`}>
        <img src={Logo} width="70%" className={classes.img} alt="Swippy" />
        <div className="flex">
          <Button className={classes.btn} variant="contained" color="primary">
            Pair to your profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TagSerial;
