export interface A11yKey<T> {
    true: T
    false: T
    [key: string]: T
}

export type ColorMode = "light" | "dark"
export type ReducedMotion = "reduce" | "no-preference"
export type Browser =
    | "chrome"
    | "chromium"
    | "safari"
    | "firefox"
    | "edge"
    | "opera"
