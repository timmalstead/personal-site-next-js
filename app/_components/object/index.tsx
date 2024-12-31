import { forwardRef, type ObjectHTMLAttributes } from "react"
import "./object.css"

export type ObjectComponentProps = ObjectHTMLAttributes<HTMLObjectElement>

const ObjectComponent = forwardRef<HTMLObjectElement, ObjectComponentProps>(
    (props, ref) => <object className="embedded-data" ref={ref} {...props} />
)
ObjectComponent.displayName = "ObjectComponent"

export default ObjectComponent
