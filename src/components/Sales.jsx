import React, { Component } from "react";
import GameCard from "./GameCard.jsx";

export default class Sales extends Component {
  render() {
    return (
      <div className="w-full grid grid-cols-2 md:grid-cols-4 px-2 lg:px-20">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    );
  }
}
