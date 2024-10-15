export interface A11yKey<T> {
    true: T
    false: T
    [key: string]: T
}

export interface ErrorObject {
    error: string
}

export interface Route {
    path: string
    title: string
}

export interface CreateArgs {
    docPath: string
    data: { [key: string]: any }
    confirmReplace?: boolean
}

export interface DestoryAndCreateResponse {
    success?: string
    error?: string
}

export type ColorMode = "light" | "dark"
export type ReducedMotion = "reduce" | "no-preference"
export type SettingsDismiss = "closed" | "open"
export type Browser =
    | "chrome"
    | "chromium"
    | "safari"
    | "firefox"
    | "edge"
    | "opera"
