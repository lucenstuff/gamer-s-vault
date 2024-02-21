import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ButtonContext = createContext({
  isLoginModalOpen: false,
  setIsLoginModalOpen: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const ButtonProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, quantity) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += quantity;
    } else {
      updatedCart.push({ id, quantity });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <ButtonContext.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

ButtonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ButtonContext, ButtonProvider };
