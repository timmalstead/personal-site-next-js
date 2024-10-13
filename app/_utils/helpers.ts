import type { ErrorObject } from "./sharedTypes"

export const isEven = (num: number): boolean => num % 2 === 0

export const floatingPointToPercentage = (float: number) => {
    let intString = float.toFixed(2).replace(".", "")
    if (intString[0] === "0") intString = intString.slice(1)
    return `${intString}%`
}

export const setCookie = (cookieName: string, cookieValue: string): void => {
    // some browsers (notably Safari) don't support requestIdleCallback 😑
    const setDismissalCookie = () =>
        (document.cookie = `${cookieName}=${cookieValue}`)

    if (window.requestIdleCallback)
        window.requestIdleCallback(setDismissalCookie)
    else setDismissalCookie()
}

export const handleError = (error: unknown): ErrorObject => {
    const typedError = error as Error
    console.error(typedError)
    return {
        error: typedError.message,
    }
}
