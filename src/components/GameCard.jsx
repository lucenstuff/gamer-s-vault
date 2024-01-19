import { Component } from "react";

import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

export default class GameCard extends Component {
  render() {
    const { gameImg, gameUrl, gameName, gamePrice } = this.props;
    return (
      <div className="game-card flex flex-col px-2 py-4 text-neutral-800">
        <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md ">
          <a href={gameUrl} className="block"></a>
          <img
            className="rounded-md hover:cursor-pointer"
            src={gameImg}
            alt={gameName}
          />
        </div>
        <h3 className="text-lg font-medium py-2 truncate ">{gameName}</h3>
        <div className="flex justify-between items-center">
          <h3 className="text-md font-medium ">{gamePrice}</h3>
          <div>
            <button
              type="button"
              className="px-2 py-1 rounded-md text-xl font-medium "
            >
              <FaRegHeart />
            </button>
            <button
              type="button"
              className="px-2 py-1 rounded-md text-xl font-medium "
            >
              <MdAddShoppingCart />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  gameImg: PropTypes.string.isRequired,
  gameUrl: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
  gamePrice: PropTypes.string.isRequired,
};
