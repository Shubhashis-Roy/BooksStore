import React from "react";
import { useSelector } from "react-redux";
import SearchResultCart from "../Search/SearchResultCart";

const FilterButtonList = () => {
  const filterResults = useSelector((store) => store.filter.results);
  const title = useSelector((store) => store.filter.title);

  return (
    <div>
      <h1 className="mt-5 ml-16 text-[19px] flex">
        Showing results for <p className="text-red-600"> "{title}"</p>
      </h1>
      <div className="my-5 mx-12 flex flex-wrap">
        {filterResults?.map((result) => (
          <SearchResultCart key={result.isbn13} info={result} />
        ))}
      </div>
    </div>
  );
};

export default FilterButtonList;
