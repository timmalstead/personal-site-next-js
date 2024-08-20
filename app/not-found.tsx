const errorStyle = `
    main.not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            font-weight: var(--heading-weight);
            border-bottom: 0.075rem solid;
            text-align: center;
        }
    }
`

const NotFound = () => (
    <main className="not-found">
        <style>{errorStyle}</style>
        <h1>404 - Page Not Found</h1>
    </main>
)

export default NotFound
