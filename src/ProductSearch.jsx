import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
    const [searchParams] = useSearchParams(); //ambil query parameter
    const navigate = useNavigate();

    const [search, setSearch] = useState(searchParams.get("search" || "")); //ambil default value berdasarkan params.

    function handleSearch() {
        if (search) {
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`
            });
        }
    }

    return (
        <>
            <h1>Search Product</h1>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>

            <p>Kamu mencari: {searchParams.get("search")}</p>
        </>
    )
}