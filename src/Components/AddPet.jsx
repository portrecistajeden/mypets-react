function AddPet({ data }) {
	return (
		<div
			className='relative aspect-square w-1/2 my-4 drop-shadow-md shadow-stone-300 bg-background border-8  
    border-secondary cursor-pointer hover:rounded-[16px] duration-200 rounded-[64px]'>
			<span className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 before:border-4 before:border-secondary' />
			<span className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rotate-90 before:border-4 before:border-secondary' />
		</div>
	);
}

export default AddPet;
