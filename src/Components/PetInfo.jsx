export default function PetInfo({ activePet }) {
	function convertTimestampToString(timestamp) {
		const date = timestamp.toDate();
		return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	}
	return Object.keys(activePet).length > 0 ? (
		<>
			<div className='w-full h-8 flex flex-row justify-between'>
				<label>Name</label>
				<label className='font-bold'>{activePet.name}</label>
			</div>
			<div className='w-full h-8 flex flex-row justify-between'>
				<label>Species</label>
				<label className='font-bold'>{activePet.species}</label>
			</div>
			<div className='w-full h-8 flex flex-row justify-between'>
				<label>Breed</label>
				<label className='font-bold'>{activePet.breed}</label>
			</div>
			<div className='w-full h-8 flex flex-row justify-between'>
				<label>Birthday</label>
				<label className='font-bold'>{convertTimestampToString(activePet.birthday)}</label>
			</div>
			<div className='w-full h-8 flex flex-row justify-between'>
				<label>Weight</label>
				<label className='font-bold'>{activePet.weight}</label>
			</div>
			<button className='mx-auto'>Edit</button>
		</>
	) : (
		<></>
	);
}
