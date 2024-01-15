import React, { Component } from "react";

export default class TrendingGames extends Component {
  render() {
    return (
      <section className="lg:px-20 px-2">
        <h2 className="text-xl font-bold text-center py-6">
          JUEGOS DESTACADOS
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              className="p-2"
              src="https://via.placeholder.com/1000"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2">
            <img
              className="p-2"
              src="https://via.placeholder.com/1000"
              alt=""
            />
            <img
              className="p-2"
              src="https://via.placeholder.com/1000"
              alt=""
            />
            <img
              className="p-2"
              src="https://via.placeholder.com/1000"
              alt=""
            />
            <img
              className="p-2"
              src="https://via.placeholder.com/1000"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
}
