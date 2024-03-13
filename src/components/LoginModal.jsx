import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import { ButtonContext } from "../context/ButtonContext";

const LoginModal = ({ isLoggedIn }) => {
  const { setIsLoginModalOpen } = useContext(ButtonContext);

  const handleLoginModalToggle = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  return (
    <div className="login-modal" onClick={handleLoginModalToggle}>
      {!isLoggedIn && (
        <LoginForm isOpen={true} onClose={handleLoginModalToggle} />
      )}
    </div>
  );
};

export default LoginModal;
