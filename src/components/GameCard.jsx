import React, { Component } from "react";
import { MdAddShoppingCart } from "react-icons/md";

export default class GameCard extends Component {
  render() {
    return (
      <div className="flex flex-col px-2">
        <img
          className="relative w-full object-cover"
          src="https://via.placeholder.com/1000"
          alt="Game Card"
        />
        <h3>Game Title</h3>
        <div className="flex justify-between items-center">
          <h3>Game Price</h3>
          <button
            type="button"
            className="text-neutral-800 px-2 py-1 rounded-md text-2xl font-medium"
          >
            <MdAddShoppingCart />
          </button>
        </div>
      </div>
    );
  }
}
