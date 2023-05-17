import NavbarUser from "../Components/NavbarUser";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";

export default function LayoutUser({data}) {

    if(!data.user) {
        return <Navigate to='/' replace/>
    }
    
    return(data.children ? data.children :
        <div className="flex flex-row">
            <Sidebar />
            <div className="grow">
                <NavbarUser data={{auth: data.auth}}/>
                <Outlet />
            </div>
        </div>
    )
}