import type { ReactNode } from "react"
import "./user-settings.css"

const UserSettings = ({ children }: { children: ReactNode }) => (
    <details className="user-settings">
        <summary>settings</summary>
        <ul>{children}</ul>
    </details>
)

export default UserSettings
