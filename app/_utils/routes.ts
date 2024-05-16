interface Route {
    path: string
    title: string
}

export const routes: Route[] = [
    { path: "/", title: "home" },
    { path: "/about", title: "about" },
    { path: "/blog", title: "blog" },
    { path: "/art", title: "art" },
]
