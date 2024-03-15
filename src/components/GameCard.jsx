import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { ButtonContext } from "../context/ButtonContext";
import { useContext, useState, useEffect } from "react";

const GameCard = ({ id, name, price, img }) => {
  const { addToCart, removeFromCart } = useContext(ButtonContext);
  const [inCart, setInCart] = useState(() => {
    return localStorage.getItem(`cartGameIds-${id}`) === id;
  });

  const dispatchLocalStorageUpdate = () => {
    const event = new Event("localStoragesUpdate");
    window.dispatchEvent(event);
  };

  const saveGameIdToLocalStorage = (gameId) => {
    const existingGameIds =
      JSON.parse(localStorage.getItem("cartGameIds")) || [];

    if (!existingGameIds.includes(gameId)) {
      existingGameIds.push(gameId);
      localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
      localStorage.setItem(`cartGameIds-${gameId}`, gameId);
      dispatchLocalStorageUpdate();
    }
  };

  const removeGameIdFromLocalStorage = (gameId) => {
    let existingGameIds = JSON.parse(localStorage.getItem("cartGameIds")) || [];

    existingGameIds = existingGameIds.filter((id) => id !== gameId);
    localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
    localStorage.removeItem(`cartGameIds-${gameId}`);
    dispatchLocalStorageUpdate();
  };

  const handleAddToCart = () => {
    addToCart(id);
    saveGameIdToLocalStorage(id);
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    removeGameIdFromLocalStorage(id);
    setInCart(false);
  };

  useEffect(() => {
    setInCart(localStorage.getItem(`cartGameIds-${id}`) === id);
  }, [id]);

  return (
    <div className="game-card flex flex-col px-2 py-4 text-neutral-800">
      <div className="group aspect-square relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md">
        <Link to={`/games/${id}`}>
          <img
            className=" rounded-md hover:cursor-pointer transform group-hover:scale-105 ease-in-out duration-200 absolute top-0 left-0 w-full h-full object-cover"
            src={img}
            alt={`Cover of the game ${name}`}
            loading="lazy"
            style={{ position: "absolute" }}
          />
        </Link>
      </div>
      <h3 className="text-lg font-medium py-2 truncate ">{name}</h3>
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium ">{price}</h3> <div></div>
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
  );
};

GameCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default GameCard;
