import { useState } from 'react';

export default function PetInfo({ data }) {
	const { firestore, user } = data;
	const [activePet, setActivePet] = useState('');

	const collection = firestore.collection('users');

	// const getUser = async (userEmail) => {
	// 	const user = await collection.where('email', '==', userEmail).get();
	// 	return user;
	// };
	return <div className='text-black'>Pet info</div>;
}
