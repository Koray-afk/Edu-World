import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'


function Campus() {
  return (
    <div>
      <div className="campusphoto">
        <div className="gallery">
            <img src={gallery_1} alt="gallery1" />
            <img src={gallery_2} alt="gallery2" />
            <img src={gallery_3} alt="gallery3" />
            <img src={gallery_4} alt="gallery4" />
        </div>
        <button className='buttun '>See more</button>
      </div>
    </div>
  )
}

export default Campus
