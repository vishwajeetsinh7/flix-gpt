import React from 'react'
import lang from '../utils/laungageConstant'
import {useSelector} from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className='pt-[20%] flex justify-center   '>
      <form className=' bg-black grid grid-cols-12' >
        <input type="text" className='py-2 px-3 m-4 col-span-10' placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className='col-span-2 m-3 py-2 px-4 bg-red-500 text-white rounded-md '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar