import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar';
import dogsData from '../dataFiles/dogs.json';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function LayoutUser({ data }) {
	const { auth, user } = data;
	const [activePetID, setActivePet] = useState(1);
	const activePet = dogsData.dogs.filter((pet) => pet.id === activePetID);

	return user === null ? (
		<Navigate to='/' replace />
	) : (
		<div className='flex flex-row'>
			<Sidebar data={{ activePetID: activePetID, setActivePet: setActivePet, dogs: dogsData.dogs }} />
			<div className='flex flex-col grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet context={[activePet]} />
			</div>
		</div>
	);
}
