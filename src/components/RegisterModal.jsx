import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../services/apiConnection";

const RegisterModal = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await userRegister(
        username,
        email,
        password,
        firstName,
        lastName
      );
    } catch (error) {
      console.error("Registration failed:", error);
    }
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
                    required
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
                    value={firstName}
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
                      value={lastName}
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
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none"
                    required
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Por favor ingrese un correo valido"
                  />
                  <hr className="border-neutral-500 my-2" />
                </div>
                <div className="mb-5 ">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    placeholder="Ingrese la contraseña"
                    pattern=".{8,}"
                    title="La contraseña debe tener al menos 8 caracteres"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none"
                  />

                  <hr className="border-neutral-500 my-2" />
                </div>
                <div className="mb-5 ">
                  <label htmlFor="password2">Repetir Contraseña</label>
                  <input
                    type="password"
                    id="password2"
                    required
                    value={password2}
                    placeholder="Ingrese la contraseña"
                    onChange={(e) => setPassword2(e.target.value)}
                    className="w-full border-none rounded pt-2 bg-transparent focus:outline-none"
                  />
                  {password !== password2 && (
                    <p className="text-red-500 text-sm">
                      Las contraseñas no coinciden.
                    </p>
                  )}
                  <hr className="border-neutral-500 my-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <button
                type="submit"
                className="w-1/2 bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 mb-10 transition-transform hover:scale-105 hover:bg-neutral-50"
              >
                Registrarse
              </button>

              <h3 className="text-center text-sm mb-2 ">
                ¿Ya tienes una cuenta?
              </h3>
              <button
                onClick={handleRegisterRedirect}
                className="w-1/2 bg-neutral-100 text-neutral-800 font-semibold shadow-md rounded-2xl p-2 mb-10 transition-transform hover:scale-105 hover:bg-neutral-50"
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

export default RegisterModal;
