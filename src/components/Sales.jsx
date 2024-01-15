import React, { Component } from "react";
import GameCard from "./GameCard.jsx";
import GameCardSkeleton from "./GameCardSkeleton.jsx";

export default class Sales extends Component {
  render() {
    return (
      <section>
        <h2 className="text-xl font-bold text-center py-6">OFERTAS</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 px-2 lg:px-20">
          {/* <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard /> */}
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
          <GameCardSkeleton />
        </div>
      </section>
    );
  }
}
