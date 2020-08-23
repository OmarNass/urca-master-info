import React, { useEffect } from 'react'

import feather from 'feather-icons/dist/feather'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import axios from 'axios'

const Landing = () => {

    useEffect(() => {
        feather.replace()
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }   
        async function getPost(){
            try {
                const res = await axios.get('/api/v3/content/posts/?key=cac15f28976f6e0ff9542ef6a6')  
                console.log(res.data)        
            } catch (error) {  
                console.log(error.msg)   
            }
        }
        // getPost()
       
    })

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '60px',
        nextArrow: <button><i data-feather="arrow-right"></i></button>,
        prevArrow: <button><i data-feather="arrow-left"></i></button>,
    }
    return (  
        // M A I N
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="box" href="#">
                            <p>Contenu de la formation</p>
                            <span className="box-icon"><i data-feather="file-text"></i></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box" href="#">
                            <p>Emploi du temps</p>
                            <span className="box-icon"><i data-feather="calendar"></i></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box" href="#">
                            <p>International</p>
                            <span className="box-icon"><i data-feather="globe"></i></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box" href="#">
                            <p>Débouchés</p>
                            <span className="box-icon"><i data-feather="briefcase"></i></span>
                        </div>
                    </div>
                </div>
                {/* row end */}
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Projets réalisés</h1>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src={require("../../img/project1.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src={require("../../img/project2.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src={require("../../img/project3.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Project 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- row end--> */}
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Paroles d'Anciens</h1>
                    </div>
                    <div className="col-12">
                        <Slider className="testimonials" {...settings}>
                            <div className="testimonial text-center">
                                <img src={require("../../img/testimonial-guy-1.jpg")} alt="personA" />
                                <p>I really loved  the student life in URCA, and would definitely recommand it to friends and family!</p>
                                <span>&mdash; John Doe, Software Engineer</span>
                            </div>
                            <div className="testimonial text-center">
                                <img src={require("../../img/testimonial-guy-2.jpg")} alt="personA" />
                                <p>I really loved  the student life in URCA, and would definitely recommand it to friends and family!</p>
                                <span>&mdash; John Doe, Software Engineer</span>
                            </div>
                            <div className="testimonial text-center">
                                <img src={require("../../img/testimonial-guy-3.jpg")} alt="personA" />
                                <p>I really loved  the student life in URCA, and would definitely recommand it to friends and family!</p>
                                <span>&mdash; John Doe, Software Engineer</span>
                            </div>
                            <div className="testimonial text-center">
                                <img src={require("../../img/testimonial-guy-4.jpg")} alt="personA" />
                                <p>I really loved  the student life in URCA, and would definitely recommand it to friends and family!</p>
                                <span>&mdash; John Doe, Software Engineer</span>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Nos Partenaires</h1>
                    </div>
                    <div className="col-12">
                        <ul className="partenaires">
                            <li><img src={require("../../img/part1.png")} alt="partenaire1" /></li>
                            <li><img src={require("../../img/part2.png")} alt="partenaire2" /></li>
                            <li><img src={require("../../img/part3.png")} alt="partenaire3" /></li>
                            <li><img src={require("../../img/part4.png")} alt="partenaire4" /></li>
                            <li><img src={require("../../img/part5.png")} alt="partenaire5" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- container end --> */}
        </main>
    )
}
 
export default Landing;