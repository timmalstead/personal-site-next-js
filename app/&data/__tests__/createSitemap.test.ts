import { createSitemap } from "app/&data/server"

let savedSitemap = ""
jest.mock("&data/firestore", () => {
    const firestoreMock = class {
        mockActiveData = [
            { id: "home" },
            { id: "blog" },
            { id: "api" },
            { id: "component-data" },
        ].map((id: { id: string }) => ({
            ...id,
            data: {
                components: [
                    {
                        name: "LastModified",
                        lastModifiedDate: 1734808042847,
                    },
                ],
            },
        }))

        // any isn't always a problem
        mockDocData: { [key: string]: any } = {
            blog: [{ id: "travel" }, { id: "art" }, { id: "philosophy" }].map(
                (id: { id: string }) => ({
                    ...id,
                    data: {},
                })
            ),
        }

        public async listCollections() {
            return this.mockActiveData.map(({ id, data }) => ({
                id,
                get: async () => ({ docs: [{ data: () => data }] }),
            }))
        }

        // a bit hacky, but it suits my purposes
        public collection(collectionId: string) {
            return {
                listDocuments: async () => {
                    return this.mockDocData[collectionId].map(
                        ({ id, data }: { id: string; data: any }) => {
                            return {
                                id,
                                collection: () => {
                                    return {
                                        doc: () => {
                                            return {
                                                get: async () => ({
                                                    data: () => data,
                                                }),
                                            }
                                        },
                                    }
                                },
                            }
                        }
                    )
                },
            }
        }
    }

    return {
        firestoreDatabase: new firestoreMock(),
    }
})
jest.mock("&data/cloudStorage", () => {
    const cloudStorageMock = class {
        public bucket() {
            return this
        }
        public file() {
            return this
        }
        public save(sitemapToSave: string) {
            savedSitemap = sitemapToSave
        }
    }
    return {
        cloudStorage: new cloudStorageMock(),
    }
})

const expectedSitemap =
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.timothymalstead.com</loc><lastmod>2024-12-21T19:07:22.847Z</lastmod></url><url><loc>https://www.timothymalstead.com/blog</loc><lastmod>2024-12-21T19:07:22.847Z</lastmod></url><url><loc>https://www.timothymalstead.com/blog/travel</loc></url><url><loc>https://www.timothymalstead.com/blog/art</loc></url><url><loc>https://www.timothymalstead.com/blog/philosophy</loc></url></urlset>'
const xmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>'
const [urlSetOpening, urlSetClosing] = [
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "</urlset>",
]
const [
    expectedNumberOfUrlTags,
    expectedNumberOfLocTags,
    expectedNumberOfLastModTags,
] = [5, 5, 2]

describe("createSitemap", () => {
    beforeAll(async () => {
        await createSitemap()
    })
    it("should create the expected sitemap", () => {
        expect(savedSitemap).toEqual(expectedSitemap)
    })

    it("should NOT include any info on the routes meant to be ignored", () => {
        expect(savedSitemap).not.toContain("api")
        expect(savedSitemap).not.toContain("component-data")
    })

    it("should start with an XML declaration", () => {
        expect(savedSitemap.startsWith(xmlDeclaration)).toBe(true)
    })

    it("should have the correct opening and closing <urlset> tags", () => {
        const endOfXMLDeclaration = xmlDeclaration.length
        expect(
            savedSitemap.startsWith(urlSetOpening, endOfXMLDeclaration)
        ).toBe(true)
        expect(savedSitemap.endsWith(urlSetClosing)).toBe(true)
    })

    it.each([
        {
            stringToCount: "https://www.timothymalstead.com",
            stringType: "urls",
            expectedNumberOfStrings: expectedNumberOfUrlTags,
        },
        {
            stringToCount: "2024-12-21T19:07:22.847Z",
            stringType: "W3C Datetime instances",
            expectedNumberOfStrings: expectedNumberOfLastModTags,
        },
        {
            stringToCount: "<url>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfUrlTags,
        },
        {
            stringToCount: "</url>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfUrlTags,
        },
        {
            stringToCount: "<loc>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfLocTags,
        },
        {
            stringToCount: "</loc>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfLocTags,
        },
        {
            stringToCount: "<lastmod>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfLastModTags,
        },
        {
            stringToCount: "</lastmod>",
            stringType: "tags",
            expectedNumberOfStrings: expectedNumberOfLastModTags,
        },
    ])(
        "should have the correct number of $stringToCount $stringType",
        ({ stringToCount, expectedNumberOfStrings }) => {
            const numberOfTags = savedSitemap.match(
                new RegExp(stringToCount, "g")
            )?.length
            expect(numberOfTags).toEqual(expectedNumberOfStrings)
        }
    )
})
