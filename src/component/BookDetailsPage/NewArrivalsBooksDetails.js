import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDecimal } from "../../utils/constant";
import { FaRupeeSign } from "react-icons/fa";
import { addItem } from "../../utils/reduxStore/cartSlice";

const NewArrivalsBooksDetails = () => {
  const item = useSelector((store) => store.bookDetails.item);
  const dispatch = useDispatch();

  const handleAddedCart = () => {
    dispatch(addItem(item));
  };

  const { image, title, author, summary, price } = item;
  return (
    <div className="mt-12 ml-12 ">
      <div className="flex">
        <div className=" cursor-pointer hover:bg-gray-200 duration-300 hover:rounded-lg rounded-lg border border-gray-300">
          <img className="rounded-lg m-8 w-[210px] h-[280px] " src={image} />
        </div>
        <div className=" ml-8">
          <div className="flex">
            <h1 className="text-red-600 text-xl"> {title} </h1>
            <p className="mt-1 ml-1 text-gray-800 text-[15px]">(Paperback)</p>
            <p className="mt-1 ml-1 text-gray-800 text-[15px]">
              | Released: 2012
            </p>
          </div>
          <div className="flex mt-1">
            <p className="text-gray-800 text-[15px]">Author: {author} </p>
            <p className="ml-1 text-gray-800 text-[15px]">
              | Language: English{" "}
            </p>
          </div>
          <div class="my-8 border-t border-gray-300"></div>
          <div className="flex">
            <FaRupeeSign className="mt-[7px] text-xl text-red-600" />
            <h1 className="text-red-600 font-bold text-2xl">
              {" "}
              {removeDecimal(price.displayValue * 91)}{" "}
            </h1>
          </div>
          <div className="mt-8">
            <p className="text-green-600 text-[16px]">Available</p>
            <div className="text-[15px] flex">
              <p className="text-gray-700">Ships within</p>
              <p className="ml-1"> 2-4 days</p>
            </div>
            <p className="text-[15px] mt-2 text-gray-700 ">
              ₹39 shipping in India per item and low cost Worldwide.
            </p>
          </div>
          <div className="flex mt-7">
            <button
              className="rounded-[5px] hover:bg-red-500 duration-300 py-2 px-20 bg-red-600 text-white"
              onClick={handleAddedCart}
            >
              {" "}
              Buy Now{" "}
            </button>
            <button className="rounded-[5px] hover:bg-gray-200 duration-300 border border-red-600 ml-2 py-2 px-16">
              {" "}
              Add to Wishlist{" "}
            </button>
          </div>
        </div>
      </div>
      <p className="mt-8 text-red-600 font-bold">About the Book</p>
      <p className="text-justify mt-3 mr-12">{summary}</p>
    </div>
  );
};

export default NewArrivalsBooksDetails;
