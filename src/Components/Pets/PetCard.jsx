import React from 'react';
import { Link } from 'react-router-dom';

export default function PetCard({ data }) {
	const { imgSource } = data;

	return (
		<Link
			to='/#'
			className='relative flex flex-col items-center w-1/4 min-h-[280px] max-h-[350px] min-w-[280px] 
                max-w-[350px] aspect-[1/1] mx-10 hover:scale-105 transition'>
			<div
				id=' photoWrapper'
				className='w-fit h-1/3 absolute top-0 z-30 drop-shadow-md shadow-stone-300'>
				<img
					className='rounded-full border-4 border-accent h-full w-full object-cover'
					src={imgSource}
				/>
			</div>
			<div
				id='info'
				className='bg-background absolute top-[16.66667%] w-full h-5/6 flex flex-col grow z-10 
                    rounded-2xl border-4 border-accent shadow-md shadow-stone-300'>
				<span className='h-1/5 w-full' />
				<h2 className='mx-auto text-2xl p-2 underline-offset-8 underline'>
					Vinci Goliszek
				</h2>
				<div className='flex flex-col justify-center grow bg-primary p-2 m-2 mt-1 2xl:mt-4 rounded-lg text-lg shadow-inner'>
					<h2 className=''>Species: Dog</h2>
					<h2 className=''>Breed: Wilczur Podlaski</h2>
					<h2>Birthday: 27-07-2019</h2>
					<h2>Weight: 8.8kg</h2>
				</div>
			</div>
		</Link>
	);
}
