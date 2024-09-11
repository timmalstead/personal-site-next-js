export interface A11yKey<T> {
    true: T
    false: T
    [key: string]: T
}

export interface Route {
    path: string
    title: string
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
