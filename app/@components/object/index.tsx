import { forwardRef, type ObjectHTMLAttributes } from "react"
import Permission, { type PermissionProps } from "./Permission"

export type ObjectComponentProps = ObjectHTMLAttributes<HTMLObjectElement> &
    PermissionProps & {
        permissionRequired?: boolean
    }

const ObjectComponent = forwardRef<HTMLObjectElement, ObjectComponentProps>(
    (
        { permissionRequired, permissionMessage, permissionAlt, ...rest },
        ref
    ) => {
        const Wrapper =
            permissionRequired && permissionMessage
                ? (props: any) => (
                      <Permission
                          permissionMessage={permissionMessage}
                          permissionAlt={permissionAlt}
                          {...props}
                      />
                  )
                : (props: any) => <div className="object-wrapper" {...props} />

        return (
            <Wrapper>
                <object ref={ref} {...rest} />
            </Wrapper>
        )
    }
)
ObjectComponent.displayName = "ObjectComponent"

export default ObjectComponent
