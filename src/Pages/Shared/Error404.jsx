import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Error404 = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="text-9xl font-extrabold text-gray-900 mb-6 select-none">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">
        Oops! Page not found
      </h2>
      <p className="max-w-md text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium shadow-md hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </motion.div>
  );
};

export default Error404;
