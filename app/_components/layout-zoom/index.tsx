"use client"
import { useState, useEffect } from "react"
import floatingPointToPercentage from "../../_utils/floatingPointToPercentage"

const LayoutZoom = () => {
    const [zoom, setZoom] = useState<string | null>(null)

    useEffect(() => {
        // it's a bummer, but the below code only seems to work in Chrome
        // which is funny considering that I copied it from MDN
        const isChrome = window.navigator.userAgent
            .toLowerCase()
            .includes("chrome")
        if (isChrome) {
            // shamelessly copied verbatim from https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes
            let remove: null | (() => void) = null

            const updateZoomPercentage = () => {
                if (remove !== null) remove()

                const mqString = `(resolution: ${window.devicePixelRatio}dppx)`
                const media = matchMedia(mqString)
                media.addEventListener("change", updateZoomPercentage)
                remove = () =>
                    media.removeEventListener("change", updateZoomPercentage)

                setZoom(
                    floatingPointToPercentage(
                        window.outerWidth / window.innerWidth
                    )
                )
            }

            updateZoomPercentage()
        }
    }, [])

    return zoom ? (
        <li>
            <label>layout zoom</label>
            <span>{zoom}</span>
        </li>
    ) : (
        <></>
    )
}

export default LayoutZoom
