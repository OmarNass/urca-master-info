import React from 'react'

const Testimonial = ({picture,  testimonialData: {html}}) => {
    return (  
        <div className="testimonial text-center">
            <img src={picture} alt="personA" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
 
export default Testimonial;