import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutMain from './Layouts/LayoutMain';
import LayoutUser from './Layouts/LayoutUser';
import Home from './Pages/Home';
import Pets from './Pages/Pets';
import Appointments from './Pages/Appointments';
import History from './Pages/History';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';

firebase.initializeApp({
	apiKey: 'AIzaSyBbCiCsmhTiNzENAmrGVewUcaS0rV00mEA',
	authDomain: 'mypets-105b0.firebaseapp.com',
	projectId: 'mypets-105b0',
	storageBucket: 'mypets-105b0.appspot.com',
	messagingSenderId: '716226346764',
	appId: '1:716226346764:web:990cd525318f1c34d65329',
	measurementId: 'G-BNHE9KDY8T',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function App() {
	const [user] = useAuthState(auth);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LayoutMain />}>
					<Route
						index
						element={<Home data={{ auth: auth, firebase: firebase, user: user, firestore: firestore }} />}
					/>
				</Route>
				<Route path='/user' element={<LayoutUser data={{ auth: auth, user: user }} />}>
					<Route path='/user/pets' element={<Pets data={{ firestore: firestore, user: user }} />} />
					<Route path='/user/appointments' element={<Appointments />} />
					<Route path='/user/history' element={<History />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
