import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navabar__content">
        <Link to={"/"} className="navbar__title">
          React Redux Contact Book
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
