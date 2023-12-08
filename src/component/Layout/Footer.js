import React from "react";

const Footer = () => {
  return (
    <div className="mt-8">
      <div class="border-t border-gray-500 my-2"></div>
      <div className="flex mt-2 mx-40">
        <div className="my-7 font-bold text-gray-800 cursor-pointer">
          <p className="text-red-600">Company</p>
          <p>About Us</p>
          <p>Career</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div className="my-7 ml-[190px] font-bold text-gray-800 cursor-pointer">
          <p className="text-red-600"> Policies </p>
          <p> Privacy Policies </p>
          <p> Terms of Use</p>
          <p> Secure Shopping</p>
          <p>Copyright Policy</p>
        </div>
        <div className="my-7 ml-[190px] font-bold text-gray-800 cursor-pointer">
          <p className="text-red-600">Help</p>
          <p>Payment </p>
          <p>Shipping</p>
          <p>Return</p>
          <p>FAQ </p>
        </div>
        <div className="my-7 ml-[190px] font-bold text-gray-800 cursor-pointer">
          <p className="text-red-600">Misc</p>
          <p>Affiliate </p>
          <p>Sitemap</p>
        </div>
      </div>
      <h1 className="mb-5 ml-[30%] text-gray-700">
        Copyright © 2023 . Subhashis Roy @ All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
