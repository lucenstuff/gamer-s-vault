import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { ButtonContext } from "../context/ButtonContext";
import GameListComponent from "./GameListComponent";
import { getSingleProducts } from "../services/apiConnection";
import PropTypes from "prop-types";

const Cart = ({ isOpen, onClose }) => {
  const { setIsCartOpen } = useContext(ButtonContext);
  const [products, setProducts] = useState([]);

  const handleCloseCart = () => {
    setIsCartOpen(false);
    onClose();
  };

  useEffect(() => {
    const loadGameIdsFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem("cartGameIds")) || [];
    };

    const updateProducts = async () => {
      const cartProductIds = loadGameIdsFromLocalStorage();

      try {
        const productsList = await Promise.all(
          cartProductIds.map((id) => getSingleProducts(id))
        );

        const simplifiedProducts = productsList.map((product) => ({
          id: product.ProductID,
          name: product.ProductName,
          img: product.ImageURL,
          price: product.Price,
        }));

        setProducts(simplifiedProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    updateProducts();

    const handleLocalStorageUpdate = () => {
      updateProducts();
    };

    window.addEventListener("localStoragesUpdate", handleLocalStorageUpdate);

    return () => {
      window.removeEventListener(
        "localStoragesUpdate",
        handleLocalStorageUpdate
      );
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 right-0 md:fixed md:h-screen h-full w-3/4 md:w-1/2 lg:w-1/4 bg-gray-200 z-40 shadow-black shadow-md rounded-l-lg ${
        isOpen ? "block" : "hidden"
      }`}
    >
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
        {products.map((product) => (
          <GameListComponent
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="flex justify-start bg-neutral-400 w-full px-10 py-4">
          <span className="font-bold">Total: $100</span>
        </div>
        <div className="flex justify-center bg-neutral-400 w-full px-10 py-8 ">
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
