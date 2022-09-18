import Image from "next/image"
import { dashboardConfig } from "../../../_config/dashboardConfig"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Sidebar() {
    return (
        <div
            className={
                "w-1/4 h-screen bg-gray-50 dark:bg-darkMode-layer-2 flex flex-col shadow p-4 sticky top-0"
            }
        >
            <div className={"w-16 h-16 relative"}>
                <Image src={dashboardConfig.logo} layout={"fill"} />
            </div>
            <ThemeSwitcher />
        </div>
    )
}
