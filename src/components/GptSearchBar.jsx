import React, { useRef } from 'react'
import lang from '../utils/laungageConstant'
import {useDispatch, useSelector} from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import {addGptMovieResult} from '../utils/gptSlice'

const GptSearchBar = () => {

  const searchText = useRef(null)
  const langKey = useSelector(store => store.config.lang)
  const dispatch = useDispatch()

  // search movie in TMDB 
  const searchMovieTMDB  = async(movie) => { 
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=trueP&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json()
    return json.results
  } 

  const handleGptSearchClick = async () => { 
    console.log(searchText.current.value)
    // make and api call to gpt api and get movei result  

    const gptQuery  = 'Act as a Movie Recommandation system and suggest some movie for the query: ' + searchText.current.value + '. Only give me names of 5 movies, comma saperated like the example result given ahead. Example Rsult: Gadar, Sholay, Don, Golmal, Koi Mil Gaya'

    const gptResults = await openai.chat.completions.create({ 
      messages: [{role: 'user', content: gptQuery}], 
      model: 'gpt-3.5-turbo'
    })
    console.log(gptResults.choices?.[0]?.message.content.split(','))
    const gptMovies = gptResults.choices?.[0]?.message.content.split(',')

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie) )

    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)

    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults:  tmdbResults}))


  }

  return (
    <div className='pt-[20%] flex justify-center   '>
      <form className=' bg-black grid grid-cols-12'  onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className='py-2 px-3 m-4 col-span-10' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button onClick={handleGptSearchClick} className='col-span-2 m-3 py-2 px-4 bg-red-500 text-white rounded-md '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar