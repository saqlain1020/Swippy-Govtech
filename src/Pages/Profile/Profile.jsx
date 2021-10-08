import React from "react";
import {  Container, makeStyles,} from "@material-ui/core";
import ProfileHeadingCard from "src/Components/ProfileHeadingCard/ProfileHeadingCard";
import SocialCards from "src/Components/SocialCards/SocialCards";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.colors.bg,
    position:"relative",
    top:-50,
    borderRadius:50,
  },
  nav: {
    background: theme.palette.primary.main,
  },
  
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <ProfileHeadingCard/>
        <SocialCards style={{marginTop:30}}/>
    </div>
  );
};

export default Profile;
