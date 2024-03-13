import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class FeaturedGame extends Component {
  render() {
    const { gameImg, gameId, gameName } = this.props;

    return (
      <div className="p-2">
        <Link to={`/games/${gameId}`}>
          <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md ">
            <img
              src={gameImg}
              alt={gameName}
              className="w-full h-1/2 md:h-full md:w-full object-cover transition-transform  rounded-md transform group-hover:scale-105 duration-200 "
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </Link>
      </div>
    );
  }
}

FeaturedGame.propTypes = {
  gameImg: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
};
