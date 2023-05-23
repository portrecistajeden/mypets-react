import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdPets } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import NavbarLink from './NavbarLink';

export default function NavbarUser({ data }) {
	const [activePage, setActivePage] = useState('');
	const { auth } = data;
	const navigate = useNavigate();

	const signOut = () => {
		auth.signOut();
		navigate('/');
	};

	return (
		<div className='bg-primary flex flex-row justify-between h-16 items-center'>
			<div className='flex flex-row '>
				<NavbarLink
					data={{
						target: '/user/pets',
						text: 'Pet info',
						icon: <MdPets />,
						setActivePage: setActivePage,
						activePage: activePage,
					}}
				/>
				<NavbarLink
					data={{
						target: '/user/appointments',
						text: 'Appointments',
						icon: <FaClinicMedical />,
						setActivePage: setActivePage,
						activePage: activePage,
					}}
				/>
				<NavbarLink
					data={{
						target: '/user/history',
						text: 'History',
						icon: <BsCalendarDate />,
						setActivePage: setActivePage,
						activePage: activePage,
					}}
				/>
			</div>
			<button
				id='sign-out'
				className='mx-2 p-2 bg-primary border-2 border-background rounded-[16px] hover:rounded-[4px] duration-200'
				onClick={signOut}>
				Sign Out
			</button>
		</div>
	);
}
