import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ data }) {
	const { auth, firebase, user } = data;

	const navigate = useNavigate();

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth
			.signInWithPopup(provider)
			.then(localStorage.setItem('user', JSON.stringify(user)))
			.then(() => navigate('/user/pet'));
	};

	return (
		<button
			className={`hover:gradient-background px-3 py-2 text-xl outline outline-2 outline-secondary rounded-lg shadow-lg transition m-4`}
			onClick={signInWithGoogle}>
			Sign In with Google
		</button>
	);
}
