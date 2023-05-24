import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdPets } from 'react-icons/md';
import { FaClinicMedical } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import NavbarLink from './NavbarLink';
import SignOut from './SignOut';

export default function NavbarUser({ data }) {
	const [activePage, setActivePage] = useState('Pet info');
	const { auth } = data;
	const navigate = useNavigate();

	const signOut = () => {
		auth.signOut().then(localStorage.clear());
		navigate('/');
		console.log(localStorage);
	};

	return (
		<div className='bg-primary flex flex-row justify-between h-16 items-center'>
			<div className='flex flex-row '>
				<NavbarLink
					data={{
						target: '/user/pet',
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
			<SignOut signOut={signOut} />
		</div>
	);
}
