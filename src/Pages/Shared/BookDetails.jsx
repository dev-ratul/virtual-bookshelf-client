import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext);
  const [upvotes, setUpvotes] = useState(book.upvote);

  const {
    _id,
    book_title,
    cover_photo,
    book_author,
    total_page,
    book_category,
    reading_status,
    book_overview,
    user_email,
    user_name,
  } = book;

  const handleUpvote = async () => {
    if (!user) {
      Swal.fire("Login Required", "Please login first to upvote!", "warning");
      return;
    }

    if (user.email === user_email) {
      Swal.fire("Oops!", "You can't upvote your own book!", "error");
      return;
    }

    try {
      const res = await axios.patch(`http://localhost:3000/addBook/${_id}`);
      if (res.data.modifiedCount > 0) {
        setUpvotes(upvotes + 1);
        Swal.fire("Thanks!", "Your vote has been added!", "success");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to upvote. Try again!", "error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <img
          src={cover_photo}
          alt={book_title}
          className="w-full h-[400px] object-cover rounded-lg shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2 text-indigo-700">{book_title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            ✍️ Author: {book_author}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            📄 Total Pages: {total_page}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            📚 Category: {book_category}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            📖 Status: {reading_status}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mt-4">
            {book_overview}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleUpvote}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              🔼 Upvote
            </button>
            <span className="text-lg font-semibold text-orange-600">
              {upvotes} votes
            </span>
          </div>

          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>🧑‍💻 Added By: {user_name}</p>
            <p>📧 Email: {user_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
