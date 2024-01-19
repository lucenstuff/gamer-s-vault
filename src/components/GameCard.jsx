import { Component } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

export default class GameCard extends Component {
  render() {
    const { id, name, price, img } = this.props;
    return (
      <div className="game-card flex flex-col px-2 py-4 text-neutral-800">
        <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md ">
          <Link to={`/games/${id}`}>
            <img
              className="rounded-md hover:cursor-pointer transform  group-hover:scale-105 ease-in-out duration-200"
              src={img}
              alt={name}
            />
          </Link>
        </div>
        <h3 className="text-lg font-medium py-2 truncate ">{name}</h3>
        <div className="flex justify-between items-center">
          <h3 className="text-md font-medium ">{price}</h3>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
