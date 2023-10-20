import React from "react";
import { Link, NavLink } from "react-router-dom";
import User from "./User";

const Nav = () => {
  return (
    <header>
      <nav
        id="sidebar"
        className="navbar navbar-dark bg-dark navbar-expand-lg px-md-5 px-2"
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-light text-uppercase" to="/">
            {User.firstName} {User.lastName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-uppercase text-start m-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Me contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
