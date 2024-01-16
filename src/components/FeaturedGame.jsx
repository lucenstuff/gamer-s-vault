import React, { Component } from "react";

export default class FeaturedGame extends Component {
  render() {
    const {
      gameImg,
      gameUrl = "#",
      gameName = "",
      gameDescription = "",
    } = this.props;

    return (
      <div className="p-2">
        <div className="group relative overflow-hidden ease-in-out duration-200 rounded-md">
          <a href={gameUrl} className="block"></a>
          <img
            className="rounded-md transform group-hover:scale-110 duration-200"
            src={gameImg}
            alt={gameName}
          />
          {/* The description panel will appear on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 duration-200  cursor-pointer"></div>
        </div>
      </div>
    );
  }
}
