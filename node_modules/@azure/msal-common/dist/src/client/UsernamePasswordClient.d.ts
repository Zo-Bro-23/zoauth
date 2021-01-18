import { BaseClient } from "./BaseClient";
import { ClientConfiguration } from "../config/ClientConfiguration";
import { UsernamePasswordRequest } from "../request/UsernamePasswordRequest";
import { AuthenticationResult } from "../response/AuthenticationResult";
/**
 * Oauth2.0 Password grant client
 * Note: We are only supporting public clients for password grant and for purely testing purposes
 */
export declare class UsernamePasswordClient extends BaseClient {
    constructor(configuration: ClientConfiguration);
    /**
     * API to acquire a token by passing the username and password to the service in exchage of credentials
     * password_grant
     * @param request
     */
    acquireToken(request: UsernamePasswordRequest): Promise<AuthenticationResult | null>;
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    private executeTokenRequest;
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    private createTokenRequestBody;
}
