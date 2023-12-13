
import React from "react";
import "./index.css";
import router from "./router.jsx";

// import * as React from "react";
import { RouterProvider } from "react-router-dom";

// //! Sebagai penghubung antara react dan redux
import { Provider } from "react-redux";
import store from './store/';

function App() {
  return (
    <>
    {/* Mengirimkan props ke store */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
