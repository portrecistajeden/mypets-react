import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';

export default function LayoutUser({ data }) {
	const { auth, user, children } = data;

	if (!user) {
		return <Navigate to='/' replace />;
	}

	return children ? (
		children
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
