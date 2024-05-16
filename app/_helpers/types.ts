export interface Route {
    path: string
    title: string
}

export interface A11yKeyObject<T> {
    true: T
    false: T
    [key: string]: T
}

export type ColorMode = "light" | "dark"
export type ReducedMotion = "reduce" | "no-preference"
