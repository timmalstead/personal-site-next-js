import type { ReactNode } from "react"
import "./user-settings.css"

const UserSettings = ({ children }: { children: ReactNode }) => (
    <ul className="user-settings">{children}</ul>
)

export default UserSettings
