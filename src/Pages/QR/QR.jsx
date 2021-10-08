import React from "react";
import { makeStyles } from "@material-ui/core";
import QRCode from "react-qr-code";
import { connect } from "react-redux";
import {Slide} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {},
  qrContainer: {
    position: "relative",
    top: -100,
    background: "white",
    boxShadow: theme.custom.shadow.icon,
    padding: 30,
    borderRadius: 30,
    border: "20px solid rgba(200,203,220,0.4)",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
    },
  },
}));

const QR = ({ user }) => {
  const classes = useStyles();
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    const url = `http://${window.location.host}/profile/${user.uid}`;
    console.log(url);
    setUrl(url);
  }, [user]);

  return (
    <div className={classes.root + " " + "center"}>
        <Slide direction="up" in={true}>
      <div className={classes.qrContainer}>
        <QRCode value={url} size={300} level="Q" />        
      </div>
      </Slide>
    </div>
  );
};

const mapState = (store) => ({
  user: store.user,
});

export default connect(mapState)(QR);
