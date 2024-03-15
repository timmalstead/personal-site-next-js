"use client"
import type { ReactNode } from "react"
import { useLayoutEffect, useState, useRef } from "react"
import styles from "./ClientHeader.module.css"

// use intersection observer && figure out if mouse is going down or up
// could i make the initial use state a query to the window
const ClientHeader = ({ children }: { children: ReactNode }) => {
    const [positionClass, setPositionClass] = useState<"static" | "sticky">(
        "static"
    )
    const headerRef = useRef<HTMLHRElement | null>(null)
    useLayoutEffect(() => {
        if (headerRef.current) {
            const observer = new IntersectionObserver(
                ([{ isIntersecting }]) => {
                    setPositionClass(isIntersecting ? "static" : "sticky")
                }
            )
            observer.observe(headerRef.current)
            return () => observer.disconnect()
        }
    }, [headerRef])

    return (
        <>
            <header className={styles[positionClass]}>{children}</header>
            <hr ref={headerRef} className={styles.spacer} />
        </>
    )
}

export default ClientHeader
