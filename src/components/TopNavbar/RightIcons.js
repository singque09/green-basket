import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function RightIconsRender({shoppingCart}) {
  return (
    <React.Fragment>
      <IconButton
        color="secondary"
        aria-label="account of current user"
        aria-haspopup="true"
      >
        <AccountCircle />
      </IconButton>
      <IconButton color="primary" aria-label={`show ${shoppingCart.quantity} new notifications`}>
        <Badge badgeContent={shoppingCart.quantity} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </React.Fragment>
  );
}
