import { INetworkModule } from "../network/INetworkModule";
import { CloudDiscoveryMetadata } from "./CloudDiscoveryMetadata";
import { UrlString } from "../url/UrlString";
export declare class TrustedAuthority {
    private static TrustedHostList;
    /**
     * Set the CloudDiscoveryMetadata object from knownAuthorities or cloudDiscoveryMetadata passed into the app config
     * @param knownAuthorities
     * @param cloudDiscoveryMetadata
     */
    static setTrustedAuthoritiesFromConfig(knownAuthorities: Array<string>, cloudDiscoveryMetadata: string): void;
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     * @param networkInterface
     */
    static setTrustedAuthoritiesFromNetwork(authorityToVerify: UrlString, networkInterface: INetworkModule): Promise<void>;
    /**
     *
     * @param metadata
     */
    static saveCloudDiscoveryMetadata(metadata: Array<CloudDiscoveryMetadata>): void;
    /**
     * Create a generic metadata object for each host passed to knownAuthorities.
     * This is mostly useful for B2C or ADFS scenarios
     * @param knownAuthorities
     */
    static createCloudDiscoveryMetadataFromKnownAuthorities(knownAuthorities: Array<string>): void;
    static getTrustedHostList(): Array<string>;
    /**
     * Get metadata for the provided host
     * @param host
     */
    static getCloudDiscoveryMetadata(host: string): CloudDiscoveryMetadata;
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param host
     */
    static IsInTrustedHostList(host: string): boolean;
}
