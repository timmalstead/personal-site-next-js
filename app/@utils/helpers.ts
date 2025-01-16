import { NextResponse } from "next/server"

export const isEven = (num: number): boolean => num % 2 === 0

export const floatingPointToPercentage = (float: number) => {
    let intString = float.toFixed(2).replace(".", "")
    if (intString[0] === "0") intString = intString.slice(1)
    return `${intString}%`
}

export const setCookie = (cookieName: string, cookieValue: string): void => {
    // some browsers (notably Safari) don't support requestIdleCallback 😑
    const setCookieCallback = () =>
        (document.cookie = `${cookieName}=${cookieValue}`)

    if (window.requestIdleCallback)
        window.requestIdleCallback(setCookieCallback)
    else setCookieCallback()
}

// I may have some other external logging here at some point
export const reportError = (error: unknown): Error => {
    console.error(error)
    return error as Error
}

export const sendError = (error: unknown) => {
    const typedError = error as Error
    return NextResponse.json({ error: typedError.message })
}
