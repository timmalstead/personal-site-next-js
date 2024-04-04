"use client"
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react"
import type { ColorMode } from "../../types"

interface ColorSwitcherProps {
    colorModeProp: ColorMode
}

const colorKey: { [key: string]: ColorMode } = {
    light: "dark",
    dark: "light",
    true: "dark",
    false: "light",
}

const ColorSwitcher = ({ colorModeProp }: ColorSwitcherProps) => {
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

    const capitalizedColorMode = `${colorMode[0].toUpperCase()}${colorMode.slice(1)}`

    return (
        <li>
            <label htmlFor="color-switcher">{capitalizedColorMode} Theme</label>
            <input
                checked={colorMode === "dark"}
                onChange={onChange}
                type="checkbox"
                id="color-switcher"
            />
        </li>
    )
}

export default ColorSwitcher
