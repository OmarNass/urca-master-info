import React from 'react'
import { useLocation } from 'react-router-dom'

const Page = () => {

    let location = useLocation();
    
    return ( 
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 px-0">
                        <div className="sidebar">
                            <ul className="side-nav">
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                            </ul>
                            <ul className="espace">
                                <li><a href="#"><img src={require("../../img/bureau-virtuel.png")} alt="" /> Bureau virtuel</a></li>
                                <li><a href="#"><img src={require("../../img/bureau-virtuel.png")} alt="" /> Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 px-0">
                        {/* <!-- BREADCRUMBS NAVIGATION --> */}
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <div className="page-content">
                            <h1>{location.pathname}</h1>
                            <p>
                                Après une demande d'admission, une demande de transfert de dossier, une demande de réorientation ou tout simplement pour poursuivre votre cursus, il est nécessaire de procéder à votre inscription administrative à l’Université de Reims Champagne-Ardenne.
                            </p>
                            <p>
                                L'inscription à l'université est obligatoire pour y étudier. Elle permet de délivrer la carte d'étudiant, d'assister aux enseignements, de participer aux examens, de s'affilier à la sécurité sociale étudiante et de bénéficier de tous les services que l'université met à disposition de ses étudiants.
                            </p>
                            <h2>Comment ?</h2>
                            <p>En fonction de votre profil, les modalités d'inscription diffèrent :</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
 
export default Page;