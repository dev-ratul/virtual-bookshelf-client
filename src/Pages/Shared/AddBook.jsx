import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
 import Swal from 'sweetalert2';


const AddBook = () => {
  const { user } = useContext(AuthContext);


const handleFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const book = {
    book_title: form.bookTitle.value,
    cover_photo: form.cover_photo.value,
    total_page: parseInt(form.total_page.value),
    book_author: form.book_author.value,
    user_email: form.user_email.value,
    user_name: form.user_name.value,
    book_category: form.book_category.value,
    reading_status: form.reading_status.value,
    book_overview: form.book_overview.value,
    upvote: 0,
  };

  fetch(`https://virtual-bookshelf-server-three.vercel.app/addBook`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId || data._id) {
        Swal.fire({
          title: '✅ Book Added!',
          text: 'Your book has been added successfully.',
          icon: 'success',
          confirmButtonColor: '#6366F1',
          confirmButtonText: 'Cool!',
        });
        form.reset();
      } else {
        Swal.fire({
          title: '❌ Failed!',
          text: 'Something went wrong while adding the book.',
          icon: 'error',
          confirmButtonColor: '#EF4444',
          confirmButtonText: 'Try Again',
        });
      }
    })
    .catch((error) => {
      console.error("Error adding book:", error);
      Swal.fire({
        title: '⚠️ Error!',
        text: 'There was a problem connecting to the server.',
        icon: 'error',
        confirmButtonColor: '#EF4444',
        confirmButtonText: 'Okay',
      });
    });
};

  

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 my-5 bg-gradient-to-b from-blue-50 to-purple-100 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        📚 Add a New Book
      </h2>

      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Book Title */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Book Title
          </label>
          <input
            type="text"
            name="bookTitle"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. The Alchemist"
            required
          />
        </div>

        {/* Cover Photo */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Cover Photo URL
          </label>
          <input
            type="text"
            name="cover_photo"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Image URL"
            required
          />
        </div>

        {/* Total Page */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Total Pages
          </label>
          <input
            type="number"
            name="total_page"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 250"
            required
          />
        </div>

        {/* Book Author */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Author
          </label>
          <input
            type="text"
            name="book_author"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. Paulo Coelho"
            required
          />
        </div>

        {/* User Email (Read Only) */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            value={user?.email || ""}
            readOnly
            className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-500"
          />
        </div>

        {/* User Name (Read Only) */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            value={user?.displayName || ""}
            readOnly
            className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-500"
          />
        </div>

        {/* Book Category */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Book Category
          </label>
          <select
            name="book_category"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>

        {/* Reading Status */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">
            Reading Status
          </label>
          <select
            name="reading_status"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Status</option>
            <option value="Read">Read</option>
            <option value="Reading">Reading</option>
            <option value="Want-to-Read">Want-to-Read</option>
          </select>
        </div>

        {/* Book Overview */}
        <div className="md:col-span-2">
          <label className="block font-semibold text-gray-700 mb-2">
            Book Overview
          </label>
          <textarea
            name="book_overview"
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Write a short summary about the book..."
            required
          ></textarea>
        </div>

        {/* Upvote  */}
        <div className="md:col-span-2">
          <label className="block font-semibold text-gray-700 mb-2">
            Upvotes
          </label>
          <input
            type="number"
            name="upvote"
            value={0}
            readOnly
            className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 text-gray-500"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition"
          >
            ➕ Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
