import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartList from "./CartList";
import { addPrice } from "../../utils/constant";
import { addOrderItem } from "../../utils/reduxStore/orderSlice";
import { removeAllItem } from "../../utils/reduxStore/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookDetails = useSelector((store) => store.cart.cartItems);
  const userDetails = useSelector((store) => store.user.userDetails);

  const handleBuy = () => {
    dispatch(addOrderItem(bookDetails));
    dispatch(removeAllItem());
    navigate("/order");
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  if (bookDetails.length === 0) {
    return (
      <div className="my-16 mx-12 ">
        <h1 className="text-[20px] font-bold">My Shopping Cart</h1>
        <div className=" px-7 border border-gray-400 bg-gray-100 h-56 rounded-xl my-12 ">
          <p className="mt-10 text-gray-700">
            {" "}
            Your Shopping Cart is currently empty. To add Books in your Shopping
            Cart, start by searching or browsing through our book store. When a
            book interests you, click on Add to Cart button. Books in Shopping
            Cart always reflect the most recent price, displayed on their
            product pages.{" "}
          </p>
          <Link to="/">
            <p className="mt-6 font-bold ">Back To Homepage</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 mx-14">
      <h1 className="text-[20px] font-bold">My Shopping Cart</h1>
      <div className="mt-10 border border-gray-400 bg-gray-100 rounded-lg">
        {bookDetails?.map((item, i) => (
          <CartList key={i} info={item} />
        ))}
        <div className="ml-20 my-10 flex">
          <div className=" font-bold ">
            <h1>Total Items: {bookDetails?.length} </h1>
          </div>
          <div className="ml-[57%]">
            <h1 className=" font-bold">Shipping (India): Free</h1>
            {userDetails[0] ? (
              <button
                className=" ml-9 mt-4 text-white border border-gray-700 py-2 rounded-lg px-12 bg-red-600 hover:bg-red-500 duration-300 hover:text-black"
                onClick={handleBuy}
              >
                Buy
              </button>
            ) : (
              <button
                className=" mt-4 text-white border border-gray-700 py-2 rounded-lg px-7 bg-red-600 hover:bg-red-500 duration-300 hover:text-black"
                onClick={handleNavigate}
              >
                Log In and Buy
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
