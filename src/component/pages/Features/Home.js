import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <ul className="list-group mt-5 p-4 shadow">
        <h1>Add Random User | Add Random Quote</h1>
        <p>
          This Website contain add random user feature functionality and add
          random quote functionality. Data fetched through API's which are
          opensource and free to use.
        </p>

        <Link className="nav-link" to="/AddUser">
          <button
            type="button"
            class="btn btn-primary mt-3 pagination-centered"
          >
            Add Random User
          </button>
        </Link>
        <Link className="nav-link align-middle" to="/AddQuote">
          <button type="button" class="btn btn-danger mt-3 pagination-centered">
            Add Random Quote
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
