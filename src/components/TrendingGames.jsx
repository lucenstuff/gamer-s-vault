import React, { Component } from "react";
import FeaturedGame from "./FeaturedGame";
import { getTrendingProducts } from "../services/apiConnection";

export default class TrendingGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trendingProducts: [],
    };
  }

  componentDidMount() {
    getTrendingProducts()
      .then((products) => {
        this.setState({ trendingProducts: products, isLoading: false });
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { trendingProducts, isLoading } = this.state;

    return (
      <section className="lg:px-20 px-2">
        <h2 className="text-xl font-bold text-center py-6">
          JUEGOS DESTACADOS
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            {trendingProducts.length > 0 && (
              <FeaturedGame
                gameImg={trendingProducts[0].ImageURL}
                gameId={trendingProducts[0].ProductID}
                gameName={trendingProducts[0].ProductName}
              />
            )}
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2">
            {trendingProducts.slice(1, 5).map((product) => (
              <FeaturedGame
                key={product.ProductID}
                gameImg={product.ImageURL}
                gameId={product.ProductID}
                gameName={product.ProductName}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
