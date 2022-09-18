/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./resources/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            neutral: {
                DEFAULT: "#0D0606",
                75: "#494444",
                50: "#868282",
                25: "#C2C1C1",
                10: "#E7E6E6",
                5: "#F3F3F3",
            },
            colors: {
                lightMode: {
                    primary: {
                        DEFAULT: "#FF7079",
                        darker: "#B34E59",
                    },
                    secondary: {
                        DEFAULT: "#FFA170",
                        darker: "#E58139",
                    },
                },
                darkMode: {
                    layer: {
                        1: "#121212",
                        2: "#1E1E1E",
                        3: "#222222",
                        4: "#242424",
                        5: "#272727",
                        6: "#2C2C2C",
                        7: "#2E2E2E",
                        8: "#333233",
                        9: "#353535",
                        10: "#383838",
                    },
                    primary: {
                        DEFAULT: "#FF8A91",
                        darker: "#B3616A",
                    },
                    secondary: {
                        DEFAULT: "#FFB28A",
                        darker: "#E58E50",
                    },
                },
            },
        },
    },
    plugins: [],
}
