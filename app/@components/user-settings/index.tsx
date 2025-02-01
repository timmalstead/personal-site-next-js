"use client"
import { useState, useEffect, type ReactNode } from "react"
import { setCookie, type SettingsDismiss } from "@utils/client"

interface UserSettingsProps {
    children: ReactNode
    userSettingsStatusProp: SettingsDismiss
}

const UserSettings = ({
    children,
    userSettingsStatusProp,
}: UserSettingsProps) => {
    const [userSettingsStatus, setUserSettingsStatus] =
        useState<SettingsDismiss>(userSettingsStatusProp)

    useEffect(
        () => setCookie("userSettings", userSettingsStatus),
        [userSettingsStatus]
    )

    const handleDismissClick = (): void =>
        setUserSettingsStatus(userSettingsStatus === "open" ? "closed" : "open")

    return (
        <div className={`user-settings ${userSettingsStatus}`}>
            <button
                onClick={handleDismissClick}
                title="Click to toggle user settings"
            >
                ↔
            </button>
            <details>
                <summary>settings</summary>
                <ul>{children}</ul>
            </details>
        </div>
    )
}

export default UserSettings
