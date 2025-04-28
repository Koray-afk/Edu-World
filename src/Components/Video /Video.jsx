import React from 'react'
import './Video.css'
import video from "../../assets/College-video.mp4"

function Video({playvideo,setPlayvideo}) {
  return (
    <div className='Video-media hide'>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
