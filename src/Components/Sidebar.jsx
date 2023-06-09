import { useState } from 'react';
import vincijpg from '../Images/vinci.jpg';
import PetIcon from './PetIcon';
import AddPet from './AddPet';

export default function Sidebar({ data }) {
	const { activePet, setActivePet, pets } = data;
	const mapPets = pets.map((pet) => {
		const isActive = activePet.ID === pet.ID;

		return <PetIcon data={{ isActive, pet, setActivePet }} key={pet.ID} />;
	});

	return (
		<div className={`overflow-hidden relative flex flex-col items-center h-screen bg-background z-20 w-32`}>
			<div className='h-16 flex justify-center items-center'>
				<h1 className='text-3xl font-bold text-center m-0'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent to-80%'>my</span>
					Pets
				</h1>
			</div>
			{mapPets}
			<AddPet data={{}} />
		</div>
	);
}
