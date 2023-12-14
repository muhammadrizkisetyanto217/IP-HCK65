import React, { useState } from "react";
import "./index.css";
import router from "./router.jsx";

// import * as React from "react";
import { RouterProvider } from "react-router-dom";

// //! Sebagai penghubung antara react dan redux
import { Provider } from "react-redux";
import store from "./store/";
import CartModal from "./features/cart/CardModal.jsx";
import { Header } from "./components/Header.jsx";
import { ProductList } from "./features/productList/ProductList.jsx";

function App() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };
  return (
    <>
      {/* Mengirimkan props ke store */}
      <Provider store={store}>
        {/* Jika true maka tampilkan cartModal  */}
        {isOpenModalCart ? 
          <CartModal handleHideModalCart={handleHideModalCart} />
         : null}
        <Header handleOpenModalCart={handleOpenModalCart} />
        <main>
          <ProductList />
        </main>
        {/* <RouterProvider router={router} /> */}
      </Provider>
    </>
  );
}

export default App;
