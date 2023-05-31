import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar';
import dogsData from '../dataFiles/dogs.json';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function LayoutUser({ data }) {
	const { auth } = data;
	const [activePetID, setActivePet] = useState(1);
	const activePet = dogsData.dogs.filter((pet) => pet.id === activePetID);
	const [currentUserData, setCurrentUserData] = useState({});
	const [usersPets, setUsersPets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const db = getFirestore();
	const refCol = collection(db, 'users');

	async function fetchUserFromDB() {
		let user = {};
		await getDocs(refCol)
			.then((snapshot) => {
				const users = snapshot.docs.map((doc) => ({ ...doc.data(), docID: doc.id }));
				user = users.find((user) => user.uid === auth.currentUser.uid);
				setCurrentUserData(user);
			})
			.catch((error) => {
				console.log(error.message);
			});

		const refPets = collection(db, `/users/${user.docID}/pets`);
		let pets = [];
		await getDocs(refPets).then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				const petData = { ...doc.data() };
				pets.push(petData);
			});
			setUsersPets(pets);
		});
	}

	useEffect(() => {
		fetchUserFromDB();
	}, []);

	useEffect(() => {
		if (usersPets.length > 0) setActivePet(usersPets[0].ID);
		setIsLoading(false);
		console.log(usersPets);
	}, [usersPets]);

	return isLoading ? (
		<div>
			<h1 className='text-black'>LOADING</h1>
		</div>
	) : (
		<div className='flex flex-row'>
			<Sidebar data={{ activePetID: activePetID, setActivePet: setActivePet, pets: usersPets }} />

			<div className='flex flex-col grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet context={[activePet]} />
			</div>
		</div>
	);
}
