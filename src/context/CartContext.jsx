import React, { createContext, useState } from "react";

export const CartContext = createContext();

const dispatchLocalStorageUpdate = () => {
  const event = new Event("localStoragesUpdate");
  window.dispatchEvent(event);
};

const saveGameIdToLocalStorage = (gameId) => {
  const existingGameIds = JSON.parse(localStorage.getItem("cartGameIds")) || [];

  if (!existingGameIds.includes(gameId)) {
    existingGameIds.push(gameId);
    localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
    localStorage.setItem(`cartGameIds-${gameId}`, gameId);
    dispatchLocalStorageUpdate();
  }
};

const removeGameIdFromLocalStorage = (gameId) => {
  let existingGameIds = JSON.parse(localStorage.getItem("cartGameIds")) || [];

  existingGameIds = existingGameIds.filter((id) => id !== gameId);
  localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
  localStorage.removeItem(`cartGameIds-${gameId}`);
  dispatchLocalStorageUpdate();
};

const CartProvider = ({ children }) => {
  const addToCart = () => {};
  const removeFromCart = () => {};
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = (id) => {
    addToCart(id);
    saveGameIdToLocalStorage(id);
    setInCart(true);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    removeGameIdFromLocalStorage(id);
    setInCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        inCart,
        saveGameIdToLocalStorage,
        removeGameIdFromLocalStorage,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
