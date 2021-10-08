import React from "react";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import SocialLink from "./../SocialLink/SocialLink";
import { v4 as uuid } from "uuid";
import { FiberPinTwoTone } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import AddSocialDialog from './../AddSocialDialog/AddSocialDialog';

const useStyles = makeStyles((theme) => ({
  addBtn: {
    width: 130,
    height: 130,
    borderRadius: 40,
  },
  addIco: {
    width: 60,
    height: 60,
    color: "grey",
  },
  addContainer:{
    display:"flex",
    justifyContent:"center"
  }
}));

const links = [
  {
    icon: "facebook",
    text: "My Facebook",
  },
  {
    icon: "instagram",
    text: "My Insta",
  },
  {
    icon: "snapchat",
    text: "Mr moodle",
  },
  {
    icon: "whatsapp",
    text: "Personal num",
  },
  {
    icon: "message",
    text: "Message me",
  },
  {
    icon: "facebook",
    text: "My Facebook",
  },
  {
    icon: "twitter",
    text: "My Facebook",
  },
  {},
  {},
];

const SocialCards = ({ style, className }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="lg" style={{ ...style }} className={className}>
      <Grid container spacing={2}>
        {links.map((item) => (
          <Grid key={uuid()} item xs={6} sm={4} md={3} className="center">
            <SocialLink {...item} />
          </Grid>
        ))}
        <Grid item xs={6} sm={4} md={3} className={classes.addContainer}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.addBtn}
            onClick={() => setOpen(true)}
          >
            <AddIcon className={classes.addIco} />
          </Button>
        </Grid>
      </Grid>
      <AddSocialDialog open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default SocialCards;
