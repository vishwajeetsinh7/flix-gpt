import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../components/MovieList'

const GptMovieSuggestion = () => {
  const {movieResults, movieNames}= useSelector(store => store.gpt)
  if(!movieNames) return null
  return (
    <main className='p-4 m-4 text-white bg-black'>
      <div> 
        {movieNames.map((movieName, index) => ( 
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
        
      </div>
    </main>
  )
}

export default GptMovieSuggestion