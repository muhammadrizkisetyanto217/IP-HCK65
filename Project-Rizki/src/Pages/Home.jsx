import { NavbarHome } from "../components/NavbarHome";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export function Home() {
  return (
    <>
      <NavbarHome />
    </>
  );
}
