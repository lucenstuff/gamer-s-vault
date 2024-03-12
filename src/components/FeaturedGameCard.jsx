import React from "react";

function FeaturedGameCard() {
  return (
    <div>
      <img
        src={img}
        alt={gameMame}
        className="w-full h-auto md:h-full md:w-full object-cover p-1"
      />
    </div>
  );
}

export default FeaturedGameCard;
