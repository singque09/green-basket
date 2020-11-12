import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useShopItems } from "../../hooks/ShopItemsProvider";

export default function ShoppingCart() {
  const { shoppingCartItems, removeCartItem } = useShopItems();

  var subtotal = 0;

  const shoppingCart = (val) => {
    if (val) {
      return (
        <Typography
          style={{ color: "grey", margin: "50px 0px" }}
          variant="body1"
        >
          No products in the cart.
        </Typography>
      );
    } else {
      return (
        <List>
          {shoppingCartItems.map((shopItem, index) => (
            <ListItem alignItems="flex-start" key={shopItem.id}>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  alt={shopItem.name}
                  src={shopItem.image}
                />
              </ListItemAvatar>
              <ListItemText
                primary={shopItem.name}
                secondary={
                  <React.Fragment>
                    <Typography variant="subtitle2" color="textSecondary">
                      {shopItem.quantity} x {shopItem.price}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeCartItem(shopItem.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    align="right"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    Subtotal
                  </Typography>
                  <Typography align="right" variant="h6" color="primary">
                    {shoppingCartItems.map(function (price, index) {
                      subtotal =
                        Number(price.price) * Number(price.quantity) +
                        Number(subtotal);
                      if (index === shoppingCartItems.length - 1) {
                        return new Intl.NumberFormat("en-PH", {
                          style: "currency",
                          currency: "PHP",
                        }).format(subtotal);
                      }
                      return "";
                    })}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      );
    }
  };

  return (
    <React.Fragment>
      <Typography color="primary" variant="h5">
        <strong>Shopping Cart</strong>
      </Typography>
      {shoppingCart(shoppingCartItems.length === 0)}
    </React.Fragment>
  );
}
