import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import { NavbarHome } from "../components/NavbarHome";

export function Login() {
  // let [userInput, setUserInput] = useState({
  //   email: "",
  //   password: "",
  // });

  // hendleInput = (event) => {
  //   let { dataInput, value } = event.target;
  //   console.log(dataInput, value);
  //   setUserInput({
  //     ...userInput,
  //     [dataInput]: value,
  //   });
  // };

  // const hendleLogin = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const data = await axios({
  //       method : "post",
  //       url:
  //     })
  //   } catch (error) {}
  // };
  return (
    <>
      <NavbarHome />
      <form className="max-w-sm mx-auto my-middle">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Button
        </button>
      </form>
    </>
  );
}
