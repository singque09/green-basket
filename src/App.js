import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";

import { Container } from "@material-ui/core";
import Shop from "./pages/Shop";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Footer from "./components/Footer/Footer";

const faker = require("faker");

const arr = new Array(faker.random.number({ min: 20, max: 50 })).fill();

const generateShopItem = arr.map((item, index) => {
  const pageNumber = Math.ceil((index+1)/12);
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(20),
    price: faker.commerce.price(),
    image: `${faker.image.food()}/${faker.random.number()}`,
    page: pageNumber,
  };
});

const shoppingCart = { items: [], quantity: 0 };

export default function App() {
  return (
    <React.Fragment>
      <TopNavbar shoppingCart={shoppingCart} />
      <BackgroundImage />
      <Container maxWidth="lg">
        <Shop generateShopItem={generateShopItem} />
        <Footer style={{ marginTop: "50px", marginBottom: "20px" }} />
      </Container>
    </React.Fragment>
  );
}
