import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import PropTypes from "prop-types";
import { ButtonContext } from "../context/ButtonContext";
import { useState } from "react";
import Cart from "../components/Cart";

const MainLayout = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="bg-neutral-200">
      <ButtonContext.Provider
        value={{
          isLoginModalOpen,
          setIsLoginModalOpen,
          isCartOpen,
          setIsCartOpen,
        }}
      >
        <Navbar />
        {isLoginModalOpen && (
          <LoginModal isOpen={true} onClose={handleCloseLoginModal} />
        )}
        {isCartOpen && <Cart isOpen={true} onClose={handleCartToggle} />}
      </ButtonContext.Provider>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
