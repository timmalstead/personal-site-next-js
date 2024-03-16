"use client"
// scroll direction hook adapted from Robin Wieruch's blog: https://www.robinwieruch.de/react-hook-scroll-direction/
// maybe only display the switcher if js is enabled?
// rounded polygon on the footer?
import { ReactNode, useLayoutEffect, useState, useRef, useEffect } from "react"
import styles from "./ClientHeader.module.css"

type Direction = "up" | "down"
type Position = "show" | "hide"

const THRESHOLD = 50
const ClientHeader = ({ children }: { children: ReactNode }) => {
    const [currentScrollDir, setCurrentScrollDir] = useState<Direction>("up")

    const blocking = useRef<boolean>(false)
    const prevScrollY = useRef<number>(0)

    useEffect(() => {
        // set the initial y scroll position
        prevScrollY.current = window.scrollY

        const updateScrollDirection = () => {
            // if the user has scrolled enough, update the scroll direction
            const scrollY = window.scrollY
            const userHasScrolledEnough =
                Math.abs(scrollY - prevScrollY.current) >= THRESHOLD

            if (userHasScrolledEnough) {
                const newScrollDirection =
                    scrollY > prevScrollY.current ? "down" : "up"

                setCurrentScrollDir(newScrollDirection)

                // update the previous scroll position
                prevScrollY.current = scrollY > 0 ? scrollY : 0
            }

            // unblock the scroll event
            blocking.current = false
        }

        const onScroll = () => {
            // if the scroll event is not being blocked, request an animation frame
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
