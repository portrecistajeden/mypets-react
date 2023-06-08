import { useEffect, useState } from 'react';

export default function PetRecords({ data }) {
	const { records } = data;
	const [mappedRecords, setMappedRecords] = useState([]);

	function convertTimestampToString(timestamp) {
		const date = timestamp.toDate();
		return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
	}
	useEffect(() => {
		if (records !== undefined) {
			const mappedRecords = records.map((record) => (
				<div className='w-full h-24 bg-primary rounded-lg px-4 py-2 my-4 flex flex-row justify-between'>
					<div className='flex flex-col'>
						<label>{convertTimestampToString(record.date)}</label>
						<label className='max-w-[80%]'>{record.content}</label>
					</div>
					<span>{record.isDone ? 'Done' : 'Not done'}</span>
				</div>
			));
			setMappedRecords(mappedRecords);
		}
	}, [records]);

	return <>{mappedRecords}</>;
}
