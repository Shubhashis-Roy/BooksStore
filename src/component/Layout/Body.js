import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FilterButton from "../FilterButton/FilterButton";
import Header from "./Header";

const Body = () => {
  return (
    <div className="">
      <Header />
      <FilterButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
