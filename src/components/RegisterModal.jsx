import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register with:", username, password, name, lastname, email);
  };

  const handleRegisterRedirect = () => {
    navigate("/", { state: { openLoginModal: true } });
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 overflow-auto bg-neutral-200 flex ">
        <div className="relative py-8 px-12 bg-neutral-300 max-w-full m-auto flex-col flex rounded-2xl shadow-neutral-700 shadow-lg ">
          <h2 className="text-2xl font-semibold text-center mb-10 mt-8 pb-6">
            Registro
          </h2>
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 ml-4 mr-4">
                <div className="mb-5 ">
                  <label htmlFor="username" className="">
                    Usuario
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Ingrese su usuario"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
                  />
                  <hr className="border-neutral-500 my-2" />
                </div>

                <div className="mb-5 ">
                  <label htmlFor="name" className="">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Ingrese su nombre"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
                  />
                  <hr className="border-neutral-500 my-2" />
                </div>
                <div>
                  <div className="mb-5 ">
                    <label htmlFor="lastname" className="">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      placeholder="Ingrese su nombre"
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
                    />
                    <hr className="border-neutral-500 my-2" />
                  </div>
                </div>
              </div>
              <div className="flex-1 ml-4 mr-4">
                <div className="mb-5 ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Ingrese la contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
                  />
                  <hr className="border-neutral-500 my-2" />
                </div>
                <div className="mb-5 ">
                  <label htmlFor="password2">Repetir Contraseña</label>
                  <input
                    type="password"
                    id="password2"
                    value={password2}
                    placeholder="Ingrese la contraseña"
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none "
                  />
                  <hr className="border-neutral-500 my-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-1/2 bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 mt-10"
              >
                Registrarse
              </button>
              <h3 className="text-center text-sm mt-10 mb-2">
                ¿Ya tienes una cuenta?
              </h3>
              <button
                type="submit"
                onClick={handleRegisterRedirect}
                className="w-1/2 bg-neutral-100 text-neutral-800 font-semibold rounded-2xl p-2 mb-10"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

RegisterModal.propTypes = {
  isOpen: PropTypes.node.isRequired,
  onClose: PropTypes.node.isRequired,
};

export default RegisterModal;
