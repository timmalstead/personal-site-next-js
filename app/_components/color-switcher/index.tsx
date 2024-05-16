"use client"
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react"
import type { ColorMode } from "../../_helpers/types"
import "./color-switcher.css"

const colorKey: { [key: string]: ColorMode } = {
    light: "dark",
    dark: "light",
    true: "dark",
    false: "light",
}

const ColorSwitcher = ({ colorModeProp }: { colorModeProp: ColorMode }) => {
    const [colorMode, setColorMode] = useState<ColorMode>(colorModeProp)
    useEffect(() => {
        const colorQuery = matchMedia("(prefers-color-scheme: dark)")

        const setColorWithQuery = ({ matches }: MediaQueryListEvent) => {
            setColorMode(colorKey[`${matches}`])
        }

        colorQuery.addEventListener("change", setColorWithQuery)
        return () => colorQuery.removeEventListener("change", setColorWithQuery)
    }, [])

    useLayoutEffect(() => {
        document.documentElement.classList.add(colorMode)
        document.documentElement.classList.remove(colorKey[colorMode])
    }, [colorMode])

    useEffect(() => {
        requestIdleCallback(() => {
            document.cookie = `colorMode=${colorMode}`
        })
    }, [colorMode])

    const onChange = ({
        target: { checked },
    }: ChangeEvent<HTMLInputElement>) => {
        setColorMode(colorKey[`${checked}`])
    }

    return (
        <li className="color-switcher">
            <label htmlFor="color-switch-input">{colorMode} theme</label>
            <input
                checked={colorMode === "dark"}
                onChange={onChange}
                type="checkbox"
                id="color-switch-input"
            />
        </li>
    )
}

export default ColorSwitcher
