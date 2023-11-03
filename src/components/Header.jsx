import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'
import { logo } from '../utils/constant';

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(store => store.user) || null

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


  return (
        <header className=' absolute z-20 w-screen px-8 py-5 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-40' src={logo} alt="logo" />
            {user && 
            <div className='flex items-center gap-1'>
              <img className='w-8 h-8 aspect-square' src={user?.photoURL} alt='user imag'/>
              <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
            </div>
            }
        </header>
  )
}

export default Header