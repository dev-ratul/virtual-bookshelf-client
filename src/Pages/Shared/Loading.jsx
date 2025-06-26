import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-indigo-500 border-r-transparent border-b-indigo-500 border-l-transparent animate-spin" />
      </div>
      <p className="mt-6 text-gray-600 text-lg font-medium tracking-wide animate-pulse">
        Loading, please wait...
      </p>
    </motion.div>
  );
};

export default Loading;
