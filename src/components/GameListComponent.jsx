import { IoMdTrash } from "react-icons/io";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const GameListComponent = ({ id, name, price, img }) => {
  const { handleRemoveFromCart } = useContext(CartContext);
  const handleClickRemoveFromCart = () => {
    handleRemoveFromCart(id);
  };

  return (
    <div className="w-full text-neutral-800 relative text-lg">
      <div className="flex flex-row justify-start px-4">
        <div className="w-1/6 rounded-md">
          <img src={img} alt={name} />
        </div>
        <div className="px-4 flex flex-col">
          <h3 className="font-bold truncate md:w-56 w-40">{name}</h3>
          <p>${price}</p>
        </div>
        <div className="absolute right-4">
          <button className="">
            <IoMdTrash size={24} onClick={handleClickRemoveFromCart} />
          </button>
        </div>
      </div>
      <hr className="border-t border-neutral-400 my-4 mx-4" />
    </div>
  );
};

GameListComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default GameListComponent;
