import React from "react";
import { Route, Switch } from "react-router";
import Test from "./../Pages/Test/Test";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Auth from "./../Pages/Auth/Auth";
import UserRoutes from "./UserRoutes";
import Signout from "./../Components/Signout/Signout";
import history from "./history";
import ProfilePage from "src/Components/ProfilePage/ProfilePage";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} render={() => history.push("/auth")} exact />
      <AuthenticatedRoute path="/profile/:uid" component={ProfilePage} exact />
      <Route path={"/test"} component={Test} />
      <Route path={"/auth"} component={Auth} />
      <AuthenticatedRoute
        path={"/dashboard"}
        render={(props) => <UserRoutes />}
      />
      <Route path="/signout" component={Signout} />
    </Switch>
  );
};

export default Routes;
