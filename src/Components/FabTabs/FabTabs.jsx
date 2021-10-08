import React from "react";
import { Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "calc(100% - 100px)",
    left: "calc(50% - 125px)",
    background: "white",
    borderRadius: 360,
    boxShadow: theme.custom.shadow.icon,
    zIndex: 99,
    width: 250,

    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      top: "calc(100% - 70px)",
    },
  },
  fab: {
    background: theme.palette.primary.main,
    background: "white",
    boxShadow: "none",
    height: 50,
    width: 50,
    margin: "0px 10px",
    transition: "all 500ms",
    "&:hover": {
      // background: theme.palette.primary.dark,
    },
  },
  fabActive: {
    background: theme.palette.primary.main,
    transition: "all 500ms",
    boxShadow: "none",
    transform: "scale(1.1)",
    height: 50,
    transform: "scale(1.5)",
    width: 50,
    margin: "0px 10px",
    "& i": {
      color: "white !important",
    },
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
  icon: {
    color: "grey",
    transition: "all 500ms",
    fontSize: 25,
  },
}));

const FabTabs = () => {
  const classes = useStyles();
  const [val, setVal] = React.useState(0);
  const handleChange = (v) => {
    setVal(v);
  };
  return (
    <div className={classes.root}>
      <Fab
        className={val === 0 ? classes.fabActive : classes.fab}
        onClick={() => handleChange(0)}
      >
        <i className={`fas fa-qrcode ${classes.icon}`}></i>
      </Fab>
      <Fab
        className={val === 1 ? classes.fabActive : classes.fab}
        onClick={() => handleChange(1)}
      >
        <i className={`fas fa-user ${classes.icon}`}></i>
      </Fab>
      <Fab
        className={val === 2 ? classes.fabActive : classes.fab}
        onClick={() => handleChange(2)}
      >
        <i className={`fas fa-cog ${classes.icon}`}></i>
      </Fab>
    </div>
  );
};

export default FabTabs;
