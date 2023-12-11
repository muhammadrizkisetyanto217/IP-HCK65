import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { NavbarRegister } from "../components/NavbarRegister.jsx";
import { Register } from "../Pages/Register.jsx";
import { NavbarLogin } from "../components/NacbarLogin.jsx";
import { Login } from "../Pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <>
        {/* <NavbarRegister />
        <Register />, */}
        <NavbarRegister />
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavbarLogin />
        <Login />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
