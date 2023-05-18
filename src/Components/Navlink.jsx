import { Link } from "react-router-dom"

export default function NavLink({target, text}) {
    return (
        <Link className='mx-4 text-xl hover:text-primary transition duration-300' to={target}>{text}</Link>
    )
}