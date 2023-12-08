import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NumericPart, removeDecimal } from "../../utils/constant";
import { addSingleItem } from "../../utils/reduxStore/booksDetailsSlice";

const BooksCard = ({ info }) => {
  const { image, author, title, price } = info;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    if (info.ISBN) {
      navigate("/NewArrivals");
      dispatch(addSingleItem(info));
    } else {
      navigate("/details?id=" + info.isbn13);
    }
  };

  return (
    <div
      className="w-52 mx-3 rounded-lg cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="rounded-xl border border-red-600 w-52">
        <img
          className=" hover:bg-gray-200 duration-300 hover:rounded-lg rounded-lg m-2 h-[250px] w-[187px]"
          src={image}
        />
      </div>
      <h1 className="text-gray-600 text-center text-[18px]"> {title} </h1>
      <h1 className="text-center mt-4 "> {author} </h1>
      <div className="flex ml-[72px] text-red-600">
        <FaRupeeSign className="mt-1 " />
        {!price.displayValue ? (
          <h1 className=""> {NumericPart(price) * 82} </h1>
        ) : (
          <h1 className=""> {removeDecimal(price.displayValue * 91)} </h1>
        )}
      </div>
    </div>
  );
};

export default BooksCard;
