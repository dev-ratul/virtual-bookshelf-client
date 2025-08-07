
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

const TopReviewer = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    fetch("https://virtual-bookshelf-server-three.vercel.app/api/top-reviewers")
      .then((res) => res.json())
      .then((data) => setReviewers(data));
  }, []);

  if (reviewers.length === 0) return null;

  return (
    <motion.div
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-indigo-600 mb-2">
          🌟 Top Reviewers
        </h2>
        <p className="text-gray-600 mb-8">
          Meet our most active readers who constantly help others with their book reviews!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviewers.map((user, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <FaCrown className="text-yellow-500 text-3xl" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {user._id || "Unknown"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {user.totalReviews} Review{user.totalReviews > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TopReviewer;
