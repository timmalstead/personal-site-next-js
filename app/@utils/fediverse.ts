import { createRestAPIClient as createMastodonAgent } from "masto"
import { AtpAgent as BlueSkyAgent, type AppBskyFeedPost } from "@atproto/api"

type MastodonStatusCreateArgs = Parameters<
    ReturnType<typeof createMastodonAgent>["v1"]["statuses"]["create"]
>

type PostReturn<T extends (...args: any) => any> = Awaited<ReturnType<T>>
export type PostOnMastodonReturn = PostReturn<typeof postOnMastodon>
export type PostOnBlueskyReturn = PostReturn<typeof postOnBluesky>

export interface BlueSkyPostArgs {
    status: string
    blueSkyArgs?: Omit<AppBskyFeedPost.Record, "text">
}

export interface MastodonPostArgs {
    status: string
    mastodonArgs?: {
        params: MastodonStatusCreateArgs[0]
        meta: MastodonStatusCreateArgs[1]
    }
}

export const postOnBluesky = async ({
    status,
    blueSkyArgs,
}: BlueSkyPostArgs) => {
    const blueSky = new BlueSkyAgent({
        service: "https://bsky.social",
    })

    await blueSky.login({
        // note that you do NOT need to preface this with the @ sign
        identifier: "timothymalstead.com",
        password: process.env.BLUESKY_TOKEN,
    })

    return await blueSky.post({
        text: status,
        ...blueSkyArgs,
    })
}

export const postOnMastodon = async ({
    status,
    mastodonArgs,
}: MastodonPostArgs) => {
    const mastodon = createMastodonAgent({
        url: "https://mastodon.social",
        accessToken: process.env.MASTODON_TOKEN,
    })

    return await mastodon.v1.statuses.create(
        {
            status,
            ...mastodonArgs?.params,
        },
        mastodonArgs?.meta
    )
}
