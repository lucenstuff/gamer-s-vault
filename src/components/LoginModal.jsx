import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login with:", username, password);
    onClose();
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 backdrop-blur-md flex ">
        <div className="relative py-8 px-12 bg-neutral-300 max-w-md m-auto flex-col flex rounded-2xl shadow-neutral-700 shadow-lg ">
          <h2 className="text-2xl font-semibold text-center mb-10 mt-8 pb-6">
            Iniciar Sesión
          </h2>
          <span
            className="absolute top-0 right-0 p-4 cursor-pointer"
            onClick={onClose}
          >
            <button className="p-2">
              <IoMdClose size={24} />
            </button>
          </span>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-5 ">
              <label htmlFor="email" className="">
                Email
              </label>

              <input
                type="text"
                id="user"
                value={username}
                placeholder="Ingresa tu email"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
              />
              <hr className="border-neutral-500 my-2" />
            </div>
            <div className="mb-5 ">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Ingresa tu contraseña"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
              />
              <hr className="border-neutral-500 my-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 mt-10"
            >
              Iniciar Sesión
            </button>
            <h3 className="text-center text-sm mt-24 mb-2">
              ¿No tienes una cuenta?
            </h3>
            <button
              type="submit"
              className="w-full bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 mb-10"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
LoginModal.propTypes = {
  isOpen: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
