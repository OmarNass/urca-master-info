import React from 'react'

const Footer = () => {
    return ( 
        <footer className="container-fluid">
            <div className="row mb-3">
                <div className="col-5">
                    <ul className="social">
                        <li><a href="#"><img src={require("../../img/rs_f.png")} alt="" /></a></li>
                        <li><a href="#"><img src={require("../../img/rs_t.png")} alt="" /></a></li>
                        <li><a href="#"><img src={require("../../img/rs_s.png")} alt="" /></a></li>
                        <li><a href="#"><img src={require("../../img/rs_y.png")} alt="" /></a></li>
                        <li><a href="#"><img src={require("../../img/rs_l.png")} alt="" /></a></li>
                        <li><a href="#"><img src={require("../../img/rs_v.png")} alt="" /></a></li>
                    </ul>
                </div>
                <div className="col-7 text-right">
                    <ul className="navigation">
                        <li><a href="#">Verser la taxe d'apprentissage</a></li>
                        <li><a href="#">Annuaire</a></li>
                        <li><a href="#">Plan du site</a></li>
                        <li><a href="#">Les marchés publics</a></li>
                        <li><a href="#">Accès aux campus</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Mentions Légales</a></li>
                        <li><a href="#">Données personnelles</a></li>
                        <li><a href="#">Accessibilité </a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    <p>© Université de Reims Champagne Ardenne - 2020</p>
                </div>
            </div>
        </footer>
    )
}
 
export default Footer;