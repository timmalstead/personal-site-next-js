"use client"
import { useState, type ReactNode } from "react"

export interface PermissionProps {
    children: ReactNode
    permissionMessage: string
    permissionAlt: string
}

const Permission = ({
    permissionMessage,
    permissionAlt,
    children,
}: PermissionProps) => {
    const [granted, setGranted] = useState<boolean>(false)

    const permissionButton = (
        <button onClick={() => setGranted(true)} title={permissionAlt}>
            {permissionMessage}
        </button>
    )

    return (
        <div className="object-wrapper">
            {granted ? children : permissionButton}
        </div>
    )
}

export default Permission
