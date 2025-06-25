import React from "react";
import { Link, useLoaderData } from "react-router";
import SingleBook from "./SingleBook";

const BookShelf = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid lg:grid-cols-4 gap-10 py-10">
      {data.map((singleBook) => (
        <Link to={`/book-shelf/${singleBook._id}`}>
          <SingleBook singleBook={singleBook} key={singleBook._id}></SingleBook>
        </Link>
      ))}
    </div>
  );
};

export default BookShelf;
