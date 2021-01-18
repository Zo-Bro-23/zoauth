import { AuthorityType } from "./AuthorityType";
import { IUri } from "../url/IUri";
import { INetworkModule } from "../network/INetworkModule";
import { ProtocolMode } from "./ProtocolMode";
/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
export declare class Authority {
    private _canonicalAuthority;
    private _canonicalAuthorityUrlComponents;
    private tenantDiscoveryResponse;
    protected networkInterface: INetworkModule;
    private authorityProtocolMode;
    constructor(authority: string, networkInterface: INetworkModule, protocolMode: ProtocolMode);
    get authorityType(): AuthorityType;
    /**
     * ProtocolMode enum representing the way endpoints are constructed.
     */
    get protocolMode(): ProtocolMode;
    /**
     * A URL that is the authority set by the developer
     */
    get canonicalAuthority(): string;
    /**
     * Sets canonical authority.
     */
    set canonicalAuthority(url: string);
    /**
     * Get authority components.
     */
    get canonicalAuthorityUrlComponents(): IUri;
    /**
     * Get tenant for authority.
     */
    get tenant(): string;
    /**
     * OAuth /authorize endpoint for requests
     */
    get authorizationEndpoint(): string;
    /**
     * OAuth /token endpoint for requests
     */
    get tokenEndpoint(): string;
    get deviceCodeEndpoint(): string;
    /**
     * OAuth logout endpoint for requests
     */
    get endSessionEndpoint(): string;
    /**
     * OAuth issuer for requests
     */
    get selfSignedJwtAudience(): string;
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    private replaceTenant;
    /**
     * The default open id configuration endpoint for any canonical authority.
     */
    protected get defaultOpenIdConfigurationEndpoint(): string;
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    discoveryComplete(): boolean;
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     * @param openIdConfigurationEndpoint
     */
    private discoverEndpoints;
    /**
     * Set the trusted hosts and validate subsequent calls
     */
    private validateAndSetPreferredNetwork;
    /**
     * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
     */
    resolveEndpointsAsync(): Promise<void>;
    /**
     * Determine if given hostname is alias of this authority
     * @param host
     */
    isAuthorityAlias(host: string): boolean;
    /**
     * helper function to generate environment from authority object
     * @param authority
     */
    static generateEnvironmentFromAuthority(authority: Authority): string;
}
