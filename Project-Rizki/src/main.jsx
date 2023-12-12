import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import "./index.css";

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { Register } from "./Pages/Register.jsx";
import { Home } from "./Pages/Home.jsx";
import { Login } from "./Pages/Login.jsx";
import { Header } from "./components/Header.jsx";
import { ProductList } from "./features/productList/ProductList.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        {/* <Home /> */}
        <ProductList />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
