import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute z-10 text-white bg-gradient-to-t from-black aspect-video' >
        <h1 className='text-6xl font-bold text-slate-100'>{title}</h1>
        <p className='text-base text-gray-300 mt-5 w-4/12 mb-5'>{overview}</p>
        <div className='flex gap-3'>
            <button className='bg-white hover:bg-opacity-75 text-black  py-2 text-lg  px-10  rounded-md'>▶️ Play</button>
            <button className='bg-gray-600 bg-opacity-95 hover:bg-opacity-30 text-black  py-2 text-lg  px-10  rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle