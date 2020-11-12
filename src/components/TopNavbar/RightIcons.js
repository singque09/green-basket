import React from "react";
import { IconButton, Badge, Menu, MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCart from "../LeftSidebar/ShoppingCart";

export default function RightIconsRender({ shoppingCart }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        onClick={handleClick}
      >
        <Badge badgeContent={shoppingCart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ShoppingCart />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
