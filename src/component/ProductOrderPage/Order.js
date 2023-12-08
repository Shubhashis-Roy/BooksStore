import React from "react";
import OrderList from "./OrderList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Order = () => {
  const orderItem = useSelector((store) => store.order.orderItem);

  if (orderItem.length === 0) {
    return (
      <div className="my-16 mx-12 ">
        <h1 className="text-[18px] font-bold">Order List Empty</h1>
        <div className=" px-7 border border-gray-400 bg-gray-100 h-56 rounded-xl my-12 ">
          <p className="mt-10 text-gray-700">
            {" "}
            Your Shopping Order is currently empty. To add Books in your
            Shopping Order, start by searching or browsing through our book
            store. When a book interests you, click on Add to Order button.
            Books in Shopping Order always reflect the most recent price,
            displayed on their product pages.{" "}
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
      <h1 className="text-[20px] font-bold">My Order List</h1>
      <div className="mt-10 border border-gray-400 bg-gray-100 rounded-lg">
        {orderItem?.map((item, i) => (
          <OrderList key={i} info={item} />
        ))}
        <div className="ml-20 my-10 flex">
          <div className=" font-bold "></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
