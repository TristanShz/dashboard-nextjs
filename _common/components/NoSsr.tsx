import { PropsWithChildren } from "react"
import dynamic from "next/dynamic"

const NoSsr = ({ children }: PropsWithChildren) => <>{children}</>

export default dynamic(() => Promise.resolve(NoSsr), {
    ssr: false,
})
