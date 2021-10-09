import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileTop: {
    paddingTop: 20,
    [theme.breakpoints.down("xs")]: {
      // paddingTop: 70,
    },
  },
  avatarBadge: {
    width: "150px",
    height: "150px",

    // position: "absolute",
    // top: "-100px",
    // left: "calc(50% - 100px)",
    zIndex: 1,
    "& .MuiBadge-badge": {
      padding: 8,
      height: "auto",
      borderRadius: 360,
      "& svg": {
        width: 30,
        height: 30,
      },
      [theme.breakpoints.down("xs")]: {
        padding: 5,
        "& svg": {
          width: 20,
          height: 20,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      left: "calc(50% - 75px)",
      width: "100px",
      height: "100px",
    },
  },
  avatar: {
    background: "white",
    width: "150px",
    height: "150px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "100px",
    },
  },
  heading: {
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  description: {
    maxWidth: 350,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  directBtn: {
    maxWidth: 250,
  },
  editIco: {
    overflow: "hidden",
    cursor: "pointer",
  },
  icon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: 15,
      height: 15,
    },
  },
  grid:{
    display:"flex",
    justifyContent:"center",
    alignItems:"flex-start",
    margin:"auto",
  }
}));

export default useStyles;
