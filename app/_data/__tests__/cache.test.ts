import {
    FIFTEEN_MINUTES_IN_MS,
    clearCacheKey,
    getCache,
    setCache,
} from "../cache"

const [testCacheKey, testData] = ["/test", { test: "data" }]

const setData = () => setCache(testCacheKey, testData)
const expectNull = () => expect(getCache(testCacheKey)).toBeNull()
const expectData = () => expect(getCache(testCacheKey)).toEqual(testData)

describe("cache", () => {
    it("should return null when there is matching data in the cache", () => {
        expectNull()
    })

    it("should set and get data from the cache", () => {
        setData()
        expectData()
    })

    it("should clear the cache", () => {
        setData()
        expectData()
        clearCacheKey(testCacheKey)
        expectNull()
    })

    it("should return null when the cache is expired", () => {
        setData()
        expectData()

        jest.spyOn(global.Date, "now").mockReturnValueOnce(
            Date.now() + FIFTEEN_MINUTES_IN_MS
        )

        expectNull()
    })
})
