import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../../utils/reduxStore/searchResultsSlice";
import { AiOutlineClose } from "react-icons/ai";
import { Search_API } from "../../utils/constant";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const searchData = await fetch(Search_API + searchText);
    const json = await searchData.json();
    dispatch(addSearchResults(json.books));
    navigate("/search-results");
  };

  return (
    <div className="">
      <form onSubmit={(e) => e.preventDefault()} className=" flex">
        <input
          className="w-[460px] ml-12 border border-red-600 p-[4px] pl-4 mt-1 focus:border-red-600 outline-none"
          placeholder="Title or ISBN"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div
          className="mt-1 bg-red-600  hover:bg-red-400 duration-200 px-3 cursor-pointer"
          onClick={handleSearch}
        >
          <button>
            <FaSearch className="mt-2 text-white" />
          </button>
        </div>
      </form>
      {searchText && (
        <button
          onClick={() => setSearchText("")}
          className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[46.2%] top-[30px]"
        >
          <AiOutlineClose className="text-2xl ml-[6px] text-red-600" />
        </button>
      )}
    </div>
  );
};

export default Search;
