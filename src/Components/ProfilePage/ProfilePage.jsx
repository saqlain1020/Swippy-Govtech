import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ProfileHeadingCard from "src/Components/ProfileHeadingCard/ProfileHeadingCard";
import SocialCards from "src/Components/SocialCards/SocialCards";
import Logo from "src/Assets/images/logo.png";
import { Link } from "react-router-dom";
import { getUserData } from "./../../Redux/user/userActions";
import { useDispatch } from "react-redux";
import {
  LOADER_START,
  LOADER_STOP,
} from "./../../Redux/loader/loaderConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.colors.bg,
    position: "relative",
    // top: -50,
  },
  nav: {
    background: theme.palette.primary.main,
    height: 250,
    paddingTop: 10,
  },
  content: {
    background: theme.colors.bg,
    borderRadius: 50,
    position: "relative",
    top: -50,
  },
  buyBtn:{
      position:"fixed",
      width:"90%",
      left:"5%",
      borderRadius:360,
      height:50,
      bottom:10,
      color:"white",
      display:"flex",
      alignItems:"center",
    justifyContent:"center",
      background: "#25CCF7",
      boxShadow: "0px 0px 0px 50px rgba(37, 204, 247,0.3)",
      animation: "$buyBtn 2s infinite ease-in-out",
  },
  "@keyframes buyBtn":{
      "0%":{
        boxShadow: "0px 0px 0px 0px rgba(37, 204, 247,0.5)"
      },
      "100%":{
        boxShadow: "0px 0px 10px 40px rgba(37, 204, 247,0)"
      }
  }
}));

const ProfilePage = ({
  history,
  match: {
    params: { uid },
  },
}) => {
  const classes = useStyles();
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();

  const fetchUser = async () => {
    console.log(uid);
    dispatch({
      type: LOADER_START,
    });
    let data = await getUserData(uid);
    console.log(data);
    await setData(data);
    dispatch({
      type: LOADER_STOP,
    });
  };
  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <center>
          <Link to="/">
            <img src={Logo} alt="swippy" height="70px" />
          </Link>
        </center>
      </div>
      <div className={classes.content}>
        <ProfileHeadingCard data={data} />
        <SocialCards data={data} style={{ marginTop: 30 }} />
      </div>
      <div className={classes.buyBtn}>
    <Typography align="center" style={{color:"white"}}>
    <i className="fas fa-cart-plus"></i>&nbsp;&nbsp;Buy Swopi Now!!
    </Typography>
      </div>
    </div>
  );
};

export default ProfilePage;
