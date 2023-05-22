import { useNavigate } from 'react-router-dom';

export default function NavbarUser({ data }) {
	const { auth } = data;
	const navigate = useNavigate();

	const signOut = () => {
		auth.signOut();
		navigate('/');
	};

	return (
		<div className='bg-primary h-16 items-center justify-between px-4'>
			<button className=' sign-out' onClick={signOut}>
				Sign Out
			</button>
		</div>
	);
}
