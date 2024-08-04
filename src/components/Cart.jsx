import { IoMdCart, IoMdClose } from "react-icons/io";
import GameListComponent from "./GameListComponent";
import { getSingleProducts } from "../services/apiConnection";
import { useState, useEffect } from "react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const closeCart = () => {
    setIsOpen(false);
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

    console.log(updateProducts);

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

  const total = products.reduce(
    (acc, product) => acc + parseFloat(product.price),
    0
  );

  return (
    <>
      <button
        className="hover:text-neutral-950"
        aria-hidden="true"
        onClick={toggleCart}
      >
        <IoMdCart />
      </button>

      <div
        className={`fixed bottom-0 right-0 md:fixed md:h-screen h-full w-3/4 md:w-1/2 lg:w-1/4 bg-gray-200 z-40 shadow-black shadow-md rounded-l-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-10">
          <h2 className="text-2xl font-semibold text-center mb-10 mt-8 pb-6">
            Carrito
          </h2>
          <span className="absolute top-0 right-0 p-6 cursor-pointer">
            <button className="p-2" onClick={closeCart}>
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
        <div className="absolute bottom-0 left-0 w-full text-lg">
          <div className="flex justify-start bg-neutral-400 w-full px-10 py-4">
            <span className="font-bold pt-2">Total: ${total}</span>
          </div>
          <div className="flex justify-center bg-neutral-400 w-full px-10 py-8">
            <button className="bg-neutral-100 w-full hover:bg-neutral-50 hover:shadow-lg text-neutral-800 font-bold py-2 px-4 rounded-full">
              Iniciar Pago
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
