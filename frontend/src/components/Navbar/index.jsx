/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-md">
    <Link to="/" className="navbar-brand">
      Better Future
    </Link>

    <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/dashPolitician" className="nav-link">
            Politician
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashPolicy" className="nav-link">
            Policy
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
