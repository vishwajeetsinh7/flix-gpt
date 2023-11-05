import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'
import { SUPPORTED_LANGUAGES, logo } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import {changeLaungage} from '../utils/configSlice'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(store => store.user) || null

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => { 
    signOut(auth).then(() => {

      // navigate('/')
    }).catch((error) => {
      navigate('/error ')
    });
  }


  
  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate('/browse')

        } else {
          // User is signed out
          dispatch(removeUser())
          navigate('/')
         }
      });
      // unsubscribe when the componenet unmount.......
      return () => unsubscribe()
}, [])

const handleGptSearchClick = ()  => { 
  // tooggle gpt search 
  dispatch(toggleGptSearchView())
}

const handleLanguageChange = (e) => { 
  dispatch(changeLaungage(e.target.value))
}


  return (
        <header className=' absolute z-20 w-screen px-8 py-5 bg-gradient-to-b from-black flex justify-between bg-black sm:bg-blue-500 md:bg-green-500 flex-col md:flex-row md:justify-between justify-center'>
            <img className='w-40' src={logo} alt="logo" />
            {user && 
            <div className='flex items-center gap-1'>
              {
                showGptSearch && 
                <select name="" id="" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>
              }
          
              <button className='px-2 py-3 m-2 rounded-md bg-purple-800 text-white' onClick={handleGptSearchClick}>{showGptSearch ? 'Home': 'GPT Search'}</button>
              <img className='w-8 h-8 aspect-square' src={user?.photoURL} alt='user imag'/>
              <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
            </div>
            }
        </header>
  )
}

export default Header