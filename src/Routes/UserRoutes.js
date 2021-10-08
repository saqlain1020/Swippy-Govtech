import React from "react";
import BurgerMenu from "src/Pages/BurgerMenu/BurgerMenu";
import Profile from "src/Pages/Profile/Profile";
import AuthenticatedRoute from "./AuthenticatedRoute";
import QR from './../Pages/QR/QR';

const UserRoutes = () => {
  return (
    <>
      <BurgerMenu>
        <AuthenticatedRoute path="/dashboard/profile" component={Profile} />
        <AuthenticatedRoute path="/dashboard/Qr" component={QR} />
      </BurgerMenu>
    </>
  );
};

export default UserRoutes;
