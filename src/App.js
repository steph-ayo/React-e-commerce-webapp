/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";

export default function App() {
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
}
