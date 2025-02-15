const currentVersion = process.env?.CURRENT_VERSION

const CurrentVersion = () =>
    currentVersion ? (
        <li>
            <label>version</label>
            <span
                id="current-version"
                style={{ cursor: "text", userSelect: "text" }}
            >
                {currentVersion}
            </span>
        </li>
    ) : (
        <></>
    )

export default CurrentVersion
