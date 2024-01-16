import React, { useState } from "react";

import {
  MdMenu,
  MdPerson,
  MdShoppingCart,
  MdOutlineSearch,
} from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-400 z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 ">
          <div className="flex">
            <a
              href="/"
              className="flex-shrink-0 ml-2 md:ml-0 flex items-center w-24 md:w-36 text-white font-bold"
            >
              <img
                src="https://res.cloudinary.com/dcbmvyyes/image/upload/v1705371120/icons/gv_logo_b2gipb.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="hidden sm:flex sm:items-center justify-center text-lg">
            <a
              href="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              INICIO
            </a>
            <a
              href="/about"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md font-semibold"
            >
              TIENDA
            </a>
            <a
              href="/services"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md  font-semibold"
            >
              OFERTAS
            </a>
          </div>
          <div className="flex items-center gap-1 text-neutral-800 text-3xl ">
            <button className="hover:text-neutral-950" aria-hidden="true">
              <MdOutlineSearch />
              <span className="hidden">Buscar</span>
            </button>
            <button className="hover:text-neutral-950" aria-hidden="true">
              <MdPerson />
              <span className="hidden">Iniciar Sesión</span>
            </button>
            <button className="hover:text-neutral-950" aria-hidden="true">
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
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md text-md font-semibold"
            >
              INICIO
            </a>
            <a
              href="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md text-md font-semibold"
            >
              TIENDA
            </a>
            <a
              href="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md text-md font-semibold"
            >
              OFERTAS
            </a>
            <a
              href="/"
              className="text-neutral-800 hover:underline px-3 py-2 rounded-md text-md font-semibold"
            >
              CONTACTO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
