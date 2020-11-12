import {
  Divider,
  Grid,
} from "@material-ui/core";
import React from "react";
import ProductFilter from "./ProductFilter";
import ShoppingCart from "./ShoppingCart";

export default function LeftSideBar() {
  return (
    <Grid item style={{ width: "320px", marginTop: "10px" }}>
      <ShoppingCart />
      <Divider style={{ margin: "30px 0", height: "2px" }} />
      <ProductFilter />
    </Grid>
  );
}
