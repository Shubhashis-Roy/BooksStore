import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSingleItem } from "../../utils/reduxStore/booksDetailsSlice";
import { NumericPart, removeDecimal } from "../../utils/constant";
import { FaRupeeSign } from "react-icons/fa";

const OrderCart = ({ info }) => {
  const { title, image, price } = info;
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
    <div>
      <div className="flex mt-10 mx-10 mb-10">
        <div>
          <img
            onClick={handleNavigate}
            className="bg-red-400 cursor-pointer  rounded-lg m-2 h-[230px] w-[180px]"
            src={image}
          />
        </div>
        <div className=" ml-7 mt-1 w-[500px]">
          <h1 className="text-xl mt-8 text-red-600"> {title} </h1>
          {info.ISBN ? (
            <>
              <h1 className="text-red-500 text-[14px]">
                Author: {info?.author}{" "}
              </h1>
              <div className="flex">
                <FaRupeeSign className="mt-[18px] text-red-600 " />
                <h1 className="text-red-600 mt-3 font-bold text-xl">
                  {removeDecimal(price.displayValue * 91)}
                </h1>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-red-500 text-[14px]">
                Author: {info?.authors}{" "}
              </h1>
              <div className="flex">
                <FaRupeeSign className="mt-[18px] text-red-600" />

                <h1 className="text-red-600 mt-3 font-bold text-xl">
                  {" "}
                  {NumericPart(price) * 82}{" "}
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
      <div class="mx-7 border-t border-gray-500 my-2"></div>
    </div>
  );
};

export default OrderCart;
