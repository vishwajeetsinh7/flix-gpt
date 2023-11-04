import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies  = useSelector(store => store.movies)
  return (
    <section className='bg-black text-white'>
    <div className='max-w-7xl m-auto -mt-7 '>

      <MovieList key={1} title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList key={2} title={"Popular"} movies={movies.popularMovies}/>
      {/* <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/> */}
      {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/> */}
    </div>
    </section>
  )
}

export default SecondaryContainer