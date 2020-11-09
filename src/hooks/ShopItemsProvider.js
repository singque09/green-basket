import React, { createContext, useContext, useState } from "react";
const faker = require("faker");

const arr = new Array(faker.random.number({ min: 20, max: 50 })).fill();

const generateShopItem = arr.map((item, index) => {
  const pageNumber = Math.ceil((index + 1) / 12);
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(20),
    price: faker.commerce.price(),
    image: `${faker.image.food()}/${faker.random.number()}`,
    page: pageNumber,
    quantity: 1,
  };
});

const ShopItemsContext = createContext();
export const useShopItems = () => useContext(ShopItemsContext);

export default function ShopItemsProvider({ children }) {
  const [shopItems, setShopItems] = useState(generateShopItem);

  const changeQuantity = (id, quantity) =>
    setShopItems(
      shopItems.map((shopItem) =>
        shopItem.id === id ? { ...shopItem, quantity } : shopItem
      )
    );

  return (
    <ShopItemsContext.Provider value={{ shopItems, changeQuantity }}>
      {children}
    </ShopItemsContext.Provider>
  );
}
