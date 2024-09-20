"use client"
import { useA11yValue, type ReducedMotion } from "_utils"
import "./reduce-motion.css"

const reducedMotionId = "reduced-motion-input"

// need to add styles, considering various screen sizes, and also e2e testing
const ReduceMotion = ({
    reducedMotionProp,
}: {
    reducedMotionProp: ReducedMotion
}) => {
    const [reducedMotion, toggleReducedMotion] = useA11yValue<ReducedMotion>({
        cookieName: "reducedMotion",
        initialValue: reducedMotionProp,
        keyObject: {
            reduce: "no-preference",
            "no-preference": "reduce",
            true: "reduce",
            false: "no-preference",
        },
        matchMediaQuery: "(prefers-reduced-motion: reduce)",
    })

    const isReducedMotion = reducedMotion === "reduce"
    return (
        <li className="reduced-motion">
            <label htmlFor={reducedMotionId}>
                {isReducedMotion ? "reduced" : "full"} motion
            </label>
            <input
                checked={isReducedMotion}
                onChange={toggleReducedMotion}
                type="checkbox"
                id={reducedMotionId}
            />
        </li>
    )
}

export default ReduceMotion
