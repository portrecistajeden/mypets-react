import { useState } from 'react';
import vincijpg from '../Images/vinci.jpg';
import dogsData from '../dataFiles/dogs.json';

export default function Sidebar() {
	const [activePet, setActivePet] = useState('');

	const mapPets = dogsData.dogs.map((pet) => (
		<div id=' photoWrapper' className='aspect-square w-[80%] my-2 drop-shadow-md shadow-stone-300'>
			<img
				className={`${
					activePet === pet.id ? 'rounded-[16px] border-accent' : 'border-primary'
				} rounded-[64px] hover:rounded-[16px] border-8  object-cover duration-300 cursor-pointer`}
				src={vincijpg}
				id={pet.id}
				onClick={() => setActivePet(pet.id)}
			/>
		</div>
	));

	return (
		<div className={`overflow-hidden relative flex flex-col items-center h-screen bg-background z-20 w-32`}>
			<div className='h-16 flex justify-center items-center'>
				<h1 className='text-3xl font-bold text-center m-0'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent to-80%'>my</span>
					Pets
				</h1>
			</div>
			{mapPets}
		</div>
	);
}
