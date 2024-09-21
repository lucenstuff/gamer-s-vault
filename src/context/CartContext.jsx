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
  const [cartOpen, setCartOpen] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleToggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleAddToCart = (id) => {
    setInCart(true);
    saveGameIdToLocalStorage(id);
  };

  const handleRemoveFromCart = (id) => {
    setInCart(false);
    removeGameIdFromLocalStorage(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        inCart,
        handleToggleCart,
        handleAddToCart,
        handleRemoveFromCart,
        saveGameIdToLocalStorage,
        removeGameIdFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
