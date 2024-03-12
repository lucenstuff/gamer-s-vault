import React from "react";

const SkeletonRenderer = ({ count, SkeletonComponent }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <SkeletonComponent key={index} />
  ));

  return <>{skeletons}</>;
};

export default SkeletonRenderer;
