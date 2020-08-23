import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {
    const [navigation, setNavigation] = useState([])

    useEffect(() => {
        getNavigation()
    }, [])

    async function getNavigation() {
        try {
            const res = await axios.get('/api/v3/content/settings/?key=cac15f28976f6e0ff9542ef6a6')
            setNavigation(...navigation, res.data.settings.navigation)
        } catch (err) {
            console.log(err.msg)
        }
    }

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
                            {navigation.map(link => (
                                <li key={link.label}>
                                    <NavLink exact activeClassName="current" to={link.url}>{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </header>
     );
}
 
export default Navbar;