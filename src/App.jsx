import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from './Layouts/LayoutMain';
import LayoutUser from "./Layouts/LayoutUser";
import Home from './Pages/Home';
import User from "./Pages/user";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutMain />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/user' element={<LayoutUser/>}>
                <Route index element={<User/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
