import { PropsWithChildren } from "react"
import Sidebar from "./Sidebar"
import { Navbar } from "./Navbar"

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className={"flex font-sans h-screen"}>
            <Sidebar />
            <div className={"flex-1"}>
                <Navbar />
                <div
                    className={
                        "bg-gray-100 dark:bg-darkMode-layer-1 h-[calc(100vh-80px)] overflow-y-auto p-8"
                    }
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
