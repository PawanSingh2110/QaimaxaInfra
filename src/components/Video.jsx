import React from 'react'
import banner6 from "../assets/video1.mp4"

const Video = () => {
  return (
    <div className='h-[70vh] w-full bg-amber-100 mt-3'>
      <video 
        src={banner6} 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"
      ></video>
    </div>
  )
}

export default Video
