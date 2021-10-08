import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import Logo from "src/Assets/images/logo.png";
import FabTabs from "src/Components/FabTabs/FabTabs";

const useStyles = makeStyles((theme) => ({
  root: {},
  menu: {
    //   background: "red",
    // position:"relative"
  },
  nav: {
    background: theme.palette.primary.main,
    // paddingLeft: 100,
    height: "250px",
    paddingTop: 5,
    display:"flex"    ,
    justifyContent:"center",
    paddingBottom: 5,
  },
}));
var styles = {
  bmBurgerButton: {
    position: "relative",
    width: "20px",
    height: "15px",
    left: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "absolute",
    top: 0,
    height: "100%",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
  },
  bmMenu: {
    // background: "#373a47",
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    // fill: "#373a47",
    fill: "#ffffff",
  },
  bmItemList: {
    // color: "#b8b7ad",
    color: "black",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    // background: "rgba(0, 0, 0, 0.3)",
    background: "rgb(0 135 255 / 6%)",
  },
};
const BurgerMenu = ({ items = [], children }) => {
  const classes = useStyles();

  return (
    <div id="outer-container">
      <Menu
        width={250}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        className={classes.menu}
        styles={styles}
      >
        {items.map((item) => (
          <List key={uuid()}>
            <ListItem>{item}</ListItem>
          </List>
        ))}
      </Menu>
      <main id="page-wrap">
        <FabTabs/>
        <div className={classes.nav}>
          <img src={Logo} alt="swippy" height="50px" />
        </div>
        {children}
      </main>
    </div>
  );
};

export default BurgerMenu;
