import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c"];

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/getuserbook?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => {
          console.error("Failed to fetch books:", err);
          setBooks([]);
        });
    }
  }, [user]);

  const categorySummary = books.reduce((acc, book) => {
    acc[book.book_category] = (acc[book.book_category] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(categorySummary).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white  rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        
        <div className="bg-gradient-to-tr from-purple-0 to-indigo-100 text-white p-8 flex flex-col items-center justify-center space-y-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
          />
          <div className="text-center">
            <h2 className="text-2xl text-black font-bold">{user?.displayName || "No Name"}</h2>
            <p className="text-sm text-black">{user?.email}</p>
          </div>
          <div className="mt-6">
            <span className="bg-white text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full shadow">
              Member since 2025
            </span>
          </div>
        </div>

       
        <div className="col-span-2 p-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">📚 Bookshelf Summary</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="font-medium">Total Books: <span className="text-indigo-600">{books.length}</span></li>
              {Object.entries(categorySummary).map(([cat, count]) => (
                <li key={cat}>
                  <span className="capitalize">{cat}</span>: {count} book{count > 1 ? "s" : ""}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-inner p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">📊 Books by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                    dataKey="value"
                  >
                    {pieChartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
