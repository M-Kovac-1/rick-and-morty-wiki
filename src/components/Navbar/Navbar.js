import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .close {
                display: none;
              }

              button[aria-expanded="true"] > .open {
                display: none;
              }
            `}
          </style>

          <i class="fas fa-bars open text-dark"></i>
          <i class="fas fa-times close text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page" href="#">
              Characters
            </NavLink>
            <NavLink
              to="/Episodes"
              className="nav-link"
              aria-current="page"
              href="#"
            >
              Episodes
            </NavLink>
            <NavLink
              to="/Location"
              className="nav-link"
              aria-current="page"
              href="#"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
