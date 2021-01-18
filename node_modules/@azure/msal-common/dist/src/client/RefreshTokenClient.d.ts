import { ClientConfiguration } from "../config/ClientConfiguration";
import { BaseClient } from "./BaseClient";
import { RefreshTokenRequest } from "../request/RefreshTokenRequest";
import { AuthenticationResult } from "../response/AuthenticationResult";
import { SilentFlowRequest } from "../request/SilentFlowRequest";
/**
 * OAuth2.0 refresh token client
 */
export declare class RefreshTokenClient extends BaseClient {
    constructor(configuration: ClientConfiguration);
    acquireToken(request: RefreshTokenRequest): Promise<AuthenticationResult>;
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */
    acquireTokenByRefreshToken(request: SilentFlowRequest): Promise<AuthenticationResult>;
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */
    private acquireTokenWithCachedRefreshToken;
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */
    private executeTokenRequest;
    /**
     * Helper function to create the token request body
     * @param request
     */
    private createTokenRequestBody;
}
