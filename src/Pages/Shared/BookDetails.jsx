import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext);
  const [upvotes, setUpvotes] = useState(book.upvote);
  const [reviews, setReviews] = useState([]);
  const [myReview, setMyReview] = useState(null);
  const [reviewText, setReviewText] = useState("");

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

  useEffect(() => {
    axios.get(`http://localhost:3000/reviews/${_id}`).then((res) => {
      setReviews(res.data || []);
      const mine = res.data?.find((rev) => rev?.userEmail === user?.email);
      setMyReview(mine || null);
      if (mine) setReviewText(mine.review);
    });
  }, [user, _id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire("Login Required", "Please login first to review!", "warning");
      return;
    }

    const payload = {
      bookId: _id,
      bookTitle: book_title,
      userName: user.displayName,
      userEmail: user.email,
      review: reviewText,
    };

    try {
      const url = myReview
        ? `http://localhost:3000/reviews/${myReview._id}`
        : "http://localhost:3000/reviews";
      const method = myReview ? "patch" : "post";

      const res = await axios[method](url, payload);
      if (res.data.modifiedCount > 0 || res.data.insertedId) {
        Swal.fire("Success", "Review saved!", "success");
        setReviewText("");
        setMyReview(null);
        const result = await axios.get(`http://localhost:3000/reviews/${_id}`);
        setReviews(result.data);
        const mine = result.data.find((rev) => rev.userEmail === user?.email);
        setMyReview(mine || null);
        if (mine) setReviewText(mine.review);
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to submit review!", "error");
    }
  };

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Your review will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:3000/reviews/${myReview._id}`
        );
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
          setReviewText("");
          setMyReview(null);
          const result = await axios.get(`http://localhost:3000/reviews/${_id}`);
          setReviews(result.data);
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to delete review!", "error");
      }
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
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">✍️ Author: {book_author}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">📄 Total Pages: {total_page}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">📚 Category: {book_category}</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">📖 Status: {reading_status}</p>
          <p className="text-gray-700 dark:text-gray-400 mt-4">{book_overview}</p>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={handleUpvote}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              🔼 Upvote
            </button>
            <span className="text-lg font-semibold text-orange-600">{upvotes} votes</span>
          </div>

          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p>🧑‍💻 Added By: {user_name}</p>
            <p>📧 Email: {user_email}</p>
          </div>
        </div>
      </div>

      {/* 💬 Review Section */}
      <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">💬 Reviews</h3>

        {user && (
          <form onSubmit={handleReviewSubmit} className="mb-6">
            <textarea
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
            <div className="flex justify-between items-center mt-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
              >
                {myReview ? "Update Review" : "Submit Review"}
              </button>
              {myReview && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="text-red-500 hover:underline"
                >
                  Delete Review
                </button>
              )}
            </div>
          </form>
        )}

        <div className="space-y-4">
          {reviews.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No reviews yet. Be the first!</p>
          )}
          {reviews.map((rev) => (
            <div key={rev._id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-gray-800 dark:text-gray-200 font-semibold">{rev.userName}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{rev.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;