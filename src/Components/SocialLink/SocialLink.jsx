import React from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import DeleteIcon from "@material-ui/icons/Delete";
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
import AddSocialDialog from './../AddSocialDialog/AddSocialDialog';

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    borderRadius: 40,
    overflow: "hidden",
    boxShadow: theme.custom.shadow.icon,
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: 600,
  },
}));

const SocialLink = ({ icon, title, url, id }) => {
  const classes = useStyles();
  const [src, setSrc] = React.useState(Link);
  const [open, setOpen] = React.useState(false);

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
    <div>
      <a href={url} className={classes.root}>
        <img width="130px" height="130px" className={classes.img} src={src} />
        <Typography variant="h6" align="center" className={classes.text}>
          <b>{title}</b>
        </Typography>
      </a>
      <div className="center">
        <IconButton size="small" onClick={() => setOpen(true)}>
          <BorderColorIcon />
        </IconButton>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </div>
      <AddSocialDialog
        open={open}
        onClose={() => setOpen(false)}
        social={{ icon, title, url, id }}
      />
    </div>
  );
};

export default SocialLink;

SocialLink.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
};

SocialLink.defaultProps = {
  icon: "link",
  title: "Link",
  url: "",
  id: null,
};
