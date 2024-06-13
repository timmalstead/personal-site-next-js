"use client"
import { useState, useEffect } from "react"
import getZoomPercentage from "../../_utils/getZoomPercentage"

const LayoutZoom = () => {
    const [zoom, setZoom] = useState<string | null>(null)

    useEffect(() => {
        const setLayoutZoom = () =>
            setZoom(getZoomPercentage(window.devicePixelRatio))

        setLayoutZoom()

        // shamelessly copied verbatim from https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio#monitoring_screen_resolution_or_zoom_level_changes
        let remove: null | (() => void) = null

        const updateZoomPercentage = () => {
            if (remove !== null) remove()

            const mqString = `(resolution: ${window.devicePixelRatio}dppx)`
            const media = matchMedia(mqString)
            media.addEventListener("change", updateZoomPercentage)
            remove = () =>
                media.removeEventListener("change", updateZoomPercentage)

            setLayoutZoom()
        }

        updateZoomPercentage()
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
