import { useState } from "react";
import VisibilityButton from "./VisibilityButton";
import SidebarLink from "./SidebarLink";
import {RiUser3Line} from 'react-icons/ri';
import {BsCalendarDate} from 'react-icons/bs';
import {FaClinicMedical} from 'react-icons/fa';

export default function Sidebar() {

    const [sidebarHidden, setSidebarHidden] = useState(true);
    const [activePage, setActivePage] = useState('Pets');

    return(
        <div className={`overflow-hidden relative flex flex-col justify-between h-screen bg-background ${sidebarHidden ? 'w-20' : 'w-52'} transition-width duration-200 ease-out`}>
            <div className="flex flex-col">
                <div className='flex items-center justify-center h-16 mb-8'>
                    <h1 className="text-4xl font-bold text-center m-0"><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent to-80%">{sidebarHidden ? 'm' : 'my'}</span>{sidebarHidden ? 'P' : 'Pets'}</h1>
                </div>
                <SidebarLink data={{target: '/user/pets', text: 'Pets', icon:<RiUser3Line/>, sidebarHidden: sidebarHidden, setActivePage: setActivePage, activePage: activePage}}/> 
                <SidebarLink data={{target: '/user/appointments', text: 'Appointments', icon:<FaClinicMedical/>, sidebarHidden: sidebarHidden, setActivePage: setActivePage, activePage: activePage}}/> 
                <SidebarLink data={{target: '/user/history', text: 'History', icon:<BsCalendarDate/>, sidebarHidden: sidebarHidden, setActivePage: setActivePage, activePage: activePage}}/> 
            </div>
            <VisibilityButton sidebarHidden={sidebarHidden} setSidebarHidden={setSidebarHidden}/>
        </div>
    )
}