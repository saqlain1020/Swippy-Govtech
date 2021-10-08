import React from "react";
import { connect } from "react-redux";
import history from "./history";
import { useDispatch } from "react-redux";
import { notify } from "reapop";
import { Route } from "react-router";

const AuthenticatedRoute = ({ auth, ...props }) => {
  const dispatch = useDispatch();

  if (!auth.uid && process.env.NODE_ENV === "production") {
    dispatch(notify("You are not allowed to visit this page.", "warning"));
    history.push("/");
  }

  return <Route {...props} />;
};

const mapState = (store) => ({
  auth: store.auth,
});

export default connect(mapState)(AuthenticatedRoute);
