import { useNavigate } from "react-router"

export default function Home() {

    const navigate = useNavigate(); //menggunakan component hook untuk pindah halaman.

    function handleClick() {
        navigate({
            pathname: "/data" //url yang dituju.
        })
    }
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome the Dashboard page.</p>
            <button onClick={handleClick}>Go to Data page</button>
        </div>
    )
}