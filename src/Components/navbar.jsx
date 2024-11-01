// components/navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}

export default Navbar;
