import React from "react";

const ShimmerCard = () => {
  return (
    <div className="p-2 m-2">
      <div className="shimmerBG rounded-lg bg-gray-300 w-[195px]  h-[240px]"></div>
      <div className="flex justify-start items-start mt-2">
        <div className="flex flex-col items-start w-full">
          <div className="shimmerBG bg-gray-300 my-1 w-full h-3"></div>
          <div className="shimmerBG bg-gray-300 my-1 w-1/3 h-2"></div>
          <div className="shimmerBG bg-gray-300 my-1 w-1/2 h-2"></div>
        </div>
      </div>
    </div>
  );
};

const HomeShimmerUI = () => {
  return (
    <div className="flex flex-wrap mt-[40px] ml-20">
      {Array(15)
        .fill()
        .map((val, index) => {
          return <ShimmerCard key={index} />;
        })}
    </div>
  );
};

export default HomeShimmerUI;
