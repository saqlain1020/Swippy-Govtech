import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import SocialLink from "./../SocialLink/SocialLink";
import { v4 as uuid } from "uuid";
import { FiberPinTwoTone } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    addBtn:{
        width:100,
        height:100,
        borderRadius:30,
    },
    addIco:{
        width:60,
        height:60,
        color:"grey"
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
  {},
  {},
];

const SocialCards = ({ style, className }) => {
  const classes = useStyles();

  return (
    <Paper style={{ ...style }} className={className}>
      <Grid container spacing={4}>
        {links.map((item) => (
          <Grid key={uuid} item xs={6} sm={4} md={3} className="center">
            <SocialLink {...item} />
          </Grid>
        ))}
        <Grid item xs={6} sm={4} md={3} className="center">
            <Button variant="outlined" color='primary' className={classes.addBtn}>
            <AddIcon className={classes.addIco}/>
            </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialCards;
