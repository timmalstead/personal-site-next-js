import { cookies, headers } from "next/headers"

export const getServerValue = <T extends unknown>({
    cookieName,
    headerName,
    defaultName,
}: {
    cookieName?: string
    headerName?: string
    defaultName: T
}): T => {
    const cookie = !!cookieName && cookies().get(cookieName)?.value
    const header = !!headerName && headers().get(headerName)
    return (cookie || header || defaultName) as T
}
