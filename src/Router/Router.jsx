import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Layout/Root";
import Home from "../Pages/Shared/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBook from "../Pages/Shared/AddBook";
import BookShelf from "../Pages/Shared/BookShelf";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/signIn",
        Component: Login,
      },
      {
        path: "/add-book",
        Component: AddBook,
      },
      {
        path: "book-shelf",
        Component: BookShelf,
        loader: () => {
          return fetch("http://localhost:3000/addBook");
        },
      },
      // {
      //   path: "/book-shelf/:id",

      // }
    ],
  },
]);
