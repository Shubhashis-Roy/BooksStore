import React, { useState, useEffect } from "react";
import BooksList from "./BooksList";
import AuthorsCard from "./AuthorsCard";
import HomeShimmerUI from "./ShimmerUI";
import {
  Authors_API,
  NewArrivalbooks_API,
  NewBooks_API,
  TrandingBooks_API,
} from "../../utils/constant";

const Maincontainer = () => {
  const [trandingBooks, settrandingBooks] = useState();
  const [newBooks, setNewBooks] = useState();
  const [newArrivalbooks, setNewArrivalbooks] = useState();
  const [authors, setAuthors] = useState();

  const getTrandingBooks = async () => {
    const data = await fetch(TrandingBooks_API);
    const json = await data.json();
    settrandingBooks(json);
  };

  const getNewBooks = async () => {
    const data = await fetch(NewBooks_API);
    const json = await data.json();
    setNewBooks(json.books);
  };

  const getNewArrivalBooks = async () => {
    const data = await fetch(NewArrivalbooks_API);
    const json = await data.json();
    setNewArrivalbooks(json.books);
  };

  const getAuthors = async () => {
    const data = await fetch(Authors_API);
    const json = await data.json();
    setAuthors(json.authors);
  };

  useEffect(() => {
    getTrandingBooks();
    getNewBooks();
    getNewArrivalBooks();
    getAuthors();
  }, []);

  if (newBooks === undefined) {
    return <HomeShimmerUI />;
  }
  return (
    <div className="mx-14 mt-5">
      <BooksList title={"Now Trending"} info={newBooks} />
      <BooksList title={"New Arrivals"} info={newArrivalbooks} />
      <BooksList title={"Best Sellers"} info={trandingBooks} />
      <div className="my-10 pt-6 bg-gray-300 ">
        <h1 className=" text-center text-4xl text-red-600">Featured Author</h1>
        <div className="flex mx-10 my-5 overflow-x-scroll scroll">
          {authors?.map((book) => (
            <AuthorsCard key={book.id} info={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maincontainer;
