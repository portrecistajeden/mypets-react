import { useState } from "react";
import NavLink from "../Navlink";
import VisibilityButton from "./VisibilityButton";

export default function Sidebar() {

    const [sidebarHidden, setSidebarHidden] = useState(true);

    return(
        <div className={`relative flex flex-col h-screen bg-emerald-200 ${sidebarHidden ? 'w-20' : 'w-52'} transition-width duration-200 ease-out`}>
            <VisibilityButton sidebarHidden={sidebarHidden} setSidebarHidden={setSidebarHidden}/>
            <NavLink target={'/'} text='link'/> 
            <NavLink target={'/'} text='link'/> 
            <NavLink target={'/'} text='link'/> 
        </div>
    )
}