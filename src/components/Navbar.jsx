import { useState, useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";
import { MdMenu, MdPerson, MdSearch, MdShoppingCart } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Searchbar from "./SearchBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./UserDropdownMenu";
import Cart from "./Cart";

const Navbar = () => {
  const { user } = useUser();
  const { logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const { setIsLoginModalOpen, setIsCartOpen } = useContext(ButtonContext);

  const handleLoginModalToggle = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-neutral-400 z-20 absolute w-full shadow-neutral-600 shadow-sm">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <button>
              <a href="/">
                <img
                  className="flex-shrink-0 ml-2 md:ml-0 flex items-center w-24 md:w-32 text-white font-bold"
                  src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705371120/icons/gv_logo_b2gipb.png"
                  alt="logo"
                />
              </a>
            </button>
          </div>

          <div className="md:ml-12 lg:ml-28 hidden sm:flex sm:items-center text-lg ">
            <Link
              to="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              INICIO
            </Link>
            <Link
              to="/store"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              TIENDA
            </Link>
            {/* <Link
              to="/#sales"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              OFERTAS
            </Link> */}
          </div>

          <div className="flex items-center gap-4 text-neutral-800 text-3xl ">
            <Searchbar />
            <Cart />
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-neutral-800 px-2 py-1 rounded-md text-3xl font-medium"
              >
                <MdMenu />
              </button>
            </div>
            <div className="hidden md:block">
              <button
                className="hover:text-neutral-950 flex gap-1 justify-center items-center "
                aria-hidden="true"
                onClick={
                  user ? handleUserDropdownToggle : handleLoginModalToggle
                }
              >
                {user ? null : <MdPerson />}

                <span className="font-medium text-lg">
                  {user
                    ? user.firstName + " " + user.lastName
                    : "Inciar Sesión"}
                </span>
                {user ? <IoMdArrowDropdown /> : null}
              </button>
              <UserDropdownMenu
                isUserDropdownOpen={isUserDropdownOpen}
                onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* {isSearchBarOpen && (
        <div className="flex md:hidden w-full px-4 pt-2 pb-4">
          <Searchbar />
        </div>
      )} */}

      {isOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col px-4 pt-2 pb-3 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              INICIO
            </Link>
            <Link
              to="/store"
              onClick={() => setIsOpen(false)}
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              TIENDA
            </Link>
            {/* <Link
              to="/#sales"
              onClick={() => setIsOpen(false)}
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              OFERTAS
            </Link> */}
            {user ? (
              <div className="flex flex-col pb-3">
                <div>
                  <Link
                    to={"/account"}
                    onClick={() => setIsOpen(false)}
                    className="w-full justify-between text-neutral-800 gap-1 flex items-center hover:underline px-3 py-2 rounded-md font-semibold"
                  >
                    MI CUENTA
                  </Link>
                  <Link
                    onClick={logout}
                    className="w-full justify-between text-neutral-800 gap-1 flex items-center hover:underline px-3 py-2 rounded-md font-semibold"
                  >
                    CERRAR SESIÓN
                    <IoLogOut size={20} />
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                onClick={handleLoginModalToggle}
                className="w-full justify-between text-neutral-800 gap-1 flex items-center hover:underline px-3 py-2 rounded-md font-semibold"
              >
                INICIAR SESION
                <MdPerson size={20} />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
