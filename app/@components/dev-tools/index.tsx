import type { ReactNode } from "react"

interface DevToolsProps {
    children: ReactNode
}

const shouldLoadDevTools = process.env?.ACTIVE_ENV !== "prod"

const DevTools = ({ children }: DevToolsProps) =>
    shouldLoadDevTools ? <div id="dev-tools">{children}</div> : <></>

export default DevTools
