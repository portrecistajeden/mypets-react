import { useState } from 'react';
import PetCard from '../Components/Pets/PetCard';
import vincijpg from '../Images/vinci.jpg';
import dogsData from '../dataFiles/dogs.json';

export default function Pets({ data }) {
	const { firestore, user } = data;
	const [activePet, setActivePet] = useState('');

	const collection = firestore.collection('users');

	const getUser = async (userEmail) => {
		const user = await collection.where('email', '==', userEmail).get();
		return user;
	};

	const mapPets = dogsData.dogs.map((pet) => (
		<div id=' photoWrapper' className='aspect-square w-1/2 m-0 drop-shadow-md shadow-stone-300'>
			<img className='rounded-full border-4 border-accent object-cover' src={vincijpg} />
		</div>
	));

	return <>{!activePet ? <h1>pets</h1> : <h1>Hi</h1>}</>;
}
