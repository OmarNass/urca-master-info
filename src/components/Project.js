import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({thumbnail, projectData: {title, excerpt, slug}}) => {
    return ( 
        <div className="card" >
            <img src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{excerpt}</p>
            <Link to={slug} className="btn btn-primary">Voir plus</Link>
            </div>
        </div>
    )
}
 
export default Project;