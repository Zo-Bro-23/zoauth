import { ISerializableTokenCache } from "../interface/ISerializableTokenCache";
export declare class TokenCacheContext {
    hasChanged: boolean;
    cache: ISerializableTokenCache;
    constructor(tokenCache: ISerializableTokenCache, hasChanged: boolean);
    get cacheHasChanged(): boolean;
    get tokenCache(): ISerializableTokenCache;
}
