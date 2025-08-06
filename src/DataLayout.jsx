import { Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
            <div>
                <h1>This is Header</h1>
            </div>
            <div>
                <Outlet/> {/* akan menambung child component */}
            </div>
            <div>
                <p>This is footer</p>
            </div>
        </>
    )
}