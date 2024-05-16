import type { ReactNode } from "react"
import "./user-settings.css"

// use a custom svg logo instead of the marker?
// what says 'settings' that isn't a gear?
const UserSettings = ({ children }: { children: ReactNode }) => (
    <details className="user-settings">
        <summary>settings</summary>
        <ul>{children}</ul>
    </details>
)

export default UserSettings
