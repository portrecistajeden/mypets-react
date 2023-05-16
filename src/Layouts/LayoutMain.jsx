import {Outlet} from 'react-router-dom';
import NavbarMain from '../Components/NavbarMain';

export default function LayoutMain () {
    return(
        <>
            <NavbarMain />
            <Outlet />
        </>
    )
}