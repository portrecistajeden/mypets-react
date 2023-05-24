import { useEffect } from 'react';

export default function PetInfo({ activePet }) {
	const mappedData = Object.entries(activePet).map(([key, value]) => {
		if ((key !== 'id') & (key !== 'imgSrc')) {
			return (
				<div className='w-full h-8 flex flex-row justify-between'>
					<label>{key}</label>
					<label className='font-bold'>{value}</label>
				</div>
			);
		}
	});

	return (
		<>
			{mappedData}
			<button className='mx-auto'>Edit</button>
		</>
	);
}
