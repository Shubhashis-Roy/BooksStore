import React from "react";
import Search from "../Search/Search";
import User from "../UserAccount/User";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { Badge } from "antd";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <div className=" w-full">
      <div className="grid grid-flow-col w-full mt-3  mb-2 ">
        <Link to="/">
          <img
            className="h-[63px] ml-5 w-auto mt-1 cursor-pointer"
            alt="Youtube-Logo"
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png"
          />
        </Link>
        <div className="col-span-10 pt-4 pl-16">
          <Search />
        </div>
        <div className="col-span-1 pt-4 pl-16 flex">
          <User />
          <Link to="/cart">
            <Badge
              className="bg-red-500 ml-5 absolute rounded-lg text-white font-bold"
              count={cartItems?.length}
              showZero
            ></Badge>
            <BsCart className="text-red-600 mt-1 text-[22px] mr-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
