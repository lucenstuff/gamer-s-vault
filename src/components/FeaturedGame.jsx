import { Component } from "react";
import PropTypes from "prop-types";
export default class FeaturedGame extends Component {
  render() {
    const { gameImg, gameUrl = "#", gameName = "" } = this.props;

    return (
      <div className="p-2">
        <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md shadow-neutral-500 shadow-md">
          <a href={gameUrl} className="block"></a>
          <img
            className="rounded-md transform group-hover:scale-105 duration-200"
            src={gameImg}
            alt={gameName}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 duration-200  cursor-pointer"></div>
        </div>
      </div>
    );
  }
}

FeaturedGame.propTypes = {
  gameImg: PropTypes.string.isRequired,
  gameUrl: PropTypes.string,
  gameName: PropTypes.string,
};
