import React, { Component } from "react";
import logo from "../../utils/img/blocks-icon.png";
import img from "../../utils/img/menu.png";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="icons">
          <img src={logo} alt="logo" className="icon" />
          <img src={img} alt="img" className="icon" />
        </div>
        <p>22 Products Found</p>
        <hr className="hr" />
        <p>Sort by</p>
        <div id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
