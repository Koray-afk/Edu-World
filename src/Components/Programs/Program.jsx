import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-1.png'
import program_icon_3 from '../../assets/program-icon-1.png'

function Program() {
  return (
    <div>
      <div className="Programs container">
        <div className="Program">
            <img src={program_1} alt="" />
            <div className="content">
              <img src={program_icon_1} alt="" />
              <p>Graduation Degree</p>
            </div>
        </div>

        <div className="Program">
            <img src={program_2} alt="" />
            <div className="content">
              <img src={program_icon_2} alt="" />
              <p>Graduation Degree</p>
            </div>
        </div>

        <div className="Program">
            <img src={program_3} alt="" />
            <div className="content">
              <img src={program_icon_3} alt="" />
              <p>Graduation Degree</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Program
