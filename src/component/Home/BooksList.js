import React from "react";
import BooksCard from "./BooksCard";

const BooksList = ({ title, info }) => {
  if (!info) return;
  return (
    <div className="">
      <h1 className="text-center text-3xl my-7">{title}</h1>
      <div className="mt-9 flex overflow-x-scroll scroll ">
        {info?.map((book) => (
          <BooksCard key={book.ISBN} info={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
