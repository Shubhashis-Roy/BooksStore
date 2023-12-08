import React from "react";
import order_img from "../../assets/order.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";

const UserAccount = () => {
  const userDetails = useSelector((store) => store.user.userDetails);
  return (
    <div>
      <h1 className="ml-[45%] mt-12 font-bold text-xl">My Account</h1>

      <div className="flex mt-6 ml-20">
        <div className="my-6 rounded-lg border border-red-500 p-4 w-[350px] h-[190px] ">
          <div className="mt-3">
            {userDetails[0] ? (
              <>
                <img
                  className="ml-[44%] h-[53px] rounded-full"
                  src={userDetails[2]}
                />
                <div className="mt-5 font-bold">
                  <h1>Name: {userDetails[1]} </h1>
                  <h1>Email: {userDetails[0]} </h1>
                </div>
              </>
            ) : (
              <>
                <FaRegUserCircle className="ml-[44%] text-[50px]" />
                <div className="mt-5 font-bold">
                  <Link to="/login">
                    <h1 className="text-red-600 ml-[35%] mt-6">
                      Please Log In
                    </h1>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" ml-10 mt-6 rounded-lg border border-red-500 p-4  w-[350px] h-[190px] ">
          <Link to="/order">
            <div className="cursor-pointer mt-5 ml-28">
              <img src={order_img} />
              <h1 className="ml-3 mt-3 font-bold">My Order</h1>
            </div>
          </Link>
        </div>
        <div className="ml-10 mt-6 rounded-lg border border-red-500 p-4  w-[350px] h-[190px] ">
          <Link to="/cart">
            <div className="cursor-pointer mt-5 ml-28">
              <ImCart className="text-[65px] text-red-600" />
              <h1 className="ml-5 mt-3 font-bold">Cart</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
