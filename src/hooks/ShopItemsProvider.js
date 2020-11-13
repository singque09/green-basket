import React, { createContext, useContext, useState } from "react";
const faker = require("faker");

const arr = new Array(faker.random.number({ min: 20, max: 50 })).fill();
const category = ["Fruit", "Meat", "Seafood", "Vegetable"];

const generateShopItem = arr.map((item, index) => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(20),
    price: faker.commerce.price(),
    category: category[Math.floor(Math.random() * 4)],
    image: `${faker.image.food()}/${faker.random.number()}`,
    date: faker.date.past(2),
    quantity: 1,
    inCart: false,
  };
});

const sortProducts = (val) => {
  switch (val) {
    case 3:
      return (a, b) => (a.date < b.date ? 1 : -1);
    case 4:
      return (a, b) => (Number(a.price) > Number(b.price) ? 1 : -1);
    case 5:
      return (a, b) => (Number(a.price) < Number(b.price) ? 1 : -1);
    default:
      return (a, b) => (a.date < b.date ? 1 : -1);
  }
};

const ShopItemsContext = createContext();
export const useShopItems = () => useContext(ShopItemsContext);

export default function ShopItemsProvider({ children }) {
  const [originalShopItems] = useState(generateShopItem);
  const [sortBy, setSortBy] = useState(3);
  const [shopItems, setShopItems] = useState(
    originalShopItems.sort(sortProducts(sortBy))
  );
  const [categories] = useState(category);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const updateCart = (id, quantity) => {
    setShoppingCartItems(
      shoppingCartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const sortProductsBy = (val) => {
    setSortBy(val);
    setShopItems(shopItems.sort(sortProducts(sortBy)))
  };

  const filterPrice = (val) => {
    setShopItems(
      originalShopItems
        .filter(
          (item) =>
            Number(item.price) >= Number(val[0]) &&
            Number(item.price) <= Number(val[1])
        )
        .map((shopItem) => shopItem)
        .sort(sortProducts(sortBy))
    );
    console.log(shopItems);
  };

  const filterProduct = (checked) => {
    const filterCategory = checked.map((item) => categories[item]);
    if (checked.length >= 1) {
      setShopItems(
        originalShopItems
          .filter((item) => filterCategory.includes(item.category))
          .map((shopItem) => shopItem)
          .sort(sortProducts(sortBy))
      );
    } else if (checked.length <= 0) {
      setShopItems(originalShopItems);
    }
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
        sortProductsBy,
        filterPrice,
        filterProduct,
        removeCartItem,
        addToCart,
      }}
    >
      {children}
    </ShopItemsContext.Provider>
  );
}
