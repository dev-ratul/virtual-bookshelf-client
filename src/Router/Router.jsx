import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Layout/Root";
import Home from "../Pages/Shared/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddBook from "../Pages/Shared/AddBook";
import BookShelf from "../Pages/Shared/BookShelf";
import BookDetails from "../Pages/Shared/BookDetails";
import MyBook from "../Pages/Shared/MyBook";
import EditBook from "../Pages/Shared/EditBook";
import Profile from "../Pages/Shared/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch(`http://localhost:3000/popularBook`)
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
      {
        path: "/book-shelf/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/addBook/${params.id}`)

      },
      {
        path: '/my-book',
        Component: MyBook
      },
      {
        path: '/my-book/:id',
        element: <EditBook></EditBook>,
        loader: ({params})=> fetch(`http://localhost:3000/editBook/${params.id}`)
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      }
    ],
  },
]);
