import { Link } from "react-router-dom";
import NavLink from "../Navlink";

export default function NavbarMain() {
    return(
        <div className="fixed top-0 w-full bg-transparent h-16 flex flex-row items-center justify-between px-4">
            <Link className="text-4xl font-bold transition duration-300" to='/'><span className="gradient-text">my</span>Pets</Link>
            <div className="flex flex-row items-center justify-end">
                <NavLink target={'/about'} text={'About'}/>
                <NavLink target={'/#'} text={'Placeholder'}/>
                <NavLink target={'/#'} text={'Placeholder'}/>
            </div>
        </div>
    )
}