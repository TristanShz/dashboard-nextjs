import { ReactElement } from "react"
import { NextPageWithLayout } from "./_app"
import AdminLayout from "../resources/admin/layout/AdminLayout"

const Home: NextPageWithLayout = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            <h1 className={"text-6xl"}>Dashboard</h1>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
            <div className={"h-80 bg-gray-50 dark:bg-darkMode-layer-2"}></div>
        </div>
    )
}

Home.getLayout = (page: ReactElement) => {
    return <AdminLayout>{page}</AdminLayout>
}

export default Home
