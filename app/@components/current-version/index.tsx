const currentVersion = process.env?.CURRENT_VERSION
const shouldLoadCurrentVersion =
    process.env?.ACTIVE_ENV !== "prod" && currentVersion

const CurrentVersion = () =>
    shouldLoadCurrentVersion && (
        <li>
            <label>version</label>
            <span style={{ cursor: "text", userSelect: "text" }}>
                {currentVersion}
            </span>
        </li>
    )

export default CurrentVersion
