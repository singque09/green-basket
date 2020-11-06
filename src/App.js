import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";

import { Container, Grid, Typography } from "@material-ui/core";
import Shop from "./pages/Shop";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";

const faker = require("faker");

const arr = new Array(faker.random.number({ min: 20, max: 50 })).fill();

const generateShopItem = arr.map(() => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: `${faker.image.food()}/${faker.random.number()}`,
}));

const shoppingCart = {items: [], quantity: 0};

export default function App() {
  return (
    <React.Fragment>
      <TopNavbar shoppingCart={shoppingCart} />
      <BackgroundImage />
      <Container maxWidth="lg">
        <Shop generateShopItem={generateShopItem} />
        <Grid
          container
          spacing={3}
          alignItems="center"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          <Grid item>
            <Typography color="secondary" display="inline" variant="h6">
              Arlov PH
            </Typography>{" "}
            &#169; {new Date().getFullYear()}. All Rights Reserved.
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
