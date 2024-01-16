const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col px-2 py-4 animate-pulse">
      <div className="bg-neutral-400 w-full rounded-md aspect-square shadow-neutral-500 shadow-md"></div>
      <div className="h-6 bg-neutral-400 rounded mt-2 w-3/4 shadow-neutral-500 shadow-md"></div>
      <div className="flex justify-between items-center mt-[11px] ">
        <div className="h-5 bg-neutral-400 rounded w-1/4 shadow-neutral-500 shadow-md"></div>
        <div className="rounded-md flex space-x-2 mt-2">
          <div className="bg-neutral-400 rounded-full w-6 h-6 shadow-neutral-500 shadow-md"></div>
          <div className="bg-neutral-400 rounded-full w-6 h-6 shadow-neutral-500 shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
