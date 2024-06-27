"use client"
import type { ColorMode } from "../../_utils/sharedTypes"
import { useA11yValue } from "../../_utils/useA11yValue"
import "./color-switcher.css"

const colorToggleId = "color-switch-input"

const ColorSwitcher = ({ colorModeProp }: { colorModeProp: ColorMode }) => {
    const [colorMode, toggleColorMode] = useA11yValue<ColorMode>({
        cookieName: "colorMode",
        initialValue: colorModeProp,
        keyObject: {
            light: "dark",
            dark: "light",
            true: "dark",
            false: "light",
        },
        matchMediaQuery: "(prefers-color-scheme: dark)",
    })

    return (
        <li className="color-switcher">
            <label htmlFor={colorToggleId}>{colorMode} theme</label>
            <input
                checked={colorMode === "dark"}
                onChange={toggleColorMode}
                type="checkbox"
                id={colorToggleId}
            />
        </li>
    )
}

export default ColorSwitcher