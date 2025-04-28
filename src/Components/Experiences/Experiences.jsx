import React, { useRef } from 'react'
import './Experiences.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Experiences() {

    const slidee = useRef()
    let transX=0

    const shiftForward =()=>{
        if(transX>-50){
            transX-=25
        }
        slidee.current.style.transform = `translate(${transX}%)`
    }

    const shiftBackword = ()=>{
        if(transX<0){
            transX+=25
        }
        slidee.current.style.transform = `translate(${transX}%)`
    }

  return (
    <div>
        <div className="experience">
            <img src={next_icon} alt="" className='next-icon' onClick={shiftForward} />
            <img src={back_icon} alt="" className='back-icon' onClick={shiftBackword} />
            <div className="slider">
                <ul ref={slidee}>
                    <li>
                        <div className="slide">
                            <div className="user-data">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Naman jain</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity has been one of the most rewarding choices I have made.
                            The encouraging community, world-class facilities, and strong focus on academic excellence have genuinely surpassed my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-data">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Abhiman singh</h3>
                                    <span>California</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity has been one of the most rewarding choices I have made.
                            The encouraging community, world-class facilities, and strong focus on academic excellence have genuinely surpassed my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-data">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Piyush</h3>
                                    <span>Bihar</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity has been one of the most rewarding choices I have made.
                            The encouraging community, world-class facilities, and strong focus on academic excellence have genuinely surpassed my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-data">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Aviral Mishra</h3>
                                    <span>Sydney</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity has been one of the most rewarding choices I have made.
                            The encouraging community, world-class facilities, and strong focus on academic excellence have genuinely surpassed my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Experiences

// This contain functionality for back and next button 
