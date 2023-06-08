import NavbarUser from '../Components/NavbarUser';
import Sidebar from '../Components/Sidebar';
import dogsData from '../dataFiles/dogs.json';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function LayoutUser({ data }) {
	const { auth } = data;
	const [activePet, setActivePet] = useState({});
	const [currentUserData, setCurrentUserData] = useState({});
	const [usersPets, setUsersPets] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [petsRecords, setPetsRecords] = useState([]);

	const db = getFirestore();

	async function fetchData() {
		const user = await fetchUserFromDB();
		setCurrentUserData(user);

		const pets = await fetchUsersPets(user);
		if (pets.length > 0) {
			setActivePet(pets[0]);
		}

		const petsWithRecords = await fetchPetRecords(user, pets);
		setUsersPets(petsWithRecords);
	}

	async function fetchUserFromDB() {
		let user = {};
		const refUsers = collection(db, 'users');
		await getDocs(refUsers)
			.then((snapshot) => {
				const users = snapshot.docs.map((doc) => ({ ...doc.data(), docID: doc.id }));
				user = users.find((user) => user.uid === auth.currentUser.uid);
			})
			.catch((error) => {
				console.log(error.message);
			});
		return user;
	}

	async function fetchUsersPets(user) {
		let pets = [];
		const refPets = collection(db, `/users/${user.docID}/pets`);
		await getDocs(refPets).then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				const petData = { ...doc.data(), docID: doc.id };
				pets.push(petData);
			});
		});
		return pets;
	}

	async function fetchPetRecords(user, pets) {
		let resultArray = [];
		for (const pet of pets) {
			let petRecords = [];
			const refPet = collection(db, `/users/${user.docID}/pets/${pet.docID}/records`);
			await getDocs(refPet).then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					const record = { ...doc.data(), recordDocID: doc.id };
					petRecords.push(record);
				});
			});
			resultArray.push(Object.assign(pet, { records: petRecords }));
		}
		return resultArray;
	}

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setIsLoading(false);
	}, [usersPets]);

	return isLoading ? (
		<div>
			<h1 className='text-black'>LOADING</h1>
		</div>
	) : (
		<div className='flex flex-row'>
			<Sidebar data={{ activePet: activePet, setActivePet: setActivePet, pets: usersPets }} />

			<div className='flex flex-col grow'>
				<NavbarUser data={{ auth: auth }} />
				<Outlet context={[activePet]} />
			</div>
		</div>
	);
}
