import { useState, useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";
import { MdMenu, MdPerson, MdSearch, MdShoppingCart } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Searchbar from "./SearchBar";
import { IoMdArrowDropdown } from "react-icons/io";
import { searchProducts } from "../services/apiConnection";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import UserDropdownMenu from "./UserDropdownMenu";

const Navbar = () => {
  const { user } = useUser();
  const { logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const { setIsLoginModalOpen, setIsCartOpen } = useContext(ButtonContext);

  const handleLoginModalToggle = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleUserDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearch = async (searchTerm) => {
    try {
      const results = await searchProducts(searchTerm);
      console.log(results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };
  return (
    <nav className="bg-neutral-400 z-20 absolute w-full shadow-neutral-600 shadow-sm">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <a
            href="/"
            className="flex-shrink-0 ml-2 md:ml-0 flex items-center w-24 md:w-32 text-white font-bold"
          >
            <img
              src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705371120/icons/gv_logo_b2gipb.png"
              alt="logo"
            />
          </a>
          <div className="flex items-center gap-4"></div>
          <div className="flex justify-center items-center flex-grow">
            <div className="md:ml-12 lg:ml-40 hidden sm:flex sm:items-center text-lg">
              <a
                href="/"
                className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
              >
                INICIO
              </a>
              <a
                href="/store"
                className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
              >
                TIENDA
              </a>
              <a
                href="#sales"
                className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
              >
                OFERTAS
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-neutral-800 text-3xl">
            <button
              className="hover:text-neutral-950"
              aria-hidden="true"
              onClick={handleLoginModalToggle}
            >
              <MdSearch />
              <span className="hidden">Iniciar Sesión</span>
            </button>

            <button
              className="hover:text-neutral-950"
              aria-hidden="true"
              onClick={handleCartToggle}
            >
              <MdShoppingCart />
              <span className="hidden">Carrito</span>
            </button>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-neutral-800 px-2 py-1 rounded-md text-3xl font-medium"
              >
                <MdMenu />
              </button>
            </div>
            <div className="hidden md:block relative">
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
                isUserDropdownOpen={isOpen}
                onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
