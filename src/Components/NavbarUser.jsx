import { useNavigate } from "react-router-dom";

export default function NavbarUser({data}) {

    const navigate = useNavigate();

    const signOut = () => {
        data.auth.signOut();
        navigate('/');
    }

    return (
        <div className="bg-pink-300 h-16 items-center justify-between px-4">
            <button className=" sign-out" onClick={signOut}>Sign Out</button>
        </div>
  )
}
