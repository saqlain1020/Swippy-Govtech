import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileTop: {
    // display: "flex",
    // justifyContent: "center",
    paddingTop:130,
    [theme.breakpoints.down("xs")]: {
      paddingTop:70,
      // justifyContent: "flex-start",
    },
  },
  avatarBadge: {

    width: "200px",
    height: "200px",
    
    position:"absolute",
    top:"-100px",
    left: "calc(50% - 100px)",
    zIndex:1,
    
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
          width: 30,
          height: 30,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      left: "calc(50% - 75px)",
      width: "150px",
      height: "150px",
    },
  },
  avatar: {
    width: "200px",
    height: "200px",
    // marginRight: 30,
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "150px",
    },
  },
  heading: {
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  description: {
    maxWidth:350,
    margin:"auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  directBtn: {
    maxWidth:250,
    // margin:"auto",
  },
  editIco: {
    // width: 20,
    // height: 20,
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
}));

export default useStyles;
