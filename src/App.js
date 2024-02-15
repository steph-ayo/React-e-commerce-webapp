/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/Navbar/NavItems";

export default function App() {
  return (
    // <div className="App">
    //   <h1 style={{ color: "red" }}>Hello, Developer!</h1>
    // </div>
    <>
      <NavItems />
      <Outlet />
    </>
  );
}
