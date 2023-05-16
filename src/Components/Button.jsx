import { Link } from "react-router-dom"

export default function Button({text, target}) {
    return (
        <Link to={target} className={`hover:bg-emerald-500 px-3 py-2 text-xl outline outline-2 outline-gray-950 rounded-lg shadow-lg transition m-4`}>
            {text}
        </Link>
    )
}