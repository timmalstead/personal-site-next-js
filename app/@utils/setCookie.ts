"use client"

export const setCookie = (cookieName: string, cookieValue: string): void => {
    // some browsers (notably Safari) don't support requestIdleCallback 😑
    const setCookieCallback = () =>
        (document.cookie = `${cookieName}=${cookieValue}`)

    if (window.requestIdleCallback)
        window.requestIdleCallback(setCookieCallback)
    else setCookieCallback()
}
