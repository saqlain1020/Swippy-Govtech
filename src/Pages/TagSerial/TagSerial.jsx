import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Logo from "src/Assets/images/logo.png";
import { Button } from "@material-ui/core";
import Particles from "react-particles-js";
import config from "src/Util/particles.json";
import { fetchTagUser, pairTag } from "src/Util/tagsActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
  },
  particlesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    flexFlow: "column",
    margin: 20,
    paddingTop: 30,
    paddingBottom: 30,
    background: theme.colors.bg,
    boxShadow: theme.custom.shadow.paper,
    zIndex: 1,
    borderRadius: 20,
  },
  img: {
    maxWidth: 400,
    filter: "invert(1)",
  },
  btn: {
    marginTop: 50,
  },
}));

const TagSerial = ({
  match: {
    params: { serial },
  },
  history,
  currentUser,
  fetchTagUser,
  pairTag,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  const handleTag = async () => {
    console.log(serial);
    let user = await fetchTagUser(serial);
    console.log(user);
    if (user) {
      let social = user.socialLinks.find((item) => item.isPrimary);
      if (social && user.direct) window.location = social.url;
      else {
        let url = `/profile/${user.uid}`;
        history.push(url);
      }
    } else {
      if (!currentUser.uid) {
        history.push("/auth");
      }
    }
    setLoading(false);
  };

  const handlePair = async () => {
    setLoading(true);
    pairTag(serial, currentUser.uid);
  };

  React.useEffect(() => {
    handleTag();
  }, []);

  return (
    <div className={`center ${classes.root}`}>
      <Particles
        width="100%"
        height="100%"
        className={classes.particlesContainer}
        params={config}
      />
      <div className={`center ${classes.container}`}>
        <img src={Logo} width="70%" className={classes.img} alt="Swippy" />
        <div className="flex">
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={handlePair}
          >
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              "Pair to your profile"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapState = (store) => ({
  currentUser: store.user,
});

const actions = {
  fetchTagUser,
  pairTag,
};

export default connect(mapState, actions)(TagSerial);
