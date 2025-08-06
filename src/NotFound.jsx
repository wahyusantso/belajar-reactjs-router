import { useParams } from "react-router"

export default function NotFound() {
    const params = useParams();
    
    return (
        <div>
            <h1>Not Found</h1>
            <p>Can't find page: {params['*']}</p>
        </div>
    )
}