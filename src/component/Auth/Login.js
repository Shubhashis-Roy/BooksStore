import React from "react";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  return (
    <div className="ml-[35%] my-10 rounded-lg border border-red-500 p-4 w-[30%] h-[270px] ">
      <h1 className="ml-[26%] mt-[25%]">
        <GoogleAuth />
      </h1>
    </div>
  );
};

export default Login;
