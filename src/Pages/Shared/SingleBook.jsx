import React, { use, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const SingleBook = ({ singleBook }) => {

  const { user } = use(AuthContext);
  const {
    book_title,
    cover_photo,
    book_author,
    total_page,
    book_category,
    reading_status,
    user_email,
    _id,
    book_overview,
    upvote,
  } = singleBook;

  //   handleUpvote
  const [localVote, setLocalVote] = useState(upvote);
  const handleUpvote = async () => {
    if (!user) {
      return console.log("Please login to upvote!");
    }

    if (user.email === user_email) {
      return console.log("You can't upvote your own book!");
    }

    try {
      const res = await axios.patch(`http://localhost:3000/addBook/${_id}`);

      if (res.data.modifiedCount > 0) {
        console.log("Thanks for upvoting!");
        setLocalVote((prev) => prev + 1);
      } else {
        console.log("Upvote failed");
      }
    } catch (err) {
      console.log("Error:", err);
      console.log("Upvote error");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      //   whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-300 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="h-60 w-full overflow-hidden relative">
        <img
          src={cover_photo}
          alt={book_title}
          className="w-full  transform transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {book_category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-5 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {book_title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            ✍️ {book_author} | 📄 {total_page} pages
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            {book_overview.slice(0, 90)}...
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-3 ">
          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-700 dark:text-white font-medium">
            {reading_status}
          </span>
          {/* <button
            onClick={handleUpvote}
            className="btn text-orange-500 font-bold text-sm "
          >
            ⬆ {upvote}
          </button> */}
          <button
            onClick={handleUpvote}
            className="btn h-5 text-orange-500 font-bold text-sm "
          >
            ⬆ {localVote}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBook;
