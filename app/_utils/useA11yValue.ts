"use client"
import { useEffect, useLayoutEffect, useState, ChangeEvent } from "react"
import type { A11yKey } from "./sharedTypes"

export const useA11yValue = <T>({
    initialValue,
    cookieName,
    matchMediaQuery,
    keyObject,
}: {
    cookieName: string
    matchMediaQuery: string
    initialValue: T
    keyObject: A11yKey<T>
}): [T, (event: ChangeEvent<HTMLInputElement>) => void] => {
    const [a11yValue, setA11yValue] = useState<T>(initialValue)
    useEffect(() => {
        const mediaQuery = matchMedia(matchMediaQuery)

        const setA11yQuery = ({ matches }: MediaQueryListEvent) => {
            setA11yValue(keyObject[`${matches}`])
        }

        mediaQuery.addEventListener("change", setA11yQuery)
        return () => mediaQuery.removeEventListener("change", setA11yQuery)
    }, [keyObject, matchMediaQuery])

    useLayoutEffect(() => {
        document.documentElement.classList.add(`${a11yValue}`)
        document.documentElement.classList.remove(
            String(keyObject[`${a11yValue}`])
        )
    }, [a11yValue, keyObject])

    useEffect(() => {
        // some browsers (notably Safari) don't support requestIdleCallback 😑
        const setA11yCookie = () =>
            (document.cookie = `${cookieName}=${a11yValue}`)
        if (window.requestIdleCallback)
            window.requestIdleCallback(setA11yCookie)
        else setA11yCookie()
    }, [a11yValue, cookieName])

    const toggleA11yCheckbox = ({
        target: { checked },
    }: ChangeEvent<HTMLInputElement>) => {
        setA11yValue(keyObject[`${checked}`])
    }

    return [a11yValue, toggleA11yCheckbox]
}
