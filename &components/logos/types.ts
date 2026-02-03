import type { SVGAttributes } from "react"

export interface LogoProps {
    width: SVGAttributes<SVGSVGElement>["width"]
    height: SVGAttributes<SVGSVGElement>["height"]
    fill: SVGAttributes<SVGPathElement>["fill"]
}
