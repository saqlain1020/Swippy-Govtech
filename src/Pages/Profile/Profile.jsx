import React from "react";
import {  Container, makeStyles,} from "@material-ui/core";
import ProfileHeadingCard from "src/Components/ProfileHeadingCard/ProfileHeadingCard";
import SocialCards from "src/Components/SocialCards/SocialCards";

const useStyles = makeStyles((theme) => ({
  root: {},
  nav: {
    background: theme.palette.primary.main,
  },
  
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <ProfileHeadingCard style={{marginTop:20}} />
        <SocialCards style={{marginTop:30}}/>
      </Container>
    </div>
  );
};

export default Profile;
