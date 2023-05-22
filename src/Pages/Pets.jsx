import PetCard from '../Components/Pets/PetCard';
import vincijpg from '../Images/vinci.jpg';

export default function Pets({ data }) {
	const { firestore, user } = data;

	const collection = firestore.collection('users');

	const getUser = async (userEmail) => {
		const user = await collection.where('email', '==', userEmail).get();
		return user;
	};

	console.log('well ' + getUser(user.email));

	return (
		<div id='petCards container' className='w-full h-1/3 flex flex-row justify-center items-center p-8'>
			<PetCard data={{ imgSource: vincijpg }} />
			<PetCard data={{ imgSource: vincijpg }} />
			<PetCard data={{ imgSource: vincijpg }} />
		</div>
	);
}
