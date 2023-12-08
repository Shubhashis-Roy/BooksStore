import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Search_API } from "../../utils/constant";
import { useDispatch } from "react-redux";
import {
  addFilterResults,
  addTitle,
} from "../../utils/reduxStore/filterButtonResultsSlice";

const FilterButton = () => {
  const dispatch = useDispatch();

  const handleGetResults = async (param) => {
    const data = await fetch(Search_API + param);
    const json = await data.json();
    dispatch(addFilterResults(json.books));
    dispatch(addTitle(param));
  };

  return (
    <div className="">
      <div className="flex ml-5">
        <Link to="/filter-results">
          <h1
            className="my-3 mx-2 "
            onClick={() => handleGetResults("Algorithm")}
          >
            Algorithm
          </h1>
        </Link>
        <RxDividerVertical className="mt-2 text-3xl text-red-600" />
        <Link to="/filter-results">
          <h1
            className="my-3 mx-2"
            onClick={() => handleGetResults("Web Technology")}
          >
            Web Technology
          </h1>
        </Link>
        <RxDividerVertical className="mt-2 text-3xl text-red-600" />
        <Link to="/filter-results">
          <h1
            className="my-3 mx-2"
            onClick={() => handleGetResults("System Design")}
          >
            System Design
          </h1>
        </Link>
        <RxDividerVertical className="mt-2 text-3xl text-red-600" />
        <Link to="/filter-results">
          <h1
            className="my-3 mx-2"
            onClick={() => handleGetResults("Database System")}
          >
            {" "}
            Database System
          </h1>
        </Link>
        <RxDividerVertical className="mt-2 text-3xl text-red-600" />
        <Link to="/filter-results">
          <h1
            className="my-3 mx-2"
            onClick={() => handleGetResults("Machine Learning")}
          >
            {" "}
            Machine Learning
          </h1>
        </Link>
      </div>
      <div class="border-t border-red-600 my-2"></div>
    </div>
  );
};

export default FilterButton;
