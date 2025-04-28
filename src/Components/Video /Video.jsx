import React from 'react'
import './Video.css'


function Video({playvideo,setPlayvideo}) {
  return (
    <div className='Video-media hide'>
        <video src='/College-video.mp4' autoPlay muted controls></video>
    </div>
  )
}

export default Video
