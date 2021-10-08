import React from "react";
import BurgerMenu from "src/Pages/BurgerMenu/BurgerMenu";
import Profile from "src/Pages/Profile/Profile";
import AuthenticatedRoute from "./AuthenticatedRoute";

const UserRoutes = () => {
  return (
    <>
      <BurgerMenu>
        <AuthenticatedRoute path="/dashboard/profile" component={Profile} />
      </BurgerMenu>
    </>
  );
};

export default UserRoutes;
