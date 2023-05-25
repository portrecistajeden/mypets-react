import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignOut({ data }) {
	const navigate = useNavigate();
	const { auth } = data;

	const signUserOut = () => {
		signOut(auth)
			.then(() => localStorage.clear())
			.then(() => navigate('/'));
	};

	return (
		<button
			id='sign-out'
			className='mx-2 p-2 bg-primary border-2 border-background rounded-[16px] hover:rounded-[4px] duration-200'
			onClick={signUserOut}>
			Sign Out
		</button>
	);
}
