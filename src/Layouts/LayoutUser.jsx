import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function LayoutUser({ data }) {
	const { auth, children } = data;

	const user = JSON.parse(localStorage.getItem('user'));

	return user === null ? (
		<Navigate to='/' replace />
	) : (
		<div className='flex flex-row'>
			<Sidebar />
			<div className='grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet />
			</div>
		</div>
	);
}
