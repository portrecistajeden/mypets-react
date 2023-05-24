import vincijpg from '../Images/vinci.jpg';

function PetIcon({ data }) {
	const { activePet, pet, setActivePet } = data;

	return (
		<div id='photoWrapper' className='aspect-square w-[80%] my-2 drop-shadow-md shadow-stone-300'>
			<img
				className={`${
					activePet === pet.id ? 'rounded-[16px] border-accent' : 'border-primary brightness-75'
				} rounded-[64px] hover:rounded-[16px] border-8  object-cover duration-300 cursor-pointer`}
				src={vincijpg}
				id={pet.id}
				onClick={() => setActivePet(pet.id)}
			/>
		</div>
	);
}

export default PetIcon;
