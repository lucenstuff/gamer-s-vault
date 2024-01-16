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

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="bg-neutral-200">
      <ButtonContext.Provider value={{ isLoginModalOpen, setIsLoginModalOpen }}>
        <Navbar />
        {isLoginModalOpen && (
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleCloseLoginModal}
          />
        )}
        {isCartOpen && <Cart isCartOpen={true} setIsCartOpen={setIsCartOpen} />}
      </ButtonContext.Provider>
      <Cart />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
