import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { useSelector } from "react-redux";
import { GoSignOut, GoSignIn } from "react-icons/go";

const User = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const userDetails = useSelector((store) => store.user.userDetails);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div className="flex cursor-pointer mb-3">
        {userDetails[1] ? (
          <>
            <img className="rounded-full w-8 mr-1" src={userDetails[2]} />
            <h1 className="mt-1 ml-1 text-gray-500"> {userDetails[1]} </h1>
          </>
        ) : (
          <>
            <PiUserCircleFill className="text-red-600 text-3xl " />
            <h1 className="mt-1 ml-1 text-gray-500">My Account</h1>
          </>
        )}
        {mouseHover ? (
          <SlArrowDown className="text-red-600 mt-2 ml-1" />
        ) : (
          <MdArrowForwardIos className="text-red-600 mt-2 ml-1" />
        )}
        <Link to="/cart">
          <RxDividerVertical className="text-red-600 text-3xl" />
        </Link>
      </div>
      {mouseHover && (
        <div className="absolute border border-gray-500 bg-gray-100 p-3 rounded-[6px]">
          {userDetails[1] ? (
            <Link to="/login">
              <div className=" px-4 py-1 bg-red-600 hover:bg-gray-300 hover:text-black rounded-[7px] duration-200  border border-red-600 text-white flex">
                <GoSignOut className="mt-[5px] mr-2" />
                <p className="mt-[1px]">Log Out</p>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className=" px-4 py-1 bg-red-600 text-white hover:text-black hover:bg-gray-300 rounded-[7px] duration-200  border border-red-600 flex">
                <GoSignIn className="mt-[5px] mr-2" />
                <p className="mt-[1px]">Log In </p>
              </div>
            </Link>
          )}

          <Link to="/account">
            <h1 className="cursor-pointer px-4 py-1 mt-3 bg-gray-300 hover:bg-gray-400 duration-200 rounded-[7px] border border-red-600">
              Your Account
            </h1>
          </Link>
          <Link to="/order">
            <h1 className=" cursor-pointer px-4 py-1 mt-3 mb-2 mx- bg-gray-300 hover:bg-gray-400 duration-200 rounded-[7px] border border-red-600">
              Your Order
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
