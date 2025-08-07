
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturedBook = () => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("https://virtual-bookshelf-server-three.vercel.app/api/featured-book")
      .then((res) => res.json())
      .then((data) => {
        console.log("📘 Featured Book:", data);
        setBook(data);
      })
      .catch((error) => console.error("Error fetching featured book:", error));
  }, []);

  if (!book || !book.book_title) {
    return (
      <div className="py-16 text-center text-gray-400">
        No featured book available.
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <img
          src={book.cover_photo}
          alt={book.book_title}
          className="w-48 h-72 rounded-lg shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            📖 Book of the Month
          </h2>
          <h3 className="text-xl text-indigo-600 font-semibold">{book.book_title}</h3>
          <p className="text-gray-600 mb-4 italic">by {book.book_author}</p>
          <p className="text-gray-500 mb-4">
            {book.description?.slice(0, 150)}...
          </p>
          <button className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Read Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBook;
