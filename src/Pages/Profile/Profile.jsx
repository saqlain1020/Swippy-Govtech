import React from "react";
import { Avatar, Button, Card, Container, makeStyles, Paper, Typography } from "@material-ui/core";
import Logo from "src/Assets/images/logo.png";
import ProfileHeadingCard from "src/Components/ProfileHeadingCard/ProfileHeadingCard";

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
      </Container>
    </div>
  );
};

export default Profile;
