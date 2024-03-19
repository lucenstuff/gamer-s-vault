import { Component } from "react";
import React from "react";
import SkeletonRenderer from "../utils/SkeletonRenderer";
import GameCard from "./GameCard.jsx";
import GameCardSkeleton from "./GameCardSkeleton.jsx";
import { getProducts } from "../services/apiConnection";

export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getProducts()
      .then((products) => {
        this.setState({
          products: products,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { products, isLoading } = this.state;
    const displayProducts = products.slice(0, 8);

    return (
      <section id="sales">
        <h2 className="text-xl font-bold text-center py-6">OFERTAS</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 px-2 lg:px-20">
          {isLoading ? (
            <SkeletonRenderer count={8} SkeletonComponent={GameCardSkeleton} />
          ) : (
            displayProducts.map((product) => (
              <GameCard
                key={product.ProductID}
                img={product.ImageURL}
                id={product.ProductID}
                name={product.ProductName}
                price={`$${product.Price}`}
              />
            ))
          )}
        </div>
      </section>
    );
  }
}
