import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-info shadow mb-3">
      <div className="container-fluid">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Features">
                <span>Features</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddUser">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddQuote">
                Add Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
