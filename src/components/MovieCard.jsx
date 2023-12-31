import React from 'react'
import {  IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null
  return (
    <div className='w-52'>
        <img  src={IMG_CDN_URL + posterPath } alt="movie card" />
        
    </div>
  )
}

export default MovieCard