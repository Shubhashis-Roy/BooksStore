import React, { useState } from "react";
import { auth, provider } from "../../utils/farebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { PiUserCircleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/reduxStore/userSlice";

const GoogleAuth = () => {
  const dispath = useDispatch();
  const userDetails = useSelector((store) => store.user.userDetails);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;
        const name = result.user.displayName;
        const photoURL = result.user.photoURL;
        dispath(addUser(email));
        dispath(addUser(name));
        dispath(addUser(photoURL));
      })
      .catch((err) => {});
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispath(removeUser());
      })
      .catch((err) => {});
  };

  return (
    <div className="flex mt-2">
      {userDetails[1] ? (
        <button
          onClick={handleLogout}
          className="px-7 py-3 bg-gray-300 hover:bg-gray-400 rounded-[7px] duration-200  border border-red-600 flex"
        >
          <GoSignOut className="mt-[5px] mr-2 text-xl" />
          <p className="mt-[1px] text-xl">Sign Out</p>
        </button>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="px-7 py-3 bg-gray-300 hover:bg-gray-400 duration-200 rounded-[7px] flex  border border-red-600"
          >
            <GoSignIn className="mt-[5px] mr-2 text-xl" />
            <p className="mt-[1px] text-xl">Sign In </p>
            <FcGoogle className=" mt-[3px] ml-2 text-2xl" />
          </button>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;
