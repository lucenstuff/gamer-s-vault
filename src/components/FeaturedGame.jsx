import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default class FeaturedGame extends Component {
  render() {
    const { gameImg, gameId, gameName } = this.props;

    return (
      <div className="p-2">
        <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md">
          <img
            className="rounded-md transform group-hover:scale-105 duration-200"
            src={gameImg}
            alt={gameName}
          />

          <Link to={`/games/${gameId}`}>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 duration-200  cursor-pointer"></div>
          </Link>
        </div>
      </div>
    );
  }
}

FeaturedGame.propTypes = {
  gameImg: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
};
