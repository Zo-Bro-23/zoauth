import { ICrypto } from "./ICrypto";
export declare class PopTokenGenerator {
    private cryptoUtils;
    constructor(cryptoUtils: ICrypto);
    generateCnf(resourceRequestMethod: string, resourceRequestUri: string): Promise<string>;
    signPopToken(accessToken: string, resourceRequestMethod: string, resourceRequestUri: string): Promise<string>;
}
