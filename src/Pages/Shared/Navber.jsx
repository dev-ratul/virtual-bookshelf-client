import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/signIn");
      })
      .catch((error) => console.log("error", error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `book-link ${isActive ? "active-link" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/book-shelf"
          className={({ isActive }) =>
            `book-link ${isActive ? "active-link" : ""}`
          }
        >
          Bookshelf
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-book"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-book"
              className={({ isActive }) =>
                `book-link ${isActive ? "active-link" : ""}`
              }
            >
              My Books
            </NavLink>
          </li>
          <li>
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
    <Disclosure
      as="nav"
      className="bg-[#EAEFEF] shadow-md sticky top-0 z-50 border-b border-[#EAE4D5]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Logo */}
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
                  Virtual Bookshelf
                </NavLink>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-6">
                <ul className="menu menu-horizontal gap-4">{links}</ul>
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
                      to="/signIn"
                      className="bg-[#6f4e37] text-white px-4 py-2 rounded-full hover:bg-[#5a3d2d]"
                    >
                      Sign In
                    </NavLink>
                  </>
                )}
              </div>

              {/* Mobile Button */}
              <div className="lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-700 hover:text-black focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="lg:hidden px-4 pb-2">
            <ul className="flex flex-col gap-2 mb-3">{links}</ul>
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-[#b08968] text-white px-4 py-2 rounded-full hover:bg-[#9c765a] transition"
              >
                Sign Out
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/register"
                  className="w-full border border-[#b08968] px-4 py-2 rounded-full text-[#6f4e37] hover:bg-[#f1e4d1]"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/signIn"
                  className="w-full bg-[#6f4e37] text-white px-4 py-2 rounded-full hover:bg-[#5a3d2d]"
                >
                  Sign In
                </NavLink>
              </div>
            )}
          </Disclosure.Panel>

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

              .book-link:hover::after {
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
        </>
      )}
    </Disclosure>
  );
};

export default Navber;
