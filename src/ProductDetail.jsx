import { useParams } from "react-router"

export default function ProductDetail() {
    const params = useParams(); //ambil yang disematkan pada param route.

    return (
        <div>
            <h1>Welcome the Product detail page.</h1>
            <h3>Product Detail</h3>
            <p>Product ID: {params.id}</p> { /*pemanggilan object harus sesuai dengan parameter route */ }
            <p>Product Name: {params.name}</p>
        </div>
    )
}