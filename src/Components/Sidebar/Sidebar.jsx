import { useState } from "react";
import VisibilityButton from "./VisibilityButton";
import Logo from "./Logo";
import SidebarLink from "./SidebarLink";
import {RiUser3Line} from 'react-icons/ri';
import {BsCalendarDate} from 'react-icons/bs';
import {FaClinicMedical} from 'react-icons/fa';

export default function Sidebar() {

    const [sidebarHidden, setSidebarHidden] = useState(true);

    return(
        <div className={`overflow-hidden relative flex flex-col justify-between h-screen bg-emerald-200 ${sidebarHidden ? 'w-20' : 'w-52'} transition-width duration-200 ease-out`}>
            <div className="flex flex-col">
                <Logo sidebarHidden={sidebarHidden}/>
                <SidebarLink target={'/user/pets'} text='Pets' icon={<RiUser3Line/>} sidebarHidden = {sidebarHidden}/> 
                <SidebarLink target={'/user/appointments'} text='Appointments' icon={<FaClinicMedical/>} sidebarHidden = {sidebarHidden}/> 
                <SidebarLink target={'/user/history'} text='History' icon={<BsCalendarDate/>} sidebarHidden = {sidebarHidden}/> 
            </div>
            <VisibilityButton sidebarHidden={sidebarHidden} setSidebarHidden={setSidebarHidden}/>
        </div>
    )
}