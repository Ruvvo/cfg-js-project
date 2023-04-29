import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
