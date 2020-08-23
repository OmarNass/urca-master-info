import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import Project from '../Project'
import Testimonial from '../Testimonial'

import feather from 'feather-icons/dist/feather'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import axios from 'axios'

const Landing = () => {
    const [projects, setProjects] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [partners, setPartners] = useState([])

    useEffect(() => {
        feather.replace()
        getPosts('project') 
        getPosts('testimonial') 
        getPosts('partner') 
    }, [])

    async function getPosts(type) {
        try {
            const res = await axios.get('/api/v3/content/posts/?key=cac15f28976f6e0ff9542ef6a6&filter=tag:' + type)
            if (type == 'project')
                setProjects(res.data.posts)
            else if (type == 'testimonial')
                setTestimonials(res.data.posts)
            else
                setPartners(res.data.posts)

        } catch (err) {
            console.log(err.message)
        }
    }

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
                        <Link className="box" to="/contenu-de-la-formation">
                            <p>Contenu de la formation</p>
                            <span className="box-icon"><i data-feather="file-text"></i></span>
                        </Link>
                    </div>
                    <div className="col">
                        <Link className="box" to="/emploi-du-temps">
                            <p>Emploi du temps</p>
                            <span className="box-icon"><i data-feather="calendar"></i></span>
                        </Link>
                    </div>
                    <div className="col">
                        <Link className="box" to="/international">
                            <p>International</p>
                            <span className="box-icon"><i data-feather="globe"></i></span>
                        </Link>
                    </div>
                    <div className="col">
                        <Link className="box" to="/debouches">
                            <p>Débouchés</p>
                            <span className="box-icon"><i data-feather="briefcase"></i></span>
                        </Link>
                    </div>
                </div>
                {/* row end */}
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Projets réalisés</h1>
                    </div>
                    {/* 3 Latest projects (ie. Posts tagged Project) */}
                    {
                        projects.slice(0, 3).map(project => (
                            <div key={project.id} className="col">
                                <Project 
                                    thumbnail={project.feature_image}
                                    projectData={project}
                                />
                            </div>
                        ))
                    }
                   
                </div>
                {/* <!-- row end--> */}
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Paroles d'Anciens</h1>
                    </div>
                    <div className="col-12">
                        <Slider className="testimonials" {...settings}>
                            {
                                testimonials.map(testimonial => (
                                    <div key={testimonial.id} className="col">
                                        <Testimonial 
                                            picture={testimonial.feature_image}
                                            testimonialData={testimonial}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 mb-3">
                        <h1>Nos Partenaires</h1>
                    </div>
                    <div className="col-12">
                        <ul className="partenaires">
                            {
                                partners.map(partner => (
                                    <li key={partner.id}>
                                        <img src={partner.feature_image} alt={partner.slug} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- container end --> */}
        </main>
    )
}
 
export default Landing;