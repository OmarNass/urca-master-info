import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return ( 
        // H E A D E R 
        <header className="fixed-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col pl-0">
                        <div className="logo">
                            <img src={require("../../img/logo.png")} alt="logo URCA" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="master-info" >
                            <span>Master Informatique</span>
                        </div>
                    </div>
                    <div className="col text-right">
                        <div className="lang">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={require("../../img/flag_fr.png")} alt="" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        <img src={require("../../img/flag_en.png")} alt="" /> English
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-0" style={{borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5"}}>
                        <ul className="menu">
                            <li>
                                <NavLink exact activeClassName="current" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="current" to="/page1">Page 1</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="current" to="/page2">Page 2</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="current" to="/page3">Page 3</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="current" to="/page4">Page 4</NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="current" to="/page5">Page 5</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </header>
     );
}
 
export default Navbar;