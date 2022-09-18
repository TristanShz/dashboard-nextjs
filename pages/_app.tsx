import "../styles/globals.css"
import "../styles/reset.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
      <ThemeProvider attribute={"class"}>
          {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    )
}

export default MyApp
