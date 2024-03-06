"use client"
import type { ReactNode } from "react"
import { useEffect } from "react"

// use intersection observer && figure out if mouse is going down or up
const ClientHeader = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        console.log("ClientHeader is on the client")
        console.log(children)
    }, [children])
    return <header>{children}</header>
}

export default ClientHeader
