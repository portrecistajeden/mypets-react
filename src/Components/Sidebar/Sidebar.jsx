import { useState } from "react";
import VisibilityButton from "./VisibilityButton";
import Logo from "./Logo";
import SidebarLink from "./SidebarLink";
import {RiUser3Line} from 'react-icons/ri';

export default function Sidebar() {

    const [sidebarHidden, setSidebarHidden] = useState(true);

    return(
        <div className={`relative flex flex-col justify-between h-screen bg-emerald-200 ${sidebarHidden ? 'w-20' : 'w-52'} transition-width duration-200 ease-out`}>
            <div className="flex flex-col">
                <Logo sidebarHidden={sidebarHidden}/>
                <SidebarLink target={'/'} text='link' icon={<RiUser3Line/>} sidebarHidden = {sidebarHidden}/> 
                <SidebarLink target={'/'} text='link' icon={<RiUser3Line/>} sidebarHidden = {sidebarHidden}/> 
            </div>
            <VisibilityButton sidebarHidden={sidebarHidden} setSidebarHidden={setSidebarHidden}/>
        </div>
    )
}