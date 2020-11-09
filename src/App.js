import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";

import { Container } from "@material-ui/core";
import Shop from "./pages/Shop";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Footer from "./components/Footer/Footer";
import ShopItemsProvider from "./hooks/ShopItemsProvider";

const shoppingCart = { items: [] };

export default function App() {
  return (
    <React.Fragment>
      <TopNavbar shoppingCart={shoppingCart} />
      <BackgroundImage />
      <Container maxWidth="lg">
        <ShopItemsProvider>
          <Shop />
        </ShopItemsProvider>
        <Footer style={{ marginTop: "50px", marginBottom: "20px" }} />
      </Container>
    </React.Fragment>
  );
}
