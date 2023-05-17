import { useNavigate } from "react-router-dom";

export default function NavbarUser({data}) {

    const navigate = useNavigate();

    const signOut = () => {
        console.log(data.auth.currentUser);
        data.auth.signOut();
        console.log(data.auth.currentUser);
        navigate('/');
    }

    return (
        <div className="bg-pink-300 h-16 items-center justify-between px-4">
            <button className=" sign-out" onClick={signOut}>Sign Out</button>
        </div>
  )
}
