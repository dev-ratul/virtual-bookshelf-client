import React, { useState } from "react";
import { Link } from "react-router"; // ✅ fix: correct import
import toast from "react-hot-toast";

const Books = ({ Book, handleEdit, onDelete }) => {
  const {
    _id,
    book_title,
    cover_photo,
    total_page,
    book_author,
    book_category,
    reading_status,
    book_overview,
    upvote,
  } = Book;

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (id) => {
    toast.custom((t) => (
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md border max-w-sm mx-auto">
        <p className="text-gray-800 dark:text-white mb-3 font-semibold">
          Are you sure you want to delete this book?
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400 text-black"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              setIsDeleting(true);
              fetch(`http://localhost:3000/delete/${id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    setTimeout(() => {
                      onDelete(id); // UI থেকে remove
                      toast.success("✅ Book deleted successfully!");
                    }, 400);
                  } else {
                    toast.error("❌ Book not found!");
                    setIsDeleting(false);
                  }
                })
                .catch((err) => {
                  console.error("Delete error:", err);
                  setIsDeleting(false);
                  toast.error("Something went wrong!");
                });
            }}
            className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        isDeleting ? "opacity-0 scale-95 -translate-y-2" : "opacity-100"
      } max-w-3xl mx-auto p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 my-4`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={cover_photo}
          alt={book_title}
          className="w-32 h-44 object-cover rounded-md shadow"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {book_title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Author: <span className="font-medium">{book_author}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Pages: {total_page}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Category: {book_category}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            Status: <span className="font-semibold">{reading_status}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-400 mt-2">
            {book_overview}
          </p>
          <p className="text-sm text-gray-500 mt-2">Upvotes: {upvote}</p>

          <div className="mt-4 flex gap-2">
            <Link
              to={`/my-book/${_id}`}
              onClick={() => handleEdit(Book)}
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
