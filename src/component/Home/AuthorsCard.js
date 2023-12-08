import React from "react";

const AuthorsCard = ({ info }) => {
  const { name, image, biography } = info;
  return (
    <div className="mb-5">
      <div className="w-[160px]">
        <img
          className="cursor-pointer rounded-full h-[150px] w-[150px]"
          src={image}
        />
      </div>
      <h1 className="text-center text-gray-700 cursor-pointer"> {name} </h1>
      <div className="flex ml-[72px] text-red-600"></div>
    </div>
  );
};

export default AuthorsCard;
