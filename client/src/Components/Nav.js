import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="menu">
        <ul className="links">
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/"}>
              {" "}
              Home
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/news"}>
              {" "}
              News
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/results"}>
              {" "}
              Results
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/rankings"}>
              {" "}
              Rankings
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
