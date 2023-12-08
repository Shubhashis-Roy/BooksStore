import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NumericPart } from "../../utils/constant";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/reduxStore/cartSlice";

const BookDetails = () => {
  const [searchParam] = useSearchParams();
  const [bookDetails, setBookDetails] = useState();
  const dispatch = useDispatch();
  const bookId = searchParam.get("id");

  const getBookDetails = async () => {
    const data = await fetch(`https://api.itbook.store/1.0/books/${bookId}`);
    const json = await data.json();
    setBookDetails(json);
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const handleAddedCart = () => {
    dispatch(addItem(bookDetails));
  };

  if (!bookDetails) return;
  const { image, title, authors, publisher, year, price, desc } = bookDetails;

  return (
    <div className="mt-12 ml-12 ">
      <div className="flex">
        <div className="rounded-lg w-[302px] border border-gray-300">
          <img
            className="cursor-pointer hover:bg-gray-200 duration-300 hover:rounded-lg rounded-lg"
            src={image}
          />
        </div>
        <div className=" ml-8">
          <div className="flex">
            <h1 className="text-red-600 text-xl"> {title} </h1>
            <p className="mt-1 ml-1 text-gray-800 text-[15px]">(Paperback)</p>
            <p className="mt-1 ml-1 text-gray-800 text-[15px]">
              | Released: {year}
            </p>
          </div>
          <div className="flex mt-1">
            <p className="text-gray-800 text-[15px]">Author: {authors} </p>
            <p className="ml-1 text-gray-800 text-[15px]">
              | Publisher: {publisher}{" "}
            </p>
            <p className="ml-1 text-gray-800 text-[15px]">
              | Language: English{" "}
            </p>
          </div>
          <div class="my-8 border-t border-gray-300"></div>
          <div className="flex">
            <FaRupeeSign className="mt-[6px] text-xl text-red-600" />

            <h1 className="text-red-600 font-bold text-2xl">
              {" "}
              {NumericPart(price) * 82}{" "}
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
            <button
              className="rounded-[5px] hover:bg-gray-200 duration-300 border border-red-600 ml-2 py-2 px-16"
              onClick={handleAddedCart}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
      <p className="mt-8 text-red-600 font-bold">About the Book</p>
      <p className="text-justify mt-3 mr-12">
        {desc} {desc}
      </p>
    </div>
  );
};

export default BookDetails;
