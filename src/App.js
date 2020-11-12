import React from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";

import { Container } from "@material-ui/core";
import Shop from "./pages/Shop";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Footer from "./components/Footer/Footer";
import ShopItemsProvider from "./hooks/ShopItemsProvider";

export default function App() {
  return (
    <React.Fragment>
      <ShopItemsProvider>
        <TopNavbar />
        <BackgroundImage />
        <Container maxWidth="lg">
          <Shop />
          <Footer style={{ marginTop: "50px", marginBottom: "20px" }} />
        </Container>
      </ShopItemsProvider>
    </React.Fragment>
  );
}
