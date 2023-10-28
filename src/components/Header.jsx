import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'

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
    onAuthStateChanged(auth, (user) => {
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
}, [ ])


  return (
        <header className=' absolute z-20 w-screen px-8 py-5 bg-gradient-to-b from-black flex justify-between'>
            <img className='w-60' src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg" alt="logo" />
            {user && 
            <div className='flex'>
              <img className='w-8 aspect-square' src={user?.photoURL} alt='user imag'/>
              <button onClick={handleSignOut} className='font-bold text-white'>Sign out</button>
            </div>
            }
        </header>
  )
}

export default Header