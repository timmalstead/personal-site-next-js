import { forwardRef, type ObjectHTMLAttributes } from "react"
import Permission, { type PermissionProps } from "./Permission"

type ObjectProps = ObjectHTMLAttributes<HTMLObjectElement>
export type ObjectComponentProps = ObjectProps &
    PermissionProps & {
        permissionRequired?: boolean
    }
type ForwardedPermissionProps = Omit<
    ObjectComponentProps,
    "permissionMessage" | "permissionAlt"
>

const ObjectComponent = forwardRef<HTMLObjectElement, ObjectComponentProps>(
    (
        { permissionRequired, permissionMessage, permissionAlt, ...rest },
        ref
    ) => {
        const Wrapper =
            permissionRequired && permissionMessage
                ? (props: ForwardedPermissionProps) => (
                      <Permission
                          permissionMessage={permissionMessage}
                          permissionAlt={permissionAlt}
                          {...props}
                      />
                  )
                : (props: ObjectProps) => (
                      <div className="object-wrapper" {...props} />
                  )

        return (
            <Wrapper>
                <object ref={ref} {...rest} />
            </Wrapper>
        )
    }
)
ObjectComponent.displayName = "ObjectComponent"

export default ObjectComponent
