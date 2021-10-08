import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileTop: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  avatarBadge: {
    width: "100px",
    height: "100px",
    marginRight: 30,
    "& .MuiBadge-badge": {
      padding: 5,
      height: "auto",
      borderRadius: 360,
      [theme.breakpoints.down("xs")]: {
        padding: 3,
        "& svg": {
          width: 15,
          height: 15,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  avatar: {
    width: "100px",
    height: "100px",
    // marginRight: 30,
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  heading: {
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  directBtn: {
    width: 300,
    margin: "auto",
    marginTop: 20,
  },
  editIco: {
    width: 20,
    height: 20,
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
