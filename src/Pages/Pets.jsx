import { useEffect } from "react";

export default function Pets() {

    const fetchData = async () => {
        const response = await fetch('/user/1');
        if (!response.ok) {
            throw new Error('Data could not be fetched');
        }
        else {
            return response;
        }
    }

    useEffect(() => {
        fetch('/user/1')
            .then((res) => res.json())
    },[])

    return(
        <div>
            pets
        </div>
    )
}