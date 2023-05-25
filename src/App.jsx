import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutMain from './Layouts/LayoutMain';
import LayoutUser from './Layouts/LayoutUser';
import Home from './Pages/Home';
import Appointments from './Pages/Appointments';
import History from './Pages/History';
import PetCard from './Components/PetCard';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBbCiCsmhTiNzENAmrGVewUcaS0rV00mEA',
	authDomain: 'mypets-105b0.firebaseapp.com',
	projectId: 'mypets-105b0',
	storageBucket: 'mypets-105b0.appspot.com',
	messagingSenderId: '716226346764',
	appId: '1:716226346764:web:990cd525318f1c34d65329',
	measurementId: 'G-BNHE9KDY8T',
};

initializeApp(firebaseConfig);

export default function App() {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LayoutMain />}>
					<Route index element={<Home data={{ auth: auth, provider: provider }} />} />
				</Route>
				<Route path='/user' element={<LayoutUser data={{ auth: auth }} />}>
					<Route path='/user/pet' element={<PetCard />} />
					<Route path='/user/appointments' element={<Appointments />} />
					<Route path='/user/history' element={<History />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
