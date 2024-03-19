import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ButtonContext = createContext({
  isLoginModalOpen: false,
  setIsLoginModalOpen: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isInCart: false,
});

const ButtonProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isInCartFromStorage = localStorage.getItem("isInCart");
    if (isInCartFromStorage) {
      setIsInCart(JSON.parse(isInCartFromStorage));
    }
  }, []);

  const addToCart = (id, quantity) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += quantity;
    } else {
      updatedCart.push({ id, quantity });
    }

    setCartItems(updatedCart);
    setIsInCart(true);
    localStorage.setItem("isInCart", JSON.stringify(true));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    setIsInCart(false);
    localStorage.setItem("isInCart", JSON.stringify(false));
  };

  const contextValue = {
    isLoginModalOpen,
    setIsLoginModalOpen,
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
  };

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  );
};

ButtonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ButtonContext, ButtonProvider };
