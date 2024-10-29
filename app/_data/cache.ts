interface CacheItem {
    expiry: number
    data: any
}

// Fifteen minutes as that is, I believe, the lifespan of a cloud run instance if no new requests come in
const FIFTEEN_MINUTES_IN_MS = 900000
const CACHE_LIMIT = 100

let cacheStorage: { [key: string]: CacheItem } = {}

const checkAndPossiblyClearCache = (): void => {
    const cacheKeys = Object.keys(cacheStorage)
    if (cacheKeys.length >= CACHE_LIMIT) cacheStorage = {}
}

export const clearCacheKey = (cacheKey: string): void => {
    delete cacheStorage[cacheKey]
}

export const getCache = (cacheKey: string): any => {
    const cacheItem = cacheStorage[cacheKey]
    if (cacheItem) {
        const { expiry, data } = cacheItem

        const cacheValid = Date.now() < expiry
        if (cacheValid) return data
        else clearCacheKey(cacheKey)
    }
    return null
}
export const setCache = (cacheKey: string, data: any): void => {
    const expiry = Date.now() + FIFTEEN_MINUTES_IN_MS
    cacheStorage[cacheKey] = { expiry, data }
    checkAndPossiblyClearCache()
}
