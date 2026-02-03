import { cookies, headers } from "next/headers"

export const getServerValue = async <T extends unknown>({
    cookieName,
    headerName,
    defaultName,
}: {
    cookieName?: string
    headerName?: string
    defaultName: T
}): Promise<T> => {
    const cookie = !!cookieName && (await cookies()).get(cookieName)?.value
    const header = !!headerName && (await headers()).get(headerName)
    return (cookie || header || defaultName) as T
}
