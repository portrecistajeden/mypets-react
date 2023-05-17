import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn({data}) {

    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new data.firebase.auth.GoogleAuthProvider();
        data.auth.signInWithPopup(provider)
            .then(console.log(data.auth))
            .then(() => navigate('/user/pets'))
    }

   

    return (
        <button className={`hover:bg-emerald-500 px-3 py-2 text-xl outline outline-2 outline-gray-950 rounded-lg shadow-lg transition m-4`} onClick={signInWithGoogle}>Sign In with Google</button>
  )
}
