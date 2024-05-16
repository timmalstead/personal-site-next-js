"use client"
import { useA11yValue } from "../../_utils/useA11yValue"
import type { ReducedMotion, A11yKeyObject } from "../../_utils/types"

const reducedMotionId = "reduced-motion-input"
const motionKey: A11yKeyObject<ReducedMotion> = {
    reduce: "no-preference",
    "no-preference": "reduce",
    true: "reduce",
    false: "no-preference",
}
const ReduceMotion = ({
    reducedMotionProp,
}: {
    reducedMotionProp: ReducedMotion
}) => {
    const [reducedMotion, toggleReducedMotion] = useA11yValue<ReducedMotion>({
        cookieName: "reducedMotion",
        initialValue: reducedMotionProp,
        keyObject: motionKey,
        matchMediaQuery: "(prefers-reduced-motion: reduce)",
    })

    return (
        <li>
            <label htmlFor={reducedMotionId}>reduced motion</label>
            <input
                checked={reducedMotion === "reduce"}
                onChange={toggleReducedMotion}
                type="checkbox"
                id={reducedMotionId}
            />
        </li>
    )
}

export default ReduceMotion
