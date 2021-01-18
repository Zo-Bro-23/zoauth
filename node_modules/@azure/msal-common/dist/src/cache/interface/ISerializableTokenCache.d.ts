export interface ISerializableTokenCache {
    deserialize: (cache: string) => void;
    serialize: () => string;
}
