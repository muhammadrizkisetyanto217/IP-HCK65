import { createBrowserRouter } from 'react-router-dom';
import { Register } from "./Pages/Register.jsx";
import { Home } from "./Pages/Home.jsx";
import { Login } from "./Pages/Login.jsx";
import { Header } from "./components/Header.jsx";
import { ProductList } from "./features/productList/ProductList.jsx";


export default createBrowserRouter([
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
                <ProductList />

            </>
        ),
    },
    {
        path: "/login",
        element: (
            <Login />
        ),
    },
]);