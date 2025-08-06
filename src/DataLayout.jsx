import { Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
            <div>
                <h1 style={{ color: "blue" }}>This is Header</h1>
            </div>
            <div>
                <Outlet/> {/* akan menambung child component */}
            </div>
            <div>
                <p style={{ color: "blueviolet" }}>This is footer</p>
            </div>
        </>
    )
}