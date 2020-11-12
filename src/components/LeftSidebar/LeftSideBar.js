import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import ProductFilter from "./ProductFilter";
import ShoppingCart from "./ShoppingCart";

export default function LeftSideBar() {
  return (
    <Grid item style={{ width: "320px", marginTop: "10px" }}>
      <Typography color="primary" variant="h5">
        <strong>Shopping Cart</strong>
      </Typography>
      <ShoppingCart />
      <Divider style={{ margin: "30px 0", height: "2px" }} />
      <ProductFilter />
    </Grid>
  );
}
