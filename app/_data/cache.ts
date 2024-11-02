interface CacheItem {
    expiry: number
    data: any
}
let cacheStorage: { [cacheKey: string]: CacheItem } = {}

// Fifteen minutes as that is, I believe, the lifespan of a cloud run instance if no new requests come in
export const [FIFTEEN_MINUTES_IN_MS, CACHE_ITEM_LIMIT] = [900000, 100]

const checkAndPossiblyClearCache = (): void => {
    const { length: cacheItemsCount } = Object.keys(cacheStorage)
    if (cacheItemsCount >= CACHE_ITEM_LIMIT) cacheStorage = {}
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
    checkAndPossiblyClearCache()
    const expiry = Date.now() + FIFTEEN_MINUTES_IN_MS
    cacheStorage[cacheKey] = { expiry, data }
}
