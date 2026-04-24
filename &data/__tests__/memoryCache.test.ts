// note that I am importing directly for these tests as the previous pattern of importing from the '&data/server' catchall was causing the tests to break
// this is because some of the OTHER files read in by that catchall had an es6 transpilation issue that only surfaced in a test environment.
// this is the simplest way to fix it
import {
    FIFTEEN_MINUTES_IN_MS,
    clearCacheKey,
    getCache,
    setCache,
} from "&data/memoryCache"

const [testCacheKey, testData] = ["/test", { test: "data" }]

const setData = () => setCache(testCacheKey, testData)
const expectNull = () => expect(getCache(testCacheKey)).toBeNull()
const expectData = () => expect(getCache(testCacheKey)).toEqual(testData)

describe("cache", () => {
    it("should return null when there is no matching data in the cache", () => {
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
