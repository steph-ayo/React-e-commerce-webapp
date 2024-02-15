import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavItems() {
  // const [menuToggle, setMenuToggle] = useState(false);
  // const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // addEvent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* --------------HEADER TOP (START)-------------- */}
      <div className={'header-top-md-none ${socialToggle ? "open" : ""}'}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>

      {/* --------------HEADER BUTTOM (START)-------------- */}
    </header>
  );
}
