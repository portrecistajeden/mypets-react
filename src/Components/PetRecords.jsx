export default function PetRecords() {
	const data = [
		{
			type: 'vacc',
			date: '2023-05-24',
			notes: 'Lorem ipsum',
		},
		{
			type: 'tick treatment',
			date: '2023-05-24',
			notes: 'Lorem ipsum',
		},
		{
			type: 'other',
			date: '2023-05-24',
			notes: 'Lorem ipsum',
		},
	];

	const mappedData = data.map((element) => (
		<div className='h-20 m-2 rounded-lg p-2 bg-primary'>
			<div className='flex flex-col'>
				<label className='text-xl font-bold'>{element.type}</label>
				<label>{element.date}</label>
			</div>
		</div>
	));

	return <>{mappedData}</>;
}
