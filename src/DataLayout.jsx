import { Link, NavLink, Outlet, useLocation } from "react-router";
import "../public/style.css";

export default function DataLayout() {
    const location = useLocation(); //memberikan informasi halaman yang sedang diakses, seperti url dll.
    return (
        <>
            <div>
                <h1 style={{ color: "blue" }}>This is Header</h1>
            </div>
            <div>
                <ul style={{ display: "flex", gap: "40px" }}>
                    {
                        /*
                        - menggunakan component Link, sebagai pengganti element <a> Anchor.
                        - Anchor element dapat menyebabkan reload ulang saat berpindah halaman.
                         */
                    }
                    {/* <li><Link to="/data/products">Products</Link></li>
                    <li><Link to="/data/customers">Costumers</Link></li>
                    <li><Link to="/data/sellers">Sellers</Link></li> */}
                    {/* implementasi parameter pada component Link */}
                    {/* <li><Link to={{ 
                        pathname: "/data/products",
                        search: "?category=weapon", //as params
                        hash: "#top"
                     }}>Products With Params</Link></li> */}

                    
                    { /* menggunakan NavLink untuk mengetahui posisi navigasi yang dipilih */}
                    <li><NavLink to="/data/products">Products</NavLink></li>
                    <li><NavLink to="/data/customers">Costumers</NavLink></li>
                    <li><NavLink to="/data/sellers">Sellers</NavLink></li>
                    <li><NavLink to={{ 
                        pathname: "/data/products",
                        search: "?category=weapon", //as params
                        hash: "#top"
                     }}>Products With Params</NavLink></li>
                </ul>
            </div>
            <div>
                <Outlet/> {/* akan menambung child component */}
            </div>
            <div>
                <p style={{ color: "blueviolet" }}>This is footer</p>
                <p>Location: {location.pathname}{location.search}{location.hash}</p> {/* implement useLocation */}
            </div>
        </>
    )
}