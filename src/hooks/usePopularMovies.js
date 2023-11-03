import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {  addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

  

  const usePopularMovies =  () => { 
  // fetch data from the api 
  const dispatch = useDispatch()

  const getPopularMovies = async () => { 
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
    // console.log(json)
  }
  useEffect(() => { 
    getPopularMovies()
  },[])

  }

  export default usePopularMovies