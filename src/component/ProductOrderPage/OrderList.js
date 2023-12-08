import React from "react";
import OrderCart from "./OrderCart";

const OrderList = ({ info }) => {
  return (
    <div>
      {info?.map((item, i) => (
        <OrderCart key={i} info={item} />
      ))}
    </div>
  );
};

export default OrderList;
