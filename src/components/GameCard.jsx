import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import { ButtonContext } from "../context/ButtonContext";
import { useContext, useState } from "react";

const GameCard = ({ id, name, price, img }) => {
  const { addToCart, removeFromCart } = useContext(ButtonContext);
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setInCart(false);
  };

  return (
    <div className="game-card flex flex-col px-2 py-4 text-neutral-800">
      <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md ">
        <Link to={`/games/${id}`}>
          <img
            className="rounded-md hover:cursor-pointer transform group-hover:scale-105 ease-in-out duration-200"
            src={img}
            alt={`Cover of the game ${name}`}
          />
        </Link>
      </div>
      <h3 className="text-lg font-medium py-2 truncate ">{name}</h3>
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium ">{price}</h3>{" "}
        <div>
          <button
            type="button"
            className="px-2 py-1 rounded-md text-xl font-medium "
            onClick={() => {}}
          >
            <FaRegHeart />
          </button>
          {inCart ? (
            <button
              type="button"
              className="px-2 py-1 rounded-md text-xl font-medium "
              onClick={handleRemoveFromCart}
            >
              <MdOutlineRemoveShoppingCart />
            </button>
          ) : (
            <button
              type="button"
              className="px-2 py-1 rounded-md text-xl font-medium "
              onClick={handleAddToCart}
            >
              <MdAddShoppingCart />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default GameCard;
