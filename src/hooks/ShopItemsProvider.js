import React, { createContext, useContext, useState } from "react";
const faker = require("faker");

const arr = new Array(faker.random.number({ min: 20, max: 50 })).fill();

const generateShopItem = arr.map((item, index) => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(20),
    price: faker.commerce.price(),
    image: `${faker.image.food()}/${faker.random.number()}`,
    quantity: 1,
    inCart: false,
  };
});

const ShopItemsContext = createContext();
export const useShopItems = () => useContext(ShopItemsContext);

export default function ShopItemsProvider({ children }) {
  const [shopItems, setShopItems] = useState(generateShopItem);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const updateCart = (id, quantity) => {
    setShoppingCartItems(
      shoppingCartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeCartItem = (id) => {
    setShoppingCartItems(
      shoppingCartItems.filter((cartItem) => cartItem.id !== id)
    );
    setShopItems(
      shopItems.map((shopItem) =>
        shopItem.id === id ? { ...shopItem, inCart: false } : shopItem
      )
    );
  };

  const addToCart = (cartItem) => {
    setShoppingCartItems([...shoppingCartItems, cartItem]);
    setShopItems(
      shopItems.map((shopItem) =>
        shopItem.id === cartItem.id ? { ...shopItem, inCart: true } : shopItem
      )
    );
  };

  return (
    <ShopItemsContext.Provider
      value={{
        shopItems,
        shoppingCartItems,
        updateCart,
        removeCartItem,
        addToCart,
      }}
    >
      {children}
    </ShopItemsContext.Provider>
  );
}
