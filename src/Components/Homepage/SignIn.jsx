import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ data }) {
	const { auth, provider } = data;
	const navigate = useNavigate();

	function signInWithGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				localStorage.setItem('user', JSON.stringify(result.user));
			})
			.then(() => navigate('/user/pet'));
	}

	return (
		<button
			className={`hover:gradient-background px-3 py-2 text-xl outline outline-2 outline-secondary rounded-lg shadow-lg transition m-4`}
			onClick={signInWithGoogle}>
			Sign In with Google
		</button>
	);
}
