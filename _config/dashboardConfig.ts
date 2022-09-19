type TMenuItem = {
    title: string
    icon?: string
    subMenus?: TMenuItem[]
}

type TDashboardConfig = {
    logo: string
    menu: TMenuItem[]
}

export const dashboardConfig: TDashboardConfig = {
    logo: "/logo.png",
    menu: [
        {
            title: "Products",
            icon: "",
            subMenus: [
                {
                    title: "TShirts",
                    icon: "/",
                },
                {
                    title: "Jeans",
                    icon: "/",
                },
            ],
        },
        {
            title: "Users",
            icon: "/",
        },
    ],
}
