"use client"
// scroll direction hook adapted from Robin Wieruch's blog: https://www.robinwieruch.de/react-hook-scroll-direction/
// maybe only display the switcher if js is enabled?
import { ReactNode, useLayoutEffect, useState, useRef, useEffect } from "react"
import styles from "./ClientHeader.module.css"

type Direction = "up" | "down"
type Position = "show" | "hide"

const THRESHOLD = 0
const ClientHeader = ({ children }: { children: ReactNode }) => {
    const [currentScrollDir, setCurrentScrollDir] = useState<Direction>("up")

    const blocking = useRef<boolean>(false)
    const prevScrollY = useRef<number>(0)

    useEffect(() => {
        prevScrollY.current = window.scrollY

        const updateScrollDirection = () => {
            const scrollY = window.scrollY

            if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
                const newScrollDirection =
                    scrollY > prevScrollY.current ? "down" : "up"

                setCurrentScrollDir(newScrollDirection)

                prevScrollY.current = scrollY > 0 ? scrollY : 0
            }

            blocking.current = false
        }

        const onScroll = () => {
            if (!blocking.current) {
                blocking.current = true
                requestAnimationFrame(updateScrollDirection)
            }
        }

        addEventListener("scroll", onScroll)

        return () => removeEventListener("scroll", onScroll)
    }, [currentScrollDir])

    const [positionClass, setPositionClass] = useState<Position>("show")
    const hrRef = useRef<HTMLHRElement | null>(null)
    useLayoutEffect(() => {
        if (hrRef.current) {
            const observer = new IntersectionObserver(
                ([{ isIntersecting }]) => {
                    if (isIntersecting || currentScrollDir === "up")
                        setPositionClass("show")
                    else if (!isIntersecting && currentScrollDir === "down")
                        setPositionClass("hide")
                }
            )
            observer.observe(hrRef.current)
            return () => observer.disconnect()
        }
    }, [hrRef, currentScrollDir])

    return (
        <>
            <header className={styles[positionClass]}>{children}</header>
            <hr ref={hrRef} className={styles.hr} />
        </>
    )
}

export default ClientHeader
