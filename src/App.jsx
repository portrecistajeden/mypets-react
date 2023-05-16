import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from './Layouts/LayoutMain';
import LayoutUser from "./Layouts/LayoutUser";
import Home from './Pages/Home';
import Pets from "./Pages/Pets";
import Appointments from "./Pages/Appointments";
import History from "./Pages/History";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutMain />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/user' element={<LayoutUser/>}>
                <Route path='/user/pets' element={<Pets/>} />
                <Route path='/user/appointments' element={<Appointments/>} />
                <Route path='/user/history' element={<History/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
