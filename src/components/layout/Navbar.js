import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ navigation }) => {
  return (
    <header className="fixed-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col pl-0">
            <Link className="logo" to="/">
              <img src={require("../../img/logo.png")} alt="logo URCA" />
            </Link>
          </div>
          <div className="col">
            <div className="master-info">
              <span>Master Informatique</span>
            </div>
          </div>
          <div className="col text-right">
            <div className="lang">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={require("../../img/flag_fr.png")} alt="" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    <img src={require("../../img/flag_en.png")} alt="" />{" "}
                    English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col px-0"
            style={{
              borderTop: "1px solid #e5e5e5",
            }}
          >
            <ul className="menu">
              {navigation.map((link) => {
                if (link.url.includes("http")) {
                  return (
                    <li key={link.label}>
                      <a href={link.url} target="_blank">
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <NavLink exact activeClassName="current" to={link.url}>
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
