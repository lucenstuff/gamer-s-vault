import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ButtonContext = createContext();

const LoginToggle = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <ButtonContext.Provider value={{ isLoginModalOpen, setIsLoginModalOpen }}>
      {children}
    </ButtonContext.Provider>
  );
};

const CartToggle = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <ButtonContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </ButtonContext.Provider>
  );
};

LoginToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

CartToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ButtonContext, LoginToggle, CartToggle };
