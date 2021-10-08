import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { signout } from './../../Redux/user/userActions';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Signout = ({signout}) => {
  const classes = useStyles();

  console.log("asd")
  React.useEffect(() => {
    signout();
  }, []);

  return (
    <div className={"center"} style={{ height: "100vh" }}>
      <CircularProgress />
    </div>
  );
};

const actions = {
    signout
};

export default connect(null, actions)(Signout);
