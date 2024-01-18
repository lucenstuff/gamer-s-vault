import { useState, useEffect } from "react";
import GameCardSkeleton from "../components/GameCardSkeleton";
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
      <h2 className="text-xl font-bold text-center py-6">OFERTAS</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-6 px-2 lg:px-20">
        {isLoading ? (
          <>
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
            <GameCardSkeleton />
          </>
        ) : (
          products.map((product) => (
            <GameCard
              key={product.ProductID}
              gameImg={product.ImageURL}
              gameUrl={`/products/${product.ProductID}`}
              gameName={product.ProductName}
              gamePrice={`$${product.Price}`}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default StorePage;
