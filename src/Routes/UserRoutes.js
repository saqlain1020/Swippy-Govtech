import React from "react";

const menuItems = [
    <Link to="/" >Home</Link>,
    <Link to="/dashboard" >Dashboard</Link>,
    <Link to="/signout" >Sign out</Link>,
]

const UserRoutes = () => {
  return (
    <>
      <BurgerMenu items={menuItems}>
          {/* <AuthenticatedRoute/> */}
      </BurgerMenu>
    </>
  );
};

export default UserRoutes;
