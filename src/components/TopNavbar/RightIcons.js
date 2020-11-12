import React from "react";
import {
  IconButton,
  Badge,
  Hidden,
  Drawer,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCart from "../LeftSidebar/ShoppingCart";

export default function RightIconsRender({ shoppingCart }) {
  const [drawerAnchorEl, setDrawerAnchorEl] = React.useState({
    left: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerAnchorEl({ ...drawerAnchorEl, [anchor]: open });
  };
  return (
    <React.Fragment>
      <IconButton
        color="secondary"
        aria-label="account of current user"
        aria-haspopup="true"
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        color="primary"
        aria-label={`show ${shoppingCart.length} new notifications`}
        onClick={toggleDrawer("left", true)}
      >
        <Badge badgeContent={shoppingCart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Hidden mdUp>
        <Drawer
          anchor={"bottom"}
          open={drawerAnchorEl["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <ShoppingCart />
          </div>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}
