import React from "react";

const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col px-2 animate-pulse">
      <div className="bg-neutral-400 w-full rounded-md aspect-square"></div>
      <div className="h-6 bg-neutral-400 rounded mt-2 w-3/4"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="h-6 bg-neutral-400 rounded w-1/4"></div>
        <div className="px-2 py-2 rounded-md">
          <div className="bg-neutral-400 rounded-full w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
