import React from "react";
import SearchResultCart from "./SearchResultCart";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const searchResults = useSelector((store) => store.search.searchResults);
  if (searchResults.length === 0) {
    return (
      <div className="h-[300px] mt-5 ml-16 text-xl text-red-500">
        <h1>Your search did not match any books.</h1>
        <h1>Search Results: 0</h1>
      </div>
    );
  }
  const searchData = searchResults[0];

  return (
    <div>
      <h1 className="mt-5 ml-16 text-xl text-red-500">
        Search Results: {searchData.length} results found
      </h1>
      <div className="my-5 mx-12 flex flex-wrap">
        {searchData?.map((book) => (
          <SearchResultCart key={book.isbn13} info={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
