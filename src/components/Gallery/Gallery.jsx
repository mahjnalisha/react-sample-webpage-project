import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'

const Gallery = () => {
    return (
        <div className="campus">
            <div className="gallery">
                <img src="" alt="" srcSet={gallery1} />
                <img src="" alt="" srcSet={gallery2} />
                <img src="" alt="" srcSet={gallery3} />
                <img src="" alt="" srcSet={gallery4} />
            </div>
            <button className='btn darkbtn'>See More</button>
        </div>
    )
}

export default Gallery