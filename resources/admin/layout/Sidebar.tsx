import Image from "next/image"
import { dashboardConfig } from "../../../_config/dashboardConfig"
import ThemeSwitcher from "./ThemeSwitcher"
import NoSsr from "../../../_common/components/NoSsr"

export default function Sidebar() {
    return (
        <div
            className={
                "w-1/5 h-screen bg-gray-50 dark:bg-darkMode-layer-2 flex flex-col shadow p-4 sticky top-0"
            }
        >
            <div className={"h-20"}>
                <div className={"w-16 h-16 relative"}>
                    <Image
                        src={dashboardConfig.logo}
                        layout={"fill"}
                        alt={"Company logo"}
                    />
                </div>
            </div>
            <div className={"flex-1"}></div>
            <NoSsr>
                <ThemeSwitcher />
            </NoSsr>
        </div>
    )
}
