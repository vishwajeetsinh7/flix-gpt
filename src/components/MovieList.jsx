import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log({movies})
  return (
    <div className=''>
        <div>
            <h1 className='text-3xl font-bold my-5'>{title}</h1>
        </div>
        <main className='flex  flex-wrap gap-3 justify-between'>
            {movies && movies.map((movie) => ( 
                <MovieCard posterPath={movie.poster_path}/>
            ))}
        </main>
    </div>
  )
}

export default MovieList