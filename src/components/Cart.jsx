import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="fixed bottom-0 right-0 h-screen w-3/4 md:w-1/4 bg-gray-200 z-40 shadow-black shadow-md rounded-l-lg">
      <div className="flex justify-between items-center px-10">
        <h2 className="text-2xl font-semibold text-center mb-10 mt-8 pb-6">
          Carrito
        </h2>
        <span className="absolute top-0 right-0 p-6 cursor-pointer">
          <button className="p-2" onClick={() => setIsOpen((prev) => !prev)}>
            <IoMdClose size={24} />
          </button>
        </span>
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

export default Cart;
