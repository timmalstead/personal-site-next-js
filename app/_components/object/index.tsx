import { forwardRef, type ObjectHTMLAttributes } from "react"

export type ObjectComponentProps = ObjectHTMLAttributes<HTMLObjectElement>

const ObjectComponent = forwardRef<HTMLObjectElement, ObjectComponentProps>(
    (props, ref) => <object ref={ref} {...props} />
)
ObjectComponent.displayName = "ObjectComponent"

export default ObjectComponent
