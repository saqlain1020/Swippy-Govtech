import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import LinkIco from "src/Assets/icon/link.png";
import Instagram from "src/Assets/icon/instagram.png";
import Snapchat from "src/Assets/icon/snapchat.png";
import Twitter from "src/Assets/icon/twitter.png";
import Linkedin from "src/Assets/icon/linkedin.png";
import Message from "src/Assets/icon/message.png";
import Spotify from "src/Assets/icon/spotify.png";
import Tiktok from "src/Assets/icon/tiktok.png";
import Whatsapp from "src/Assets/icon/whatsapp.png";
import Facebook from "src/Assets/icon/facebook.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    borderRadius: 35,
    overflow: "hidden",
    boxShadow: theme.custom.shadow.icon,
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
}));

const SocialLink = ({ icon, text,url }) => {
  const classes = useStyles();
  const [src, setSrc] = React.useState(Link);

  React.useEffect(() => {
    switch (icon) {
      case "instagram":
        setSrc(Instagram);
        break;
      case "snapchat":
        setSrc(Snapchat);
        break;
      case "twitter":
        setSrc(Twitter);
        break;
      case "linkedin":
        setSrc(Linkedin);
        break;
      case "message":
        setSrc(Message);
        break;
      case "spotify":
        setSrc(Spotify);
        break;
      case "tiktok":
        setSrc(Tiktok);
        break;
      case "whatsapp":
        setSrc(Whatsapp);
        break;
      case "facebook":
        setSrc(Facebook);
        break;
      default:
        setSrc(LinkIco);
    }
  }, []);

  return (
    <a href={url} className={classes.root}>
      <img width="100px" height="100px" className={classes.img} src={src} />
      <Typography variant="h6" align="center" className={classes.text}>
        <b>{text}</b>
      </Typography>
    </a>
  );
};

export default SocialLink;

SocialLink.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

SocialLink.defaultProps = {
  icon: "link",
  text: "Link",
  url: "",
};
