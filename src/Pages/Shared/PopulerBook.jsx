import React, { useState } from "react";
import { motion } from "framer-motion";


const FeaturedCategories = ({ categories, onSelectCategory, selected }) => {
  return (
    <section className="max-w-5xl mx-auto mt-20 px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Featured Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => onSelectCategory(null)}
          className={`px-6 py-2 rounded-full text-white text-lg font-medium cursor-pointer transition ${
            selected === null
              ? "bg-indigo-800 shadow-md"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          All
        </motion.div>
        {categories.map((cat) => (
          <motion.div
            key={cat}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelectCategory(cat)}
            className={`px-6 py-2 rounded-full text-white text-lg font-medium cursor-pointer transition ${
              selected === cat
                ? "bg-indigo-800 shadow-md"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {cat}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const PopulerBook = ({ populerBook }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const categories = Array.from(
    new Set(populerBook.map((b) => b.book_category))
  );


  const filteredBooks = selectedCategory
    ? populerBook.filter((b) => b.book_category === selectedCategory)
    : populerBook;

  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">
        Popular Books
      </h1>

      
      <FeaturedCategories
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selected={selectedCategory}
      />

      {selectedCategory && (
        <h3 className="text-xl text-center font-medium text-indigo-600 mt-8 mb-10">
          Showing books in{" "}
          <span className="font-semibold">{selectedCategory}</span> category
        </h3>
      )}

      <div className="max-w-5xl mx-auto space-y-10 mt-8">
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No books found in this category.
          </p>
        ) : (
          filteredBooks.map((book) => (
            <motion.div
              key={book._id}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
              className="w-full flex flex-col md:flex-row items-center bg-[#111827] border border-[#1f2937] rounded-2xl shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="w-full md:w-56 h-72 md:h-80 flex-shrink-0">
                <img
                  src={book.cover_photo}
                  alt={book.book_title}
                  className="w-full h-full object-cover rounded-l-2xl"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1 px-8 py-8 md:py-10 text-white">
                <h2
                  className="text-2xl font-bold text-indigo-400 mb-3 truncate"
                  title={book.book_title}
                >
                  {book.book_title}
                </h2>

                <p className="text-gray-400 italic mb-3">
                  by{" "}
                  <span className="font-semibold text-white">
                    {book.book_author}
                  </span>
                </p>

                <p className="text-gray-300 mb-5 leading-relaxed max-w-xl">
                  {book.book_overview.length > 140
                    ? book.book_overview.slice(0, 140) + "..."
                    : book.book_overview}
                </p>

                <div className="flex flex-wrap gap-8 text-gray-400 font-medium mb-4">
                  <span>📄 {book.total_page} pages</span>
                  <span>📚 {book.book_category}</span>
                </div>

                <div
                  className="flex items-center space-x-2 text-yellow-400 font-semibold text-lg"
                  title={`${book.upvote} Upvotes`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span>{book.upvote}</span>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
};

export default PopulerBook;
