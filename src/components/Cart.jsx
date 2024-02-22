import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { ButtonContext } from "../context/ButtonContext";
import PropTypes from "prop-types";
import GameListComponent from "./GameListComponent";
import { getSingleProducts } from "../services/apiConnection";

const Cart = () => {
  const { setIsCartOpen } = useContext(ButtonContext);
  const [products, setProducts] = useState([]);
  const id = "ad52756d-d10d-11ee-8ecc-7a791906ac08";
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    getSingleProducts(id)
      .then((products) => {
        setProducts(products);
        products.map((product) => {
          console.log(product);
        });
      })
      .catch((error) => {
        console.error("Failed to fetch products", error);
      });
  }, []); // El segundo argumento del useEffect es un array de dependencias vacío para ejecutar el efecto solo una vez

  return (
    <div className="fixed bottom-0 right-0 h-screen w-3/4 md:w-1/2 lg:w-1/4 bg-gray-200 z-40 shadow-black shadow-md rounded-l-lg">
      <div className="flex justify-between items-center px-10">
        <h2 className="text-2xl font-semibold text-center mb-10 mt-8 pb-6">
          Carrito
        </h2>
        <span className="absolute top-0 right-0 p-6 cursor-pointer">
          <button className="p-2" onClick={handleCloseCart}>
            <IoMdClose size={24} />
          </button>
        </span>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-250px)] pb-16">
        <GameListComponent />
        <GameListComponent />
        <GameListComponent />
        <GameListComponent />
        <GameListComponent />
        <GameListComponent />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-center bg-neutral-400 w-full p-10 shadow-black shadow-md">
          <button className="bg-neutral-100 w-full hover:bg-neutral-50 hover:shadow-lg text-neutral-800 font-bold py-2 px-4 rounded-full">
            Iniciar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Cart;
