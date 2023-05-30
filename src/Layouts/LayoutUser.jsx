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
	const [isLoading, setIsLoading] = useState(false);

	const db = getFirestore();
	const refCol = collection(db, 'users');

	// useState(() => {
	// 	onAuthStateChanged(auth, (user) => {
	// 		if (user) {
	// 			console.log(user.email);
	// 		} else {
	// 			// User is signed out
	// 			// ...
	// 		}
	// 	});
	// }, []);

	async function fetchUserFromDB() {
		await getDocs(refCol)
			.then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					const docUserData = { ...doc.data() };
					if (docUserData.uid === auth.currentUser.uid) {
						setCurrentUserData({ id: doc.uid, docID: doc.id, ...doc.data() });
					}
				});
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	async function fetchUsersPets() {
		let response = [];
		const refPets = collection(db, `/users/${currentUserData.docID}/pets`);
		await getDocs(refPets)
			.then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					const petData = { ...doc.data() };
					response.push(petData);
				});
			})
			.then(setUsersPets(response));
	}

	useEffect(() => {
		fetchUserFromDB().then(console.log(currentUserData));
	}, []);

	return isLoading ? (
		<div>
			<h1>LOADING</h1>
		</div>
	) : (
		<div className='flex flex-row'>
			{/* <Sidebar data={{ activePetID: activePetID, setActivePet: setActivePet, dogs: dogsData.dogs }} /> */}
			<Sidebar data={{ activePetID: activePetID, setActivePet: setActivePet, pets: usersPets }} />

			<div className='flex flex-col grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet context={[activePet]} />
			</div>
		</div>
	);
}
