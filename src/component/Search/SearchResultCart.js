import React from "react";
import { NumericPart, removeDecimal } from "../../utils/constant";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSingleItem } from "../../utils/reduxStore/booksDetailsSlice";

const SearchResultCart = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { image, title, price } = info;

  const handleNavigate = () => {
    if (info.ISBN) {
      navigate("/NewArrivals");
      dispatch(addSingleItem(info));
    } else {
      navigate("/details?id=" + info.isbn13);
    }
  };

  return (
    <div>
      <div className="w-52 mx-3 my-3 cursor-pointer" onClick={handleNavigate}>
        <div className="rounded-xl border border-red-600 w-52">
          <img
            className="hover:bg-gray-200 duration-300 hover:rounded-lg rounded-lg m-2 h-[250px] w-[187px]"
            src={image}
          />
        </div>
        <h1 className="text-gray-600 text-center text-[18px]"> {title} </h1>
        <div className="flex ml-[72px] text-red-600">
          <FaRupeeSign className="mt-1 " />
          {!price.displayValue ? (
            <h1 className=""> {NumericPart(price) * 82} </h1>
          ) : (
            <h1 className=""> {removeDecimal(price.displayValue * 91)} </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultCart;
