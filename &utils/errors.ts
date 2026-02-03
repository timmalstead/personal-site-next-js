import { NextResponse } from "next/server"

// I may have some other external logging here at some point
export const reportError = (error: unknown): Error => {
    console.error(error)
    return error as Error
}

export const sendError = (error: unknown) => {
    const typedError = error as Error
    return NextResponse.json({ error: typedError.message })
}
