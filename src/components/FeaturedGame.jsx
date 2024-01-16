import React, { Component } from "react";

export default class FeaturedGame extends Component {
  render() {
    const { gameImg, gameUrl = "#", gameName = "" } = this.props;
    return (
      <div className="p-2">
        <a href={gameUrl}>
          <img className="rounded-md" src={gameImg} alt={gameName} />
        </a>
      </div>
    );
  }
}
