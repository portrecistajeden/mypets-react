import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import PetInfo from './PetInfo';
import PetRecords from './PetRecords';

export default function PetCard({ data }) {
	const { firestore, user } = data;
	const [activeTab, setActiveTab] = useState('records');
	const [activePet] = useOutletContext();

	// const collection = firestore.collection('users');

	// const getUser = async (userEmail) => {
	// 	const user = await collection.where('email', '==', userEmail).get();
	// 	return user;
	// };
	return (
		<div className='flex flex-col xl:w-2/3 xl:mx-auto grow bg-background m-8 rounded-lg overflow-hidden'>
			<div id='flex flex-row pet-info-tabs p-2'>
				<button
					id='records'
					onClick={() => setActiveTab('records')}
					className={`w-1/2 h-16 m-0 ${activeTab === 'records' ? 'underline' : ''}`}>
					RECORDS
				</button>
				<button
					id='profile'
					onClick={() => setActiveTab('profile')}
					className={`w-1/2 h-16 m-0 ${activeTab === 'profile' ? 'underline' : ''}`}>
					PROFILE
				</button>
			</div>
			<div className='h-full overflow-hidden m-2 rounded-b-lg '>
				<div
					id='pet-records'
					className={`${
						activeTab !== 'records' ? '-translate-y-full' : ''
					}  w-full h-full transition-transform duration-200 overflow-hidden p-2`}>
					<div>
						<PetRecords />
					</div>
				</div>
				<div
					id='pet-profile'
					className={`${
						activeTab === 'profile' ? '-translate-y-full' : ''
					} grid grid-cols-2 gap-4 w-full h-full transition-transform duration-200 overflow-hidden p-2`}>
					<div className='h-fit bg-primary rounded-lg p-4'>
						<PetInfo activePet={activePet[0]} />
					</div>
				</div>
			</div>
		</div>
	);
}
