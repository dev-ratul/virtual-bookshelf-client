import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from "sweetalert2";

const EditBook = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    book_title: data.book_title,
    book_author: data.book_author,
    cover_photo: data.cover_photo,
    total_page: data.total_page,
    book_category: data.book_category,
    reading_status: data.reading_status,
    book_overview: data.book_overview,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch(`https://virtual-bookshelf-server-three.vercel.app/updateBook/${data._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (res.ok) {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "✅ Book updated successfully!",
      confirmButtonColor: "#3085d6"
    }).then(() => {
      navigate('/my-book');
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "❌ Failed to update the book.",
      confirmButtonColor: "#d33"
    });
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#fefce8] via-[#f0fdf4] to-[#e0f2fe] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-14 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-2xl rounded-3xl px-10 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-green-700 dark:text-yellow-300">
          📖 Update Your Book Info
        </h2>

        <form onSubmit={handleSubmit} className="space-y-7">
 
  {[
    { label: "Book Title", name: "book_title" },
    { label: "Author", name: "book_author" },
    { label: "Cover Photo URL", name: "cover_photo" },
    { label: "Total Pages", name: "total_page", type: "number" },
    { label: "Category", name: "book_category" },
  ].map((field, i) => (
    <div key={i}>
      <label htmlFor={field.name} className="block mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">
        {field.label}
      </label>
      <input
        type={field.type || "text"}
        name={field.name}
        id={field.name}
        value={formData[field.name]}
        onChange={handleChange}
        className="w-full px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-500 transition duration-200"
        required
      />
    </div>
  ))}

  {/* Reading  */}
  <div>
    <label htmlFor="reading_status" className="block mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">
      Reading Status
    </label>
    <select
      name="reading_status"
      id="reading_status"
      value={formData.reading_status}
      onChange={handleChange}
      className="w-full px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
      required
    >
      <option value="">Select Reading Status</option>
      <option value="Read">Read</option>
      <option value="Currently Reading">Currently Reading</option>
      <option value="Want to Read">Want to Read</option>
    </select>
  </div>

  {/* Book Overview */}
  <div>
    <label htmlFor="book_overview" className="block mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">
      Book Overview
    </label>
    <textarea
      name="book_overview"
      id="book_overview"
      value={formData.book_overview}
      onChange={handleChange}
      rows={4}
      className="w-full px-4 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
      required
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
  >
    ✅ Update Book
  </button>
</form>

      </div>
    </div>
  );
};

export default EditBook;
