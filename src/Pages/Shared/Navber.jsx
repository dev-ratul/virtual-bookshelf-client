import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("SignOut complete"))
      .catch((error) => console.log("error", error));
  };

  const links = (
    <>
      <li className="group relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `book-link ${isActive ? "active-link" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="group relative">
        <NavLink
          to="/book-shelf"
          className={({ isActive }) =>
            `book-link ${isActive ? "active-link" : ""}`
          }
        >
          Bookshelf
        </NavLink>
      </li>
      <li className="group relative">
        <NavLink
          to="/book-details"
          className={({ isActive }) =>
            `book-link ${isActive ? "active-link" : ""}`
          }
        >
          Book Details
        </NavLink>
      </li>
      {user && (
        <>
          <li className="group relative">
            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              Add Book
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to="/update-book"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              Update Book
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to="/my-books"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              My Books
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-[#EAEFEF] shadow-md sticky top-0 z-50 border-b border-[#EAE4D5] py-3 font-serif">
      <div className="navbar flex justify-around max-w-7xl mx-auto px-4 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            className="w-10 h-10"
            alt="book-logo"
          />
          <NavLink
            to="/"
            className="text-3xl font-bold text-[#4b3f2f] tracking-wide"
          >
            BookWorm
          </NavLink>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#b08968] text-white px-4 py-2 rounded-full hover:bg-[#9c765a] transition"
            >
              Sign Out
            </button>
          ) : (
            <>
              <NavLink
                to="/register"
                className="border border-[#b08968] px-4 py-2 rounded-full text-[#6f4e37] hover:bg-[#f1e4d1]"
              >
                Register
              </NavLink>
              <NavLink
                to="/SignIn"
                className="bg-[#6f4e37] text-white px-4 py-2 rounded-full hover:bg-[#5a3d2d]"
              >
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden px-4 pb-2">
        <ul className="flex flex-col gap-2">{links}</ul>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .book-link {
            position: relative;
            padding: 0.4rem 0.75rem;
            color: #4b3f2f;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .book-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: #6f4e37;
            transition: width 0.3s ease;
          }

          .group:hover .book-link::after {
            width: 100%;
          }

          .book-link:hover {
            color: #6f4e37;
          }

          .active-link {
            color: #6f4e37;
            font-weight: bold;
            border-bottom: 2px solid #6f4e37;
          }
        `}
      </style>
    </div>
  );
};

export default Navber;
