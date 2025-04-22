import { type AppBskyFeedPost } from "@atproto/api"

type BlueskyFacets = AppBskyFeedPost.Record["facets"]
type FacetKeys = "h" | "#" | "@"
type FacetTypes = {
    [FacetKey in FacetKeys]: {
        richTextType: string
        featureAttribute: string
        // prettier-ignore
        getFeatureValue: (status: string, i: number, j: number) => string | Promise<string>
    }
}

const facetTypes: FacetTypes = {
    h: {
        richTextType: "link",
        featureAttribute: "uri",
        getFeatureValue: (status, i, j) => status.slice(i, j),
    },
    "#": {
        richTextType: "tag",
        featureAttribute: "tag",
        getFeatureValue: (status, i, j) => status.slice(i + 1, j),
    },
    "@": {
        richTextType: "mention",
        featureAttribute: "did",
        getFeatureValue: async (status, i, j) => {
            const handle = status.slice(i + 1, j)
            const handleResolverUrl =
                "https://bsky.social/xrpc/com.atproto.identity.resolveHandle/"
            const resolvedHandle = await fetch(
                `${handleResolverUrl}?handle=${handle}`
            )

            const { did: resolvedDid }: { did: string } =
                await resolvedHandle.json()

            return resolvedDid
        },
    },
}
const SPACE = " "

export const parseFacetsForBluesky = async (
    status: string
): Promise<BlueskyFacets> => {
    const lowerCaseStatus = status.toLowerCase()
    const { length: strLen } = lowerCaseStatus

    const facets: BlueskyFacets = []
    for (let i = 0; i < strLen; ) {
        let facetParsed = false

        const firstChar = lowerCaseStatus[i]
        const firstCharMayStartFacet = firstChar in facetTypes

        if (firstCharMayStartFacet) {
            const facetMayBeUri = firstChar === "h"

            let shouldParseFacet: boolean, sliceEnd: number
            if (facetMayBeUri) {
                sliceEnd = i + 4
                const uriSlice = lowerCaseStatus.slice(i, sliceEnd)
                const sliceBeginsUri = uriSlice === "http"
                shouldParseFacet = sliceBeginsUri
            } else {
                sliceEnd = i
                const isFirstChar = i === 0
                const previousCharIsSpace = lowerCaseStatus[i - 1] === SPACE
                const shouldParseTagOrMention =
                    isFirstChar || previousCharIsSpace
                shouldParseFacet = shouldParseTagOrMention
            }

            if (shouldParseFacet) {
                let j = sliceEnd
                for (; j < strLen; ++j) {
                    const currentCharIsSpace = lowerCaseStatus[j] === SPACE
                    if (currentCharIsSpace) break
                }

                const { richTextType, featureAttribute, getFeatureValue } =
                    facetTypes[firstChar as FacetKeys]

                const facet = {
                    index: {
                        byteStart: i,
                        byteEnd: j,
                    },
                    features: [
                        {
                            $type: `app.bsky.richtext.facet#${richTextType}`,
                            // prettier-ignore
                            [featureAttribute]: await getFeatureValue(status, i, j),
                        },
                    ],
                }

                facets.push(facet)

                i = j + 1
                facetParsed = true
            }
        }
        if (!facetParsed) ++i
    }
    return facets
}
