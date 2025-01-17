import "./current-version.css"

const currentVersion = process.env?.CURRENT_VERSION
const shouldLoadCurrentVersion =
    process.env?.ACTIVE_ENV !== "prod" && currentVersion

const CurrentVersion = () =>
    shouldLoadCurrentVersion && (
        <li className="current-version">
            <label>version</label>
            <span>{currentVersion}</span>
        </li>
    )

export default CurrentVersion
