import { NextRequest, NextResponse } from "next/server"
import {
    sendError,
    postOnBluesky,
    postOnMastodon,
    type MastodonPostArgs,
    type BlueSkyPostArgs,
    type PostOnMastodonReturn,
    type PostOnBlueskyReturn,
} from "@utils/server"

type FediArgs = {
    useBlueSky?: boolean
    useMastodon?: boolean
} & MastodonPostArgs &
    BlueSkyPostArgs

type FediResponse = Array<
    | PromiseRejectedResult
    | PromiseSettledResult<
          undefined | false | PostOnBlueskyReturn | PostOnMastodonReturn
      >
>

export const POST = async (request: NextRequest) => {
    try {
        const {
            status,
            useBlueSky,
            useMastodon,
            blueSkyArgs,
            mastodonArgs,
        }: FediArgs = await request.json()

        if (!useBlueSky && !useMastodon)
            throw new Error("Either 'useBlueSky' or 'useMastodon' must be true")
        if (!status) throw new Error("No 'status' provided")

        const response: FediResponse = await Promise.allSettled([
            useBlueSky && postOnBluesky({ status, blueSkyArgs }),
            useMastodon && postOnMastodon({ status, mastodonArgs }),
        ])

        return NextResponse.json(response)
    } catch (error) {
        return sendError(error)
    }
}
