"use client"
import { useState, useEffect } from "react"
import floatingPointToPercentage from "../../_utils/floatingPointToPercentage"

const PinchZoom = () => {
    const [zoom, setZoom] = useState<string | null>(null)

    useEffect(() => {
        const setPinchZoom = () =>
            setZoom(
                floatingPointToPercentage(window?.visualViewport?.scale || 1)
            )
        setPinchZoom()

        visualViewport?.addEventListener("resize", setPinchZoom)
        return () => visualViewport?.removeEventListener("resize", setPinchZoom)
    }, [])

    return zoom ? (
        <li>
            <label>pinch zoom</label>
            <span>{zoom}</span>
        </li>
    ) : (
        <></>
    )
}

export default PinchZoom
