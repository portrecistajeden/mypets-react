import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar';
import dogsData from '../dataFiles/dogs.json';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function LayoutUser({ data }) {
	const { auth } = data;
	const [activePetID, setActivePet] = useState(1);
	const activePet = dogsData.dogs.filter((pet) => pet.id === activePetID);

	const db = getFirestore();
	const refCol = collection(db, 'users');

	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user);
		} else {
			// User is signed out
			// ...
		}
	});

	// function fetchUserFromDB() {
	// 	return new Promise((resolve) => {
	// 		getDocs(refCol)
	// 			.then((snapshot) => {
	// 				snapshot.docs.forEach((doc) => {
	// 					const userData = { ...doc.data() };
	// 					if (userData.email === user.email) {
	// 						resolve({ id: doc.id, ...doc.data() });
	// 					}
	// 				});
	// 			})
	// 			.catch((error) => {
	// 				console.log(error.message);
	// 			});
	// 	});
	// }

	return (
		<div className='flex flex-row'>
			<Sidebar data={{ activePetID: activePetID, setActivePet: setActivePet, dogs: dogsData.dogs }} />
			<div className='flex flex-col grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet context={[activePet]} />
			</div>
		</div>
	);
}
