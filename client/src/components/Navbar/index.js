import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Signup"
          className={window.location.pathname === "/Signup" ? "nav-link active" : "nav-link"}
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Recipes"
          className={window.location.pathname === "/Recipes" ? "nav-link active" : "nav-link"}
        >
          Recipes
        </Link>
      </li>
      
    </ul>
  );
}

export default NavTabs;
