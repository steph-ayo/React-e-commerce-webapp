/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    // <div className="App">
    //   <h1 style={{ color: "red" }}>Hello, Developer!</h1>
    // </div>
    <>
      <nav>Nav bar</nav>
      <Outlet />
    </>
  );
}
