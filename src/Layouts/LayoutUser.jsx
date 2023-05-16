import NavbarUser from "../Components/NavbarUser";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutUser() {
    return(
        <div className="flex flex-row">
            <Sidebar />
            <div className="grow">
                <NavbarUser/>
                <Outlet />
            </div>
        </div>
    )
}