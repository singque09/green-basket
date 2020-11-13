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
  const [drawerAnchorEl, setDrawerAnchorEl] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerAnchorEl(open);
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
        onClick={toggleDrawer(true)}
      >
        <Badge badgeContent={shoppingCart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Hidden mdUp>
        <Drawer
          anchor={"bottom"}
          open={drawerAnchorEl}
          onClose={toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ShoppingCart />
          </div>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}
