import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav-brand">
          ExerTracker
        </Link>
        <div className="navbar-div">
          <ul className="navbar">
            <li className="nav-item">
              <Link to="/" className="link">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="link">
                Create Exercise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
