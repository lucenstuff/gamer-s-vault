import { useState, useEffect } from "react";
import GameCardSkeleton from "../components/GameCardSkeleton";
import SkeletonRenderer from "../utils/SkeletonRenderer";
import GameCard from "../components/GameCard";
import { getProducts } from "../services/apiConnection";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="sales">
      <h2 className="text-xl font-bold text-center py-6">JUEGOS</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 px-2 lg:px-20">
        {isLoading || products.length === 0 ? (
          <SkeletonRenderer count={30} SkeletonComponent={GameCardSkeleton} />
        ) : (
          products.map((product) => (
            <GameCard
              key={product.ProductID}
              img={product.ImageURL}
              id={product.ProductID}
              name={product.ProductName}
              price={`$${product.Price}`}
            />
          ))
        )}
        {/* {products.map((product) => (
          <GameCard
            key={product.ProductID}
            img={product.ImageURL}
            id={product.ProductID}
            name={product.ProductName}
            price={`$${product.Price}`}
          />
        ))} */}
      </div>
    </section>
  );
};

export default StorePage;
