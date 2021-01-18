/*! @azure/msal-common v2.1.0 2021-01-12 */
'use strict';
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    // ADFS String
    ADFS: "adfs",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    FORWARD_SLASH: "/"
};
/**
 * Request header names
 */
var HeaderNames;
(function (HeaderNames) {
    HeaderNames["CONTENT_TYPE"] = "Content-Type";
    HeaderNames["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
    HeaderNames["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
    HeaderNames["RETRY_AFTER"] = "Retry-After";
    HeaderNames["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
    HeaderNames["X_MS_LIB_CAPABILITY_VALUE"] = "retry-after, h429";
})(HeaderNames || (HeaderNames = {}));
/**
 * Persistent cache keys MSAL which stay while user is logged in.
 */
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["ID_TOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
    PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
    PersistentCacheKeys["ERROR"] = "error";
    PersistentCacheKeys["ERROR_DESC"] = "error.description";
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
/**
 * String constants related to AAD Authority
 */
var AADAuthorityConstants;
(function (AADAuthorityConstants) {
    AADAuthorityConstants["COMMON"] = "common";
    AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
    AADAuthorityConstants["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
/**
 * Keys in the hashParams sent by AAD Server
 */
var AADServerParamKeys;
(function (AADServerParamKeys) {
    AADServerParamKeys["CLIENT_ID"] = "client_id";
    AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
    AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
    AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
    AADServerParamKeys["GRANT_TYPE"] = "grant_type";
    AADServerParamKeys["CLAIMS"] = "claims";
    AADServerParamKeys["SCOPE"] = "scope";
    AADServerParamKeys["ERROR"] = "error";
    AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
    AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
    AADServerParamKeys["ID_TOKEN"] = "id_token";
    AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
    AADServerParamKeys["EXPIRES_IN"] = "expires_in";
    AADServerParamKeys["STATE"] = "state";
    AADServerParamKeys["NONCE"] = "nonce";
    AADServerParamKeys["PROMPT"] = "prompt";
    AADServerParamKeys["SESSION_STATE"] = "session_state";
    AADServerParamKeys["CLIENT_INFO"] = "client_info";
    AADServerParamKeys["CODE"] = "code";
    AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
    AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
    AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
    AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
    AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
    AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
    AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
    AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
    AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
    AADServerParamKeys["ID_TOKEN_HINT"] = "id_token_hint";
    AADServerParamKeys["DEVICE_CODE"] = "device_code";
    AADServerParamKeys["CLIENT_SECRET"] = "client_secret";
    AADServerParamKeys["CLIENT_ASSERTION"] = "client_assertion";
    AADServerParamKeys["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
    AADServerParamKeys["TOKEN_TYPE"] = "token_type";
    AADServerParamKeys["REQ_CNF"] = "req_cnf";
    AADServerParamKeys["OBO_ASSERTION"] = "assertion";
    AADServerParamKeys["REQUESTED_TOKEN_USE"] = "requested_token_use";
    AADServerParamKeys["ON_BEHALF_OF"] = "on_behalf_of";
    AADServerParamKeys["FOCI"] = "foci";
})(AADServerParamKeys || (AADServerParamKeys = {}));
/**
 * Claims request keys
 */
var ClaimsRequestKeys;
(function (ClaimsRequestKeys) {
    ClaimsRequestKeys["ACCESS_TOKEN"] = "access_token";
    ClaimsRequestKeys["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */
var PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
/**
 * Disallowed extra query parameters.
 */
var BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
/**
 * allowed values for codeVerifier
 */
var CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};
/**
 * allowed values for response_mode
 */
var ResponseMode;
(function (ResponseMode) {
    ResponseMode["QUERY"] = "query";
    ResponseMode["FRAGMENT"] = "fragment";
    ResponseMode["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
/**
 * allowed grant_type
 */
var GrantType;
(function (GrantType) {
    GrantType["IMPLICIT_GRANT"] = "implicit";
    GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
    GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
    GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
    GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
    GrantType["DEVICE_CODE_GRANT"] = "device_code";
    GrantType["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
/**
 * Account types in Cache
 */
var CacheAccountType;
(function (CacheAccountType) {
    CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
    CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
    CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
    CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
})(CacheAccountType || (CacheAccountType = {}));
/**
 * Separators used in cache
 */
var Separators;
(function (Separators) {
    Separators["CACHE_KEY_SEPARATOR"] = "-";
    Separators["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
/**
 * Credential Type stored in the cache
 */
var CredentialType;
(function (CredentialType) {
    CredentialType["ID_TOKEN"] = "IdToken";
    CredentialType["ACCESS_TOKEN"] = "AccessToken";
    CredentialType["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
/**
 * Credential Type stored in the cache
 */
var CacheSchemaType;
(function (CacheSchemaType) {
    CacheSchemaType["ACCOUNT"] = "Account";
    CacheSchemaType["CREDENTIAL"] = "Credential";
    CacheSchemaType["ID_TOKEN"] = "IdToken";
    CacheSchemaType["ACCESS_TOKEN"] = "AccessToken";
    CacheSchemaType["REFRESH_TOKEN"] = "RefreshToken";
    CacheSchemaType["APP_METADATA"] = "AppMetadata";
    CacheSchemaType["TEMPORARY"] = "TempCache";
    CacheSchemaType["TELEMETRY"] = "Telemetry";
    CacheSchemaType["UNDEFINED"] = "Undefined";
    CacheSchemaType["THROTTLING"] = "Throttling";
})(CacheSchemaType || (CacheSchemaType = {}));
/**
 * Combine all cache types
 */
var CacheType;
(function (CacheType) {
    CacheType[CacheType["ADFS"] = 1001] = "ADFS";
    CacheType[CacheType["MSA"] = 1002] = "MSA";
    CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
    CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
    CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
    CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
    CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
    CacheType[CacheType["APP_METADATA"] = 3001] = "APP_METADATA";
    CacheType[CacheType["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
/**
 * More Cache related constants
 */
var APP_METADATA = "appmetadata";
var ClientInfo = "client_info";
var THE_FAMILY_ID = "1";
var SERVER_TELEM_CONSTANTS = {
    SCHEMA_VERSION: 2,
    MAX_HEADER_BYTES: 4000,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};
/**
 * Type of the authentication request
 */
var AuthenticationScheme;
(function (AuthenticationScheme) {
    AuthenticationScheme["POP"] = "pop";
    AuthenticationScheme["BEARER"] = "Bearer";
})(AuthenticationScheme || (AuthenticationScheme = {}));
/**
 * Constants related to throttling
 */
var ThrottlingConstants = {
    // Default time to throttle RequestThumbprint in seconds
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    // Default maximum time to throttle in seconds, overrides what the server sends back
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    // Prefix for storing throttling entries
    THROTTLING_PREFIX: "throttling"
};
var Errors = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch",
};
/**
 * Password grant parameters
 */
var PasswordGrantConstants;
(function (PasswordGrantConstants) {
    PasswordGrantConstants["username"] = "username";
    PasswordGrantConstants["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 */
var AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    __extends(AuthError, _super);
    function AuthError(errorCode, errorMessage, suberror) {
        var _this = this;
        var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
        _this = _super.call(this, errorString) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode || Constants.EMPTY_STRING;
        _this.errorMessage = errorMessage || "";
        _this.subError = suberror || "";
        _this.name = "AuthError";
        return _this;
    }
    /**
     * Creates an error that is thrown when something unexpected happens in the library.
     * @param errDesc
     */
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: function () {
        var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Decode: function () {
        var notImplErr = "Crypto interface - base64Decode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Encode: function () {
        var notImplErr = "Crypto interface - base64Encode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    generatePkceCodes: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    getPublicKeyThumbprint: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    signJwt: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Crypto interface - signJwt() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientAuthErrorMessage class containing string constants used by error codes and messages.
 */
var ClientAuthErrorMessage = {
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoEmptyError: {
        code: "client_info_empty_error",
        desc: "The client info was empty. Please review the trace to determine the root cause."
    },
    tokenParsingError: {
        code: "token_parsing_error",
        desc: "Token cannot be parsed. Please review stack trace to determine root cause."
    },
    nullOrEmptyToken: {
        code: "null_or_empty_token",
        desc: "The token is null or empty. Please review the trace to determine the root cause."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    hashNotDeserialized: {
        code: "hash_not_deserialized",
        desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
    },
    blankGuidGenerated: {
        code: "blank_guid_generated",
        desc: "The guid generated was blank. Please review the trace to determine the root cause."
    },
    invalidStateError: {
        code: "invalid_state",
        desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
    },
    stateMismatchError: {
        code: "state_mismatch",
        desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
    },
    stateNotFoundError: {
        code: "state_not_found",
        desc: "State not found"
    },
    nonceMismatchError: {
        code: "nonce_mismatch",
        desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
    },
    nonceNotFoundError: {
        code: "nonce_not_found",
        desc: "nonce not found"
    },
    noTokensFoundError: {
        code: "no_tokens_found",
        desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
    },
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements such as authority or account."
    },
    multipleMatchingAccounts: {
        code: "multiple_matching_accounts",
        desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
    },
    multipleMatchingAppMetadata: {
        code: "multiple_matching_appMetadata",
        desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
    },
    tokenRequestCannotBeMade: {
        code: "request_cannot_be_made",
        desc: "Token request cannot be made without authorization code or refresh token."
    },
    appendEmptyScopeError: {
        code: "cannot_append_empty_scope",
        desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
    },
    removeEmptyScopeError: {
        code: "cannot_remove_empty_scope",
        desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
    },
    appendScopeSetError: {
        code: "cannot_append_scopeset",
        desc: "Cannot append ScopeSet due to error."
    },
    emptyInputScopeSetError: {
        code: "empty_input_scopeset",
        desc: "Empty input ScopeSet cannot be processed."
    },
    DeviceCodePollingCancelled: {
        code: "device_code_polling_cancelled",
        desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
    },
    DeviceCodeExpired: {
        code: "device_code_expired",
        desc: "Device code is expired."
    },
    NoAccountInSilentRequest: {
        code: "no_account_in_silent_request",
        desc: "Please pass an account object, silent flow is not supported without account information"
    },
    invalidCacheRecord: {
        code: "invalid_cache_record",
        desc: "Cache record object was null or undefined."
    },
    invalidCacheEnvironment: {
        code: "invalid_cache_environment",
        desc: "Invalid environment when attempting to create cache entry"
    },
    noAccountFound: {
        code: "no_account_found",
        desc: "No account found in cache for given key."
    },
    CachePluginError: {
        code: "no cache plugin set on CacheManager",
        desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
    },
    noCryptoObj: {
        code: "no_crypto_object",
        desc: "No crypto object detected. This is required for the following operation: "
    },
    invalidCacheType: {
        code: "invalid_cache_type",
        desc: "Invalid cache type"
    },
    unexpectedAccountType: {
        code: "unexpected_account_type",
        desc: "Unexpected account type."
    },
    unexpectedCredentialType: {
        code: "unexpected_credential_type",
        desc: "Unexpected credential type."
    },
    invalidAssertion: {
        code: "invalid_assertion",
        desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
    },
    invalidClientCredential: {
        code: "invalid_client_credential",
        desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
    },
    tokenRefreshRequired: {
        code: "token_refresh_required",
        desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
    },
    userTimeoutReached: {
        code: "user_timeout_reached",
        desc: "User defined timeout for device code polling reached",
    },
    tokenClaimsRequired: {
        code: "token_claims_cnf_required_for_signedjwt",
        desc: "Cannot generate a POP jwt if the token_claims are not populated"
    },
    noAuthorizationCodeFromServer: {
        code: "authorization_code_missing_from_server_response",
        desc: "Srver response does not contain an authorization code to proceed"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    __extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when client info object doesn't decode correctly.
     * @param caughtError
     */
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    /**
     * Creates an error thrown if the client info is empty.
     * @param rawClientInfo
     */
    ClientAuthError.createClientInfoEmptyError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
    };
    /**
     * Creates an error thrown when the id token extraction errors out.
     * @param err
     */
    ClientAuthError.createTokenParsingError = function (caughtExtractionError) {
        return new ClientAuthError(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    /**
     * Creates an error thrown when the id token string is null or empty.
     * @param invalidRawTokenString
     */
    ClientAuthError.createTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
    };
    /**
     * Creates an error thrown when the endpoint discovery doesn't complete correctly.
     */
    ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    /**
     * Creates an error thrown when the hash cannot be deserialized.
     * @param hashParamObj
     */
    ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
        return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    /**
     * Creates an error thrown when the state cannot be parsed.
     * @param invalidState
     */
    ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    /**
     * Creates an error thrown when two states do not match.
     */
    ClientAuthError.createStateMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    /**
     * Creates an error thrown when the state is not present
     * @param missingState
     */
    ClientAuthError.createStateNotFoundError = function (missingState) {
        return new ClientAuthError(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
    };
    /**
     * Creates an error thrown when the nonce does not match.
     */
    ClientAuthError.createNonceMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    /**
     * Creates an error thrown when the mnonce is not present
     * @param missingNonce
     */
    ClientAuthError.createNonceNotFoundError = function (missingNonce) {
        return new ClientAuthError(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
    };
    /**
     * Creates an error thrown when the authorization code required for a token request is null or empty.
     */
    ClientAuthError.createNoTokensFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
    };
    /**
     * Throws error when multiple tokens are in cache.
     */
    ClientAuthError.createMultipleMatchingTokensInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    /**
     * Throws error when multiple accounts are in cache for the given params
     */
    ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    /**
     * Throws error when multiple appMetada are in cache for the given clientId.
     */
    ClientAuthError.createMultipleMatchingAppMetadataInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
    };
    /**
     * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
     */
    ClientAuthError.createTokenRequestCannotBeMadeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append null or empty ScopeSet.
     * @param appendError
     */
    ClientAuthError.createAppendScopeSetError = function (appendError) {
        return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    /**
     * Throws error if ScopeSet is null or undefined.
     * @param givenScopeSet
     */
    ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
        return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
    };
    /**
     * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
     */
    ClientAuthError.createDeviceCodeCancelledError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    /**
     * Throws error if device code is expired
     */
    ClientAuthError.createDeviceCodeExpiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    /**
     * Throws error when silent requests are made without an account object
     */
    ClientAuthError.createNoAccountInSilentRequestError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    /**
     * Throws error when cache record is null or undefined.
     */
    ClientAuthError.createNullOrUndefinedCacheRecord = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    /**
     * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
     */
    ClientAuthError.createInvalidCacheEnvironmentError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    /**
     * Throws error when account is not found in cache.
     */
    ClientAuthError.createNoAccountFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    /**
     * Throws error if ICachePlugin not set on CacheManager.
     */
    ClientAuthError.createCachePluginError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    /**
     * Throws error if crypto object not found.
     * @param operationName
     */
    ClientAuthError.createNoCryptoObjectError = function (operationName) {
        return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    /**
     * Throws error if cache type is invalid.
     */
    ClientAuthError.createInvalidCacheTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    /**
     * Throws error if unexpected account type.
     */
    ClientAuthError.createUnexpectedAccountTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    /**
     * Throws error if unexpected credential type.
     */
    ClientAuthError.createUnexpectedCredentialTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidAssertionError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidCredentialError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
    };
    /**
     * Throws error if token cannot be retrieved from cache due to refresh being required.
     */
    ClientAuthError.createRefreshRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
    };
    /**
     * Throws error if the user defined timeout is reached.
     */
    ClientAuthError.createUserTimeoutReachedError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
    };
    /*
     * Throws error if token claims are not populated for a signed jwt generation
     */
    ClientAuthError.createTokenClaimsRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
    };
    /**
     * Throws error when the authorization code is missing from the server response
     */
    ClientAuthError.createNoAuthCodeInServerResponseError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
    };
    return ClientAuthError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * decode a JWT
     *
     * @param authToken
     */
    StringUtils.decodeAuthToken = function (authToken) {
        if (StringUtils.isEmpty(authToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(authToken);
        }
        var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = tokenPartsRegex.exec(authToken);
        if (!matches || matches.length < 4) {
            throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Check if a string is empty.
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    StringUtils.startsWith = function (str, search) {
        return str.indexOf(search) === 0;
    };
    StringUtils.endsWith = function (str, search) {
        return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
    };
    /**
     * Parses string into an object.
     *
     * @param query
     */
    StringUtils.queryStringToObject = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(decodeURIComponent(s.replace(pl, " "))); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    /**
     * Trims entries in an array.
     *
     * @param arr
     */
    StringUtils.trimArrayEntries = function (arr) {
        return arr.map(function (entry) { return entry.trim(); });
    };
    /**
     * Removes empty strings from array
     * @param arr
     */
    StringUtils.removeEmptyStringsFromArray = function (arr) {
        return arr.filter(function (entry) {
            return !StringUtils.isEmpty(entry);
        });
    };
    /**
     * Attempts to parse a string into JSON
     * @param str
     */
    StringUtils.jsonParseHelper = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    /**
     * Tests if a given string matches a given pattern, with support for wildcards.
     * @param pattern Wildcard pattern to string match. Supports "*" for wildcards
     * @param input String to match against
     */
    StringUtils.matchPattern = function (pattern, input) {
        // https://stackoverflow.com/a/3117248/4888559
        var regex = new RegExp(pattern.replace(/\*/g, "[^ ]*"));
        return regex.test(input);
    };
    return StringUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Log message level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (LogLevel = {}));
/**
 * Class which facilitates logging of messages to a specific place.
 */
var Logger = /** @class */ (function () {
    function Logger(loggerOptions, packageName, packageVersion) {
        // Current log level, defaults to info.
        this.level = LogLevel.Info;
        var defaultLoggerCallback = function () { };
        this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
        this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
        this.level = loggerOptions.logLevel || LogLevel.Info;
        this.packageName = packageName || Constants.EMPTY_STRING;
        this.packageVersion = packageVersion || Constants.EMPTY_STRING;
    }
    /**
     * Create new Logger with existing configurations.
     */
    Logger.prototype.clone = function (packageName, packageVersion) {
        return new Logger({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level }, packageName, packageVersion);
    };
    /**
     * Log message with required options.
     */
    Logger.prototype.logMessage = function (logMessage, options) {
        if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
        var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
        // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
        this.executeCallback(options.logLevel, log, options.containsPii || false);
    };
    /**
     * Execute callback with message.
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * Logs error messages.
     */
    Logger.prototype.error = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs error messages with PII.
     */
    Logger.prototype.errorPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages.
     */
    Logger.prototype.warning = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages with PII.
     */
    Logger.prototype.warningPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages.
     */
    Logger.prototype.info = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages with PII.
     */
    Logger.prototype.infoPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages.
     */
    Logger.prototype.verbose = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages with PII.
     */
    Logger.prototype.verbosePii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Returns whether PII Logging is enabled or not.
     */
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled || false;
    };
    return Logger;
}());

var name = "@azure/msal-common";
var version = "2.1.0";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
 *
 * Key:Value Schema:
 *
 * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      oboAssertion: access token passed in as part of OBO request
 * }
 */
var CredentialEntity = /** @class */ (function () {
    function CredentialEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    CredentialEntity.prototype.generateAccountId = function () {
        return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    };
    /**
     * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
     */
    CredentialEntity.prototype.generateCredentialId = function () {
        return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.prototype.generateTarget = function () {
        return CredentialEntity.generateTargetForCacheKey(this.target);
    };
    /**
     * generates credential key
     */
    CredentialEntity.prototype.generateCredentialKey = function () {
        return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
    };
    /**
     * returns the type of the cache (in this case credential)
     */
    CredentialEntity.prototype.generateType = function () {
        switch (this.credentialType) {
            case CredentialType.ID_TOKEN:
                return CacheType.ID_TOKEN;
            case CredentialType.ACCESS_TOKEN:
                return CacheType.ACCESS_TOKEN;
            case CredentialType.REFRESH_TOKEN:
                return CacheType.REFRESH_TOKEN;
            default: {
                throw ClientAuthError.createUnexpectedCredentialTypeError();
            }
        }
    };
    /**
     * helper function to return `CredentialType`
     * @param key
     */
    CredentialEntity.getCredentialType = function (key) {
        if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.ACCESS_TOKEN;
        }
        else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.ID_TOKEN;
        }
        else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.REFRESH_TOKEN;
        }
        return Constants.NOT_DEFINED;
    };
    /**
     * generates credential key
     */
    CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
        var credentialKey = [
            this.generateAccountIdForCacheKey(homeAccountId, environment),
            this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
            this.generateTargetForCacheKey(target),
        ];
        return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * generates Account Id for keys
     * @param homeAccountId
     * @param environment
     */
    CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
        var accountId = [homeAccountId, environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generates Credential Id for keys
     * @param credentialType
     * @param realm
     * @param clientId
     * @param familyId
     */
    CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
        var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
            ? familyId || clientId
            : clientId;
        var credentialId = [
            credentialType,
            clientOrFamilyId,
            realm || "",
        ];
        return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.generateTargetForCacheKey = function (scopes) {
        return (scopes || "").toLowerCase();
    };
    return CredentialEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
 */
var ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
        code: "redirect_uri_empty",
        desc: "A redirect URI is required for all calls, and none has been set."
    },
    postLogoutUriNotSet: {
        code: "post_logout_uri_empty",
        desc: "A post logout redirect has not been set."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
    },
    urlParseError: {
        code: "url_parse_error",
        desc: "URL could not be parsed into appropriate segments."
    },
    urlEmptyError: {
        code: "empty_url_error",
        desc: "URL was empty or null."
    },
    emptyScopesError: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
    },
    nonArrayScopesError: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientIdSingleScopeError: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    },
    invalidClaimsRequest: {
        code: "invalid_claims",
        desc: "Given claims parameter must be a stringified JSON object."
    },
    tokenRequestEmptyError: {
        code: "token_request_empty",
        desc: "Token request was empty and not found in cache."
    },
    logoutRequestEmptyError: {
        code: "logout_request_empty",
        desc: "The logout request was null or undefined."
    },
    invalidCodeChallengeMethod: {
        code: "invalid_code_challenge_method",
        desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
    },
    invalidCodeChallengeParams: {
        code: "pkce_params_missing",
        desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
    },
    knownAuthoritiesAndCloudDiscoveryMetadata: {
        code: "invalid_known_authorities",
        desc: "knownAuthorities and cloudDiscoveryMetadata cannot both be provided. Please provide cloudDiscoveryMetadata object for AAD, knownAuthorities otherwise."
    },
    invalidCloudDiscoveryMetadata: {
        code: "invalid_cloud_discovery_metadata",
        desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields"
    },
    untrustedAuthority: {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
    },
    resourceRequestParametersRequired: {
        code: "resourceRequest_parameters_required",
        desc: "resourceRequestMethod and resourceRequestUri are required"
    }
};
/**
 * Error thrown when there is an error in configuration of the MSAL.js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    __extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when the redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the claims request could not be successfully parsed
     */
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    /**
     * Creates an error thrown if authority uri is given an insecure protocol.
     * @param urlString
     */
    ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
    };
    /**
     * Creates an error thrown if URL string does not parse into separate segments.
     * @param urlString
     */
    ClientConfigurationError.createUrlParseError = function (urlParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
    };
    /**
     * Creates an error thrown if URL string is empty or null.
     * @param urlString
     */
    ClientConfigurationError.createUrlEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
    };
    /**
     * Error thrown when scopes are not an array
     * @param inputScopes
     */
    ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when scopes are empty.
     * @param scopesValue
     */
    ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when client id scope is not provided as single scope.
     * @param inputScopes
     */
    ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when prompt is not an allowed type.
     * @param promptValue
     */
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    /**
     * Creates error thrown when claims parameter is not a stringified JSON object
     */
    ClientConfigurationError.createInvalidClaimsRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyLogoutRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyTokenRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
    };
    /**
     * Throws error when an invalid code_challenge_method is passed by the user
     */
    ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
    };
    /**
     * Throws error when both params: code_challenge and code_challenge_method are not passed together
     */
    ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
    };
    /**
     * Throws an error when the user passes both knownAuthorities and cloudDiscoveryMetadata
     */
    ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws an error when the user passes invalid cloudDiscoveryMetadata
     */
    ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws error when provided authority is not a member of the trusted host list
     */
    ClientConfigurationError.createUntrustedAuthorityError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
    };
    /**
     * Throws error when resourceRequestMethod or resourceRequestUri is missing
     */
    ClientConfigurationError.createResourceRequestParametersRequiredError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.resourceRequestParametersRequired.code, ClientConfigurationErrorMessage.resourceRequestParametersRequired.desc);
    };
    return ClientConfigurationError;
}(ClientAuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
 * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
 * to ensure uniqueness of strings.
 */
var ScopeSet = /** @class */ (function () {
    function ScopeSet(inputScopes) {
        var _this = this;
        // Filter empty string and null/undefined array items
        var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
        var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
        // Validate and filter scopes (validate function throws if validation fails)
        this.validateInputScopes(filteredInput);
        this.scopes = new Set(); // Iterator in constructor not supported by IE11
        filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
     */
    ScopeSet.fromString = function (inputScopeString) {
        inputScopeString = inputScopeString || "";
        var inputScopes = inputScopeString.split(" ");
        return new ScopeSet(inputScopes);
    };
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     */
    ScopeSet.prototype.validateInputScopes = function (inputScopes) {
        // Check if scopes are required but not given or is an empty array
        if (!inputScopes || inputScopes.length < 1) {
            throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
        }
    };
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */
    ScopeSet.prototype.containsScope = function (scope) {
        var lowerCaseScopes = this.printScopesLowerCase().split(" ");
        var lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
        // compare lowercase scopes
        return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    };
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */
    ScopeSet.prototype.containsScopeSet = function (scopeSet) {
        var _this = this;
        if (!scopeSet || scopeSet.scopes.size <= 0) {
            return false;
        }
        return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
    };
    /**
     * Check if set of scopes contains only the defaults
     */
    ScopeSet.prototype.containsOnlyDefaultScopes = function () {
        var defaultScopeCount = 0;
        if (this.containsScope(Constants.OPENID_SCOPE)) {
            defaultScopeCount += 1;
        }
        if (this.containsScope(Constants.PROFILE_SCOPE)) {
            defaultScopeCount += 1;
        }
        if (this.containsScope(Constants.OFFLINE_ACCESS_SCOPE)) {
            defaultScopeCount += 1;
        }
        return this.scopes.size === defaultScopeCount;
    };
    /**
     * Appends single scope if passed
     * @param newScope
     */
    ScopeSet.prototype.appendScope = function (newScope) {
        if (!StringUtils.isEmpty(newScope)) {
            this.scopes.add(newScope.trim());
        }
    };
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */
    ScopeSet.prototype.appendScopes = function (newScopes) {
        var _this = this;
        try {
            newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
        }
        catch (e) {
            throw ClientAuthError.createAppendScopeSetError(e);
        }
    };
    /**
     * Removes element from set of scopes.
     * @param scope
     */
    ScopeSet.prototype.removeScope = function (scope) {
        if (StringUtils.isEmpty(scope)) {
            throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
        }
        this.scopes.delete(scope.trim());
    };
    /**
     * Removes default scopes from set of scopes
     * Primarily used to prevent cache misses if the default scopes are not returned from the server
     */
    ScopeSet.prototype.removeDefaultScopes = function () {
        this.scopes.delete(Constants.OFFLINE_ACCESS_SCOPE);
        this.scopes.delete(Constants.OPENID_SCOPE);
        this.scopes.delete(Constants.PROFILE_SCOPE);
    };
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */
    ScopeSet.prototype.unionScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        var unionScopes = new Set(); // Iterator in constructor not supported in IE11
        otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        this.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        return unionScopes;
    };
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */
    ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        var unionScopes = this.unionScopeSets(otherScopes);
        // Do not allow default scopes to be the only intersecting scopes
        if (!otherScopes.containsOnlyDefaultScopes()) {
            otherScopes.removeDefaultScopes();
        }
        var sizeOtherScopes = otherScopes.getScopeCount();
        var sizeThisScopes = this.getScopeCount();
        var sizeUnionScopes = unionScopes.size;
        return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
    };
    /**
     * Returns size of set of scopes.
     */
    ScopeSet.prototype.getScopeCount = function () {
        return this.scopes.size;
    };
    /**
     * Returns the scopes as an array of string values
     */
    ScopeSet.prototype.asArray = function () {
        var array = [];
        this.scopes.forEach(function (val) { return array.push(val); });
        return array;
    };
    /**
     * Prints scopes into a space-delimited string
     */
    ScopeSet.prototype.printScopes = function () {
        if (this.scopes) {
            var scopeArr = this.asArray();
            return scopeArr.join(" ");
        }
        return "";
    };
    /**
     * Prints scopes into a space-delimited lower-case string (used for caching)
     */
    ScopeSet.prototype.printScopesLowerCase = function () {
        return this.printScopes().toLowerCase();
    };
    return ScopeSet;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Authority types supported by MSAL.
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Default"] = 0] = "Default";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
})(AuthorityType || (AuthorityType = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Url object class which can perform various transformations on url strings.
 */
var UrlString = /** @class */ (function () {
    function UrlString(url) {
        this._urlString = url;
        if (StringUtils.isEmpty(this._urlString)) {
            // Throws error if url is empty
            throw ClientConfigurationError.createUrlEmptyError();
        }
        if (StringUtils.isEmpty(this.getHash())) {
            this._urlString = UrlString.canonicalizeUri(url);
        }
    }
    Object.defineProperty(UrlString.prototype, "urlString", {
        get: function () {
            return this._urlString;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    UrlString.canonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
            if (StringUtils.endsWith(url, "?")) {
                url = url.slice(0, -1);
            }
            else if (StringUtils.endsWith(url, "?/")) {
                url = url.slice(0, -2);
            }
            if (!StringUtils.endsWith(url, "/")) {
                url += "/";
            }
        }
        return url;
    };
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    UrlString.prototype.validateAsUri = function () {
        // Attempts to parse url for uri components
        var components;
        try {
            components = this.getUrlComponents();
        }
        catch (e) {
            throw ClientConfigurationError.createUrlParseError(e);
        }
        // Throw error if URI or path segments are not parseable.
        if (!components.HostNameAndPort || !components.PathSegments) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Throw error if uri is insecure.
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
        }
    };
    /**
     * Function to remove query string params from url. Returns the new url.
     * @param url
     * @param name
     */
    UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        this._urlString = this.urlString.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        return this.urlString;
    };
    UrlString.removeHashFromUrl = function (url) {
        return UrlString.canonicalizeUri(url.split("#")[0]);
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlString.prototype.replaceTenantPath = function (tenantId) {
        var urlObject = this.getUrlComponents();
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return UrlString.constructAuthorityUriFromObject(urlObject);
    };
    /**
     * Returns the anchor part(#) of the URL
     */
    UrlString.prototype.getHash = function () {
        return UrlString.parseHash(this.urlString);
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlString.prototype.getUrlComponents = function () {
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        // If url string does not match regEx, we throw an error
        var match = this.urlString.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Url component object
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5],
            QueryString: match[7]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
            urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
        }
        return urlComponents;
    };
    UrlString.getDomainFromUrl = function (url) {
        var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
        var match = url.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
        }
        return match[2];
    };
    UrlString.getAbsoluteUrl = function (relativeUrl, baseUrl) {
        if (relativeUrl[0] === Constants.FORWARD_SLASH) {
            var url = new UrlString(baseUrl);
            var baseComponents = url.getUrlComponents();
            return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
        }
        return relativeUrl;
    };
    /**
     * Parses hash string from given string. Returns empty string if no hash symbol is found.
     * @param hashString
     */
    UrlString.parseHash = function (hashString) {
        var hashIndex1 = hashString.indexOf("#");
        var hashIndex2 = hashString.indexOf("#/");
        if (hashIndex2 > -1) {
            return hashString.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return hashString.substring(hashIndex1 + 1);
        }
        return "";
    };
    UrlString.constructAuthorityUriFromObject = function (urlObject) {
        return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    };
    /**
     * Returns URL hash as server auth code response object.
     */
    UrlString.getDeserializedHash = function (hash) {
        // Check if given hash is empty
        if (StringUtils.isEmpty(hash)) {
            return {};
        }
        // Strip the # symbol if present
        var parsedHash = UrlString.parseHash(hash);
        // If # symbol was not present, above will return empty string, so give original hash value
        var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
        // Check if deserialization didn't work
        if (!deserializedHash) {
            throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
        }
        return deserializedHash;
    };
    /**
     * Check if the hash of the URL string contains known properties
     */
    UrlString.hashContainsKnownProperties = function (hash) {
        if (StringUtils.isEmpty(hash)) {
            return false;
        }
        var parameters = UrlString.getDeserializedHash(hash);
        return !!(parameters.code ||
            parameters.error_description ||
            parameters.error ||
            parameters.state);
    };
    return UrlString;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var TrustedAuthority = /** @class */ (function () {
    function TrustedAuthority() {
    }
    /**
     * Set the CloudDiscoveryMetadata object from knownAuthorities or cloudDiscoveryMetadata passed into the app config
     * @param knownAuthorities
     * @param cloudDiscoveryMetadata
     */
    TrustedAuthority.setTrustedAuthoritiesFromConfig = function (knownAuthorities, cloudDiscoveryMetadata) {
        if (!this.getTrustedHostList().length) {
            if (knownAuthorities.length > 0 && !StringUtils.isEmpty(cloudDiscoveryMetadata)) {
                throw ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError();
            }
            this.createCloudDiscoveryMetadataFromKnownAuthorities(knownAuthorities);
            try {
                if (cloudDiscoveryMetadata) {
                    var parsedMetadata = JSON.parse(cloudDiscoveryMetadata);
                    this.saveCloudDiscoveryMetadata(parsedMetadata.metadata);
                }
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
            }
        }
    };
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     * @param networkInterface
     */
    TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, networkInterface) {
        return __awaiter(this, void 0, void 0, function () {
            var instanceDiscoveryEndpoint, response, metadata, e_1, host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + authorityToVerify.urlString + "oauth2/v2.0/authorize";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint)];
                    case 2:
                        response = _a.sent();
                        metadata = response.body.metadata;
                        this.saveCloudDiscoveryMetadata(metadata);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/];
                    case 4:
                        host = authorityToVerify.getUrlComponents().HostNameAndPort;
                        if (this.getTrustedHostList().length > 0 && !this.IsInTrustedHostList(host)) {
                            // Custom Domain scenario, host is trusted because Instance Discovery call succeeded 
                            this.createCloudDiscoveryMetadataFromKnownAuthorities([host]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param metadata
     */
    TrustedAuthority.saveCloudDiscoveryMetadata = function (metadata) {
        metadata.forEach(function (entry) {
            var authorities = entry.aliases;
            authorities.forEach(function (authority) {
                TrustedAuthority.TrustedHostList[authority.toLowerCase()] = entry;
            });
        });
    };
    /**
     * Create a generic metadata object for each host passed to knownAuthorities.
     * This is mostly useful for B2C or ADFS scenarios
     * @param knownAuthorities
     */
    TrustedAuthority.createCloudDiscoveryMetadataFromKnownAuthorities = function (knownAuthorities) {
        var _this = this;
        knownAuthorities.forEach(function (authority) {
            var authorityDomain = UrlString.getDomainFromUrl(authority).toLowerCase();
            _this.TrustedHostList[authorityDomain] = {
                preferred_cache: authorityDomain,
                preferred_network: authorityDomain,
                aliases: [authorityDomain]
            };
        });
    };
    TrustedAuthority.getTrustedHostList = function () {
        return Object.keys(this.TrustedHostList);
    };
    /**
     * Get metadata for the provided host
     * @param host
     */
    TrustedAuthority.getCloudDiscoveryMetadata = function (host) {
        return this.TrustedHostList[host.toLowerCase()] || null;
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param host
     */
    TrustedAuthority.IsInTrustedHostList = function (host) {
        return Object.keys(this.TrustedHostList).indexOf(host.toLowerCase()) > -1;
    };
    TrustedAuthority.TrustedHostList = {};
    return TrustedAuthority;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
    ProtocolMode["AAD"] = "AAD";
    ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
var Authority = /** @class */ (function () {
    function Authority(authority, networkInterface, protocolMode) {
        this.canonicalAuthority = authority;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = networkInterface;
        this.authorityProtocolMode = protocolMode;
    }
    Object.defineProperty(Authority.prototype, "authorityType", {
        // See above for AuthorityType
        get: function () {
            var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
            if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                return AuthorityType.Adfs;
            }
            return AuthorityType.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "protocolMode", {
        /**
         * ProtocolMode enum representing the way endpoints are constructed.
         */
        get: function () {
            return this.authorityProtocolMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this._canonicalAuthority.urlString;
        },
        /**
         * Sets canonical authority.
         */
        set: function (url) {
            this._canonicalAuthority = new UrlString(url);
            this._canonicalAuthority.validateAsUri();
            this._canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
        /**
         * Get authority components.
         */
        get: function () {
            if (!this._canonicalAuthorityUrlComponents) {
                this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
            }
            return this._canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tenant", {
        /**
         * Get tenant for authority.
         */
        get: function () {
            return this.canonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
        /**
         * OAuth /authorize endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tokenEndpoint", {
        /**
         * OAuth /token endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
        get: function () {
            if (this.discoveryComplete()) {
                return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
        /**
         * OAuth logout endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
        /**
         * OAuth issuer for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    Authority.prototype.replaceTenant = function (urlString) {
        return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    };
    Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
        /**
         * The default open id configuration endpoint for any canonical authority.
         */
        get: function () {
            if (this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC) {
                return this.canonicalAuthority + ".well-known/openid-configuration";
            }
            return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    Authority.prototype.discoveryComplete = function () {
        return !!this.tenantDiscoveryResponse;
    };
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     * @param openIdConfigurationEndpoint
     */
    Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
            });
        });
    };
    /**
     * Set the trusted hosts and validate subsequent calls
     */
    Authority.prototype.validateAndSetPreferredNetwork = function () {
        return __awaiter(this, void 0, void 0, function () {
            var host, preferredNetwork;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                        if (!(TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, TrustedAuthority.setTrustedAuthoritiesFromNetwork(this._canonicalAuthority, this.networkInterface)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!TrustedAuthority.IsInTrustedHostList(host)) {
                            throw ClientConfigurationError.createUntrustedAuthorityError();
                        }
                        preferredNetwork = TrustedAuthority.getCloudDiscoveryMetadata(host).preferred_network;
                        if (host !== preferredNetwork) {
                            this.canonicalAuthority = this.canonicalAuthority.replace(host, preferredNetwork);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openIdConfigEndpoint, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateAndSetPreferredNetwork()];
                    case 1:
                        _a.sent();
                        openIdConfigEndpoint = this.defaultOpenIdConfigurationEndpoint;
                        return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                    case 2:
                        response = _a.sent();
                        this.tenantDiscoveryResponse = response.body;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if given hostname is alias of this authority
     * @param host
     */
    Authority.prototype.isAuthorityAlias = function (host) {
        if (host === this.canonicalAuthorityUrlComponents.HostNameAndPort) {
            return true;
        }
        var aliases = TrustedAuthority.getCloudDiscoveryMetadata(this.canonicalAuthorityUrlComponents.HostNameAndPort).aliases;
        return aliases.indexOf(host) !== -1;
    };
    /**
     * helper function to generate environment from authority object
     * @param authority
     */
    Authority.generateEnvironmentFromAuthority = function (authority) {
        var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
        return TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
    };
    return Authority;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Function to build a client info object
 * @param rawClientInfo
 * @param crypto
 */
function buildClientInfo(rawClientInfo, crypto) {
    if (StringUtils.isEmpty(rawClientInfo)) {
        throw ClientAuthError.createClientInfoEmptyError();
    }
    try {
        var decodedClientInfo = crypto.base64Decode(rawClientInfo);
        return JSON.parse(decodedClientInfo);
    }
    catch (e) {
        throw ClientAuthError.createClientInfoDecodingError(e);
    }
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
 *
 * Key : Value Schema
 *
 * Key: <home_account_id>-<environment>-<realm*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
 *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
 *      authorityType: Accounts authority type as a string
 *      name: Full name for the account, including given name and family name,
 *      clientInfo: Full base64 encoded client info received from ESTS
 *      lastModificationTime: last time this entity was modified in the cache
 *      lastModificationApp:
 *      oboAssertion: access token passed in as part of OBO request
 *      idTokenClaims: Object containing claims parsed from ID token
 * }
 */
var AccountEntity = /** @class */ (function () {
    function AccountEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    AccountEntity.prototype.generateAccountId = function () {
        var accountId = [this.homeAccountId, this.environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    AccountEntity.prototype.generateAccountKey = function () {
        return AccountEntity.generateAccountCacheKey({
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId
        });
    };
    /**
     * returns the type of the cache (in this case account)
     */
    AccountEntity.prototype.generateType = function () {
        switch (this.authorityType) {
            case CacheAccountType.ADFS_ACCOUNT_TYPE:
                return CacheType.ADFS;
            case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                return CacheType.MSA;
            case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                return CacheType.MSSTS;
            case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                return CacheType.GENERIC;
            default: {
                throw ClientAuthError.createUnexpectedAccountTypeError();
            }
        }
    };
    /**
     * Returns the AccountInfo interface for this account.
     */
    AccountEntity.prototype.getAccountInfo = function () {
        return {
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId,
            name: this.name,
            idTokenClaims: this.idTokenClaims
        };
    };
    /**
     * Generates account key from interface
     * @param accountInterface
     */
    AccountEntity.generateAccountCacheKey = function (accountInterface) {
        var accountKey = [
            accountInterface.homeAccountId,
            accountInterface.environment || "",
            accountInterface.tenantId || "",
        ];
        return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
     * @param clientInfo
     * @param authority
     * @param idToken
     * @param policy
     */
    AccountEntity.createAccount = function (clientInfo, homeAccountId, authority, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
        var _a, _b, _c, _d, _e, _f;
        var account = new AccountEntity();
        account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
        account.clientInfo = clientInfo;
        account.homeAccountId = homeAccountId;
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        account.environment = env;
        // non AAD scenarios can have empty realm
        account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || "";
        account.oboAssertion = oboAssertion;
        if (idToken) {
            account.idTokenClaims = idToken.claims;
            // How do you account for MSA CID here?
            account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || "";
            /*
             * In B2C scenarios the emails claim is used instead of preferred_username and it is an array. In most cases it will contain a single email.
             * This field should not be relied upon if a custom policy is configured to return more than 1 email.
             */
            account.username = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username) || (((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : "");
            account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
        }
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        return account;
    };
    /**
     * Builds non-AAD/ADFS account.
     * @param authority
     * @param idToken
     */
    AccountEntity.createGenericAccount = function (authority, homeAccountId, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
        var _a, _b, _c, _d;
        var account = new AccountEntity();
        account.authorityType = (authority.authorityType === AuthorityType.Adfs) ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
        account.homeAccountId = homeAccountId;
        // non AAD scenarios can have empty realm
        account.realm = "";
        account.oboAssertion = oboAssertion;
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        if (idToken) {
            // How do you account for MSA CID here?
            account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || "";
            // upn claim for most ADFS scenarios
            account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || "";
            account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || "";
            account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
        }
        account.environment = env;
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        /*
         * add uniqueName to claims
         * account.name = idToken.claims.uniqueName;
         */
        return account;
    };
    /**
     * Generate HomeAccountId from server response
     * @param serverClientInfo
     * @param authType
     */
    AccountEntity.generateHomeAccountId = function (serverClientInfo, authType, logger, cryptoObj, idToken) {
        var _a;
        var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
        // since ADFS does not have tid and does not set client_info
        if (authType === AuthorityType.Adfs) {
            return accountId;
        }
        // for cases where there is clientInfo
        if (serverClientInfo) {
            var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
            if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
                return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
            }
        }
        // default to "sub" claim
        logger.verbose("No client info in response");
        return accountId;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccountEntity.isAccountEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("localAccountId") &&
            entity.hasOwnProperty("username") &&
            entity.hasOwnProperty("authorityType"));
    };
    /**
     * Helper function to determine whether 2 accounts are equal
     * Used to avoid unnecessary state updates
     * @param arrayA
     * @param arrayB
     */
    AccountEntity.accountInfoIsEqual = function (accountA, accountB) {
        if (!accountA || !accountB) {
            return false;
        }
        return (accountA.homeAccountId === accountB.homeAccountId) &&
            (accountA.localAccountId === accountB.localAccountId) &&
            (accountA.username === accountB.username) &&
            (accountA.tenantId === accountB.tenantId) &&
            (accountA.environment === accountB.environment);
    };
    return AccountEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * JWT Token representation class. Parses token string and generates claims object.
 */
var AuthToken = /** @class */ (function () {
    function AuthToken(rawToken, crypto) {
        if (StringUtils.isEmpty(rawToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
        }
        this.rawToken = rawToken;
        this.claims = AuthToken.extractTokenClaims(rawToken, crypto);
    }
    /**
     * Extract token by decoding the rawToken
     *
     * @param encodedToken
     */
    AuthToken.extractTokenClaims = function (encodedToken, crypto) {
        var decodedToken = StringUtils.decodeAuthToken(encodedToken);
        // token will be decoded to get the username
        try {
            var base64TokenPayload = decodedToken.JWSPayload;
            // base64Decode() should throw an error if there is an issue
            var base64Decoded = crypto.base64Decode(base64TokenPayload);
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            throw ClientAuthError.createTokenParsingError(err);
        }
    };
    return AuthToken;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
 */
var CacheManager = /** @class */ (function () {
    function CacheManager(clientId, cryptoImpl) {
        this.clientId = clientId;
        this.cryptoImpl = cryptoImpl;
    }
    /**
     * Returns all accounts in cache
     */
    CacheManager.prototype.getAllAccounts = function () {
        var _this = this;
        var currentAccounts = this.getAccountsFilteredBy();
        var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
        var numAccounts = accountValues.length;
        if (numAccounts < 1) {
            return [];
        }
        else {
            var allAccounts = accountValues.map(function (value) {
                var accountEntity = CacheManager.toObject(new AccountEntity(), value);
                var accountInfo = accountEntity.getAccountInfo();
                var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
                if (idToken && !accountInfo.idTokenClaims) {
                    accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
                }
                return accountInfo;
            });
            return allAccounts;
        }
    };
    /**
     * saves a cache record
     * @param cacheRecord
     */
    CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
        if (!cacheRecord) {
            throw ClientAuthError.createNullOrUndefinedCacheRecord();
        }
        if (!!cacheRecord.account) {
            this.setAccount(cacheRecord.account);
        }
        if (!!cacheRecord.idToken) {
            this.setIdTokenCredential(cacheRecord.idToken);
        }
        if (!!cacheRecord.accessToken) {
            this.saveAccessToken(cacheRecord.accessToken);
        }
        if (!!cacheRecord.refreshToken) {
            this.setRefreshTokenCredential(cacheRecord.refreshToken);
        }
        if (!!cacheRecord.appMetadata) {
            this.setAppMetadata(cacheRecord.appMetadata);
        }
    };
    /**
     * saves access token credential
     * @param credential
     */
    CacheManager.prototype.saveAccessToken = function (credential) {
        var _this = this;
        var currentTokenCache = this.getCredentialsFilteredBy({
            clientId: credential.clientId,
            credentialType: CredentialType.ACCESS_TOKEN,
            environment: credential.environment,
            homeAccountId: credential.homeAccountId,
            realm: credential.realm,
        });
        var currentScopes = ScopeSet.fromString(credential.target);
        var currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
        if (currentAccessTokens) {
            currentAccessTokens.forEach(function (tokenEntity) {
                var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                    _this.removeCredential(tokenEntity);
                }
            });
        }
        this.setAccessTokenCredential(credential);
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
        return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAccounts = {};
        allCacheKeys.forEach(function (cacheKey) {
            var entity = _this.getAccount(cacheKey);
            if (!entity) {
                return;
            }
            if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            matchingAccounts[cacheKey] = entity;
        });
        return matchingAccounts;
    };
    /**
     * retrieve credentails matching all provided filters; if no filter is set, get all credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
        return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.oboAssertion);
    };
    /**
     * Support function to help match credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, familyId, realm, target, oboAssertion) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingCredentials = {
            idTokens: {},
            accessTokens: {},
            refreshTokens: {},
        };
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants.NOT_DEFINED) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getSpecificCredential(cacheKey, credType);
            if (!entity) {
                return;
            }
            if (!!oboAssertion && !_this.matchOboAssertion(entity, oboAssertion)) {
                return;
            }
            if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
                return;
            }
            /*
             * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
             * Resource specific refresh tokens case will be added when the support is deemed necessary
             */
            if (!!target && !_this.matchTarget(entity, target)) {
                return;
            }
            switch (credType) {
                case CredentialType.ID_TOKEN:
                    matchingCredentials.idTokens[cacheKey] = entity;
                    break;
                case CredentialType.ACCESS_TOKEN:
                    matchingCredentials.accessTokens[cacheKey] = entity;
                    break;
                case CredentialType.REFRESH_TOKEN:
                    matchingCredentials.refreshTokens[cacheKey] = entity;
                    break;
            }
        });
        return matchingCredentials;
    };
    /**
     * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
     * @param filter
     */
    CacheManager.prototype.getAppMetadataFilteredBy = function (filter) {
        return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
    };
    /**
     * Support function to help match appMetadata
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.getAppMetadataFilteredByInternal = function (environment, clientId) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAppMetadata = {};
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-appMetadata type cache entities
            if (!_this.isAppMetadata(cacheKey)) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getAppMetadata(cacheKey);
            if (!entity) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            matchingAppMetadata[cacheKey] = entity;
        });
        return matchingAppMetadata;
    };
    /**
     * Removes all accounts and related tokens from cache.
     */
    CacheManager.prototype.removeAllAccounts = function () {
        var _this = this;
        var allCacheKeys = this.getKeys();
        allCacheKeys.forEach(function (cacheKey) {
            var entity = _this.getAccount(cacheKey);
            if (!entity) {
                return;
            }
            _this.removeAccount(cacheKey);
        });
        return true;
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccount = function (accountKey) {
        var account = this.getAccount(accountKey);
        if (!account) {
            throw ClientAuthError.createNoAccountFoundError();
        }
        return (this.removeAccountContext(account) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT));
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccountContext = function (account) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var accountId = account.generateAccountId();
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants.NOT_DEFINED) {
                return;
            }
            var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
            if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                _this.removeCredential(cacheEntity);
            }
        });
        return true;
    };
    /**
     * returns a boolean if the given credential is removed
     * @param credential
     */
    CacheManager.prototype.removeCredential = function (credential) {
        var key = credential.generateCredentialKey();
        return this.removeItem(key, CacheSchemaType.CREDENTIAL);
    };
    /**
     * Removes all app metadata objects from cache.
     */
    CacheManager.prototype.removeAppMetadata = function () {
        var _this = this;
        var allCacheKeys = this.getKeys();
        allCacheKeys.forEach(function (cacheKey) {
            if (_this.isAppMetadata(cacheKey)) {
                _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
            }
        });
        return true;
    };
    /**
     * Retrieve the cached credentials into a cacherecord
     * @param account
     * @param clientId
     * @param scopes
     * @param environment
     */
    CacheManager.prototype.readCacheRecord = function (account, clientId, scopes, environment) {
        var cachedAccount = this.readAccountFromCache(account);
        var cachedIdToken = this.readIdTokenFromCache(clientId, account);
        var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, scopes);
        var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
        var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
        if (cachedAccount && cachedIdToken) {
            cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
        }
        return {
            account: cachedAccount,
            idToken: cachedIdToken,
            accessToken: cachedAccessToken,
            refreshToken: cachedRefreshToken,
            appMetadata: cachedAppMetadata,
        };
    };
    /**
     * Retrieve AccountEntity from cache
     * @param account
     */
    CacheManager.prototype.readAccountFromCache = function (account) {
        var accountKey = AccountEntity.generateAccountCacheKey(account);
        return this.getAccount(accountKey);
    };
    /**
     * Retrieve IdTokenEntity from cache
     * @param clientId
     * @param account
     * @param inputRealm
     */
    CacheManager.prototype.readIdTokenFromCache = function (clientId, account) {
        var idTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.ID_TOKEN,
            clientId: clientId,
            realm: account.tenantId,
        };
        var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        var numIdTokens = idTokens.length;
        if (numIdTokens < 1) {
            return null;
        }
        else if (numIdTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return idTokens[0];
    };
    /**
     * Retrieve AccessTokenEntity from cache
     * @param clientId
     * @param account
     * @param scopes
     * @param inputRealm
     */
    CacheManager.prototype.readAccessTokenFromCache = function (clientId, account, scopes) {
        var accessTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: clientId,
            realm: account.tenantId,
            target: scopes.printScopesLowerCase(),
        };
        var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Helper to retrieve the appropriate refresh token from cache
     * @param clientId
     * @param account
     * @param familyRT
     */
    CacheManager.prototype.readRefreshTokenFromCache = function (clientId, account, familyRT) {
        var id = familyRT ? THE_FAMILY_ID : undefined;
        var refreshTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.REFRESH_TOKEN,
            clientId: clientId,
            familyId: id
        };
        var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
        var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function (key) { return credentialCache.refreshTokens[key]; });
        var numRefreshTokens = refreshTokens.length;
        if (numRefreshTokens < 1) {
            return null;
        }
        // address the else case after remove functions address environment aliases
        return refreshTokens[0];
    };
    /**
     * Retrieve AppMetadataEntity from cache
     */
    CacheManager.prototype.readAppMetadataFromCache = function (environment, clientId) {
        var appMetadataFilter = {
            environment: environment,
            clientId: clientId,
        };
        var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
        var appMetadataEntries = Object.keys(appMetadata).map(function (key) { return appMetadata[key]; });
        var numAppMetadata = appMetadataEntries.length;
        if (numAppMetadata < 1) {
            return null;
        }
        else if (numAppMetadata > 1) {
            throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
        }
        return appMetadataEntries[0];
    };
    /**
     * Return the family_id value associated  with FOCI
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.isAppMetadataFOCI = function (environment, clientId) {
        var appMetadata = this.readAppMetadataFromCache(environment, clientId);
        return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
    };
    /**
     * helper to match account ids
     * @param value
     * @param homeAccountId
     */
    CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
        return !!(entity.homeAccountId && homeAccountId === entity.homeAccountId);
    };
    /**
     * helper to match assertion
     * @param value
     * @param oboAssertion
     */
    CacheManager.prototype.matchOboAssertion = function (entity, oboAssertion) {
        return !!(entity.oboAssertion && oboAssertion === entity.oboAssertion);
    };
    /**
     * helper to match environment
     * @param value
     * @param environment
     */
    CacheManager.prototype.matchEnvironment = function (entity, environment) {
        var cloudMetadata = TrustedAuthority.getCloudDiscoveryMetadata(environment);
        if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
            return true;
        }
        return false;
    };
    /**
     * helper to match credential type
     * @param entity
     * @param credentialType
     */
    CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
        return (entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase());
    };
    /**
     * helper to match client ids
     * @param entity
     * @param clientId
     */
    CacheManager.prototype.matchClientId = function (entity, clientId) {
        return !!(entity.clientId && clientId === entity.clientId);
    };
    /**
     * helper to match family ids
     * @param entity
     * @param familyId
     */
    CacheManager.prototype.matchFamilyId = function (entity, familyId) {
        return !!(entity.familyId && familyId === entity.familyId);
    };
    /**
     * helper to match realm
     * @param entity
     * @param realm
     */
    CacheManager.prototype.matchRealm = function (entity, realm) {
        return !!(entity.realm && realm === entity.realm);
    };
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */
    CacheManager.prototype.matchTarget = function (entity, target) {
        if (entity.credentialType !== CredentialType.ACCESS_TOKEN || !entity.target) {
            return false;
        }
        var entityScopeSet = ScopeSet.fromString(entity.target);
        var requestTargetScopeSet = ScopeSet.fromString(target);
        if (!requestTargetScopeSet.containsOnlyDefaultScopes()) {
            requestTargetScopeSet.removeDefaultScopes(); // ignore default scopes
        }
        return entityScopeSet.containsScopeSet(requestTargetScopeSet);
    };
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */
    CacheManager.prototype.isAppMetadata = function (key) {
        return key.indexOf(APP_METADATA) !== -1;
    };
    /**
     * Returns the specific credential (IdToken/AccessToken/RefreshToken) from the cache
     * @param key
     * @param credType
     */
    CacheManager.prototype.getSpecificCredential = function (key, credType) {
        switch (credType) {
            case CredentialType.ID_TOKEN: {
                return this.getIdTokenCredential(key);
            }
            case CredentialType.ACCESS_TOKEN: {
                return this.getAccessTokenCredential(key);
            }
            case CredentialType.REFRESH_TOKEN: {
                return this.getRefreshTokenCredential(key);
            }
            default:
                return null;
        }
    };
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */
    CacheManager.toObject = function (obj, json) {
        for (var propertyName in json) {
            obj[propertyName] = json[propertyName];
        }
        return obj;
    };
    return CacheManager;
}());
var DefaultStorageClass = /** @class */ (function (_super) {
    __extends(DefaultStorageClass, _super);
    function DefaultStorageClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStorageClass.prototype.setAccount = function () {
        var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccount = function () {
        var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setIdTokenCredential = function () {
        var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getIdTokenCredential = function () {
        var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAccessTokenCredential = function () {
        var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccessTokenCredential = function () {
        var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAppMetadata = function () {
        var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAppMetadata = function () {
        var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setServerTelemetry = function () {
        var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getServerTelemetry = function () {
        var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setThrottlingCache = function () {
        var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getThrottlingCache = function () {
        var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.removeItem = function () {
        var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.containsKey = function () {
        var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getKeys = function () {
        var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.clear = function () {
        var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    return DefaultStorageClass;
}(CacheManager));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Token renewal offset default in seconds
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: function () {
        // allow users to not set loggerCallback
    },
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
    sendGetRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    sendPostRequestAsync: function () {
        return __awaiter(this, void 0, void 0, function () {
            var notImplErr;
            return __generator(this, function (_a) {
                notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_LIBRARY_INFO = {
    sku: Constants.SKU,
    version: version,
    cpu: "",
    os: ""
};
var DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: "",
    clientAssertion: undefined
};
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */
function buildClientConfiguration(_a) {
    var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
    return {
        authOptions: buildAuthOptions(userAuthOptions),
        systemOptions: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
        loggerOptions: __assign(__assign({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
        storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION),
        networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
        cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
        clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
        libraryInfo: __assign(__assign({}, DEFAULT_LIBRARY_INFO), libraryInfo),
        serverTelemetryManager: serverTelemetryManager || null,
        persistencePlugin: persistencePlugin || null,
        serializableCache: serializableCache || null
    };
}
/**
 * Construct authoptions from the client and platform passed values
 * @param authOptions
 */
function buildAuthOptions(authOptions) {
    return __assign({ knownAuthorities: [], cloudDiscoveryMetadata: "", clientCapabilities: [], protocolMode: ProtocolMode.AAD }, authOptions);
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    return ServerError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingUtils = /** @class */ (function () {
    function ThrottlingUtils() {
    }
    /**
     * Prepares a RequestThumbprint to be stored as a key.
     * @param thumbprint
     */
    ThrottlingUtils.generateThrottlingStorageKey = function (thumbprint) {
        return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
    };
    /**
     * Performs necessary throttling checks before a network request.
     * @param cacheManager
     * @param thumbprint
     */
    ThrottlingUtils.preProcess = function (cacheManager, thumbprint) {
        var _a;
        var key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
        var value = cacheManager.getThrottlingCache(key);
        if (value) {
            if (value.throttleTime < Date.now()) {
                cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
                return;
            }
            throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
        }
    };
    /**
     * Performs necessary throttling checks after a network request.
     * @param cacheManager
     * @param thumbprint
     * @param response
     */
    ThrottlingUtils.postProcess = function (cacheManager, thumbprint, response) {
        if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
            var thumbprintValue = {
                throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
                error: response.body.error,
                errorCodes: response.body.error_codes,
                errorMessage: response.body.error_description,
                subError: response.body.suberror
            };
            cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
        }
    };
    /**
     * Checks a NetworkResponse object's status codes against 429 or 5xx
     * @param response
     */
    ThrottlingUtils.checkResponseStatus = function (response) {
        return response.status === 429 || response.status >= 500 && response.status < 600;
    };
    /**
     * Checks a NetworkResponse object's RetryAfter header
     * @param response
     */
    ThrottlingUtils.checkResponseForRetryAfter = function (response) {
        if (response.headers) {
            return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
        }
        return false;
    };
    /**
     * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
     * @param throttleTime
     */
    ThrottlingUtils.calculateThrottleTime = function (throttleTime) {
        if (throttleTime <= 0) {
            throttleTime = 0;
        }
        var currentSeconds = Date.now() / 1000;
        return Math.floor(Math.min(currentSeconds + (throttleTime || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
    };
    ThrottlingUtils.removeThrottle = function (cacheManager, clientId, authority, scopes, homeAccountIdentifier) {
        var thumbprint = {
            clientId: clientId,
            authority: authority,
            scopes: scopes,
            homeAccountIdentifier: homeAccountIdentifier
        };
        var key = this.generateThrottlingStorageKey(thumbprint);
        return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
    };
    return ThrottlingUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var NetworkManager = /** @class */ (function () {
    function NetworkManager(networkClient, cacheManager) {
        this.networkClient = networkClient;
        this.cacheManager = cacheManager;
    }
    /**
     * Wraps sendPostRequestAsync with necessary preflight and postflight logic
     * @param thumbprint
     * @param tokenEndpoint
     * @param options
     */
    NetworkManager.prototype.sendPostRequest = function (thumbprint, tokenEndpoint, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
                        return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
                    case 1:
                        response = _a.sent();
                        ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
                        // Placeholder for Telemetry hook
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return NetworkManager;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
 */
var BaseClient = /** @class */ (function () {
    function BaseClient(configuration) {
        // Set the configuration
        this.config = buildClientConfiguration(configuration);
        // Initialize the logger
        this.logger = new Logger(this.config.loggerOptions, name, version);
        // Initialize crypto
        this.cryptoUtils = this.config.cryptoInterface;
        // Initialize storage interface
        this.cacheManager = this.config.storageInterface;
        // Set the network interface
        this.networkClient = this.config.networkInterface;
        // Set the NetworkManager
        this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
        // Set TelemetryManager
        this.serverTelemetryManager = this.config.serverTelemetryManager;
        // Set TrustedAuthorities from config
        TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.authOptions.knownAuthorities, this.config.authOptions.cloudDiscoveryMetadata);
        // set Authority
        this.authority = this.config.authOptions.authority;
    }
    /**
     * Creates default headers for requests to token endpoint
     */
    BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
        var headers = this.createDefaultLibraryHeaders();
        headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
        headers[HeaderNames.X_MS_LIB_CAPABILITY] = HeaderNames.X_MS_LIB_CAPABILITY_VALUE;
        if (this.serverTelemetryManager) {
            headers[HeaderNames.X_CLIENT_CURR_TELEM] = this.serverTelemetryManager.generateCurrentRequestHeaderValue();
            headers[HeaderNames.X_CLIENT_LAST_TELEM] = this.serverTelemetryManager.generateLastRequestHeaderValue();
        }
        return headers;
    };
    /**
     * addLibraryData
     */
    BaseClient.prototype.createDefaultLibraryHeaders = function () {
        var headers = {};
        // client info headers
        headers[AADServerParamKeys.X_CLIENT_SKU] = this.config.libraryInfo.sku;
        headers[AADServerParamKeys.X_CLIENT_VER] = this.config.libraryInfo.version;
        headers[AADServerParamKeys.X_CLIENT_OS] = this.config.libraryInfo.os;
        headers[AADServerParamKeys.X_CLIENT_CPU] = this.config.libraryInfo.cpu;
        return headers;
    };
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     * @param thumbprint
     */
    BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers, thumbprint) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers: headers })];
                    case 1:
                        response = _a.sent();
                        if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                            // Telemetry data successfully logged by server, clear Telemetry cache
                            this.config.serverTelemetryManager.clearTelemetryCache();
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Updates the authority object of the client. Endpoint discovery must be completed.
     * @param updatedAuthority
     */
    BaseClient.prototype.updateAuthority = function (updatedAuthority) {
        if (!updatedAuthority.discoveryComplete()) {
            throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
        }
        this.authority = updatedAuthority;
    };
    return BaseClient;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Validates server consumable params from the "request" objects
 */
var RequestValidator = /** @class */ (function () {
    function RequestValidator() {
    }
    /**
     * Utility to check if the `redirectUri` in the request is a non-null value
     * @param redirectUri
     */
    RequestValidator.validateRedirectUri = function (redirectUri) {
        if (StringUtils.isEmpty(redirectUri)) {
            throw ClientConfigurationError.createRedirectUriEmptyError();
        }
    };
    /**
     * Utility to validate prompt sent by the user in the request
     * @param prompt
     */
    RequestValidator.validatePrompt = function (prompt) {
        if ([
            PromptValue.LOGIN,
            PromptValue.SELECT_ACCOUNT,
            PromptValue.CONSENT,
            PromptValue.NONE
        ].indexOf(prompt) < 0) {
            throw ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    RequestValidator.validateClaims = function (claims) {
        try {
            JSON.parse(claims);
        }
        catch (e) {
            throw ClientConfigurationError.createInvalidClaimsRequestError();
        }
    };
    /**
     * Utility to validate code_challenge and code_challenge_method
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
        else {
            this.validateCodeChallengeMethod(codeChallengeMethod);
        }
    };
    /**
     * Utility to validate code_challenge_method
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
        if ([
            CodeChallengeMethodValues.PLAIN,
            CodeChallengeMethodValues.S256
        ].indexOf(codeChallengeMethod) < 0) {
            throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
        }
    };
    /**
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
        if (!eQParams) {
            return {};
        }
        // Remove any query parameters already included in SSO params
        queryParams.forEach(function (value, key) {
            if (eQParams[key]) {
                delete eQParams[key];
            }
        });
        return eQParams;
    };
    return RequestValidator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var RequestParameterBuilder = /** @class */ (function () {
    function RequestParameterBuilder() {
        this.parameters = new Map();
    }
    /**
     * add response_type = code
     */
    RequestParameterBuilder.prototype.addResponseTypeCode = function () {
        this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
    };
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */
    RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
        this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
    };
    /**
     * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
     * @param scopeSet
     * @param addOidcScopes
     */
    RequestParameterBuilder.prototype.addScopes = function (scopes, addOidcScopes) {
        if (addOidcScopes === void 0) { addOidcScopes = true; }
        var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], [Constants.OPENID_SCOPE, Constants.PROFILE_SCOPE]) : scopes || [];
        var scopeSet = new ScopeSet(requestScopes);
        this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
    };
    /**
     * add clientId
     * @param clientId
     */
    RequestParameterBuilder.prototype.addClientId = function (clientId) {
        this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
    };
    /**
     * add redirect_uri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add post logout redirectUri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addPostLogoutRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add id_token_hint to logout request
     * @param idTokenHint
     */
    RequestParameterBuilder.prototype.addIdTokenHint = function (idTokenHint) {
        this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
    };
    /**
     * add domain_hint
     * @param domainHint
     */
    RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
        this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
    };
    /**
     * add login_hint
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
        this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
    };
    /**
     * add sid
     * @param sid
     */
    RequestParameterBuilder.prototype.addSid = function (sid) {
        this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
    };
    /**
     * add claims
     * @param claims
     */
    RequestParameterBuilder.prototype.addClaims = function (claims, clientCapabilities) {
        var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
        RequestValidator.validateClaims(mergedClaims);
        this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
    };
    /**
     * add correlationId
     * @param correlationId
     */
    RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
        this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
    };
    /**
     * add library info query params
     * @param libraryInfo
     */
    RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
        // Telemetry Info
        this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
        this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
        this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
        this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
    };
    /**
     * add prompt
     * @param prompt
     */
    RequestParameterBuilder.prototype.addPrompt = function (prompt) {
        RequestValidator.validatePrompt(prompt);
        this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
    };
    /**
     * add state
     * @param state
     */
    RequestParameterBuilder.prototype.addState = function (state) {
        if (!StringUtils.isEmpty(state)) {
            this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
        }
    };
    /**
     * add nonce
     * @param nonce
     */
    RequestParameterBuilder.prototype.addNonce = function (nonce) {
        this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
    };
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
        if (codeChallenge && codeChallengeMethod) {
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
        }
        else {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
        this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addDeviceCode = function (code) {
        this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
    };
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */
    RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
        this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
    };
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */
    RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
        this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
    };
    /**
     * add client_secret
     * @param clientSecret
     */
    RequestParameterBuilder.prototype.addClientSecret = function (clientSecret) {
        this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
    };
    /**
     * add clientAssertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addClientAssertion = function (clientAssertion) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
    };
    /**
     * add clientAssertionType for confidential client flows
     * @param clientAssertionType
     */
    RequestParameterBuilder.prototype.addClientAssertionType = function (clientAssertionType) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
    };
    /**
     * add OBO assertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addOboAssertion = function (oboAssertion) {
        this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addRequestTokenUse = function (tokenUse) {
        this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addGrantType = function (grantType) {
        this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
    };
    /**
     * add client info
     *
     */
    RequestParameterBuilder.prototype.addClientInfo = function () {
        this.parameters.set(ClientInfo, "1");
    };
    /**
     * add extraQueryParams
     * @param eQparams
     */
    RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
        var _this = this;
        RequestValidator.sanitizeEQParams(eQparams, this.parameters);
        Object.keys(eQparams).forEach(function (key) {
            _this.parameters.set(key, eQparams[key]);
        });
    };
    RequestParameterBuilder.prototype.addClientCapabilitiesToClaims = function (claims, clientCapabilities) {
        var mergedClaims;
        // Parse provided claims into JSON object or initialize empty object
        if (!claims) {
            mergedClaims = {};
        }
        else {
            try {
                mergedClaims = JSON.parse(claims);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidClaimsRequestError();
            }
        }
        if (clientCapabilities && clientCapabilities.length > 0) {
            if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
                // Add access_token key to claims object
                mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
            }
            // Add xms_cc claim with provided clientCapabilities to access_token key
            mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
                values: clientCapabilities
            };
        }
        return JSON.stringify(mergedClaims);
    };
    /**
     * adds `username` for Password Grant flow
     * @param username
     */
    RequestParameterBuilder.prototype.addUsername = function (username) {
        this.parameters.set(PasswordGrantConstants.username, username);
    };
    /**
     * adds `password` for Password Grant flow
     * @param password
     */
    RequestParameterBuilder.prototype.addPassword = function (password) {
        this.parameters.set(PasswordGrantConstants.password, password);
    };
    /**
     * add pop_jwk to query params
     * @param cnfString
     */
    RequestParameterBuilder.prototype.addPopToken = function (cnfString) {
        if (!StringUtils.isEmpty(cnfString)) {
            this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
            this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
        }
    };
    /**
     * Utility to create a URL from the params map
     */
    RequestParameterBuilder.prototype.createQueryString = function () {
        var queryParameterArray = new Array();
        this.parameters.forEach(function (value, key) {
            queryParameterArray.push(key + "=" + value);
        });
        return queryParameterArray.join("&");
    };
    return RequestParameterBuilder;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class which exposes functions for managing date and time operations.
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * return the current time in Unix time (seconds).
     */
    TimeUtils.nowSeconds = function () {
        // Date.getTime() returns in milliseconds.
        return Math.round(new Date().getTime() / 1000.0);
    };
    /**
     * check if a token is expired based on given UTC time in seconds.
     * @param expiresOn
     */
    TimeUtils.isTokenExpired = function (expiresOn, offset) {
        // check for access token expiry
        var expirationSec = Number(expiresOn) || 0;
        var offsetCurrentTimeSec = TimeUtils.nowSeconds() + offset;
        // If current time + offset is greater than token expiration time, then token is expired.
        return (offsetCurrentTimeSec > expirationSec);
    };
    return TimeUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ID_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      realm: Full tenant or organizational identifier that the account belongs to
 * }
 */
var IdTokenEntity = /** @class */ (function (_super) {
    __extends(IdTokenEntity, _super);
    function IdTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create IdTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId, oboAssertion) {
        var idTokenEntity = new IdTokenEntity();
        idTokenEntity.credentialType = CredentialType.ID_TOKEN;
        idTokenEntity.homeAccountId = homeAccountId;
        idTokenEntity.environment = environment;
        idTokenEntity.clientId = clientId;
        idTokenEntity.secret = idToken;
        idTokenEntity.realm = tenantId;
        idTokenEntity.oboAssertion = oboAssertion;
        return idTokenEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    IdTokenEntity.isIdTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.ID_TOKEN);
    };
    return IdTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ACCESS_TOKEN Credential Type
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      cachedAt: Absolute device time when entry was created in the cache.
 *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
 *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
 *      keyId: used for POP and SSH tokenTypes
 *      tokenType: Type of the token issued. Usually "Bearer"
 * }
 */
var AccessTokenEntity = /** @class */ (function (_super) {
    __extends(AccessTokenEntity, _super);
    function AccessTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create AccessTokenEntity
     * @param homeAccountId
     * @param environment
     * @param accessToken
     * @param clientId
     * @param tenantId
     * @param scopes
     * @param expiresOn
     * @param extExpiresOn
     */
    AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, tokenType, oboAssertion) {
        var atEntity = new AccessTokenEntity();
        atEntity.homeAccountId = homeAccountId;
        atEntity.credentialType = CredentialType.ACCESS_TOKEN;
        atEntity.secret = accessToken;
        var currentTime = TimeUtils.nowSeconds();
        atEntity.cachedAt = currentTime.toString();
        /*
         * Token expiry time.
         * This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
         */
        atEntity.expiresOn = expiresOn.toString();
        atEntity.extendedExpiresOn = extExpiresOn.toString();
        atEntity.environment = environment;
        atEntity.clientId = clientId;
        atEntity.realm = tenantId;
        atEntity.target = scopes;
        atEntity.oboAssertion = oboAssertion;
        atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
        return atEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccessTokenEntity.isAccessTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity.hasOwnProperty("target") &&
            entity["credentialType"] === CredentialType.ACCESS_TOKEN);
    };
    return AccessTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * REFRESH_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
 *
 * Value:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 * }
 */
var RefreshTokenEntity = /** @class */ (function (_super) {
    __extends(RefreshTokenEntity, _super);
    function RefreshTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create RefreshTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId, oboAssertion) {
        var rtEntity = new RefreshTokenEntity();
        rtEntity.clientId = clientId;
        rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
        rtEntity.environment = environment;
        rtEntity.homeAccountId = homeAccountId;
        rtEntity.secret = refreshToken;
        rtEntity.oboAssertion = oboAssertion;
        if (familyId)
            rtEntity.familyId = familyId;
        return rtEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    RefreshTokenEntity.isRefreshTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.REFRESH_TOKEN);
    };
    return RefreshTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
 */
var InteractionRequiredAuthErrorMessage = [
    "interaction_required",
    "consent_required",
    "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required"
];
/**
 * Error thrown when user interaction is required at the auth server.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    __extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
        var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
        var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
        var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
            return errorString.indexOf(irErrorCode) > -1;
        });
        return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
    };
    return InteractionRequiredAuthError;
}(ServerError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var CacheRecord = /** @class */ (function () {
    function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
        this.account = accountEntity || null;
        this.idToken = idTokenEntity || null;
        this.accessToken = accessTokenEntity || null;
        this.refreshToken = refreshTokenEntity || null;
        this.appMetadata = appMetadataEntity || null;
    }
    return CacheRecord;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which provides helpers for OAuth 2.0 protocol specific values
 */
var ProtocolUtils = /** @class */ (function () {
    function ProtocolUtils() {
    }
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */
    ProtocolUtils.setRequestState = function (cryptoObj, userState, meta) {
        var libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
        return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
    };
    /**
     * Generates the state value used by the common library.
     * @param randomGuid
     * @param cryptoObj
     */
    ProtocolUtils.generateLibraryState = function (cryptoObj, meta) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
        }
        // Create a state object containing a unique id and the timestamp of the request creation
        var stateObj = {
            id: cryptoObj.createNewGuid(),
            ts: TimeUtils.nowSeconds()
        };
        if (meta) {
            stateObj.meta = meta;
        }
        var stateString = JSON.stringify(stateObj);
        return cryptoObj.base64Encode(stateString);
    };
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */
    ProtocolUtils.parseRequestState = function (cryptoObj, state) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
        }
        if (StringUtils.isEmpty(state)) {
            throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
        }
        try {
            // Split the state between library state and user passed state and decode them separately
            var splitState = decodeURIComponent(state).split(Constants.RESOURCE_DELIM);
            var libraryState = splitState[0];
            var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : "";
            var libraryStateString = cryptoObj.base64Decode(libraryState);
            var libraryStateObj = JSON.parse(libraryStateString);
            return {
                userRequestState: !StringUtils.isEmpty(userState) ? userState : "",
                libraryState: libraryStateObj
            };
        }
        catch (e) {
            throw ClientAuthError.createInvalidStateError(state, e);
        }
    };
    return ProtocolUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var KeyLocation;
(function (KeyLocation) {
    KeyLocation["SW"] = "sw";
    KeyLocation["UHW"] = "uhw";
})(KeyLocation || (KeyLocation = {}));
var PopTokenGenerator = /** @class */ (function () {
    function PopTokenGenerator(cryptoUtils) {
        this.cryptoUtils = cryptoUtils;
    }
    PopTokenGenerator.prototype.generateCnf = function (resourceRequestMethod, resourceRequestUri) {
        return __awaiter(this, void 0, void 0, function () {
            var kidThumbprint, reqCnf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cryptoUtils.getPublicKeyThumbprint(resourceRequestMethod, resourceRequestUri)];
                    case 1:
                        kidThumbprint = _a.sent();
                        reqCnf = {
                            kid: kidThumbprint,
                            xms_ksl: KeyLocation.SW
                        };
                        return [2 /*return*/, this.cryptoUtils.base64Encode(JSON.stringify(reqCnf))];
                }
            });
        });
    };
    PopTokenGenerator.prototype.signPopToken = function (accessToken, resourceRequestMethod, resourceRequestUri) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var tokenClaims, resourceUrlString, resourceUrlComponents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tokenClaims = AuthToken.extractTokenClaims(accessToken, this.cryptoUtils);
                        resourceUrlString = new UrlString(resourceRequestUri);
                        resourceUrlComponents = resourceUrlString.getUrlComponents();
                        if (!((_a = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _a === void 0 ? void 0 : _a.kid)) {
                            throw ClientAuthError.createTokenClaimsRequiredError();
                        }
                        return [4 /*yield*/, this.cryptoUtils.signJwt({
                                at: accessToken,
                                ts: "" + TimeUtils.nowSeconds(),
                                m: resourceRequestMethod.toUpperCase(),
                                u: resourceUrlComponents.HostNameAndPort || "",
                                nonce: this.cryptoUtils.createNewGuid(),
                                p: resourceUrlComponents.AbsolutePath,
                                q: [[], resourceUrlComponents.QueryString],
                            }, tokenClaims.cnf.kid)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return PopTokenGenerator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * APP_METADATA Cache
 *
 * Key:Value Schema:
 *
 * Key: appmetadata-<environment>-<client_id>
 *
 * Value:
 * {
 *      clientId: client ID of the application
 *      environment: entity that issued the token, represented as a full host
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 * }
 */
var AppMetadataEntity = /** @class */ (function () {
    function AppMetadataEntity() {
    }
    /**
     * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
     */
    AppMetadataEntity.prototype.generateAppMetadataKey = function () {
        return AppMetadataEntity.generateAppMetadataCacheKey(this.environment, this.clientId);
    };
    /**
     * Generate AppMetadata Cache Key
     */
    AppMetadataEntity.generateAppMetadataCacheKey = function (environment, clientId) {
        var appMetaDataKeyArray = [
            APP_METADATA,
            environment,
            clientId,
        ];
        return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Creates AppMetadataEntity
     * @param clientId
     * @param environment
     * @param familyId
     */
    AppMetadataEntity.createAppMetadataEntity = function (clientId, environment, familyId) {
        var appMetadata = new AppMetadataEntity();
        appMetadata.clientId = clientId;
        appMetadata.environment = environment;
        if (familyId) {
            appMetadata.familyId = familyId;
        }
        return appMetadata;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AppMetadataEntity.isAppMetadataEntity = function (key, entity) {
        if (!entity) {
            return false;
        }
        return (key.indexOf(APP_METADATA) === 0 &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("environment"));
    };
    return AppMetadataEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var TokenCacheContext = /** @class */ (function () {
    function TokenCacheContext(tokenCache, hasChanged) {
        this.cache = tokenCache;
        this.hasChanged = hasChanged;
    }
    Object.defineProperty(TokenCacheContext.prototype, "cacheHasChanged", {
        get: function () {
            return this.hasChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenCacheContext.prototype, "tokenCache", {
        get: function () {
            return this.cache;
        },
        enumerable: true,
        configurable: true
    });
    return TokenCacheContext;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class that handles response parsing.
 */
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
        this.clientId = clientId;
        this.cacheStorage = cacheStorage;
        this.cryptoObj = cryptoObj;
        this.logger = logger;
        this.serializableCache = serializableCache;
        this.persistencePlugin = persistencePlugin;
    }
    /**
     * Function which validates server authorization code response.
     * @param serverResponseHash
     * @param cachedState
     * @param cryptoObj
     */
    ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
        if (!serverResponseHash.state || !cachedState) {
            throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
        }
        if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
            throw ClientAuthError.createStateMismatchError();
        }
        // Check for error
        if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
        }
        if (serverResponseHash.client_info) {
            buildClientInfo(serverResponseHash.client_info, cryptoObj);
        }
    };
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     */
    ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
            }
            var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
            throw new ServerError(serverResponse.error, errString);
        }
    };
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */
    ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, resourceRequestMethod, resourceRequestUri, authCodePayload, requestScopes, oboAssertion, handlingRefreshTokenResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var idTokenObj, requestStateObj, cacheRecord, cacheContext, key, account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (serverTokenResponse.id_token) {
                            idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
                            // token nonce check (TODO: Add a warning if no nonce is given?)
                            if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                                if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                                    throw ClientAuthError.createNonceMismatchError();
                                }
                            }
                        }
                        // generate homeAccountId
                        this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
                        if (!!authCodePayload && !!authCodePayload.state) {
                            requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
                        }
                        cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, idTokenObj, requestStateObj && requestStateObj.libraryState, requestScopes, oboAssertion, authCodePayload);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 4, 7]);
                        if (!(this.persistencePlugin && this.serializableCache)) return [3 /*break*/, 3];
                        this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                        cacheContext = new TokenCacheContext(this.serializableCache, true);
                        return [4 /*yield*/, this.persistencePlugin.beforeCacheAccess(cacheContext)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        /*
                         * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
                         * If not present, we should return null, as it's the case that another application called removeAccount in between
                         * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal.
                         */
                        if (handlingRefreshTokenResponse && cacheRecord.account) {
                            key = cacheRecord.account.generateAccountKey();
                            account = this.cacheStorage.getAccount(key);
                            if (!account) {
                                this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                                return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, idTokenObj, requestStateObj, resourceRequestMethod, resourceRequestUri)];
                            }
                        }
                        this.cacheStorage.saveCacheRecord(cacheRecord);
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.persistencePlugin && this.serializableCache && cacheContext)) return [3 /*break*/, 6];
                        this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                        return [4 /*yield*/, this.persistencePlugin.afterCacheAccess(cacheContext)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, idTokenObj, requestStateObj, resourceRequestMethod, resourceRequestUri)];
                }
            });
        });
    };
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */
    ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, authority, idTokenObj, libraryState, requestScopes, oboAssertion, authCodePayload) {
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        // IdToken: non AAD scenarios can have empty realm
        var cachedIdToken;
        var cachedAccount;
        if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
            cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING, oboAssertion);
            cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, oboAssertion, authCodePayload);
        }
        // AccessToken
        var cachedAccessToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
            // If scopes not returned in server response, use request scopes
            var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(requestScopes || []);
            // Expiration calculation
            var currentTime = TimeUtils.nowSeconds();
            // If the request timestamp was sent in the library state, use that timestamp to calculate expiration. Otherwise, use current time.
            var timestamp = libraryState ? libraryState.ts : currentTime;
            var tokenExpirationSeconds = timestamp + (serverTokenResponse.expires_in || 0);
            var extendedTokenExpirationSeconds = tokenExpirationSeconds + (serverTokenResponse.ext_expires_in || 0);
            // non AAD scenarios can have empty realm
            cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, serverTokenResponse.token_type, oboAssertion);
        }
        // refreshToken
        var cachedRefreshToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
            cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, oboAssertion);
        }
        // appMetadata
        var cachedAppMetadata = null;
        if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
            cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
        }
        return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
    };
    /**
     * Generate Account
     * @param serverTokenResponse
     * @param idToken
     * @param authority
     */
    ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority, oboAssertion, authCodePayload) {
        var authorityType = authority.authorityType;
        var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : "";
        var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : "";
        // ADFS does not require client_info in the response
        if (authorityType === AuthorityType.Adfs) {
            this.logger.verbose("Authority type is ADFS, creating ADFS account");
            return AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
        }
        // This fallback applies to B2C as well as they fall under an AAD account type.
        if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
            throw ClientAuthError.createClientInfoEmptyError();
        }
        return serverTokenResponse.client_info ?
            AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, authority, idToken, oboAssertion, cloudGraphHostName, msGraphhost) :
            AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
    };
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */
    ResponseHandler.generateAuthenticationResult = function (cryptoObj, authority, cacheRecord, fromTokenCache, idTokenObj, requestState, resourceRequestMethod, resourceRequestUri) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, uid, tid;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        accessToken = "";
                        responseScopes = [];
                        expiresOn = null;
                        familyId = Constants.EMPTY_STRING;
                        if (!cacheRecord.accessToken) return [3 /*break*/, 4];
                        if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(cryptoObj);
                        if (!resourceRequestMethod || !resourceRequestUri) {
                            throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                        }
                        return [4 /*yield*/, popTokenGenerator.signPopToken(cacheRecord.accessToken.secret, resourceRequestMethod, resourceRequestUri)];
                    case 1:
                        accessToken = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        accessToken = cacheRecord.accessToken.secret;
                        _d.label = 3;
                    case 3:
                        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
                        expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
                        extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
                        _d.label = 4;
                    case 4:
                        if (cacheRecord.appMetadata) {
                            familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
                        }
                        uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
                        tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
                        return [2 /*return*/, {
                                authority: authority.canonicalAuthority,
                                uniqueId: uid,
                                tenantId: tid,
                                scopes: responseScopes,
                                account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                                idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
                                idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                                accessToken: accessToken,
                                fromCache: fromTokenCache,
                                expiresOn: expiresOn,
                                extExpiresOn: extExpiresOn,
                                familyId: familyId,
                                tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
                                state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
                                cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
                                msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING
                            }];
                }
            });
        });
    };
    return ResponseHandler;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Authorization Code client
 */
var AuthorizationCodeClient = /** @class */ (function (_super) {
    __extends(AuthorizationCodeClient, _super);
    function AuthorizationCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Creates the URL of the authorization request letting the user input credentials and consent to the
     * application. The URL target the /authorize endpoint of the authority configured in the
     * application object.
     *
     * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
     * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
     * acquireToken(AuthorizationCodeRequest)
     * @param request
     */
    AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString;
            return __generator(this, function (_a) {
                queryString = this.createAuthCodeUrlQueryString(request);
                return [2 /*return*/, this.authority.authorizationEndpoint + "?" + queryString];
            });
        });
    };
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */
    AuthorizationCodeClient.prototype.acquireToken = function (request, authCodePayload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseHandler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        if (!request || StringUtils.isEmpty(request.code)) {
                            throw ClientAuthError.createTokenRequestCannotBeMadeError();
                        }
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, authCodePayload)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Handles the hash fragment response from public client code request. Returns a code response used by
     * the client to exchange for a token in acquireToken.
     * @param hashFragment
     */
    AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
        // Handle responses.
        var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
        // Deserialize hash fragment response parameters.
        var hashUrlString = new UrlString(hashFragment);
        // Deserialize hash fragment response parameters.
        var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
        // Get code response
        responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
        // throw when there is no auth code in the response
        if (!serverParams.code) {
            throw ClientAuthError.createNoAuthCodeInServerResponseError();
        }
        return __assign(__assign({}, serverParams), { 
            // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
            code: serverParams.code });
    };
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */
    AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
        // Throw error if logoutRequest is null/undefined
        if (!logoutRequest) {
            throw ClientConfigurationError.createEmptyLogoutRequestError();
        }
        if (logoutRequest.account) {
            // Clear given account.
            this.cacheManager.removeAccount(AccountEntity.generateAccountCacheKey(logoutRequest.account));
        }
        else {
            // Clear all accounts and tokens
            this.cacheManager.clear();
        }
        var queryString = this.createLogoutUrlQueryString(logoutRequest);
        // Construct logout URI.
        return StringUtils.isEmpty(queryString) ? this.authority.endSessionEndpoint : this.authority.endSessionEndpoint + "?" + queryString;
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, requestBody, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _a.sent();
                        headers = this.createDefaultTokenRequestHeaders();
                        return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                }
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var parameterBuilder, clientAssertion, popTokenGenerator, cnfString, correlationId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        // validate the redirectUri (to be a non null value)
                        parameterBuilder.addRedirectUri(request.redirectUri);
                        // Add scope array, parameter builder will add default scopes and dedupe
                        parameterBuilder.addScopes(request.scopes);
                        // add code: user set, not validated
                        parameterBuilder.addAuthorizationCode(request.code);
                        // add code_verifier if passed
                        if (request.codeVerifier) {
                            parameterBuilder.addCodeVerifier(request.codeVerifier);
                        }
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                        parameterBuilder.addClientInfo();
                        if (!(request.authenticationScheme === AuthenticationScheme.POP && !!request.resourceRequestMethod && !!request.resourceRequestUri)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                    case 1:
                        cnfString = _a.sent();
                        parameterBuilder.addPopToken(cnfString);
                        _a.label = 2;
                    case 2:
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    /**
     * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        var requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
        parameterBuilder.addScopes(requestScopes);
        // validate the redirectUri (to be a non null value)
        parameterBuilder.addRedirectUri(request.redirectUri);
        // generate the correlationId if not set by the user and add
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        // add response_mode. If not passed in it defaults to query.
        parameterBuilder.addResponseMode(request.responseMode);
        // add response_type = code
        parameterBuilder.addResponseTypeCode();
        // add library info parameters
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        // add client_info=1
        parameterBuilder.addClientInfo();
        if (request.codeChallenge && request.codeChallengeMethod) {
            parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
        }
        if (request.prompt) {
            parameterBuilder.addPrompt(request.prompt);
        }
        if (request.domainHint) {
            parameterBuilder.addDomainHint(request.domainHint);
        }
        // Add sid or loginHint with preference for sid -> loginHint -> username of AccountInfo object
        if (request.sid) {
            parameterBuilder.addSid(request.sid);
        }
        else if (request.loginHint) {
            parameterBuilder.addLoginHint(request.loginHint);
        }
        else if (request.account && request.account.username) {
            parameterBuilder.addLoginHint(request.account.username);
        }
        if (request.nonce) {
            parameterBuilder.addNonce(request.nonce);
        }
        if (request.state) {
            parameterBuilder.addState(request.state);
        }
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        if (request.extraQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * This API validates the `EndSessionRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createLogoutUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        if (request.postLogoutRedirectUri) {
            parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
        }
        if (request.correlationId) {
            parameterBuilder.addCorrelationId(request.correlationId);
        }
        if (request.idTokenHint) {
            parameterBuilder.addIdTokenHint(request.idTokenHint);
        }
        return parameterBuilder.createQueryString();
    };
    return AuthorizationCodeClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 Device code client
 */
var DeviceCodeClient = /** @class */ (function (_super) {
    __extends(DeviceCodeClient, _super);
    function DeviceCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Gets device code from device code endpoint, calls back to with device code response, and
     * polls token endpoint to exchange device code for tokens
     * @param request
     */
    DeviceCodeClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceCodeResponse, response, responseHandler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                    case 1:
                        deviceCodeResponse = _a.sent();
                        request.deviceCodeCallback(deviceCodeResponse);
                        return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                    case 2:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response, this.authority, request.resourceRequestMethod, request.resourceRequestUri)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates device code request and executes http GET
     * @param request
     */
    DeviceCodeClient.prototype.getDeviceCode = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryString, headers, thumbprint;
            return __generator(this, function (_a) {
                queryString = this.createQueryString(request);
                headers = this.createDefaultTokenRequestHeaders();
                thumbprint = {
                    clientId: this.config.authOptions.clientId,
                    authority: request.authority,
                    scopes: request.scopes
                };
                return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers, thumbprint)];
            });
        });
    };
    /**
     * Executes POST request to device code endpoint
     * @param deviceCodeEndpoint
     * @param queryString
     * @param headers
     */
    DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers, thumbprint) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, deviceCodeEndpoint, {
                            body: queryString,
                            headers: headers
                        })];
                    case 1:
                        _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                        return [2 /*return*/, {
                                userCode: userCode,
                                deviceCode: deviceCode,
                                verificationUri: verificationUri,
                                expiresIn: expiresIn,
                                interval: interval,
                                message: message
                            }];
                }
            });
        });
    };
    /**
     * Create device code endpoint query parameters and returns string
     */
    DeviceCodeClient.prototype.createQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * Creates token request with device code response and polls token endpoint at interval set by the device code
     * response
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, userSpecifiedTimeout, deviceCodeExpirationTime, pollingIntervalMilli;
            var _this = this;
            return __generator(this, function (_a) {
                requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                headers = this.createDefaultTokenRequestHeaders();
                userSpecifiedTimeout = request.timeout ? TimeUtils.nowSeconds() + request.timeout : undefined;
                deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                /*
                 * Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                 * setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                 */
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var thumbprint, response, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 6, , 7]);
                                        if (!request.cancel) return [3 /*break*/, 1];
                                        this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeCancelledError());
                                        return [3 /*break*/, 5];
                                    case 1:
                                        if (!(userSpecifiedTimeout && userSpecifiedTimeout < deviceCodeExpirationTime && TimeUtils.nowSeconds() > userSpecifiedTimeout)) return [3 /*break*/, 2];
                                        this.logger.error("User defined timeout for device code polling reached. The timeout was set for " + userSpecifiedTimeout);
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createUserTimeoutReachedError());
                                        return [3 /*break*/, 5];
                                    case 2:
                                        if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 3];
                                        if (userSpecifiedTimeout) {
                                            this.logger.verbose("User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for " + userSpecifiedTimeout);
                                        }
                                        this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeExpiredError());
                                        return [3 /*break*/, 5];
                                    case 3:
                                        thumbprint = {
                                            clientId: this.config.authOptions.clientId,
                                            authority: request.authority,
                                            scopes: request.scopes
                                        };
                                        return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers, thumbprint)];
                                    case 4:
                                        response = _a.sent();
                                        if (response.body && response.body.error === Constants.AUTHORIZATION_PENDING) {
                                            // user authorization is pending. Sleep for polling interval and try again
                                            this.logger.info(response.body.error_description || "no_error_description");
                                        }
                                        else {
                                            clearInterval(intervalId);
                                            resolve(response.body);
                                        }
                                        _a.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        error_1 = _a.sent();
                                        clearInterval(intervalId);
                                        reject(error_1);
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); }, pollingIntervalMilli);
                    })];
            });
        });
    };
    /**
     * Creates query parameters and converts to string.
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
        var requestParameters = new RequestParameterBuilder();
        requestParameters.addScopes(request.scopes);
        requestParameters.addClientId(this.config.authOptions.clientId);
        requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
        requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        requestParameters.addCorrelationId(correlationId);
        requestParameters.addClientInfo();
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            requestParameters.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return requestParameters.createQueryString();
    };
    return DeviceCodeClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 refresh token client
 */
var RefreshTokenClient = /** @class */ (function (_super) {
    __extends(RefreshTokenClient, _super);
    function RefreshTokenClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    RefreshTokenClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseHandler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [2 /*return*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, [], undefined, true)];
                }
            });
        });
    };
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenByRefreshToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
            return __generator(this, function (_a) {
                // Cannot renew token if no request object is given.
                if (!request) {
                    throw ClientConfigurationError.createEmptyTokenRequestError();
                }
                // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                if (!request.account) {
                    throw ClientAuthError.createNoAccountInSilentRequestError();
                }
                isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
                // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
                if (isFOCI) {
                    try {
                        return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, true)];
                    }
                    catch (e) {
                        noFamilyRTInCache = e instanceof ClientAuthError && e.errorCode === ClientAuthErrorMessage.noTokensFoundError.code;
                        clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
                        // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
                        if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                            return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                            // throw in all other cases
                        }
                        else {
                            throw e;
                        }
                    }
                }
                // fall back to application refresh token acquisition
                return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
            });
        });
    };
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenWithCachedRefreshToken = function (request, foci) {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, refreshTokenRequest;
            return __generator(this, function (_a) {
                refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
                // no refresh Token
                if (!refreshToken) {
                    throw ClientAuthError.createNoTokensFoundError();
                }
                refreshTokenRequest = __assign(__assign({}, request), { refreshToken: refreshToken.secret, authenticationScheme: AuthenticationScheme.BEARER });
                return [2 /*return*/, this.acquireToken(refreshTokenRequest)];
            });
        });
    };
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */
    RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _a.sent();
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes
                        };
                        return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                }
            });
        });
    };
    /**
     * Helper function to create the token request body
     * @param request
     */
    RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var parameterBuilder, correlationId, clientAssertion, popTokenGenerator, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        parameterBuilder.addScopes(request.scopes);
                        parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                        parameterBuilder.addClientInfo();
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        parameterBuilder.addRefreshToken(request.refreshToken);
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        if (!request.resourceRequestMethod || !request.resourceRequestUri) {
                            throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                        }
                        _b = (_a = parameterBuilder).addPopToken;
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2:
                        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    return RefreshTokenClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 client credential grant
 */
var ClientCredentialClient = /** @class */ (function (_super) {
    __extends(ClientCredentialClient, _super);
    function ClientCredentialClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Public API to acquire a token with ClientCredential Flow for Confidential clients
     * @param request
     */
    ClientCredentialClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedAuthenticationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        if (!request.skipCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.getCachedAuthenticationResult()];
                    case 3:
                        cachedAuthenticationResult = _a.sent();
                        if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                        return [2 /*return*/, cachedAuthenticationResult];
                    case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * looks up cache if the tokens are cached already
     */
    ClientCredentialClient.prototype.getCachedAuthenticationResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cachedAccessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCache();
                        if (!cachedAccessToken ||
                            TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: null,
                                idToken: null,
                                accessToken: cachedAccessToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reads access token from the cache
     * TODO: Move this call to cacheManager instead
     */
    ClientCredentialClient.prototype.readAccessTokenFromCache = function () {
        var accessTokenFilter = {
            homeAccountId: "",
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            target: this.scopeSet.printScopesLowerCase()
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        if (accessTokens.length < 1) {
            return null;
        }
        else if (accessTokens.length > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Makes a network call to request the token from the service
     * @param request
     * @param authority
     */
    ClientCredentialClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes)];
                    case 2:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate the request to the server in the acceptable format
     * @param request
     */
    ClientCredentialClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes, false);
        parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    return ClientCredentialClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * On-Behalf-Of client
 */
var OnBehalfOfClient = /** @class */ (function (_super) {
    __extends(OnBehalfOfClient, _super);
    function OnBehalfOfClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Public API to acquire tokens with on behalf of flow
     * @param request
     */
    OnBehalfOfClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedAuthenticationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        if (!request.skipCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                    case 3:
                        cachedAuthenticationResult = _a.sent();
                        if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                        return [2 /*return*/, cachedAuthenticationResult];
                    case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * look up cache for tokens
     * @param request
     */
    OnBehalfOfClient.prototype.getCachedAuthenticationResult = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCache(request);
                        if (!cachedAccessToken ||
                            TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            return [2 /*return*/, null];
                        }
                        cachedIdToken = this.readIdTokenFromCache(request);
                        cachedAccount = null;
                        if (cachedIdToken) {
                            idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                            localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                            accountInfo = {
                                homeAccountId: cachedIdToken.homeAccountId,
                                environment: cachedIdToken.environment,
                                tenantId: cachedIdToken.realm,
                                username: Constants.EMPTY_STRING,
                                localAccountId: localAccountId || ""
                            };
                            cachedAccount = this.readAccountFromCache(accountInfo);
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: cachedAccount,
                                accessToken: cachedAccessToken,
                                idToken: cachedIdToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true, idTokenObject)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * read access token from cache TODO: CacheManager API should be used here
     * @param request
     */
    OnBehalfOfClient.prototype.readAccessTokenFromCache = function (request) {
        var accessTokenFilter = {
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            target: this.scopeSet.printScopesLowerCase(),
            oboAssertion: request.oboAssertion
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * read idtoken from cache TODO: CacheManager API should be used here instead
     * @param request
     */
    OnBehalfOfClient.prototype.readIdTokenFromCache = function (request) {
        var idTokenFilter = {
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ID_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            oboAssertion: request.oboAssertion
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        // When acquiring a token on behalf of an application, there might not be an id token in the cache
        if (idTokens.length < 1) {
            return null;
        }
        return idTokens[0];
    };
    /**
     * read account from cache, TODO: CacheManager API should be used here instead
     * @param account
     */
    OnBehalfOfClient.prototype.readAccountFromCache = function (account) {
        return this.cacheManager.readAccountFromCache(account);
    };
    /**
     * Make a network call to the server requesting credentials
     * @param request
     * @param authority
     */
    OnBehalfOfClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes, request.oboAssertion)];
                    case 2:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate a server request in accepable format
     * @param request
     */
    OnBehalfOfClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addGrantType(GrantType.JWT_BEARER);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
        parameterBuilder.addOboAssertion(request.oboAssertion);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        return parameterBuilder.createQueryString();
    };
    return OnBehalfOfClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var SilentFlowClient = /** @class */ (function (_super) {
    __extends(SilentFlowClient, _super);
    function SilentFlowClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
     * the given token and returns the renewed token
     * @param request
     */
    SilentFlowClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, refreshTokenClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.acquireCachedToken(request)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                            refreshTokenClient = new RefreshTokenClient(this.config);
                            return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(request)];
                        }
                        else {
                            throw e_1;
                        }
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves token from cache or throws an error if it must be refreshed.
     * @param request
     */
    SilentFlowClient.prototype.acquireCachedToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var requestScopes, environment, cacheRecord;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Cannot renew token if no request object is given.
                        if (!request) {
                            throw ClientConfigurationError.createEmptyTokenRequestError();
                        }
                        // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                        if (!request.account) {
                            throw ClientAuthError.createNoAccountInSilentRequestError();
                        }
                        requestScopes = new ScopeSet(request.scopes || []);
                        environment = request.authority || Authority.generateEnvironmentFromAuthority(this.authority);
                        cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, requestScopes, environment);
                        if (!this.isRefreshRequired(request, cacheRecord.accessToken)) return [3 /*break*/, 1];
                        throw ClientAuthError.createRefreshRequiredError();
                    case 1:
                        if (this.config.serverTelemetryManager) {
                            this.config.serverTelemetryManager.incrementCacheHits();
                        }
                        return [4 /*yield*/, this.generateResultFromCacheRecord(cacheRecord, request.resourceRequestMethod, request.resourceRequestUri)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Helper function to build response object from the CacheRecord
     * @param cacheRecord
     */
    SilentFlowClient.prototype.generateResultFromCacheRecord = function (cacheRecord, resourceRequestMethod, resourceRequestUri) {
        return __awaiter(this, void 0, void 0, function () {
            var idTokenObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (cacheRecord.idToken) {
                            idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, idTokenObj, undefined, resourceRequestMethod, resourceRequestUri)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Given a request object and an accessTokenEntity determine if the accessToken needs to be refreshed
     * @param request
     * @param cachedAccessToken
     */
    SilentFlowClient.prototype.isRefreshRequired = function (request, cachedAccessToken) {
        if (request.forceRefresh || request.claims) {
            // Must refresh due to request parameters
            return true;
        }
        else if (!cachedAccessToken || TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
            // Must refresh due to expired or non-existent access_token
            return true;
        }
        return false;
    };
    return SilentFlowClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Password grant client
 * Note: We are only supporting public clients for password grant and for purely testing purposes
 */
var UsernamePasswordClient = /** @class */ (function (_super) {
    __extends(UsernamePasswordClient, _super);
    function UsernamePasswordClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * API to acquire a token by passing the username and password to the service in exchage of credentials
     * password_grant
     * @param request
     */
    UsernamePasswordClient.prototype.acquireToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseHandler, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    UsernamePasswordClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter(this, void 0, void 0, function () {
            var thumbprint, requestBody, headers;
            return __generator(this, function (_a) {
                thumbprint = {
                    clientId: this.config.authOptions.clientId,
                    authority: authority.canonicalAuthority,
                    scopes: request.scopes
                };
                requestBody = this.createTokenRequestBody(request);
                headers = this.createDefaultTokenRequestHeaders();
                return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    UsernamePasswordClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addUsername(request.username);
        parameterBuilder.addPassword(request.password);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    return UsernamePasswordClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Also performs endpoint discovery.
     *
     * @param authorityUri
     * @param networkClient
     * @param protocolMode
     */
    AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient, protocolMode) {
        return __awaiter(this, void 0, void 0, function () {
            var acquireTokenAuthority, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient, protocolMode);
                        if (acquireTokenAuthority.discoveryComplete()) {
                            return [2 /*return*/, acquireTokenAuthority];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, acquireTokenAuthority];
                    case 3:
                        e_1 = _a.sent();
                        throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Does not perform endpoint discovery.
     *
     * @param authorityUrl
     * @param networkInterface
     * @param protocolMode
     */
    AuthorityFactory.createInstance = function (authorityUrl, networkInterface, protocolMode) {
        // Throw error if authority url is empty
        if (StringUtils.isEmpty(authorityUrl)) {
            throw ClientConfigurationError.createUrlEmptyError();
        }
        return new Authority(authorityUrl, networkInterface, protocolMode);
    };
    return AuthorityFactory;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryEntity = /** @class */ (function () {
    function ServerTelemetryEntity() {
        this.failedRequests = [];
        this.errors = [];
        this.cacheHits = 0;
    }
    /**
     * validates if a given cache entry is "Telemetry", parses <key,value>
     * @param key
     * @param entity
     */
    ServerTelemetryEntity.isServerTelemetryEntity = function (key, entity) {
        var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
        var validateEntity = true;
        if (entity) {
            validateEntity =
                entity.hasOwnProperty("failedRequests") &&
                    entity.hasOwnProperty("errors") &&
                    entity.hasOwnProperty("cacheHits");
        }
        return validateKey && validateEntity;
    };
    return ServerTelemetryEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingEntity = /** @class */ (function () {
    function ThrottlingEntity() {
    }
    /**
     * validates if a given cache entry is "Throttling", parses <key,value>
     * @param key
     * @param entity
     */
    ThrottlingEntity.isThrottlingEntity = function (key, entity) {
        var validateKey = false;
        if (key) {
            validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
        }
        var validateEntity = true;
        if (entity) {
            validateEntity = entity.hasOwnProperty("throttleTime");
        }
        return validateKey && validateEntity;
    };
    return ThrottlingEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var StubbedNetworkModule = {
    sendGetRequestAsync: function () {
        var notImplErr = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
        return Promise.reject(AuthError.createUnexpectedError(notImplErr));
    },
    sendPostRequestAsync: function () {
        var notImplErr = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
        return Promise.reject(AuthError.createUnexpectedError(notImplErr));
    }
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryManager = /** @class */ (function () {
    function ServerTelemetryManager(telemetryRequest, cacheManager) {
        this.cacheManager = cacheManager;
        this.apiId = telemetryRequest.apiId;
        this.correlationId = telemetryRequest.correlationId;
        this.forceRefresh = telemetryRequest.forceRefresh || false;
        this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    /**
     * API to add MSER Telemetry to request
     */
    ServerTelemetryManager.prototype.generateCurrentRequestHeaderValue = function () {
        var forceRefreshInt = this.forceRefresh ? 1 : 0;
        var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + forceRefreshInt;
        var platformFields = ""; // TODO: Determine what we want to include
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, request, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to add MSER Telemetry for the last failed request
     */
    ServerTelemetryManager.prototype.generateLastRequestHeaderValue = function () {
        var lastRequests = this.getLastRequests();
        var maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errorCount = lastRequests.errors.length;
        // Indicate whether this header contains all data or partial data
        var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
        var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to cache token failures for MSER data capture
     * @param error
     */
    ServerTelemetryManager.prototype.cacheFailedRequest = function (error) {
        var lastRequests = this.getLastRequests();
        lastRequests.failedRequests.push(this.apiId, this.correlationId);
        if (!StringUtils.isEmpty(error.subError)) {
            lastRequests.errors.push(error.subError);
        }
        else if (!StringUtils.isEmpty(error.errorCode)) {
            lastRequests.errors.push(error.errorCode);
        }
        else if (!!error && error.toString()) {
            lastRequests.errors.push(error.toString());
        }
        else {
            lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
        }
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return;
    };
    /**
     * Update server telemetry cache entry by incrementing cache hit counter
     */
    ServerTelemetryManager.prototype.incrementCacheHits = function () {
        var lastRequests = this.getLastRequests();
        lastRequests.cacheHits += 1;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return lastRequests.cacheHits;
    };
    /**
     * Get the server telemetry entity from cache or initialize a new one
     */
    ServerTelemetryManager.prototype.getLastRequests = function () {
        var initialValue = new ServerTelemetryEntity();
        var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
        return lastRequests || initialValue;
    };
    /**
     * Remove server telemetry cache entry
     */
    ServerTelemetryManager.prototype.clearTelemetryCache = function () {
        var lastRequests = this.getLastRequests();
        var numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var errorCount = lastRequests.errors.length;
        if (numErrorsFlushed === errorCount) {
            // All errors were sent on last request, clear Telemetry cache
            this.cacheManager.removeItem(this.telemetryCacheKey);
        }
        else {
            // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
            var serverTelemEntity = new ServerTelemetryEntity();
            serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2); // failedRequests contains 2 items for each error
            serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
        }
    };
    /**
     * Returns the maximum number of errors that can be flushed to the server in the next network request
     * @param serverTelemetryEntity
     */
    ServerTelemetryManager.maxErrorsToSend = function (serverTelemetryEntity) {
        var i;
        var maxErrors = 0;
        var dataSize = 0;
        var errorCount = serverTelemetryEntity.errors.length;
        for (i = 0; i < errorCount; i++) {
            // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
            var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
            var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
            var errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
            // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
            dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
            if (dataSize < SERVER_TELEM_CONSTANTS.MAX_HEADER_BYTES) {
                // Adding this entry to the header would still keep header size below the limit
                maxErrors += 1;
            }
            else {
                break;
            }
        }
        return maxErrors;
    };
    return ServerTelemetryManager;
}());

export { AccessTokenEntity, AccountEntity, AppMetadataEntity, AuthError, AuthErrorMessage, AuthToken, AuthenticationScheme, Authority, AuthorityFactory, AuthorityType, AuthorizationCodeClient, CacheAccountType, CacheManager, CacheSchemaType, CacheType, ClientAuthError, ClientAuthErrorMessage, ClientConfigurationError, ClientConfigurationErrorMessage, ClientCredentialClient, Constants, CredentialEntity, CredentialType, DEFAULT_CRYPTO_IMPLEMENTATION, DEFAULT_SYSTEM_OPTIONS, DefaultStorageClass, DeviceCodeClient, AuthToken as IdToken, IdTokenEntity, InteractionRequiredAuthError, LogLevel, Logger, NetworkManager, OnBehalfOfClient, PersistentCacheKeys, PromptValue, ProtocolMode, ProtocolUtils, RefreshTokenClient, RefreshTokenEntity, ResponseMode, ServerError, ServerTelemetryEntity, ServerTelemetryManager, SilentFlowClient, StringUtils, StubbedNetworkModule, ThrottlingEntity, ThrottlingUtils, TimeUtils, TokenCacheContext, TrustedAuthority, UrlString, UsernamePasswordClient };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCIuLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwiLi4vc3JjL2NyeXB0by9JQ3J5cHRvLnRzIiwiLi4vc3JjL2Vycm9yL0NsaWVudEF1dGhFcnJvci50cyIsIi4uL3NyYy91dGlscy9TdHJpbmdVdGlscy50cyIsIi4uL3NyYy9sb2dnZXIvTG9nZ2VyLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0NyZWRlbnRpYWxFbnRpdHkudHMiLCIuLi9zcmMvZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnRzIiwiLi4vc3JjL3JlcXVlc3QvU2NvcGVTZXQudHMiLCIuLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eVR5cGUudHMiLCIuLi9zcmMvdXJsL1VybFN0cmluZy50cyIsIi4uL3NyYy9hdXRob3JpdHkvVHJ1c3RlZEF1dGhvcml0eS50cyIsIi4uL3NyYy9hdXRob3JpdHkvUHJvdG9jb2xNb2RlLnRzIiwiLi4vc3JjL2F1dGhvcml0eS9BdXRob3JpdHkudHMiLCIuLi9zcmMvYWNjb3VudC9DbGllbnRJbmZvLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHkudHMiLCIuLi9zcmMvYWNjb3VudC9BdXRoVG9rZW4udHMiLCIuLi9zcmMvY2FjaGUvQ2FjaGVNYW5hZ2VyLnRzIiwiLi4vc3JjL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uLnRzIiwiLi4vc3JjL2Vycm9yL1NlcnZlckVycm9yLnRzIiwiLi4vc3JjL25ldHdvcmsvVGhyb3R0bGluZ1V0aWxzLnRzIiwiLi4vc3JjL25ldHdvcmsvTmV0d29ya01hbmFnZXIudHMiLCIuLi9zcmMvY2xpZW50L0Jhc2VDbGllbnQudHMiLCIuLi9zcmMvcmVxdWVzdC9SZXF1ZXN0VmFsaWRhdG9yLnRzIiwiLi4vc3JjL3JlcXVlc3QvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIudHMiLCIuLi9zcmMvdXRpbHMvVGltZVV0aWxzLnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL0lkVG9rZW5FbnRpdHkudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHkudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5LnRzIiwiLi4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvQ2FjaGVSZWNvcmQudHMiLCIuLi9zcmMvdXRpbHMvUHJvdG9jb2xVdGlscy50cyIsIi4uL3NyYy9jcnlwdG8vUG9wVG9rZW5HZW5lcmF0b3IudHMiLCIuLi9zcmMvY2FjaGUvZW50aXRpZXMvQXBwTWV0YWRhdGFFbnRpdHkudHMiLCIuLi9zcmMvY2FjaGUvcGVyc2lzdGVuY2UvVG9rZW5DYWNoZUNvbnRleHQudHMiLCIuLi9zcmMvcmVzcG9uc2UvUmVzcG9uc2VIYW5kbGVyLnRzIiwiLi4vc3JjL2NsaWVudC9BdXRob3JpemF0aW9uQ29kZUNsaWVudC50cyIsIi4uL3NyYy9jbGllbnQvRGV2aWNlQ29kZUNsaWVudC50cyIsIi4uL3NyYy9jbGllbnQvUmVmcmVzaFRva2VuQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9DbGllbnRDcmVkZW50aWFsQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9PbkJlaGFsZk9mQ2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9TaWxlbnRGbG93Q2xpZW50LnRzIiwiLi4vc3JjL2NsaWVudC9Vc2VybmFtZVBhc3N3b3JkQ2xpZW50LnRzIiwiLi4vc3JjL2F1dGhvcml0eS9BdXRob3JpdHlGYWN0b3J5LnRzIiwiLi4vc3JjL2NhY2hlL2VudGl0aWVzL1NlcnZlclRlbGVtZXRyeUVudGl0eS50cyIsIi4uL3NyYy9jYWNoZS9lbnRpdGllcy9UaHJvdHRsaW5nRW50aXR5LnRzIiwiLi4vc3JjL25ldHdvcmsvSU5ldHdvcmtNb2R1bGUudHMiLCIuLi9zcmMvdGVsZW1ldHJ5L3NlcnZlci9TZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcclxuICAgIExJQlJBUllfTkFNRTogXCJNU0FMLkpTXCIsXHJcbiAgICBTS1U6IFwibXNhbC5qcy5jb21tb25cIixcclxuICAgIC8vIFByZWZpeCBmb3IgYWxsIGxpYnJhcnkgY2FjaGUgZW50cmllc1xyXG4gICAgQ0FDSEVfUFJFRklYOiBcIm1zYWxcIixcclxuICAgIC8vIGRlZmF1bHQgYXV0aG9yaXR5XHJcbiAgICBERUZBVUxUX0FVVEhPUklUWTogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uL1wiLFxyXG4gICAgREVGQVVMVF9BVVRIT1JJVFlfSE9TVDogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCIsXHJcbiAgICAvLyBBREZTIFN0cmluZ1xyXG4gICAgQURGUzogXCJhZGZzXCIsXHJcbiAgICAvLyBEZWZhdWx0IEFBRCBJbnN0YW5jZSBEaXNjb3ZlcnkgRW5kcG9pbnRcclxuICAgIEFBRF9JTlNUQU5DRV9ESVNDT1ZFUllfRU5EUFQ6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9kaXNjb3ZlcnkvaW5zdGFuY2U/YXBpLXZlcnNpb249MS4xJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9XCIsXHJcbiAgICAvLyBSZXNvdXJjZSBkZWxpbWl0ZXIgLSB1c2VkIGZvciBjZXJ0YWluIGNhY2hlIGVudHJpZXNcclxuICAgIFJFU09VUkNFX0RFTElNOiBcInxcIixcclxuICAgIC8vIFBsYWNlaG9sZGVyIGZvciBub24tZXhpc3RlbnQgYWNjb3VudCBpZHMvb2JqZWN0c1xyXG4gICAgTk9fQUNDT1VOVDogXCJOT19BQ0NPVU5UXCIsXHJcbiAgICAvLyBDbGFpbXNcclxuICAgIENMQUlNUzogXCJjbGFpbXNcIixcclxuICAgIC8vIENvbnN1bWVyIFVUSURcclxuICAgIENPTlNVTUVSX1VUSUQ6IFwiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkXCIsXHJcbiAgICAvLyBEZWZhdWx0IHNjb3Blc1xyXG4gICAgT1BFTklEX1NDT1BFOiBcIm9wZW5pZFwiLFxyXG4gICAgUFJPRklMRV9TQ09QRTogXCJwcm9maWxlXCIsXHJcbiAgICBPRkZMSU5FX0FDQ0VTU19TQ09QRTogXCJvZmZsaW5lX2FjY2Vzc1wiLFxyXG4gICAgLy8gRGVmYXVsdCByZXNwb25zZSB0eXBlIGZvciBhdXRob3JpemF0aW9uIGNvZGUgZmxvd1xyXG4gICAgQ09ERV9SRVNQT05TRV9UWVBFOiBcImNvZGVcIixcclxuICAgIENPREVfR1JBTlRfVFlQRTogXCJhdXRob3JpemF0aW9uX2NvZGVcIixcclxuICAgIFJUX0dSQU5UX1RZUEU6IFwicmVmcmVzaF90b2tlblwiLFxyXG4gICAgRlJBR01FTlRfUkVTUE9OU0VfTU9ERTogXCJmcmFnbWVudFwiLFxyXG4gICAgUzI1Nl9DT0RFX0NIQUxMRU5HRV9NRVRIT0Q6IFwiUzI1NlwiLFxyXG4gICAgVVJMX0ZPUk1fQ09OVEVOVF9UWVBFOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICBBVVRIT1JJWkFUSU9OX1BFTkRJTkc6IFwiYXV0aG9yaXphdGlvbl9wZW5kaW5nXCIsXHJcbiAgICBOT1RfREVGSU5FRDogXCJub3RfZGVmaW5lZFwiLFxyXG4gICAgRU1QVFlfU1RSSU5HOiBcIlwiLFxyXG4gICAgRk9SV0FSRF9TTEFTSDogXCIvXCIgXHJcbn07XHJcblxyXG4vKipcclxuICogUmVxdWVzdCBoZWFkZXIgbmFtZXNcclxuICovXHJcbmV4cG9ydCBlbnVtIEhlYWRlck5hbWVzIHtcclxuICAgIENPTlRFTlRfVFlQRSA9IFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICBYX0NMSUVOVF9DVVJSX1RFTEVNID0gXCJ4LWNsaWVudC1jdXJyZW50LXRlbGVtZXRyeVwiLFxyXG4gICAgWF9DTElFTlRfTEFTVF9URUxFTSA9IFwieC1jbGllbnQtbGFzdC10ZWxlbWV0cnlcIixcclxuICAgIFJFVFJZX0FGVEVSID0gXCJSZXRyeS1BZnRlclwiLFxyXG4gICAgWF9NU19MSUJfQ0FQQUJJTElUWSA9IFwieC1tcy1saWItY2FwYWJpbGl0eVwiLFxyXG4gICAgWF9NU19MSUJfQ0FQQUJJTElUWV9WQUxVRSA9IFwicmV0cnktYWZ0ZXIsIGg0MjlcIlxyXG59XHJcblxyXG4vKipcclxuICogUGVyc2lzdGVudCBjYWNoZSBrZXlzIE1TQUwgd2hpY2ggc3RheSB3aGlsZSB1c2VyIGlzIGxvZ2dlZCBpbi5cclxuICovXHJcbmV4cG9ydCBlbnVtIFBlcnNpc3RlbnRDYWNoZUtleXMge1xyXG4gICAgSURfVE9LRU4gPSBcImlkdG9rZW5cIixcclxuICAgIENMSUVOVF9JTkZPID0gXCJjbGllbnQuaW5mb1wiLFxyXG4gICAgQURBTF9JRF9UT0tFTiA9IFwiYWRhbC5pZHRva2VuXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0MgPSBcImVycm9yLmRlc2NyaXB0aW9uXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIFN0cmluZyBjb25zdGFudHMgcmVsYXRlZCB0byBBQUQgQXV0aG9yaXR5XHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURBdXRob3JpdHlDb25zdGFudHMge1xyXG4gICAgQ09NTU9OID0gXCJjb21tb25cIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIEtleXMgaW4gdGhlIGhhc2hQYXJhbXMgc2VudCBieSBBQUQgU2VydmVyXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBQURTZXJ2ZXJQYXJhbUtleXMge1xyXG4gICAgQ0xJRU5UX0lEID0gXCJjbGllbnRfaWRcIixcclxuICAgIFJFRElSRUNUX1VSSSA9IFwicmVkaXJlY3RfdXJpXCIsXHJcbiAgICBSRVNQT05TRV9UWVBFID0gXCJyZXNwb25zZV90eXBlXCIsXHJcbiAgICBSRVNQT05TRV9NT0RFID0gXCJyZXNwb25zZV9tb2RlXCIsXHJcbiAgICBHUkFOVF9UWVBFID0gXCJncmFudF90eXBlXCIsXHJcbiAgICBDTEFJTVMgPSBcImNsYWltc1wiLFxyXG4gICAgU0NPUEUgPSBcInNjb3BlXCIsXHJcbiAgICBFUlJPUiA9IFwiZXJyb3JcIixcclxuICAgIEVSUk9SX0RFU0NSSVBUSU9OID0gXCJlcnJvcl9kZXNjcmlwdGlvblwiLFxyXG4gICAgQUNDRVNTX1RPS0VOID0gXCJhY2Nlc3NfdG9rZW5cIixcclxuICAgIElEX1RPS0VOID0gXCJpZF90b2tlblwiLFxyXG4gICAgUkVGUkVTSF9UT0tFTiA9IFwicmVmcmVzaF90b2tlblwiLFxyXG4gICAgRVhQSVJFU19JTiA9IFwiZXhwaXJlc19pblwiLFxyXG4gICAgU1RBVEUgPSBcInN0YXRlXCIsXHJcbiAgICBOT05DRSA9IFwibm9uY2VcIixcclxuICAgIFBST01QVCA9IFwicHJvbXB0XCIsXHJcbiAgICBTRVNTSU9OX1NUQVRFID0gXCJzZXNzaW9uX3N0YXRlXCIsXHJcbiAgICBDTElFTlRfSU5GTyA9IFwiY2xpZW50X2luZm9cIixcclxuICAgIENPREUgPSBcImNvZGVcIixcclxuICAgIENPREVfQ0hBTExFTkdFID0gXCJjb2RlX2NoYWxsZW5nZVwiLFxyXG4gICAgQ09ERV9DSEFMTEVOR0VfTUVUSE9EID0gXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIixcclxuICAgIENPREVfVkVSSUZJRVIgPSBcImNvZGVfdmVyaWZpZXJcIixcclxuICAgIENMSUVOVF9SRVFVRVNUX0lEID0gXCJjbGllbnQtcmVxdWVzdC1pZFwiLFxyXG4gICAgWF9DTElFTlRfU0tVID0gXCJ4LWNsaWVudC1TS1VcIixcclxuICAgIFhfQ0xJRU5UX1ZFUiA9IFwieC1jbGllbnQtVkVSXCIsXHJcbiAgICBYX0NMSUVOVF9PUyA9IFwieC1jbGllbnQtT1NcIixcclxuICAgIFhfQ0xJRU5UX0NQVSA9IFwieC1jbGllbnQtQ1BVXCIsXHJcbiAgICBQT1NUX0xPR09VVF9VUkkgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLFxyXG4gICAgSURfVE9LRU5fSElOVD0gXCJpZF90b2tlbl9oaW50XCIsXHJcbiAgICBERVZJQ0VfQ09ERSA9IFwiZGV2aWNlX2NvZGVcIixcclxuICAgIENMSUVOVF9TRUNSRVQgPSBcImNsaWVudF9zZWNyZXRcIixcclxuICAgIENMSUVOVF9BU1NFUlRJT04gPSBcImNsaWVudF9hc3NlcnRpb25cIixcclxuICAgIENMSUVOVF9BU1NFUlRJT05fVFlQRSA9IFwiY2xpZW50X2Fzc2VydGlvbl90eXBlXCIsXHJcbiAgICBUT0tFTl9UWVBFID0gXCJ0b2tlbl90eXBlXCIsXHJcbiAgICBSRVFfQ05GID0gXCJyZXFfY25mXCIsXHJcbiAgICBPQk9fQVNTRVJUSU9OID0gXCJhc3NlcnRpb25cIixcclxuICAgIFJFUVVFU1RFRF9UT0tFTl9VU0UgPSBcInJlcXVlc3RlZF90b2tlbl91c2VcIixcclxuICAgIE9OX0JFSEFMRl9PRiA9IFwib25fYmVoYWxmX29mXCIsXHJcbiAgICBGT0NJID0gXCJmb2NpXCJcclxufVxyXG5cclxuLyoqXHJcbiAqIENsYWltcyByZXF1ZXN0IGtleXNcclxuICovXHJcbmV4cG9ydCBlbnVtIENsYWltc1JlcXVlc3RLZXlzIHtcclxuICAgIEFDQ0VTU19UT0tFTiA9IFwiYWNjZXNzX3Rva2VuXCIsXHJcbiAgICBYTVNfQ0MgPSBcInhtc19jY1wiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUHJvbXB0VmFsdWUgPSB7XHJcbiAgICBMT0dJTjogXCJsb2dpblwiLFxyXG4gICAgU0VMRUNUX0FDQ09VTlQ6IFwic2VsZWN0X2FjY291bnRcIixcclxuICAgIENPTlNFTlQ6IFwiY29uc2VudFwiLFxyXG4gICAgTk9ORTogXCJub25lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogU1NPIFR5cGVzIC0gZ2VuZXJhdGVkIHRvIHBvcHVsYXRlIGhpbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBTU09UeXBlcyB7XHJcbiAgICBBQ0NPVU5UID0gXCJhY2NvdW50XCIsXHJcbiAgICBTSUQgPSBcInNpZFwiLFxyXG4gICAgTE9HSU5fSElOVCA9IFwibG9naW5faGludFwiLFxyXG4gICAgSURfVE9LRU4gPSBcImlkX3Rva2VuXCIsXHJcbiAgICBET01BSU5fSElOVCA9IFwiZG9tYWluX2hpbnRcIixcclxuICAgIE9SR0FOSVpBVElPTlMgPSBcIm9yZ2FuaXphdGlvbnNcIixcclxuICAgIENPTlNVTUVSUyA9IFwiY29uc3VtZXJzXCIsXHJcbiAgICBBQ0NPVU5UX0lEID0gXCJhY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgSE9NRUFDQ09VTlRfSUQgPSBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNhbGxvd2VkIGV4dHJhIHF1ZXJ5IHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmxhY2tsaXN0ZWRFUVBhcmFtcyA9IFtcclxuICAgIFNTT1R5cGVzLlNJRCxcclxuICAgIFNTT1R5cGVzLkxPR0lOX0hJTlRcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBhbGxvd2VkIHZhbHVlcyBmb3IgY29kZVZlcmlmaWVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcyA9IHtcclxuICAgIFBMQUlOOiBcInBsYWluXCIsXHJcbiAgICBTMjU2OiBcIlMyNTZcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgdXNlZCB0byBlbmNvZGUgdGhlIGNvZGUgdmVyaWZpZXIgZm9yIHRoZSBjb2RlIGNoYWxsZW5nZSBwYXJhbWV0ZXIuIGNhbiBiZSBvbmVcclxuICogb2YgcGxhaW4gb3IgczI1Ni4gaWYgZXhjbHVkZWQsIGNvZGUgY2hhbGxlbmdlIGlzIGFzc3VtZWQgdG8gYmUgcGxhaW50ZXh0LiBmb3IgbW9yZVxyXG4gKiBpbmZvcm1hdGlvbiwgc2VlIHRoZSBwa2NlIHJjZjogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc2MzZcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzQXJyYXk6IHN0cmluZ1tdID0gW1xyXG4gICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5QTEFJTixcclxuICAgIENvZGVDaGFsbGVuZ2VNZXRob2RWYWx1ZXMuUzI1NlxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgdmFsdWVzIGZvciByZXNwb25zZV9tb2RlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZXNwb25zZU1vZGUge1xyXG4gICAgUVVFUlkgPSBcInF1ZXJ5XCIsXHJcbiAgICBGUkFHTUVOVCA9IFwiZnJhZ21lbnRcIixcclxuICAgIEZPUk1fUE9TVCA9IFwiZm9ybV9wb3N0XCJcclxufVxyXG5cclxuLyoqXHJcbiAqIGFsbG93ZWQgZ3JhbnRfdHlwZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gR3JhbnRUeXBlIHtcclxuICAgIElNUExJQ0lUX0dSQU5UID0gXCJpbXBsaWNpdFwiLFxyXG4gICAgQVVUSE9SSVpBVElPTl9DT0RFX0dSQU5UID0gXCJhdXRob3JpemF0aW9uX2NvZGVcIixcclxuICAgIENMSUVOVF9DUkVERU5USUFMU19HUkFOVCA9IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIsXHJcbiAgICBSRVNPVVJDRV9PV05FUl9QQVNTV09SRF9HUkFOVCA9IFwicGFzc3dvcmRcIixcclxuICAgIFJFRlJFU0hfVE9LRU5fR1JBTlQgPSBcInJlZnJlc2hfdG9rZW5cIixcclxuICAgIERFVklDRV9DT0RFX0dSQU5UID0gXCJkZXZpY2VfY29kZVwiLFxyXG4gICAgSldUX0JFQVJFUiA9IFwidXJuOmlldGY6cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6and0LWJlYXJlclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IHR5cGVzIGluIENhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZUFjY291bnRUeXBlIHtcclxuICAgIE1TU1RTX0FDQ09VTlRfVFlQRSA9IFwiTVNTVFNcIixcclxuICAgIEFERlNfQUNDT1VOVF9UWVBFID0gXCJBREZTXCIsXHJcbiAgICBNU0FWMV9BQ0NPVU5UX1RZUEUgPSBcIk1TQVwiLFxyXG4gICAgR0VORVJJQ19BQ0NPVU5UX1RZUEUgPSBcIkdlbmVyaWNcIiAvLyBOVExNLCBLZXJiZXJvcywgRkJBLCBCYXNpYyBldGNcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlcGFyYXRvcnMgdXNlZCBpbiBjYWNoZVxyXG4gKi9cclxuZXhwb3J0IGVudW0gU2VwYXJhdG9ycyB7XHJcbiAgICBDQUNIRV9LRVlfU0VQQVJBVE9SID0gXCItXCIsXHJcbiAgICBDTElFTlRfSU5GT19TRVBBUkFUT1IgPSBcIi5cIlxyXG59XHJcblxyXG4vKipcclxuICogQ3JlZGVudGlhbCBUeXBlIHN0b3JlZCBpbiB0aGUgY2FjaGVcclxuICovXHJcbmV4cG9ydCBlbnVtIENyZWRlbnRpYWxUeXBlIHtcclxuICAgIElEX1RPS0VOID0gXCJJZFRva2VuXCIsXHJcbiAgICBBQ0NFU1NfVE9LRU4gPSBcIkFjY2Vzc1Rva2VuXCIsXHJcbiAgICBSRUZSRVNIX1RPS0VOID0gXCJSZWZyZXNoVG9rZW5cIixcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWRlbnRpYWwgVHlwZSBzdG9yZWQgaW4gdGhlIGNhY2hlXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDYWNoZVNjaGVtYVR5cGUge1xyXG4gICAgQUNDT1VOVCA9IFwiQWNjb3VudFwiLFxyXG4gICAgQ1JFREVOVElBTCA9IFwiQ3JlZGVudGlhbFwiLFxyXG4gICAgSURfVE9LRU4gPSBcIklkVG9rZW5cIixcclxuICAgIEFDQ0VTU19UT0tFTiA9IFwiQWNjZXNzVG9rZW5cIixcclxuICAgIFJFRlJFU0hfVE9LRU4gPSBcIlJlZnJlc2hUb2tlblwiLFxyXG4gICAgQVBQX01FVEFEQVRBID0gXCJBcHBNZXRhZGF0YVwiLFxyXG4gICAgVEVNUE9SQVJZID0gXCJUZW1wQ2FjaGVcIixcclxuICAgIFRFTEVNRVRSWSA9IFwiVGVsZW1ldHJ5XCIsXHJcbiAgICBVTkRFRklORUQgPSBcIlVuZGVmaW5lZFwiLFxyXG4gICAgVEhST1RUTElORyA9IFwiVGhyb3R0bGluZ1wiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lIGFsbCBjYWNoZSB0eXBlc1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQ2FjaGVUeXBlIHtcclxuICAgIEFERlMgPSAxMDAxLFxyXG4gICAgTVNBID0gMTAwMixcclxuICAgIE1TU1RTID0gMTAwMyxcclxuICAgIEdFTkVSSUMgPSAxMDA0LFxyXG4gICAgQUNDRVNTX1RPS0VOID0gMjAwMSxcclxuICAgIFJFRlJFU0hfVE9LRU4gPSAyMDAyLFxyXG4gICAgSURfVE9LRU4gPSAyMDAzLFxyXG4gICAgQVBQX01FVEFEQVRBID0gMzAwMSxcclxuICAgIFVOREVGSU5FRCA9IDk5OTlcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vcmUgQ2FjaGUgcmVsYXRlZCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBBUFBfTUVUQURBVEEgPSBcImFwcG1ldGFkYXRhXCI7XHJcbmV4cG9ydCBjb25zdCBDbGllbnRJbmZvID0gXCJjbGllbnRfaW5mb1wiO1xyXG5leHBvcnQgY29uc3QgVEhFX0ZBTUlMWV9JRCA9IFwiMVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFUlZFUl9URUxFTV9DT05TVEFOVFMgPSB7XHJcbiAgICBTQ0hFTUFfVkVSU0lPTjogMixcclxuICAgIE1BWF9IRUFERVJfQllURVM6IDQwMDAsIC8vIE1heCBpcyA0S0IsIDQwMDAgQnl0ZXMgcHJvdmlkZXMgOTYgQnl0ZSBidWZmZXIgZm9yIHNlcGFyYXRvcnMsIHNjaGVtYSB2ZXJzaW9uLCBldGMuIFxyXG4gICAgQ0FDSEVfS0VZOiBcInNlcnZlci10ZWxlbWV0cnlcIixcclxuICAgIENBVEVHT1JZX1NFUEFSQVRPUjogXCJ8XCIsXHJcbiAgICBWQUxVRV9TRVBBUkFUT1I6IFwiLFwiLFxyXG4gICAgT1ZFUkZMT1dfVFJVRTogXCIxXCIsXHJcbiAgICBPVkVSRkxPV19GQUxTRTogXCIwXCIsXHJcbiAgICBVTktOT1dOX0VSUk9SOiBcInVua25vd25fZXJyb3JcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3RcclxuICovXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uU2NoZW1lIHtcclxuICAgIFBPUCA9IFwicG9wXCIsXHJcbiAgICBCRUFSRVIgPSBcIkJlYXJlclwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25zdGFudHMgcmVsYXRlZCB0byB0aHJvdHRsaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGhyb3R0bGluZ0NvbnN0YW50cyA9IHtcclxuICAgIC8vIERlZmF1bHQgdGltZSB0byB0aHJvdHRsZSBSZXF1ZXN0VGh1bWJwcmludCBpbiBzZWNvbmRzXHJcbiAgICBERUZBVUxUX1RIUk9UVExFX1RJTUVfU0VDT05EUzogNjAsXHJcbiAgICAvLyBEZWZhdWx0IG1heGltdW0gdGltZSB0byB0aHJvdHRsZSBpbiBzZWNvbmRzLCBvdmVycmlkZXMgd2hhdCB0aGUgc2VydmVyIHNlbmRzIGJhY2tcclxuICAgIERFRkFVTFRfTUFYX1RIUk9UVExFX1RJTUVfU0VDT05EUzogMzYwMCxcclxuICAgIC8vIFByZWZpeCBmb3Igc3RvcmluZyB0aHJvdHRsaW5nIGVudHJpZXNcclxuICAgIFRIUk9UVExJTkdfUFJFRklYOiBcInRocm90dGxpbmdcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9ycyA9IHtcclxuICAgIElOVkFMSURfR1JBTlRfRVJST1I6IFwiaW52YWxpZF9ncmFudFwiLFxyXG4gICAgQ0xJRU5UX01JU01BVENIX0VSUk9SOiBcImNsaWVudF9taXNtYXRjaFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhc3N3b3JkIGdyYW50IHBhcmFtZXRlcnNcclxuICovXHJcbmV4cG9ydCBlbnVtIFBhc3N3b3JkR3JhbnRDb25zdGFudHMge1xyXG4gICAgdXNlcm5hbWUgPSBcInVzZXJuYW1lXCIsXHJcbiAgICBwYXNzd29yZCA9IFwicGFzc3dvcmRcIlxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIEF1dGhFcnJvck1lc3NhZ2UgY2xhc3MgY29udGFpbmluZyBzdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgZXJyb3IgY29kZXMgYW5kIG1lc3NhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEF1dGhFcnJvck1lc3NhZ2UgPSB7XHJcbiAgICB1bmV4cGVjdGVkRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVuZXhwZWN0ZWRfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgZXJyb3IgaW4gYXV0aGVudGljYXRpb24uXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIGVycm9yIGNsYXNzIHRocm93biBieSB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcclxuXHJcbiAgICAvLyBTaG9ydCBzdHJpbmcgZGVub3RpbmcgZXJyb3JcclxuICAgIGVycm9yQ29kZTogc3RyaW5nO1xyXG4gICAgLy8gRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgZXJyb3JcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3ViRXJyb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU/OiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViZXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBlcnJvclN0cmluZyA9IGVycm9yTWVzc2FnZSA/IGAke2Vycm9yQ29kZX06ICR7ZXJyb3JNZXNzYWdlfWAgOiBlcnJvckNvZGU7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JTdHJpbmcpO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGUgfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORztcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3ViRXJyb3IgPSBzdWJlcnJvciB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRoYXQgaXMgdGhyb3duIHdoZW4gc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyBpbiB0aGUgbGlicmFyeS5cclxuICAgICAqIEBwYXJhbSBlcnJEZXNjXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVVbmV4cGVjdGVkRXJyb3IoZXJyRGVzYzogc3RyaW5nKTogQXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhFcnJvcihBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5jb2RlLCBgJHtBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5kZXNjfTogJHtlcnJEZXNjfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTaWduZWRIdHRwUmVxdWVzdCB9IGZyb20gXCIuL1NpZ25lZEh0dHBSZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICogVGhlIFBrY2VDb2RlcyB0eXBlIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlXHJcbiAqIG9mIG9iamVjdHMgdGhhdCBjb250YWluIFBLQ0UgY29kZVxyXG4gKiBjaGFsbGVuZ2UgYW5kIHZlcmlmaWVyIHBhaXJzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQa2NlQ29kZXMgPSB7XHJcbiAgICB2ZXJpZmllcjogc3RyaW5nLFxyXG4gICAgY2hhbGxlbmdlOiBzdHJpbmdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGNyeXB0byBmdW5jdGlvbnMgdXNlZCBieSBsaWJyYXJ5XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDcnlwdG8ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgZ3VpZCByYW5kb21seS5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlTmV3R3VpZCgpOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIGJhc2U2NCBFbmNvZGUgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgXHJcbiAgICAgKi9cclxuICAgIGJhc2U2NEVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBiYXNlNjQgZGVjb2RlIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGlucHV0IFxyXG4gICAgICovXHJcbiAgICBiYXNlNjREZWNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgUEtDRSBjb2RlcyBmb3IgT0F1dGguIFNlZSBSRkMgaGVyZTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzc2MzZcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVQa2NlQ29kZXMoKTogUHJvbWlzZTxQa2NlQ29kZXM+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYW4gSldLIFJTQSBTMjU2IFRodW1icHJpbnRcclxuICAgICAqIEBwYXJhbSByZXNvdXJjZVJlcXVlc3RNZXRob2QgXHJcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VSZXF1ZXN0VXJpIFxyXG4gICAgICovXHJcbiAgICBnZXRQdWJsaWNLZXlUaHVtYnByaW50KHJlc291cmNlUmVxdWVzdE1ldGhvZDogc3RyaW5nLCByZXNvdXJjZVJlcXVlc3RVcmk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPjtcclxuICAgIC8qKiBcclxuICAgICAqIFJldHVybnMgYSBzaWduZWQgcHJvb2Ytb2YtcG9zc2Vzc2lvbiB0b2tlbiB3aXRoIGEgZ2l2ZW4gYWNjZXMgdG9rZW4gdGhhdCBjb250YWlucyBhIGNuZiBjbGFpbSB3aXRoIHRoZSByZXF1aXJlZCBraWQuXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW4gXHJcbiAgICAgKi9cclxuICAgIHNpZ25Kd3QocGF5bG9hZDogU2lnbmVkSHR0cFJlcXVlc3QsIGtpZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DUllQVE9fSU1QTEVNRU5UQVRJT046IElDcnlwdG8gPSB7XHJcbiAgICBjcmVhdGVOZXdHdWlkOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gY3JlYXRlTmV3R3VpZCgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9LFxyXG4gICAgYmFzZTY0RGVjb2RlOiAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gYmFzZTY0RGVjb2RlKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBiYXNlNjRFbmNvZGU6ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIkNyeXB0byBpbnRlcmZhY2UgLSBiYXNlNjRFbmNvZGUoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGdlbmVyYXRlUGtjZUNvZGVzKCk6IFByb21pc2U8UGtjZUNvZGVzPiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiQ3J5cHRvIGludGVyZmFjZSAtIGdlbmVyYXRlUGtjZUNvZGVzKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRQdWJsaWNLZXlUaHVtYnByaW50KCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiQ3J5cHRvIGludGVyZmFjZSAtIGdldFB1YmxpY0tleVRodW1icHJpbnQoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWRcIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNpZ25Kd3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJDcnlwdG8gaW50ZXJmYWNlIC0gc2lnbkp3dCgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZFwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbn07XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIGNsYXNzIGNvbnRhaW5pbmcgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IGVycm9yIGNvZGVzIGFuZCBtZXNzYWdlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2RlY29kaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gY291bGQgbm90IGJlIHBhcnNlZC9kZWNvZGVkIGNvcnJlY3RseS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgY2xpZW50SW5mb0VtcHR5RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudF9pbmZvX2VtcHR5X2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gd2FzIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICB0b2tlblBhcnNpbmdFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fcGFyc2luZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIG51bGxPckVtcHR5VG9rZW46IHtcclxuICAgICAgICBjb2RlOiBcIm51bGxfb3JfZW1wdHlfdG9rZW5cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSB0b2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW5kcG9pbnRzX3Jlc29sdXRpb25fZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkVycm9yOiBjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHMuIFBsZWFzZSBjaGVjayBuZXR3b3JrIGFuZCB0cnkgYWdhaW4uXCJcclxuICAgIH0sXHJcbiAgICBoYXNoTm90RGVzZXJpYWxpemVkOiB7XHJcbiAgICAgICAgY29kZTogXCJoYXNoX25vdF9kZXNlcmlhbGl6ZWRcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBoYXNoIHBhcmFtZXRlcnMgY291bGQgbm90IGJlIGRlc2VyaWFsaXplZC4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgYmxhbmtHdWlkR2VuZXJhdGVkOiB7XHJcbiAgICAgICAgY29kZTogXCJibGFua19ndWlkX2dlbmVyYXRlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGd1aWQgZ2VuZXJhdGVkIHdhcyBibGFuay4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZFN0YXRlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfc3RhdGVcIixcclxuICAgICAgICBkZXNjOiBcIlN0YXRlIHdhcyBub3QgdGhlIGV4cGVjdGVkIGZvcm1hdC4gUGxlYXNlIGNoZWNrIHRoZSBsb2dzIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSByZXF1ZXN0IHdhcyBzZW50IHVzaW5nIFByb3RvY29sVXRpbHMuc2V0UmVxdWVzdFN0YXRlKCkuXCJcclxuICAgIH0sXHJcbiAgICBzdGF0ZU1pc21hdGNoRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInN0YXRlX21pc21hdGNoXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdGF0ZSBtaXNtYXRjaCBlcnJvci4gUGxlYXNlIGNoZWNrIHlvdXIgbmV0d29yay4gQ29udGludWVkIHJlcXVlc3RzIG1heSBjYXVzZSBjYWNoZSBvdmVyZmxvdy5cIlxyXG4gICAgfSxcclxuICAgIHN0YXRlTm90Rm91bmRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwic3RhdGVfbm90X2ZvdW5kXCIsXHJcbiAgICAgICAgZGVzYzogXCJTdGF0ZSBub3QgZm91bmRcIlxyXG4gICAgfSxcclxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uY2VfbWlzbWF0Y2hcIixcclxuICAgICAgICBkZXNjOiBcIk5vbmNlIG1pc21hdGNoIGVycm9yLiBUaGlzIG1heSBiZSBjYXVzZWQgYnkgYSByYWNlIGNvbmRpdGlvbiBpbiBjb25jdXJyZW50IHJlcXVlc3RzLlwiXHJcbiAgICB9LFxyXG4gICAgbm9uY2VOb3RGb3VuZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJub25jZV9ub3RfZm91bmRcIixcclxuICAgICAgICBkZXNjOiBcIm5vbmNlIG5vdCBmb3VuZFwiXHJcbiAgICB9LFxyXG4gICAgbm9Ub2tlbnNGb3VuZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJub190b2tlbnNfZm91bmRcIixcclxuICAgICAgICBkZXNjOiBcIk5vIHRva2VucyB3ZXJlIGZvdW5kIGZvciB0aGUgZ2l2ZW4gc2NvcGVzLCBhbmQgbm8gYXV0aG9yaXphdGlvbiBjb2RlIHdhcyBwYXNzZWQgdG8gYWNxdWlyZVRva2VuLiBZb3UgbXVzdCByZXRyaWV2ZSBhbiBhdXRob3JpemF0aW9uIGNvZGUgYmVmb3JlIG1ha2luZyBhIGNhbGwgdG8gYWNxdWlyZVRva2VuKCkuXCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nVG9rZW5zOiB7XHJcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMgc2F0aXNmeWluZyB0aGUgcmVxdWlyZW1lbnRzLiBcIiArXHJcbiAgICAgICAgICAgIFwiQ2FsbCBBY3F1aXJlVG9rZW4gYWdhaW4gcHJvdmlkaW5nIG1vcmUgcmVxdWlyZW1lbnRzIHN1Y2ggYXMgYXV0aG9yaXR5IG9yIGFjY291bnQuXCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nQWNjb3VudHM6IHtcclxuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX21hdGNoaW5nX2FjY291bnRzXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgYWNjb3VudHMgc2F0aXNmeWluZyB0aGUgZ2l2ZW4gcGFyYW1ldGVycy4gUGxlYXNlIHBhc3MgbW9yZSBpbmZvIHRvIG9idGFpbiB0aGUgY29ycmVjdCBhY2NvdW50XCJcclxuICAgIH0sXHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nQXBwTWV0YWRhdGE6IHtcclxuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX21hdGNoaW5nX2FwcE1ldGFkYXRhXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgYXBwTWV0YWRhdGEgc2F0aXNmeWluZyB0aGUgZ2l2ZW4gcGFyYW1ldGVycy4gUGxlYXNlIHBhc3MgbW9yZSBpbmZvIHRvIG9idGFpbiB0aGUgY29ycmVjdCBhcHBNZXRhZGF0YVwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlOiB7XHJcbiAgICAgICAgY29kZTogXCJyZXF1ZXN0X2Nhbm5vdF9iZV9tYWRlXCIsXHJcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZXF1ZXN0IGNhbm5vdCBiZSBtYWRlIHdpdGhvdXQgYXV0aG9yaXphdGlvbiBjb2RlIG9yIHJlZnJlc2ggdG9rZW4uXCJcclxuICAgIH0sXHJcbiAgICBhcHBlbmRFbXB0eVNjb3BlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNhbm5vdF9hcHBlbmRfZW1wdHlfc2NvcGVcIixcclxuICAgICAgICBkZXNjOiBcIkNhbm5vdCBhcHBlbmQgbnVsbCBvciBlbXB0eSBzY29wZSB0byBTY29wZVNldC4gUGxlYXNlIGNoZWNrIHRoZSBzdGFjayB0cmFjZSBmb3IgbW9yZSBpbmZvLlwiXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRW1wdHlTY29wZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjYW5ub3RfcmVtb3ZlX2VtcHR5X3Njb3BlXCIsXHJcbiAgICAgICAgZGVzYzogXCJDYW5ub3QgcmVtb3ZlIG51bGwgb3IgZW1wdHkgc2NvcGUgZnJvbSBTY29wZVNldC4gUGxlYXNlIGNoZWNrIHRoZSBzdGFjayB0cmFjZSBmb3IgbW9yZSBpbmZvLlwiXHJcbiAgICB9LFxyXG4gICAgYXBwZW5kU2NvcGVTZXRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2Fubm90X2FwcGVuZF9zY29wZXNldFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2Fubm90IGFwcGVuZCBTY29wZVNldCBkdWUgdG8gZXJyb3IuXCJcclxuICAgIH0sXHJcbiAgICBlbXB0eUlucHV0U2NvcGVTZXRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzZXRcIixcclxuICAgICAgICBkZXNjOiBcIkVtcHR5IGlucHV0IFNjb3BlU2V0IGNhbm5vdCBiZSBwcm9jZXNzZWQuXCJcclxuICAgIH0sXHJcbiAgICBEZXZpY2VDb2RlUG9sbGluZ0NhbmNlbGxlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiZGV2aWNlX2NvZGVfcG9sbGluZ19jYW5jZWxsZWRcIixcclxuICAgICAgICBkZXNjOiBcIkNhbGxlciBoYXMgY2FuY2VsbGVkIHRva2VuIGVuZHBvaW50IHBvbGxpbmcgZHVyaW5nIGRldmljZSBjb2RlIGZsb3cgYnkgc2V0dGluZyBEZXZpY2VDb2RlUmVxdWVzdC5jYW5jZWwgPSB0cnVlLlwiXHJcbiAgICB9LFxyXG4gICAgRGV2aWNlQ29kZUV4cGlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImRldmljZV9jb2RlX2V4cGlyZWRcIixcclxuICAgICAgICBkZXNjOiBcIkRldmljZSBjb2RlIGlzIGV4cGlyZWQuXCJcclxuICAgIH0sXHJcbiAgICBOb0FjY291bnRJblNpbGVudFJlcXVlc3Q6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX2FjY291bnRfaW5fc2lsZW50X3JlcXVlc3RcIixcclxuICAgICAgICBkZXNjOiBcIlBsZWFzZSBwYXNzIGFuIGFjY291bnQgb2JqZWN0LCBzaWxlbnQgZmxvdyBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgYWNjb3VudCBpbmZvcm1hdGlvblwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlUmVjb3JkOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX3JlY29yZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2FjaGUgcmVjb3JkIG9iamVjdCB3YXMgbnVsbCBvciB1bmRlZmluZWQuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQ2FjaGVFbnZpcm9ubWVudDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV9lbnZpcm9ubWVudFwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBlbnZpcm9ubWVudCB3aGVuIGF0dGVtcHRpbmcgdG8gY3JlYXRlIGNhY2hlIGVudHJ5XCJcclxuICAgIH0sXHJcbiAgICBub0FjY291bnRGb3VuZDoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fYWNjb3VudF9mb3VuZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gYWNjb3VudCBmb3VuZCBpbiBjYWNoZSBmb3IgZ2l2ZW4ga2V5LlwiXHJcbiAgICB9LFxyXG4gICAgQ2FjaGVQbHVnaW5FcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm8gY2FjaGUgcGx1Z2luIHNldCBvbiBDYWNoZU1hbmFnZXJcIixcclxuICAgICAgICBkZXNjOiBcIklDYWNoZVBsdWdpbiBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIHVzaW5nIHJlYWRGcm9tU3RvcmFnZSBvciB3cml0ZUZyb21TdG9yYWdlXCJcclxuICAgIH0sXHJcbiAgICBub0NyeXB0b09iajoge1xyXG4gICAgICAgIGNvZGU6IFwibm9fY3J5cHRvX29iamVjdFwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gY3J5cHRvIG9iamVjdCBkZXRlY3RlZC4gVGhpcyBpcyByZXF1aXJlZCBmb3IgdGhlIGZvbGxvd2luZyBvcGVyYXRpb246IFwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENhY2hlVHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV90eXBlXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIGNhY2hlIHR5cGVcIlxyXG4gICAgfSxcclxuICAgIHVuZXhwZWN0ZWRBY2NvdW50VHlwZToge1xyXG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9hY2NvdW50X3R5cGVcIixcclxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgYWNjb3VudCB0eXBlLlwiXHJcbiAgICB9LFxyXG4gICAgdW5leHBlY3RlZENyZWRlbnRpYWxUeXBlOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2NyZWRlbnRpYWxfdHlwZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBjcmVkZW50aWFsIHR5cGUuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQXNzZXJ0aW9uOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2Fzc2VydGlvblwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2xpZW50IGFzc2VydGlvbiBtdXN0IG1lZXQgcmVxdWlyZW1lbnRzIGRlc2NyaWJlZCBpbiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzUxNVwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZENsaWVudENyZWRlbnRpYWw6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY2xpZW50X2NyZWRlbnRpYWxcIixcclxuICAgICAgICBkZXNjOiBcIkNsaWVudCBjcmVkZW50aWFsIChzZWNyZXQsIGNlcnRpZmljYXRlLCBvciBhc3NlcnRpb24pIG11c3Qgbm90IGJlIGVtcHR5IHdoZW4gY3JlYXRpbmcgYSBjb25maWRlbnRpYWwgY2xpZW50LiBBbiBhcHBsaWNhdGlvbiBzaG91bGQgYXQgbW9zdCBoYXZlIG9uZSBjcmVkZW50aWFsXCJcclxuICAgIH0sXHJcbiAgICB0b2tlblJlZnJlc2hSZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVmcmVzaF9yZXF1aXJlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2Fubm90IHJldHVybiB0b2tlbiBmcm9tIGNhY2hlIGJlY2F1c2UgaXQgbXVzdCBiZSByZWZyZXNoZWQuIFRoaXMgbWF5IGJlIGR1ZSB0byBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOiBmb3JjZVJlZnJlc2ggcGFyYW1ldGVyIGlzIHNldCB0byB0cnVlLCBjbGFpbXMgaGF2ZSBiZWVuIHJlcXVlc3RlZCwgdGhlcmUgaXMgbm8gY2FjaGVkIGFjY2VzcyB0b2tlbiBvciBpdCBpcyBleHBpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgdXNlclRpbWVvdXRSZWFjaGVkOiB7XHJcbiAgICAgICAgY29kZTogXCJ1c2VyX3RpbWVvdXRfcmVhY2hlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiVXNlciBkZWZpbmVkIHRpbWVvdXQgZm9yIGRldmljZSBjb2RlIHBvbGxpbmcgcmVhY2hlZFwiLFxyXG4gICAgfSxcclxuICAgIHRva2VuQ2xhaW1zUmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcInRva2VuX2NsYWltc19jbmZfcmVxdWlyZWRfZm9yX3NpZ25lZGp3dFwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2Fubm90IGdlbmVyYXRlIGEgUE9QIGp3dCBpZiB0aGUgdG9rZW5fY2xhaW1zIGFyZSBub3QgcG9wdWxhdGVkXCJcclxuICAgIH0sXHJcbiAgICBub0F1dGhvcml6YXRpb25Db2RlRnJvbVNlcnZlcjoge1xyXG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXphdGlvbl9jb2RlX21pc3NpbmdfZnJvbV9zZXJ2ZXJfcmVzcG9uc2VcIixcclxuICAgICAgICBkZXNjOiBcIlNydmVyIHJlc3BvbnNlIGRvZXMgbm90IGNvbnRhaW4gYW4gYXV0aG9yaXphdGlvbiBjb2RlIHRvIHByb2NlZWRcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50QXV0aEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIGNsaWVudCBpbmZvIG9iamVjdCBkb2Vzbid0IGRlY29kZSBjb3JyZWN0bHkuXHJcbiAgICAgKiBAcGFyYW0gY2F1Z2h0RXJyb3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIGlmIHRoZSBjbGllbnQgaW5mbyBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSByYXdDbGllbnRJbmZvXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRW1wdHlFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0VtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRW1wdHlFcnJvci5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgaWQgdG9rZW4gZXh0cmFjdGlvbiBlcnJvcnMgb3V0LlxyXG4gICAgICogQHBhcmFtIGVyclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5QYXJzaW5nRXJyb3IoY2F1Z2h0RXh0cmFjdGlvbkVycm9yOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5QYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblBhcnNpbmdFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFeHRyYWN0aW9uRXJyb3J9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBpZCB0b2tlbiBzdHJpbmcgaXMgbnVsbCBvciBlbXB0eS5cclxuICAgICAqIEBwYXJhbSBpbnZhbGlkUmF3VG9rZW5TdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuTnVsbE9yRW1wdHlFcnJvcihpbnZhbGlkUmF3VG9rZW5TdHJpbmc6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlUb2tlbi5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5VG9rZW4uZGVzY30gUmF3IFRva2VuIFZhbHVlOiAke2ludmFsaWRSYXdUb2tlblN0cmluZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGVuZHBvaW50IGRpc2NvdmVyeSBkb2Vzbid0IGNvbXBsZXRlIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVuZHBvaW50RGlzY292ZXJ5SW5jb21wbGV0ZUVycm9yKGVyckRldGFpbDogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzY30gRGV0YWlsOiAke2VyckRldGFpbH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIGhhc2ggY2Fubm90IGJlIGRlc2VyaWFsaXplZC5cclxuICAgICAqIEBwYXJhbSBoYXNoUGFyYW1PYmpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUhhc2hOb3REZXNlcmlhbGl6ZWRFcnJvcihoYXNoUGFyYW1PYmo6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5oYXNoTm90RGVzZXJpYWxpemVkLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaGFzaE5vdERlc2VyaWFsaXplZC5kZXNjfSBHaXZlbiBPYmplY3Q6ICR7aGFzaFBhcmFtT2JqfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgc3RhdGUgY2Fubm90IGJlIHBhcnNlZC5cclxuICAgICAqIEBwYXJhbSBpbnZhbGlkU3RhdGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBlcnJvclN0cmluZz86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmRlc2N9IEludmFsaWQgU3RhdGU6ICR7aW52YWxpZFN0YXRlfSwgUm9vdCBFcnI6ICR7ZXJyb3JTdHJpbmd9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHR3byBzdGF0ZXMgZG8gbm90IG1hdGNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3RhdGVNaXNtYXRjaEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5zdGF0ZU1pc21hdGNoRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5zdGF0ZU1pc21hdGNoRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBzdGF0ZSBpcyBub3QgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIG1pc3NpbmdTdGF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3RhdGVOb3RGb3VuZEVycm9yKG1pc3NpbmdTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnN0YXRlTm90Rm91bmRFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnN0YXRlTm90Rm91bmRFcnJvci5kZXNjfTogICR7bWlzc2luZ1N0YXRlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgbm9uY2UgZG9lcyBub3QgbWF0Y2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIG1ub25jZSBpcyBub3QgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIG1pc3NpbmdOb25jZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9uY2VOb3RGb3VuZEVycm9yKG1pc3NpbmdOb25jZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTm90Rm91bmRFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTm90Rm91bmRFcnJvci5kZXNjfTogICR7bWlzc2luZ05vbmNlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gd2hlbiB0aGUgYXV0aG9yaXphdGlvbiBjb2RlIHJlcXVpcmVkIGZvciBhIHRva2VuIHJlcXVlc3QgaXMgbnVsbCBvciBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vVG9rZW5zRm91bmRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9Ub2tlbnNGb3VuZEVycm9yLmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9Ub2tlbnNGb3VuZEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbXVsdGlwbGUgdG9rZW5zIGFyZSBpbiBjYWNoZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdUb2tlbnMuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmRlc2N9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbXVsdGlwbGUgYWNjb3VudHMgYXJlIGluIGNhY2hlIGZvciB0aGUgZ2l2ZW4gcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nQWNjb3VudHNJbkNhY2hlRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdBY2NvdW50cy5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlTWF0Y2hpbmdBY2NvdW50cy5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIG11bHRpcGxlIGFwcE1ldGFkYSBhcmUgaW4gY2FjaGUgZm9yIHRoZSBnaXZlbiBjbGllbnRJZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdBcHBNZXRhZGF0YUluQ2FjaGVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ0FwcE1ldGFkYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ0FwcE1ldGFkYXRhLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gbm8gYXV0aCBjb2RlIG9yIHJlZnJlc2ggdG9rZW4gaXMgZ2l2ZW4gdG8gU2VydmVyVG9rZW5SZXF1ZXN0UGFyYW1ldGVycy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVxdWVzdENhbm5vdEJlTWFkZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlcXVlc3RDYW5ub3RCZU1hZGUuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlcXVlc3RDYW5ub3RCZU1hZGUuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGFwcGVuZCBhIG51bGwsIHVuZGVmaW5lZCBvciBlbXB0eSBzY29wZSB0byBhIHNldFxyXG4gICAgICogQHBhcmFtIGdpdmVuU2NvcGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFwcGVuZEVtcHR5U2NvcGVUb1NldEVycm9yKGdpdmVuU2NvcGU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hcHBlbmRFbXB0eVNjb3BlRXJyb3IuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5hcHBlbmRFbXB0eVNjb3BlRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGU6ICR7Z2l2ZW5TY29wZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gYXBwZW5kIGEgbnVsbCwgdW5kZWZpbmVkIG9yIGVtcHR5IHNjb3BlIHRvIGEgc2V0XHJcbiAgICAgKiBAcGFyYW0gZ2l2ZW5TY29wZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVtb3ZlRW1wdHlTY29wZUZyb21TZXRFcnJvcihnaXZlblNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucmVtb3ZlRW1wdHlTY29wZUVycm9yLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UucmVtb3ZlRW1wdHlTY29wZUVycm9yLmRlc2N9IEdpdmVuIFNjb3BlOiAke2dpdmVuU2NvcGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhdHRlbXB0aW5nIHRvIGFwcGVuZCBudWxsIG9yIGVtcHR5IFNjb3BlU2V0LlxyXG4gICAgICogQHBhcmFtIGFwcGVuZEVycm9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVBcHBlbmRTY29wZVNldEVycm9yKGFwcGVuZEVycm9yOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYXBwZW5kU2NvcGVTZXRFcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFwcGVuZFNjb3BlU2V0RXJyb3IuZGVzY30gRGV0YWlsIEVycm9yOiAke2FwcGVuZEVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIGlmIFNjb3BlU2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkLlxyXG4gICAgICogQHBhcmFtIGdpdmVuU2NvcGVTZXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5SW5wdXRTY29wZVNldEVycm9yKGdpdmVuU2NvcGVTZXQ6IFNjb3BlU2V0KTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVtcHR5SW5wdXRTY29wZVNldEVycm9yLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW1wdHlJbnB1dFNjb3BlU2V0RXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVTZXQ6ICR7Z2l2ZW5TY29wZVNldH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB1c2VyIHNldHMgQ2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsID0gdHJ1ZSBkdXJpbmcgcG9sbGluZyBvZiB0b2tlbiBlbmRwb2ludCBkdXJpbmcgZGV2aWNlIGNvZGUgZmxvd1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGV2aWNlQ29kZUNhbmNlbGxlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5EZXZpY2VDb2RlUG9sbGluZ0NhbmNlbGxlZC5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLkRldmljZUNvZGVQb2xsaW5nQ2FuY2VsbGVkLmRlc2N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgZGV2aWNlIGNvZGUgaXMgZXhwaXJlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRGV2aWNlQ29kZUV4cGlyZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuRGV2aWNlQ29kZUV4cGlyZWQuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5EZXZpY2VDb2RlRXhwaXJlZC5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gc2lsZW50IHJlcXVlc3RzIGFyZSBtYWRlIHdpdGhvdXQgYW4gYWNjb3VudCBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vQWNjb3VudEluU2lsZW50UmVxdWVzdEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5Ob0FjY291bnRJblNpbGVudFJlcXVlc3QuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5Ob0FjY291bnRJblNpbGVudFJlcXVlc3QuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIGNhY2hlIHJlY29yZCBpcyBudWxsIG9yIHVuZGVmaW5lZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU51bGxPclVuZGVmaW5lZENhY2hlUmVjb3JkKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVSZWNvcmQuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkQ2FjaGVSZWNvcmQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBwcm92aWRlZCBlbnZpcm9ubWVudCBpcyBub3QgcGFydCBvZiB0aGUgQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUVudmlyb25tZW50RXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUVudmlyb25tZW50LmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlRW52aXJvbm1lbnQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhY2NvdW50IGlzIG5vdCBmb3VuZCBpbiBjYWNoZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5vQWNjb3VudEZvdW5kRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vQWNjb3VudEZvdW5kLmNvZGUsIENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9BY2NvdW50Rm91bmQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3IgaWYgSUNhY2hlUGx1Z2luIG5vdCBzZXQgb24gQ2FjaGVNYW5hZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2FjaGVQbHVnaW5FcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuQ2FjaGVQbHVnaW5FcnJvci5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLkNhY2hlUGx1Z2luRXJyb3IuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiBjcnlwdG8gb2JqZWN0IG5vdCBmb3VuZC5cclxuICAgICAqIEBwYXJhbSBvcGVyYXRpb25OYW1lXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVOb0NyeXB0b09iamVjdEVycm9yKG9wZXJhdGlvbk5hbWU6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub0NyeXB0b09iai5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vQ3J5cHRvT2JqLmRlc2N9JHtvcGVyYXRpb25OYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIGlmIGNhY2hlIHR5cGUgaXMgaW52YWxpZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZVR5cGVFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlVHlwZS5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZVR5cGUuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB1bmV4cGVjdGVkIGFjY291bnQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRBY2NvdW50VHlwZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQWNjb3VudFR5cGUuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQWNjb3VudFR5cGUuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB1bmV4cGVjdGVkIGNyZWRlbnRpYWwgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRDcmVkZW50aWFsVHlwZUVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQ3JlZGVudGlhbFR5cGUuY29kZSwgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkQ3JlZGVudGlhbFR5cGUuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiBjbGllbnQgYXNzZXJ0aW9uIGlzIG5vdCB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRBc3NlcnRpb25FcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEFzc2VydGlvbi5jb2RlLCBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRBc3NlcnRpb24uZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiBjbGllbnQgYXNzZXJ0aW9uIGlzIG5vdCB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDcmVkZW50aWFsRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRDbGllbnRDcmVkZW50aWFsLmNvZGUsIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZENsaWVudENyZWRlbnRpYWwuZGVzY31gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB0b2tlbiBjYW5ub3QgYmUgcmV0cmlldmVkIGZyb20gY2FjaGUgZHVlIHRvIHJlZnJlc2ggYmVpbmcgcmVxdWlyZWQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWZyZXNoUmVxdWlyZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5SZWZyZXNoUmVxdWlyZWQuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlZnJlc2hSZXF1aXJlZC5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB0aGUgdXNlciBkZWZpbmVkIHRpbWVvdXQgaXMgcmVhY2hlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJUaW1lb3V0UmVhY2hlZEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyVGltZW91dFJlYWNoZWQuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyVGltZW91dFJlYWNoZWQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFRocm93cyBlcnJvciBpZiB0b2tlbiBjbGFpbXMgYXJlIG5vdCBwb3B1bGF0ZWQgZm9yIGEgc2lnbmVkIGp3dCBnZW5lcmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUb2tlbkNsYWltc1JlcXVpcmVkRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuQ2xhaW1zUmVxdWlyZWQuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkNsYWltc1JlcXVpcmVkLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gdGhlIGF1dGhvcml6YXRpb24gY29kZSBpcyBtaXNzaW5nIGZyb20gdGhlIHNlcnZlciByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTm9BdXRoQ29kZUluU2VydmVyUmVzcG9uc2VFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9BdXRob3JpemF0aW9uQ29kZUZyb21TZXJ2ZXIuY29kZSwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub0F1dGhvcml6YXRpb25Db2RlRnJvbVNlcnZlci5kZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERlY29kZWRBdXRoVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9EZWNvZGVkQXV0aFRva2VuXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVjb2RlIGEgSldUXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGF1dGhUb2tlblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlQXV0aFRva2VuKGF1dGhUb2tlbjogc3RyaW5nKTogRGVjb2RlZEF1dGhUb2tlbiB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aFRva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5OdWxsT3JFbXB0eUVycm9yKGF1dGhUb2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRva2VuUGFydHNSZWdleC5leGVjKGF1dGhUb2tlbik7XHJcbiAgICAgICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5QYXJzaW5nRXJyb3IoYEdpdmVuIHRva2VuIGlzIG1hbGZvcm1lZDogJHtKU09OLnN0cmluZ2lmeShhdXRoVG9rZW4pfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjcmFja2VkVG9rZW46IERlY29kZWRBdXRoVG9rZW4gPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogbWF0Y2hlc1sxXSxcclxuICAgICAgICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcclxuICAgICAgICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY3JhY2tlZFRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBzdHJpbmcgaXMgZW1wdHkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHN0clxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eShzdHI/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09IFwidW5kZWZpbmVkXCIgfHwgIXN0ciB8fCAwID09PSBzdHIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RhcnRzV2l0aChzdHI6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc3RyLmluZGV4T2Yoc2VhcmNoKSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW5kc1dpdGgoc3RyOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChzdHIubGVuZ3RoID49IHNlYXJjaC5sZW5ndGgpICYmIChzdHIubGFzdEluZGV4T2Yoc2VhcmNoKSA9PT0gKHN0ci5sZW5ndGggLSBzZWFyY2gubGVuZ3RoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgc3RyaW5nIGludG8gYW4gb2JqZWN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBxdWVyeVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcXVlcnlTdHJpbmdUb09iamVjdDxUPihxdWVyeTogc3RyaW5nKTogVCB7XHJcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+IHwgbnVsbDsgLy8gUmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXHJcbiAgICAgICAgY29uc3QgcGwgPSAvXFwrL2c7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPShbXiZdKikvZztcclxuICAgICAgICBjb25zdCBkZWNvZGUgPSAoczogc3RyaW5nKTogc3RyaW5nID0+IGRlY29kZVVSSUNvbXBvbmVudChkZWNvZGVVUklDb21wb25lbnQocy5yZXBsYWNlKHBsLCBcIiBcIikpKTtcclxuICAgICAgICBjb25zdCBvYmo6IHt9ID0ge307XHJcbiAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XHJcbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XHJcbiAgICAgICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmltcyBlbnRyaWVzIGluIGFuIGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcnJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHRyaW1BcnJheUVudHJpZXMoYXJyOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5tYXAoZW50cnkgPT4gZW50cnkudHJpbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgZW1wdHkgc3RyaW5ncyBmcm9tIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gYXJyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZW1vdmVFbXB0eVN0cmluZ3NGcm9tQXJyYXkoYXJyOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoZW50cnkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIVN0cmluZ1V0aWxzLmlzRW1wdHkoZW50cnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0ZW1wdHMgdG8gcGFyc2UgYSBzdHJpbmcgaW50byBKU09OXHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBqc29uUGFyc2VIZWxwZXI8VD4oc3RyOiBzdHJpbmcpOiBUIHwgbnVsbCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKSBhcyBUO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVzdHMgaWYgYSBnaXZlbiBzdHJpbmcgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4sIHdpdGggc3VwcG9ydCBmb3Igd2lsZGNhcmRzLlxyXG4gICAgICogQHBhcmFtIHBhdHRlcm4gV2lsZGNhcmQgcGF0dGVybiB0byBzdHJpbmcgbWF0Y2guIFN1cHBvcnRzIFwiKlwiIGZvciB3aWxkY2FyZHNcclxuICAgICAqIEBwYXJhbSBpbnB1dCBTdHJpbmcgdG8gbWF0Y2ggYWdhaW5zdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWF0Y2hQYXR0ZXJuKHBhdHRlcm46IHN0cmluZywgaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTE3MjQ4LzQ4ODg1NTlcclxuICAgICAgICBjb25zdCByZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuLnJlcGxhY2UoL1xcKi9nLCBcIlteIF0qXCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgTG9nZ2VyT3B0aW9ucyB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3IgbG9nZ2VyIG1lc3NhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTG9nZ2VyTWVzc2FnZU9wdGlvbnMgPSB7XHJcbiAgICBsb2dMZXZlbDogTG9nTGV2ZWwsXHJcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nLFxyXG4gICAgY29udGFpbnNQaWk/OiBib29sZWFuLFxyXG4gICAgY29udGV4dD86IHN0cmluZ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvZyBtZXNzYWdlIGxldmVsLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gICAgRXJyb3IsXHJcbiAgICBXYXJuaW5nLFxyXG4gICAgSW5mbyxcclxuICAgIFZlcmJvc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGxiYWNrIHRvIHNlbmQgdGhlIG1lc3NhZ2VzIHRvLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyQ2FsbGJhY2sge1xyXG4gICAgKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB3aGljaCBmYWNpbGl0YXRlcyBsb2dnaW5nIG9mIG1lc3NhZ2VzIHRvIGEgc3BlY2lmaWMgcGxhY2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcbiAgICAvLyBDb3JyZWxhdGlvbiBJRCBmb3IgcmVxdWVzdCwgdXN1YWxseSBzZXQgYnkgdXNlci5cclxuICAgIHByaXZhdGUgY29ycmVsYXRpb25JZDogc3RyaW5nO1xyXG5cclxuICAgIC8vIEN1cnJlbnQgbG9nIGxldmVsLCBkZWZhdWx0cyB0byBpbmZvLlxyXG4gICAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xyXG5cclxuICAgIC8vIEJvb2xlYW4gZGVzY3JpYmluZyB3aGV0aGVyIFBJSSBsb2dnaW5nIGlzIGFsbG93ZWQuXHJcbiAgICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8vIENhbGxiYWNrIHRvIHNlbmQgbWVzc2FnZXMgdG8uXHJcbiAgICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcclxuXHJcbiAgICAvLyBQYWNrYWdlIG5hbWUgaW1wbGVtZW50aW5nIHRoaXMgbG9nZ2VyXHJcbiAgICBwcml2YXRlIHBhY2thZ2VOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gUGFja2FnZSB2ZXJzaW9uIGltcGxlbWVudGluZyB0aGlzIGxvZ2dlclxyXG4gICAgcHJpdmF0ZSBwYWNrYWdlVmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlck9wdGlvbnM6IExvZ2dlck9wdGlvbnMsIHBhY2thZ2VOYW1lPzogc3RyaW5nLCBwYWNrYWdlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRMb2dnZXJDYWxsYmFjayA9ICgpID0+IHt9O1xyXG4gICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvZ2dlck9wdGlvbnMubG9nZ2VyQ2FsbGJhY2sgfHwgZGVmYXVsdExvZ2dlckNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgPSBsb2dnZXJPcHRpb25zLnBpaUxvZ2dpbmdFbmFibGVkIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsb2dnZXJPcHRpb25zLmxvZ0xldmVsIHx8IExvZ0xldmVsLkluZm87XHJcblxyXG4gICAgICAgIHRoaXMucGFja2FnZU5hbWUgPSBwYWNrYWdlTmFtZSB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xyXG4gICAgICAgIHRoaXMucGFja2FnZVZlcnNpb24gPSBwYWNrYWdlVmVyc2lvbiB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG5ldyBMb2dnZXIgd2l0aCBleGlzdGluZyBjb25maWd1cmF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb25lKHBhY2thZ2VOYW1lOiBzdHJpbmcsIHBhY2thZ2VWZXJzaW9uOiBzdHJpbmcpOiBMb2dnZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgTG9nZ2VyKHtsb2dnZXJDYWxsYmFjazogdGhpcy5sb2NhbENhbGxiYWNrLCBwaWlMb2dnaW5nRW5hYmxlZDogdGhpcy5waWlMb2dnaW5nRW5hYmxlZCwgbG9nTGV2ZWw6IHRoaXMubGV2ZWx9LCBwYWNrYWdlTmFtZSwgcGFja2FnZVZlcnNpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9nIG1lc3NhZ2Ugd2l0aCByZXF1aXJlZCBvcHRpb25zLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ01lc3NhZ2UobG9nTWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBMb2dnZXJNZXNzYWdlT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIGlmICgob3B0aW9ucy5sb2dMZXZlbCA+IHRoaXMubGV2ZWwpIHx8ICghdGhpcy5waWlMb2dnaW5nRW5hYmxlZCAmJiBvcHRpb25zLmNvbnRhaW5zUGlpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsb2dIZWFkZXI6IHN0cmluZyA9IFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb3JyZWxhdGlvbklkKSA/IGBbJHt0aW1lc3RhbXB9XSA6IGAgOiBgWyR7dGltZXN0YW1wfV0gOiBbJHt0aGlzLmNvcnJlbGF0aW9uSWR9XWA7XHJcbiAgICAgICAgY29uc3QgbG9nID0gYCR7bG9nSGVhZGVyfSA6ICR7dGhpcy5wYWNrYWdlTmFtZX1AJHt0aGlzLnBhY2thZ2VWZXJzaW9ufSA6ICR7TG9nTGV2ZWxbb3B0aW9ucy5sb2dMZXZlbF19IC0gJHtsb2dNZXNzYWdlfWA7XHJcbiAgICAgICAgLy8gZGVidWcoYG1zYWw6JHtMb2dMZXZlbFtvcHRpb25zLmxvZ0xldmVsXX0ke29wdGlvbnMuY29udGFpbnNQaWkgPyBcIi1QaWlcIjogXCJcIn0ke29wdGlvbnMuY29udGV4dCA/IGA6JHtvcHRpb25zLmNvbnRleHR9YCA6IFwiXCJ9YCkobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlQ2FsbGJhY2sob3B0aW9ucy5sb2dMZXZlbCwgbG9nLCBvcHRpb25zLmNvbnRhaW5zUGlpIHx8IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgY2FsbGJhY2sgd2l0aCBtZXNzYWdlLlxyXG4gICAgICovXHJcbiAgICBleGVjdXRlQ2FsbGJhY2sobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sobGV2ZWwsIG1lc3NhZ2UsIGNvbnRhaW5zUGlpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGVycm9yIG1lc3NhZ2VzLlxyXG4gICAgICovXHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiBmYWxzZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIGVycm9yIG1lc3NhZ2VzIHdpdGggUElJLlxyXG4gICAgICovXHJcbiAgICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3Mgd2FybmluZyBtZXNzYWdlcy5cclxuICAgICAqL1xyXG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvZ3Mgd2FybmluZyBtZXNzYWdlcyB3aXRoIFBJSS5cclxuICAgICAqL1xyXG4gICAgd2FybmluZ1BpaShtZXNzYWdlOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UobWVzc2FnZSwge1xyXG4gICAgICAgICAgICBsb2dMZXZlbDogTG9nTGV2ZWwuV2FybmluZyxcclxuICAgICAgICAgICAgY29udGFpbnNQaWk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBpbmZvIG1lc3NhZ2VzLlxyXG4gICAgICovXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ6IGNvcnJlbGF0aW9uSWQgfHwgXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9ncyBpbmZvIG1lc3NhZ2VzIHdpdGggUElJLlxyXG4gICAgICovXHJcbiAgICBpbmZvUGlpKG1lc3NhZ2U6IHN0cmluZywgY29ycmVsYXRpb25JZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvLFxyXG4gICAgICAgICAgICBjb250YWluc1BpaTogdHJ1ZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIHZlcmJvc2UgbWVzc2FnZXMuXHJcbiAgICAgKi9cclxuICAgIHZlcmJvc2UobWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLlZlcmJvc2UsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiBmYWxzZSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZDogY29ycmVsYXRpb25JZCB8fCBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2dzIHZlcmJvc2UgbWVzc2FnZXMgd2l0aCBQSUkuXHJcbiAgICAgKi9cclxuICAgIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nLCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKG1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLlZlcmJvc2UsXHJcbiAgICAgICAgICAgIGNvbnRhaW5zUGlpOiB0cnVlLFxyXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkOiBjb3JyZWxhdGlvbklkIHx8IFwiXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd2hldGhlciBQSUkgTG9nZ2luZyBpcyBlbmFibGVkIG9yIG5vdC5cclxuICAgICAqL1xyXG4gICAgaXNQaWlMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWlMb2dnaW5nRW5hYmxlZCB8fCBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFNlcGFyYXRvcnMsIENyZWRlbnRpYWxUeXBlLCBDYWNoZVR5cGUsIENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgdHlwZSBmb3IgY3JlZGVudGlhbHMgdG8gYmUgc3RvcmVkIGluIHRoZSBjYWNoZTogZWc6IEFDQ0VTU19UT0tFTiwgSURfVE9LRU4gZXRjXHJcbiAqXHJcbiAqIEtleTpWYWx1ZSBTY2hlbWE6XHJcbiAqXHJcbiAqIEtleTogPGhvbWVfYWNjb3VudF9pZCo+LTxlbnZpcm9ubWVudD4tPGNyZWRlbnRpYWxfdHlwZT4tPGNsaWVudF9pZD4tPHJlYWxtKj4tPHRhcmdldCo+XHJcbiAqXHJcbiAqIFZhbHVlIFNjaGVtYTpcclxuICoge1xyXG4gKiAgICAgIGhvbWVBY2NvdW50SWQ6IGhvbWUgYWNjb3VudCBpZGVudGlmaWVyIGZvciB0aGUgYXV0aCBzY2hlbWUsXHJcbiAqICAgICAgZW52aXJvbm1lbnQ6IGVudGl0eSB0aGF0IGlzc3VlZCB0aGUgdG9rZW4sIHJlcHJlc2VudGVkIGFzIGEgZnVsbCBob3N0XHJcbiAqICAgICAgY3JlZGVudGlhbFR5cGU6IFR5cGUgb2YgY3JlZGVudGlhbCBhcyBhIHN0cmluZywgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBSZWZyZXNoVG9rZW4sIEFjY2Vzc1Rva2VuLCBJZFRva2VuLCBQYXNzd29yZCwgQ29va2llLCBDZXJ0aWZpY2F0ZSwgT3RoZXJcclxuICogICAgICBjbGllbnRJZDogY2xpZW50IElEIG9mIHRoZSBhcHBsaWNhdGlvblxyXG4gKiAgICAgIHNlY3JldDogQWN0dWFsIGNyZWRlbnRpYWwgYXMgYSBzdHJpbmdcclxuICogICAgICBmYW1pbHlJZDogRmFtaWx5IElEIGlkZW50aWZpZXIsIHVzdWFsbHkgb25seSB1c2VkIGZvciByZWZyZXNoIHRva2Vuc1xyXG4gKiAgICAgIHJlYWxtOiBGdWxsIHRlbmFudCBvciBvcmdhbml6YXRpb25hbCBpZGVudGlmaWVyIHRoYXQgdGhlIGFjY291bnQgYmVsb25ncyB0b1xyXG4gKiAgICAgIHRhcmdldDogUGVybWlzc2lvbnMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gdGhlIHRva2VuLCBvciBmb3IgcmVmcmVzaCB0b2tlbnMsIHRoZSByZXNvdXJjZSBpZGVudGlmaWVyLlxyXG4gKiAgICAgIG9ib0Fzc2VydGlvbjogYWNjZXNzIHRva2VuIHBhc3NlZCBpbiBhcyBwYXJ0IG9mIE9CTyByZXF1ZXN0XHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDcmVkZW50aWFsRW50aXR5IHtcclxuICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIGVudmlyb25tZW50OiBzdHJpbmc7XHJcbiAgICBjcmVkZW50aWFsVHlwZTogQ3JlZGVudGlhbFR5cGU7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgc2VjcmV0OiBzdHJpbmc7XHJcbiAgICBmYW1pbHlJZD86IHN0cmluZztcclxuICAgIHJlYWxtPzogc3RyaW5nO1xyXG4gICAgdGFyZ2V0Pzogc3RyaW5nO1xyXG4gICAgb2JvQXNzZXJ0aW9uPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudCBJZCBrZXkgY29tcG9uZW50IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENyZWRlbnRpYWxFbnRpdHkuZ2VuZXJhdGVBY2NvdW50SWRGb3JDYWNoZUtleSh0aGlzLmhvbWVBY2NvdW50SWQsIHRoaXMuZW52aXJvbm1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQ3JlZGVudGlhbCBJZCBrZXkgY29tcG9uZW50IGFzIHBlciB0aGUgc2NoZW1hOiA8Y3JlZGVudGlhbF90eXBlPi08Y2xpZW50X2lkPi08cmVhbG0+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQ3JlZGVudGlhbElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENyZWRlbnRpYWxFbnRpdHkuZ2VuZXJhdGVDcmVkZW50aWFsSWRGb3JDYWNoZUtleShcclxuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsVHlwZSxcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5yZWFsbSxcclxuICAgICAgICAgICAgdGhpcy5mYW1pbHlJZFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0YXJnZXQga2V5IGNvbXBvbmVudCBhcyBwZXIgc2NoZW1hOiA8dGFyZ2V0PlxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVRhcmdldCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDcmVkZW50aWFsRW50aXR5LmdlbmVyYXRlVGFyZ2V0Rm9yQ2FjaGVLZXkodGhpcy50YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIGNyZWRlbnRpYWwga2V5XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQ3JlZGVudGlhbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDcmVkZW50aWFsRW50aXR5LmdlbmVyYXRlQ3JlZGVudGlhbENhY2hlS2V5KFxyXG4gICAgICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbFR5cGUsXHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMucmVhbG0sXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LFxyXG4gICAgICAgICAgICB0aGlzLmZhbWlseUlkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIGNhY2hlIChpbiB0aGlzIGNhc2UgY3JlZGVudGlhbClcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVUeXBlKCk6IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNyZWRlbnRpYWxUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuSURfVE9LRU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLklEX1RPS0VOO1xyXG4gICAgICAgICAgICBjYXNlIENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuQUNDRVNTX1RPS0VOO1xyXG4gICAgICAgICAgICBjYXNlIENyZWRlbnRpYWxUeXBlLlJFRlJFU0hfVE9LRU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLlJFRlJFU0hfVE9LRU47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkQ3JlZGVudGlhbFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBgQ3JlZGVudGlhbFR5cGVgXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDcmVkZW50aWFsVHlwZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTi50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTjtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5pbmRleE9mKENyZWRlbnRpYWxUeXBlLklEX1RPS0VOLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3JlZGVudGlhbFR5cGUuSURfVE9LRU47XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuaW5kZXhPZihDcmVkZW50aWFsVHlwZS5SRUZSRVNIX1RPS0VOLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBDb25zdGFudHMuTk9UX0RFRklORUQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgY3JlZGVudGlhbCBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQ3JlZGVudGlhbENhY2hlS2V5KFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudDogc3RyaW5nLFxyXG4gICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZSxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHJlYWxtPzogc3RyaW5nLFxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZ1xyXG4gICAgKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsS2V5ID0gW1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQWNjb3VudElkRm9yQ2FjaGVLZXkoaG9tZUFjY291bnRJZCwgZW52aXJvbm1lbnQpLFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbElkRm9yQ2FjaGVLZXkoY3JlZGVudGlhbFR5cGUsIGNsaWVudElkLCByZWFsbSwgZmFtaWx5SWQpLFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlVGFyZ2V0Rm9yQ2FjaGVLZXkodGFyZ2V0KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbEtleS5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBBY2NvdW50IElkIGZvciBrZXlzXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlQWNjb3VudElkRm9yQ2FjaGVLZXkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmdcclxuICAgICk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkOiBBcnJheTxzdHJpbmc+ID0gW2hvbWVBY2NvdW50SWQsIGVudmlyb25tZW50XTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudElkLmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIENyZWRlbnRpYWwgSWQgZm9yIGtleXNcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsVHlwZVxyXG4gICAgICogQHBhcmFtIHJlYWxtXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSBmYW1pbHlJZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUNyZWRlbnRpYWxJZEZvckNhY2hlS2V5KFxyXG4gICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZSxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHJlYWxtPzogc3RyaW5nLFxyXG4gICAgICAgIGZhbWlseUlkPzogc3RyaW5nXHJcbiAgICApOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudE9yRmFtaWx5SWQgPVxyXG4gICAgICAgICAgICBjcmVkZW50aWFsVHlwZSA9PT0gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTlxyXG4gICAgICAgICAgICAgICAgPyBmYW1pbHlJZCB8fCBjbGllbnRJZFxyXG4gICAgICAgICAgICAgICAgOiBjbGllbnRJZDtcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsSWQ6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlLFxyXG4gICAgICAgICAgICBjbGllbnRPckZhbWlseUlkLFxyXG4gICAgICAgICAgICByZWFsbSB8fCBcIlwiLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVkZW50aWFsSWQuam9pbihTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0YXJnZXQga2V5IGNvbXBvbmVudCBhcyBwZXIgc2NoZW1hOiA8dGFyZ2V0PlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZVRhcmdldEZvckNhY2hlS2V5KHNjb3Blcz86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIChzY29wZXMgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL0NsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgY2xhc3MgY29udGFpbmluZyBzdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgZXJyb3IgY29kZXMgYW5kIG1lc3NhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XHJcbiAgICByZWRpcmVjdFVyaU5vdFNldDoge1xyXG4gICAgICAgIGNvZGU6IFwicmVkaXJlY3RfdXJpX2VtcHR5XCIsXHJcbiAgICAgICAgZGVzYzogXCJBIHJlZGlyZWN0IFVSSSBpcyByZXF1aXJlZCBmb3IgYWxsIGNhbGxzLCBhbmQgbm9uZSBoYXMgYmVlbiBzZXQuXCJcclxuICAgIH0sXHJcbiAgICBwb3N0TG9nb3V0VXJpTm90U2V0OiB7XHJcbiAgICAgICAgY29kZTogXCJwb3N0X2xvZ291dF91cmlfZW1wdHlcIixcclxuICAgICAgICBkZXNjOiBcIkEgcG9zdCBsb2dvdXQgcmVkaXJlY3QgaGFzIG5vdCBiZWVuIHNldC5cIlxyXG4gICAgfSxcclxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkNvdWxkIG5vdCBwYXJzZSB0aGUgZ2l2ZW4gY2xhaW1zIHJlcXVlc3Qgb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcclxuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW5zZWN1cmVcIixcclxuICAgICAgICBkZXNjOiBcIkF1dGhvcml0eSBVUklzIG11c3QgdXNlIGh0dHBzLiAgUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdHkgY29uZmlndXJhdGlvbiBvcHRpb25zOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9henVyZS9hY3RpdmUtZGlyZWN0b3J5L2RldmVsb3AvbXNhbC1qcy1pbml0aWFsaXppbmctY2xpZW50LWFwcGxpY2F0aW9ucyNjb25maWd1cmF0aW9uLW9wdGlvbnNcIlxyXG4gICAgfSxcclxuICAgIHVybFBhcnNlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInVybF9wYXJzZV9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVVJMIGNvdWxkIG5vdCBiZSBwYXJzZWQgaW50byBhcHByb3ByaWF0ZSBzZWdtZW50cy5cIlxyXG4gICAgfSxcclxuICAgIHVybEVtcHR5RXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X3VybF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVVJMIHdhcyBlbXB0eSBvciBudWxsLlwiXHJcbiAgICB9LFxyXG4gICAgZW1wdHlTY29wZXNFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBudWxsLCB1bmRlZmluZWQgb3IgZW1wdHkgYXJyYXkgYmVjYXVzZSB0aGV5IGFyZSByZXF1aXJlZCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuLlwiXHJcbiAgICB9LFxyXG4gICAgbm9uQXJyYXlTY29wZXNFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBub24tYXJyYXkuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRJZFNpbmdsZVNjb3BlRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiQ2xpZW50IElEIGNhbiBvbmx5IGJlIHByb3ZpZGVkIGFzIGEgc2luZ2xlIHNjb3BlLlwiXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZFByb21wdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9wcm9tcHRfdmFsdWVcIixcclxuICAgICAgICBkZXNjOiBcIlN1cHBvcnRlZCBwcm9tcHQgdmFsdWVzIGFyZSAnbG9naW4nLCAnc2VsZWN0X2FjY291bnQnLCAnY29uc2VudCcgYW5kICdub25lJy4gIFBsZWFzZSBzZWUgaGVyZSBmb3IgdmFsaWQgY29uZmlndXJhdGlvbiBvcHRpb25zOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9henVyZS9hY3RpdmUtZGlyZWN0b3J5L2RldmVsb3AvbXNhbC1qcy1pbml0aWFsaXppbmctY2xpZW50LWFwcGxpY2F0aW9ucyNjb25maWd1cmF0aW9uLW9wdGlvbnNcIixcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQ2xhaW1zUmVxdWVzdDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jbGFpbXNcIixcclxuICAgICAgICBkZXNjOiBcIkdpdmVuIGNsYWltcyBwYXJhbWV0ZXIgbXVzdCBiZSBhIHN0cmluZ2lmaWVkIEpTT04gb2JqZWN0LlwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5SZXF1ZXN0RW1wdHlFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVxdWVzdF9lbXB0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVG9rZW4gcmVxdWVzdCB3YXMgZW1wdHkgYW5kIG5vdCBmb3VuZCBpbiBjYWNoZS5cIlxyXG4gICAgfSxcclxuICAgIGxvZ291dFJlcXVlc3RFbXB0eUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJsb2dvdXRfcmVxdWVzdF9lbXB0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGxvZ291dCByZXF1ZXN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NvZGVfY2hhbGxlbmdlX21ldGhvZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiY29kZV9jaGFsbGVuZ2VfbWV0aG9kIHBhc3NlZCBpcyBpbnZhbGlkLiBWYWxpZCB2YWx1ZXMgYXJlIFxcXCJwbGFpblxcXCIgYW5kIFxcXCJTMjU2XFxcIi5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zOiB7XHJcbiAgICAgICAgY29kZTogXCJwa2NlX3BhcmFtc19taXNzaW5nXCIsXHJcbiAgICAgICAgZGVzYzogXCJCb3RoIHBhcmFtczogY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBhcmUgdG8gYmUgcGFzc2VkIGlmIHRvIGJlIHNlbnQgaW4gdGhlIHJlcXVlc3RcIlxyXG4gICAgfSxcclxuICAgIGtub3duQXV0aG9yaXRpZXNBbmRDbG91ZERpc2NvdmVyeU1ldGFkYXRhOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2tub3duX2F1dGhvcml0aWVzXCIsXHJcbiAgICAgICAgZGVzYzogXCJrbm93bkF1dGhvcml0aWVzIGFuZCBjbG91ZERpc2NvdmVyeU1ldGFkYXRhIGNhbm5vdCBib3RoIGJlIHByb3ZpZGVkLiBQbGVhc2UgcHJvdmlkZSBjbG91ZERpc2NvdmVyeU1ldGFkYXRhIG9iamVjdCBmb3IgQUFELCBrbm93bkF1dGhvcml0aWVzIG90aGVyd2lzZS5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDbG91ZERpc2NvdmVyeU1ldGFkYXRhOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2Nsb3VkX2Rpc2NvdmVyeV9tZXRhZGF0YVwiLFxyXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBjbG91ZERpc2NvdmVyeU1ldGFkYXRhIHByb3ZpZGVkLiBNdXN0IGJlIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50IGFuZCBtZXRhZGF0YSBmaWVsZHNcIlxyXG4gICAgfSxcclxuICAgIHVudHJ1c3RlZEF1dGhvcml0eToge1xyXG4gICAgICAgIGNvZGU6IFwidW50cnVzdGVkX2F1dGhvcml0eVwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIHByb3ZpZGVkIGF1dGhvcml0eSBpcyBub3QgYSB0cnVzdGVkIGF1dGhvcml0eS4gUGxlYXNlIGluY2x1ZGUgdGhpcyBhdXRob3JpdHkgaW4gdGhlIGtub3duQXV0aG9yaXRpZXMgY29uZmlnIHBhcmFtZXRlci5cIlxyXG4gICAgfSxcclxuICAgIHJlc291cmNlUmVxdWVzdFBhcmFtZXRlcnNSZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwicmVzb3VyY2VSZXF1ZXN0X3BhcmFtZXRlcnNfcmVxdWlyZWRcIixcclxuICAgICAgICBkZXNjOiBcInJlc291cmNlUmVxdWVzdE1ldGhvZCBhbmQgcmVzb3VyY2VSZXF1ZXN0VXJpIGFyZSByZXF1aXJlZFwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gY29uZmlndXJhdGlvbiBvZiB0aGUgTVNBTC5qcyBsaWJyYXJ5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudENvbmZpZ3VyYXRpb25FcnJvciBleHRlbmRzIENsaWVudEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIHdoZW4gdGhlIHJlZGlyZWN0IHVyaSBpcyBlbXB0eSAobm90IHNldCBieSBjYWxsZXIpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdFVyaUVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnJlZGlyZWN0VXJpTm90U2V0LmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucmVkaXJlY3RVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBwb3N0LWxvZ291dCByZWRpcmVjdCB1cmkgaXMgZW1wdHkgKG5vdCBzZXQgYnkgY2FsbGVyKVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUG9zdExvZ291dFJlZGlyZWN0VXJpRW1wdHlFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UucG9zdExvZ291dFVyaU5vdFNldC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnBvc3RMb2dvdXRVcmlOb3RTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGVycm9yIHRocm93biB3aGVuIHRoZSBjbGFpbXMgcmVxdWVzdCBjb3VsZCBub3QgYmUgc3VjY2Vzc2Z1bGx5IHBhcnNlZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmRlc2N9IEdpdmVuIHZhbHVlOiAke2NsYWltc1JlcXVlc3RQYXJzZUVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgYXV0aG9yaXR5IHVyaSBpcyBnaXZlbiBhbiBpbnNlY3VyZSBwcm90b2NvbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUluc2VjdXJlQXV0aG9yaXR5VXJpRXJyb3IodXJsU3RyaW5nOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW5zZWN1cmUuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZS5kZXNjfSBHaXZlbiBVUkk6ICR7dXJsU3RyaW5nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB0aHJvd24gaWYgVVJMIHN0cmluZyBkb2VzIG5vdCBwYXJzZSBpbnRvIHNlcGFyYXRlIHNlZ21lbnRzLlxyXG4gICAgICogQHBhcmFtIHVybFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVXJsUGFyc2VFcnJvcih1cmxQYXJzZUVycm9yOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudXJsUGFyc2VFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybFBhcnNlRXJyb3IuZGVzY30gR2l2ZW4gRXJyb3I6ICR7dXJsUGFyc2VFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gZXJyb3IgdGhyb3duIGlmIFVSTCBzdHJpbmcgaXMgZW1wdHkgb3IgbnVsbC5cclxuICAgICAqIEBwYXJhbSB1cmxTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVVybEVtcHR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVybEVtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51cmxFbXB0eUVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gc2NvcGVzIGFyZSBub3QgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBpbnB1dFNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub25BcnJheVNjb3Blc0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9uQXJyYXlTY29wZXNFcnJvci5kZXNjfSBHaXZlbiBTY29wZXM6ICR7aW5wdXRTY29wZXN9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFcnJvciB0aHJvd24gd2hlbiBzY29wZXMgYXJlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHNjb3Blc1ZhbHVlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3IoaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4pOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXNFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmVtcHR5U2NvcGVzRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gY2xpZW50IGlkIHNjb3BlIGlzIG5vdCBwcm92aWRlZCBhcyBzaW5nbGUgc2NvcGUuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRTY29wZXNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihpbnB1dFNjb3BlczogQXJyYXk8c3RyaW5nPik6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRJZFNpbmdsZVNjb3BlRXJyb3IuZGVzY30gR2l2ZW4gU2NvcGVzOiAke2lucHV0U2NvcGVzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgdGhyb3duIHdoZW4gcHJvbXB0IGlzIG5vdCBhbiBhbGxvd2VkIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0VmFsdWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHRWYWx1ZTogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmRlc2N9IEdpdmVuIHZhbHVlOiAke3Byb21wdFZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBlcnJvciB0aHJvd24gd2hlbiBjbGFpbXMgcGFyYW1ldGVyIGlzIG5vdCBhIHN0cmluZ2lmaWVkIEpTT04gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2xhaW1zUmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2xhaW1zUmVxdWVzdC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDbGFpbXNSZXF1ZXN0LmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gdG9rZW4gcmVxdWVzdCBpcyBlbXB0eSBhbmQgbm90aGluZyBjYWNoZWQgaW4gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5TG9nb3V0UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UubG9nb3V0UmVxdWVzdEVtcHR5RXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5sb2dvdXRSZXF1ZXN0RW1wdHlFcnJvci5kZXNjXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIHRva2VuIHJlcXVlc3QgaXMgZW1wdHkgYW5kIG5vdGhpbmcgY2FjaGVkIGluIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVRva2VuUmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudG9rZW5SZXF1ZXN0RW1wdHlFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnRva2VuUmVxdWVzdEVtcHR5RXJyb3IuZGVzY1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBhbiBpbnZhbGlkIGNvZGVfY2hhbGxlbmdlX21ldGhvZCBpcyBwYXNzZWQgYnkgdGhlIHVzZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ29kZUNoYWxsZW5nZU1ldGhvZC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlTWV0aG9kLmRlc2NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGVycm9yIHdoZW4gYm90aCBwYXJhbXM6IGNvZGVfY2hhbGxlbmdlIGFuZCBjb2RlX2NoYWxsZW5nZV9tZXRob2QgYXJlIG5vdCBwYXNzZWQgdG9nZXRoZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtcy5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDb2RlQ2hhbGxlbmdlUGFyYW1zLmRlc2NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhyb3dzIGFuIGVycm9yIHdoZW4gdGhlIHVzZXIgcGFzc2VzIGJvdGgga25vd25BdXRob3JpdGllcyBhbmQgY2xvdWREaXNjb3ZlcnlNZXRhZGF0YVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlS25vd25BdXRob3JpdGllc0Nsb3VkRGlzY292ZXJ5TWV0YWRhdGFFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uua25vd25BdXRob3JpdGllc0FuZENsb3VkRGlzY292ZXJ5TWV0YWRhdGEuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5rbm93bkF1dGhvcml0aWVzQW5kQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YS5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBhbiBlcnJvciB3aGVuIHRoZSB1c2VyIHBhc3NlcyBpbnZhbGlkIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDbG91ZERpc2NvdmVyeU1ldGFkYXRhRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDbG91ZERpc2NvdmVyeU1ldGFkYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENsb3VkRGlzY292ZXJ5TWV0YWRhdGEuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgZXJyb3Igd2hlbiBwcm92aWRlZCBhdXRob3JpdHkgaXMgbm90IGEgbWVtYmVyIG9mIHRoZSB0cnVzdGVkIGhvc3QgbGlzdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVW50cnVzdGVkQXV0aG9yaXR5RXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVudHJ1c3RlZEF1dGhvcml0eS5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRocm93cyBlcnJvciB3aGVuIHJlc291cmNlUmVxdWVzdE1ldGhvZCBvciByZXNvdXJjZVJlcXVlc3RVcmkgaXMgbWlzc2luZ1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVzb3VyY2VSZXF1ZXN0UGFyYW1ldGVyc1JlcXVpcmVkRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnJlc291cmNlUmVxdWVzdFBhcmFtZXRlcnNSZXF1aXJlZC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnJlc291cmNlUmVxdWVzdFBhcmFtZXRlcnNSZXF1aXJlZC5kZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogVGhlIFNjb3BlU2V0IGNsYXNzIGNyZWF0ZXMgYSBzZXQgb2Ygc2NvcGVzLiBTY29wZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUsIHVuaXF1ZSB2YWx1ZXMsIHNvIHRoZSBTZXQgb2JqZWN0IGluIEpTIG1ha2VzXHJcbiAqIHRoZSBtb3N0IHNlbnNlIHRvIGltcGxlbWVudCBmb3IgdGhpcyBjbGFzcy4gQWxsIHNjb3BlcyBhcmUgdHJpbW1lZCBhbmQgY29udmVydGVkIHRvIGxvd2VyIGNhc2Ugc3RyaW5ncyBpbiBpbnRlcnNlY3Rpb24gYW5kIHVuaW9uIGZ1bmN0aW9uc1xyXG4gKiB0byBlbnN1cmUgdW5pcXVlbmVzcyBvZiBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjb3BlU2V0IHtcclxuICAgIC8vIFNjb3BlcyBhcyBhIFNldCBvZiBzdHJpbmdzXHJcbiAgICBwcml2YXRlIHNjb3BlczogU2V0PHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICAvLyBGaWx0ZXIgZW1wdHkgc3RyaW5nIGFuZCBudWxsL3VuZGVmaW5lZCBhcnJheSBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHNjb3BlQXJyID0gaW5wdXRTY29wZXMgPyBTdHJpbmdVdGlscy50cmltQXJyYXlFbnRyaWVzKFsuLi5pbnB1dFNjb3Blc10pIDogW107XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJbnB1dCA9IHNjb3BlQXJyID8gU3RyaW5nVXRpbHMucmVtb3ZlRW1wdHlTdHJpbmdzRnJvbUFycmF5KHNjb3BlQXJyKSA6IFtdO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodmFsaWRhdGUgZnVuY3Rpb24gdGhyb3dzIGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGVzKGZpbHRlcmVkSW5wdXQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3BlcyA9IG5ldyBTZXQ8c3RyaW5nPigpOyAvLyBJdGVyYXRvciBpbiBjb25zdHJ1Y3RvciBub3Qgc3VwcG9ydGVkIGJ5IElFMTFcclxuICAgICAgICBmaWx0ZXJlZElucHV0LmZvckVhY2goc2NvcGUgPT4gdGhpcy5zY29wZXMuYWRkKHNjb3BlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgU2NvcGVTZXQgZnJvbSBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRTY29wZVN0cmluZ1xyXG4gICAgICogQHBhcmFtIGFwcENsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzUmVxdWlyZWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcoaW5wdXRTY29wZVN0cmluZzogc3RyaW5nKTogU2NvcGVTZXQge1xyXG4gICAgICAgIGlucHV0U2NvcGVTdHJpbmcgPSBpbnB1dFNjb3BlU3RyaW5nIHx8IFwiXCI7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTY29wZXM6IEFycmF5PHN0cmluZz4gPSBpbnB1dFNjb3BlU3RyaW5nLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFNjb3BlU2V0KGlucHV0U2NvcGVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpbnB1dFNjb3BlcyAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGVzKGlucHV0U2NvcGVzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2NvcGVzIGFyZSByZXF1aXJlZCBidXQgbm90IGdpdmVuIG9yIGlzIGFuIGVtcHR5IGFycmF5XHJcbiAgICAgICAgaWYgKCFpbnB1dFNjb3BlcyB8fCBpbnB1dFNjb3Blcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3IoaW5wdXRTY29wZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gc2NvcGUgaXMgcHJlc2VudCBpbiB0aGlzIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqL1xyXG4gICAgY29udGFpbnNTY29wZShzY29wZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgbG93ZXJDYXNlU2NvcGVzID0gdGhpcy5wcmludFNjb3Blc0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBjb25zdCBsb3dlckNhc2VTY29wZXNTZXQgPSBuZXcgU2NvcGVTZXQobG93ZXJDYXNlU2NvcGVzKTtcclxuICAgICAgICAvLyBjb21wYXJlIGxvd2VyY2FzZSBzY29wZXNcclxuICAgICAgICByZXR1cm4gIVN0cmluZ1V0aWxzLmlzRW1wdHkoc2NvcGUpID8gbG93ZXJDYXNlU2NvcGVzU2V0LnNjb3Blcy5oYXMoc2NvcGUudG9Mb3dlckNhc2UoKSkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgc2V0IG9mIHNjb3BlcyBpcyBwcmVzZW50IGluIHRoaXMgc2V0IG9mIHNjb3Blcy5cclxuICAgICAqIEBwYXJhbSBzY29wZVNldFxyXG4gICAgICovXHJcbiAgICBjb250YWluc1Njb3BlU2V0KHNjb3BlU2V0OiBTY29wZVNldCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc2NvcGVTZXQgfHwgc2NvcGVTZXQuc2NvcGVzLnNpemUgPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGVzLnNpemUgPj0gc2NvcGVTZXQuc2NvcGVzLnNpemUgJiYgc2NvcGVTZXQuYXNBcnJheSgpLmV2ZXJ5KHNjb3BlID0+IHRoaXMuY29udGFpbnNTY29wZShzY29wZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHNldCBvZiBzY29wZXMgY29udGFpbnMgb25seSB0aGUgZGVmYXVsdHNcclxuICAgICAqL1xyXG4gICAgY29udGFpbnNPbmx5RGVmYXVsdFNjb3BlcygpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZGVmYXVsdFNjb3BlQ291bnQgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zU2NvcGUoQ29uc3RhbnRzLk9QRU5JRF9TQ09QRSkpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFNjb3BlQ291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNTY29wZShDb25zdGFudHMuUFJPRklMRV9TQ09QRSkpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFNjb3BlQ291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNTY29wZShDb25zdGFudHMuT0ZGTElORV9BQ0NFU1NfU0NPUEUpKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRTY29wZUNvdW50ICs9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuc2l6ZSA9PT0gZGVmYXVsdFNjb3BlQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmRzIHNpbmdsZSBzY29wZSBpZiBwYXNzZWRcclxuICAgICAqIEBwYXJhbSBuZXdTY29wZVxyXG4gICAgICovXHJcbiAgICBhcHBlbmRTY29wZShuZXdTY29wZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KG5ld1Njb3BlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3Blcy5hZGQobmV3U2NvcGUudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmRzIG11bHRpcGxlIHNjb3BlcyBpZiBwYXNzZWRcclxuICAgICAqIEBwYXJhbSBuZXdTY29wZXNcclxuICAgICAqL1xyXG4gICAgYXBwZW5kU2NvcGVzKG5ld1Njb3BlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5ld1Njb3Blcy5mb3JFYWNoKG5ld1Njb3BlID0+IHRoaXMuYXBwZW5kU2NvcGUobmV3U2NvcGUpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVBcHBlbmRTY29wZVNldEVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgZWxlbWVudCBmcm9tIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlU2NvcGUoc2NvcGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHNjb3BlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUmVtb3ZlRW1wdHlTY29wZUZyb21TZXRFcnJvcihzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcGVzLmRlbGV0ZShzY29wZS50cmltKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBkZWZhdWx0IHNjb3BlcyBmcm9tIHNldCBvZiBzY29wZXNcclxuICAgICAqIFByaW1hcmlseSB1c2VkIHRvIHByZXZlbnQgY2FjaGUgbWlzc2VzIGlmIHRoZSBkZWZhdWx0IHNjb3BlcyBhcmUgbm90IHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICovXHJcbiAgICByZW1vdmVEZWZhdWx0U2NvcGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcGVzLmRlbGV0ZShDb25zdGFudHMuT0ZGTElORV9BQ0NFU1NfU0NPUEUpO1xyXG4gICAgICAgIHRoaXMuc2NvcGVzLmRlbGV0ZShDb25zdGFudHMuT1BFTklEX1NDT1BFKTtcclxuICAgICAgICB0aGlzLnNjb3Blcy5kZWxldGUoQ29uc3RhbnRzLlBST0ZJTEVfU0NPUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tYmluZXMgYW4gYXJyYXkgb2Ygc2NvcGVzIHdpdGggdGhlIGN1cnJlbnQgc2V0IG9mIHNjb3Blcy5cclxuICAgICAqIEBwYXJhbSBvdGhlclNjb3Blc1xyXG4gICAgICovXHJcbiAgICB1bmlvblNjb3BlU2V0cyhvdGhlclNjb3BlczogU2NvcGVTZXQpOiBTZXQ8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCFvdGhlclNjb3Blcykge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW1wdHlJbnB1dFNjb3BlU2V0RXJyb3Iob3RoZXJTY29wZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1bmlvblNjb3BlcyA9IG5ldyBTZXQ8c3RyaW5nPigpOyAvLyBJdGVyYXRvciBpbiBjb25zdHJ1Y3RvciBub3Qgc3VwcG9ydGVkIGluIElFMTFcclxuICAgICAgICBvdGhlclNjb3Blcy5zY29wZXMuZm9yRWFjaChzY29wZSA9PiB1bmlvblNjb3Blcy5hZGQoc2NvcGUudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIHRoaXMuc2NvcGVzLmZvckVhY2goc2NvcGUgPT4gdW5pb25TY29wZXMuYWRkKHNjb3BlLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICByZXR1cm4gdW5pb25TY29wZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBzY29wZXMgaW50ZXJzZWN0IGJldHdlZW4gdGhpcyBzZXQgYW5kIGFub3RoZXIuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXJTY29wZXNcclxuICAgICAqL1xyXG4gICAgaW50ZXJzZWN0aW5nU2NvcGVTZXRzKG90aGVyU2NvcGVzOiBTY29wZVNldCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghb3RoZXJTY29wZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVtcHR5SW5wdXRTY29wZVNldEVycm9yKG90aGVyU2NvcGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaW9uU2NvcGVzID0gdGhpcy51bmlvblNjb3BlU2V0cyhvdGhlclNjb3Blcyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBhbGxvdyBkZWZhdWx0IHNjb3BlcyB0byBiZSB0aGUgb25seSBpbnRlcnNlY3Rpbmcgc2NvcGVzXHJcbiAgICAgICAgaWYgKCFvdGhlclNjb3Blcy5jb250YWluc09ubHlEZWZhdWx0U2NvcGVzKCkpIHtcclxuICAgICAgICAgICAgb3RoZXJTY29wZXMucmVtb3ZlRGVmYXVsdFNjb3BlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaXplT3RoZXJTY29wZXMgPSBvdGhlclNjb3Blcy5nZXRTY29wZUNvdW50KCk7XHJcbiAgICAgICAgY29uc3Qgc2l6ZVRoaXNTY29wZXMgPSB0aGlzLmdldFNjb3BlQ291bnQoKTtcclxuICAgICAgICBjb25zdCBzaXplVW5pb25TY29wZXMgPSB1bmlvblNjb3Blcy5zaXplO1xyXG4gICAgICAgIHJldHVybiBzaXplVW5pb25TY29wZXMgPCAoc2l6ZVRoaXNTY29wZXMgKyBzaXplT3RoZXJTY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBzaXplIG9mIHNldCBvZiBzY29wZXMuXHJcbiAgICAgKi9cclxuICAgIGdldFNjb3BlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHNjb3BlcyBhcyBhbiBhcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIGFzQXJyYXkoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgYXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICB0aGlzLnNjb3Blcy5mb3JFYWNoKHZhbCA9PiBhcnJheS5wdXNoKHZhbCkpO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50cyBzY29wZXMgaW50byBhIHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpbnRTY29wZXMoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5zY29wZXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcGVBcnIgPSB0aGlzLmFzQXJyYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQXJyLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50cyBzY29wZXMgaW50byBhIHNwYWNlLWRlbGltaXRlZCBsb3dlci1jYXNlIHN0cmluZyAodXNlZCBmb3IgY2FjaGluZylcclxuICAgICAqL1xyXG4gICAgcHJpbnRTY29wZXNMb3dlckNhc2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmludFNjb3BlcygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogQXV0aG9yaXR5IHR5cGVzIHN1cHBvcnRlZCBieSBNU0FMLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XHJcbiAgICBEZWZhdWx0LFxyXG4gICAgQWRmc1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9TZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBJVXJpIH0gZnJvbSBcIi4vSVVyaVwiO1xyXG5pbXBvcnQgeyBBQURBdXRob3JpdHlDb25zdGFudHMsIENvbnN0YW50cyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBVcmwgb2JqZWN0IGNsYXNzIHdoaWNoIGNhbiBwZXJmb3JtIHZhcmlvdXMgdHJhbnNmb3JtYXRpb25zIG9uIHVybCBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVybFN0cmluZyB7XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgdXJsIHN0cmluZyBmaWVsZFxyXG4gICAgcHJpdmF0ZSBfdXJsU3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IHVybFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cmxTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdXJsU3RyaW5nID0gdXJsO1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuX3VybFN0cmluZykpIHtcclxuICAgICAgICAgICAgLy8gVGhyb3dzIGVycm9yIGlmIHVybCBpcyBlbXB0eVxyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsRW1wdHlFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5nZXRIYXNoKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VybFN0cmluZyA9IFVybFN0cmluZy5jYW5vbmljYWxpemVVcmkodXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnN1cmUgdXJscyBhcmUgbG93ZXIgY2FzZSBhbmQgZW5kIHdpdGggYSAvIGNoYXJhY3Rlci5cclxuICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjYW5vbmljYWxpemVVcmkodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoU3RyaW5nVXRpbHMuZW5kc1dpdGgodXJsLCBcIj9cIikpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU3RyaW5nVXRpbHMuZW5kc1dpdGgodXJsLCBcIj8vXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmVuZHNXaXRoKHVybCwgXCIvXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gXCIvXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaHJvd3MgaWYgdXJsU3RyaW5nIHBhc3NlZCBpcyBub3QgYSB2YWxpZCBhdXRob3JpdHkgVVJJIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVBc1VyaSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBBdHRlbXB0cyB0byBwYXJzZSB1cmwgZm9yIHVyaSBjb21wb25lbnRzXHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29tcG9uZW50cyA9IHRoaXMuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBVUkkgb3IgcGF0aCBzZWdtZW50cyBhcmUgbm90IHBhcnNlYWJsZS5cclxuICAgICAgICBpZiAoIWNvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0IHx8ICFjb21wb25lbnRzLlBhdGhTZWdtZW50cykge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsUGFyc2VFcnJvcihgR2l2ZW4gdXJsIHN0cmluZzogJHt0aGlzLnVybFN0cmluZ31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIHVyaSBpcyBpbnNlY3VyZS5cclxuICAgICAgICBpZighY29tcG9uZW50cy5Qcm90b2NvbCB8fCBjb21wb25lbnRzLlByb3RvY29sLnRvTG93ZXJDYXNlKCkgIT09IFwiaHR0cHM6XCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUluc2VjdXJlQXV0aG9yaXR5VXJpRXJyb3IodGhpcy51cmxTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIHJlbW92ZSBxdWVyeSBzdHJpbmcgcGFyYW1zIGZyb20gdXJsLiBSZXR1cm5zIHRoZSBuZXcgdXJsLlxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqL1xyXG4gICAgdXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFxcXFwmXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XHJcbiAgICAgICAgdGhpcy5fdXJsU3RyaW5nID0gdGhpcy51cmxTdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICAgICAgLy8gbmFtZT12YWx1ZSZcclxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xyXG4gICAgICAgIHRoaXMuX3VybFN0cmluZyA9IHRoaXMudXJsU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIC8vIG5hbWU9dmFsdWVcclxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XHJcbiAgICAgICAgdGhpcy5fdXJsU3RyaW5nID0gdGhpcy51cmxTdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVIYXNoRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFVybFN0cmluZy5jYW5vbmljYWxpemVVcmkodXJsLnNwbGl0KFwiI1wiKVswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXHJcbiAgICAgKiBAcGFyYW0gaHJlZiBUaGUgdXJsXHJcbiAgICAgKiBAcGFyYW0gdGVuYW50SWQgVGhlIHRlbmFudCBpZCB0byByZXBsYWNlXHJcbiAgICAgKi9cclxuICAgIHJlcGxhY2VUZW5hbnRQYXRoKHRlbmFudElkOiBzdHJpbmcpOiBVcmxTdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IHRoaXMuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XHJcbiAgICAgICAgaWYgKHRlbmFudElkICYmIChwYXRoQXJyYXkubGVuZ3RoICE9PSAwICYmIChwYXRoQXJyYXlbMF0gPT09IEFBREF1dGhvcml0eUNvbnN0YW50cy5DT01NT04gfHwgcGF0aEFycmF5WzBdID09PSBBQURBdXRob3JpdHlDb25zdGFudHMuT1JHQU5JWkFUSU9OUykpKSB7XHJcbiAgICAgICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXJsU3RyaW5nLmNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcclxuICAgICAqL1xyXG4gICAgZ2V0SGFzaCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBVcmxTdHJpbmcucGFyc2VIYXNoKHRoaXMudXJsU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlcyBvdXQgdGhlIGNvbXBvbmVudHMgZnJvbSBhIHVybCBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cclxuICAgICAqL1xyXG4gICAgZ2V0VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcclxuICAgICAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9jdXJ0aXN6LzExMTM5YjJjZmNhZWY0YTI2MWUwXHJcbiAgICAgICAgY29uc3QgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XHJcblxyXG4gICAgICAgIC8vIElmIHVybCBzdHJpbmcgZG9lcyBub3QgbWF0Y2ggcmVnRXgsIHdlIHRocm93IGFuIGVycm9yXHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLnVybFN0cmluZy5tYXRjaChyZWdFeCk7XHJcbiAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsUGFyc2VFcnJvcihgR2l2ZW4gdXJsIHN0cmluZzogJHt0aGlzLnVybFN0cmluZ31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVybCBjb21wb25lbnQgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxyXG4gICAgICAgICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxyXG4gICAgICAgICAgICBBYnNvbHV0ZVBhdGg6IG1hdGNoWzVdLFxyXG4gICAgICAgICAgICBRdWVyeVN0cmluZzogbWF0Y2hbN11cclxuICAgICAgICB9IGFzIElVcmk7XHJcblxyXG4gICAgICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgcGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzLmZpbHRlcigodmFsKSA9PiB2YWwgJiYgdmFsLmxlbmd0aCA+IDApOyAvLyByZW1vdmUgZW1wdHkgZWxlbWVudHNcclxuICAgICAgICB1cmxDb21wb25lbnRzLlBhdGhTZWdtZW50cyA9IHBhdGhTZWdtZW50cztcclxuXHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHVybENvbXBvbmVudHMuUXVlcnlTdHJpbmcpICYmIHVybENvbXBvbmVudHMuUXVlcnlTdHJpbmcuZW5kc1dpdGgoXCIvXCIpKSB7XHJcbiAgICAgICAgICAgIHVybENvbXBvbmVudHMuUXVlcnlTdHJpbmcgPSB1cmxDb21wb25lbnRzLlF1ZXJ5U3RyaW5nLnN1YnN0cmluZygwLCB1cmxDb21wb25lbnRzLlF1ZXJ5U3RyaW5nLmxlbmd0aC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybENvbXBvbmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERvbWFpbkZyb21VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gUmVnRXhwKFwiXihbXjovPyNdKzovLyk/KFteLz8jXSopXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeCk7XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVVybFBhcnNlRXJyb3IoYEdpdmVuIHVybCBzdHJpbmc6ICR7dXJsfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBYnNvbHV0ZVVybChyZWxhdGl2ZVVybDogc3RyaW5nLCBiYXNlVXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVVybFswXSA9PT0gQ29uc3RhbnRzLkZPUldBUkRfU0xBU0gpIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVybFN0cmluZyhiYXNlVXJsKTtcclxuICAgICAgICAgICAgY29uc3QgYmFzZUNvbXBvbmVudHMgPSB1cmwuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJhc2VDb21wb25lbnRzLlByb3RvY29sICsgXCIvL1wiICsgYmFzZUNvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0ICsgcmVsYXRpdmVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZWxhdGl2ZVVybDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgaGFzaCBzdHJpbmcgZnJvbSBnaXZlbiBzdHJpbmcuIFJldHVybnMgZW1wdHkgc3RyaW5nIGlmIG5vIGhhc2ggc3ltYm9sIGlzIGZvdW5kLlxyXG4gICAgICogQHBhcmFtIGhhc2hTdHJpbmcgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZUhhc2goaGFzaFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoYXNoSW5kZXgxID0gaGFzaFN0cmluZy5pbmRleE9mKFwiI1wiKTtcclxuICAgICAgICBjb25zdCBoYXNoSW5kZXgyID0gaGFzaFN0cmluZy5pbmRleE9mKFwiIy9cIik7XHJcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGFzaFN0cmluZy5zdWJzdHJpbmcoaGFzaEluZGV4MiArIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaEluZGV4MSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNoU3RyaW5nLnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdDogSVVyaSk6IFVybFN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcmxTdHJpbmcodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgdXJsT2JqZWN0LlBhdGhTZWdtZW50cy5qb2luKFwiL1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIFVSTCBoYXNoIGFzIHNlcnZlciBhdXRoIGNvZGUgcmVzcG9uc2Ugb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0RGVzZXJpYWxpemVkSGFzaChoYXNoOiBzdHJpbmcpOiBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBnaXZlbiBoYXNoIGlzIGVtcHR5XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoaGFzaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdHJpcCB0aGUgIyBzeW1ib2wgaWYgcHJlc2VudFxyXG4gICAgICAgIGNvbnN0IHBhcnNlZEhhc2ggPSBVcmxTdHJpbmcucGFyc2VIYXNoKGhhc2gpO1xyXG4gICAgICAgIC8vIElmICMgc3ltYm9sIHdhcyBub3QgcHJlc2VudCwgYWJvdmUgd2lsbCByZXR1cm4gZW1wdHkgc3RyaW5nLCBzbyBnaXZlIG9yaWdpbmFsIGhhc2ggdmFsdWVcclxuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRIYXNoOiBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlID0gU3RyaW5nVXRpbHMucXVlcnlTdHJpbmdUb09iamVjdDxTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlPihTdHJpbmdVdGlscy5pc0VtcHR5KHBhcnNlZEhhc2gpID8gaGFzaCA6IHBhcnNlZEhhc2gpO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGRlc2VyaWFsaXphdGlvbiBkaWRuJ3Qgd29ya1xyXG4gICAgICAgIGlmICghZGVzZXJpYWxpemVkSGFzaCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSGFzaE5vdERlc2VyaWFsaXplZEVycm9yKEpTT04uc3RyaW5naWZ5KGRlc2VyaWFsaXplZEhhc2gpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplZEhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgaGFzaCBvZiB0aGUgVVJMIHN0cmluZyBjb250YWlucyBrbm93biBwcm9wZXJ0aWVzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoQ29udGFpbnNLbm93blByb3BlcnRpZXMoaGFzaDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoaGFzaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyczogU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSA9IFVybFN0cmluZy5nZXREZXNlcmlhbGl6ZWRIYXNoKGhhc2gpO1xyXG4gICAgICAgIHJldHVybiAhIShcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5jb2RlIHx8XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZXJyb3JfZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5lcnJvciB8fFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLnN0YXRlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBDbG91ZEluc3RhbmNlRGlzY292ZXJ5UmVzcG9uc2UgfSBmcm9tIFwiLi9DbG91ZEluc3RhbmNlRGlzY292ZXJ5UmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgVHJ1c3RlZEhvc3RMaXN0VHlwZSB9IGZyb20gXCIuL1RydXN0ZWRIb3N0TGlzdFR5cGVcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBDbG91ZERpc2NvdmVyeU1ldGFkYXRhIH0gZnJvbSBcIi4vQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBVcmxTdHJpbmcgfSBmcm9tIFwiLi4vdXJsL1VybFN0cmluZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRydXN0ZWRBdXRob3JpdHkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgVHJ1c3RlZEhvc3RMaXN0OiBUcnVzdGVkSG9zdExpc3RUeXBlID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIENsb3VkRGlzY292ZXJ5TWV0YWRhdGEgb2JqZWN0IGZyb20ga25vd25BdXRob3JpdGllcyBvciBjbG91ZERpc2NvdmVyeU1ldGFkYXRhIHBhc3NlZCBpbnRvIHRoZSBhcHAgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ga25vd25BdXRob3JpdGllcyBcclxuICAgICAqIEBwYXJhbSBjbG91ZERpc2NvdmVyeU1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRUcnVzdGVkQXV0aG9yaXRpZXNGcm9tQ29uZmlnKGtub3duQXV0aG9yaXRpZXM6IEFycmF5PHN0cmluZz4sIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGE6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5nZXRUcnVzdGVkSG9zdExpc3QoKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBpZiAoa25vd25BdXRob3JpdGllcy5sZW5ndGggPiAwICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlS25vd25BdXRob3JpdGllc0Nsb3VkRGlzY292ZXJ5TWV0YWRhdGFFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNsb3VkRGlzY292ZXJ5TWV0YWRhdGFGcm9tS25vd25BdXRob3JpdGllcyhrbm93bkF1dGhvcml0aWVzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xvdWREaXNjb3ZlcnlNZXRhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZE1ldGFkYXRhID0gSlNPTi5wYXJzZShjbG91ZERpc2NvdmVyeU1ldGFkYXRhKSBhcyBDbG91ZEluc3RhbmNlRGlzY292ZXJ5UmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YShwYXJzZWRNZXRhZGF0YS5tZXRhZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YUVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgdG8gZ2V0IG1ldGFkYXRhIGZyb20gbmV0d29yayBpZiBDbG91ZERpc2NvdmVyeU1ldGFkYXRhIHdhcyBub3QgcG9wdWxhdGVkIGJ5IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIG5ldHdvcmtJbnRlcmZhY2UgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0VHJ1c3RlZEF1dGhvcml0aWVzRnJvbU5ldHdvcmsoYXV0aG9yaXR5VG9WZXJpZnk6IFVybFN0cmluZywgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50ID0gYCR7Q29uc3RhbnRzLkFBRF9JTlNUQU5DRV9ESVNDT1ZFUllfRU5EUFR9JHthdXRob3JpdHlUb1ZlcmlmeS51cmxTdHJpbmd9b2F1dGgyL3YyLjAvYXV0aG9yaXplYDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldHdvcmtJbnRlcmZhY2Uuc2VuZEdldFJlcXVlc3RBc3luYzxDbG91ZEluc3RhbmNlRGlzY292ZXJ5UmVzcG9uc2U+KGluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IHJlc3BvbnNlLmJvZHkubWV0YWRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNsb3VkRGlzY292ZXJ5TWV0YWRhdGEobWV0YWRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBob3N0ID0gYXV0aG9yaXR5VG9WZXJpZnkuZ2V0VXJsQ29tcG9uZW50cygpLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICBpZiAodGhpcy5nZXRUcnVzdGVkSG9zdExpc3QoKS5sZW5ndGggPiAwICYmICF0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QoaG9zdCkpIHtcclxuICAgICAgICAgICAgLy8gQ3VzdG9tIERvbWFpbiBzY2VuYXJpbywgaG9zdCBpcyB0cnVzdGVkIGJlY2F1c2UgSW5zdGFuY2UgRGlzY292ZXJ5IGNhbGwgc3VjY2VlZGVkIFxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNsb3VkRGlzY292ZXJ5TWV0YWRhdGFGcm9tS25vd25BdXRob3JpdGllcyhbaG9zdF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBtZXRhZGF0YSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzYXZlQ2xvdWREaXNjb3ZlcnlNZXRhZGF0YShtZXRhZGF0YTogQXJyYXk8Q2xvdWREaXNjb3ZlcnlNZXRhZGF0YT4pOiB2b2lkIHtcclxuICAgICAgICBtZXRhZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5OiBDbG91ZERpc2NvdmVyeU1ldGFkYXRhKXtcclxuICAgICAgICAgICAgY29uc3QgYXV0aG9yaXRpZXMgPSBlbnRyeS5hbGlhc2VzO1xyXG4gICAgICAgICAgICBhdXRob3JpdGllcy5mb3JFYWNoKGZ1bmN0aW9uKGF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICAgICAgVHJ1c3RlZEF1dGhvcml0eS5UcnVzdGVkSG9zdExpc3RbYXV0aG9yaXR5LnRvTG93ZXJDYXNlKCldID0gZW50cnk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgZ2VuZXJpYyBtZXRhZGF0YSBvYmplY3QgZm9yIGVhY2ggaG9zdCBwYXNzZWQgdG8ga25vd25BdXRob3JpdGllcy5cclxuICAgICAqIFRoaXMgaXMgbW9zdGx5IHVzZWZ1bCBmb3IgQjJDIG9yIEFERlMgc2NlbmFyaW9zXHJcbiAgICAgKiBAcGFyYW0ga25vd25BdXRob3JpdGllcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG91ZERpc2NvdmVyeU1ldGFkYXRhRnJvbUtub3duQXV0aG9yaXRpZXMoa25vd25BdXRob3JpdGllczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgICAgIGtub3duQXV0aG9yaXRpZXMuZm9yRWFjaChhdXRob3JpdHkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JpdHlEb21haW4gPSBVcmxTdHJpbmcuZ2V0RG9tYWluRnJvbVVybChhdXRob3JpdHkpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuVHJ1c3RlZEhvc3RMaXN0W2F1dGhvcml0eURvbWFpbl0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRfY2FjaGU6IGF1dGhvcml0eURvbWFpbixcclxuICAgICAgICAgICAgICAgIHByZWZlcnJlZF9uZXR3b3JrOiBhdXRob3JpdHlEb21haW4sXHJcbiAgICAgICAgICAgICAgICBhbGlhc2VzOiBbYXV0aG9yaXR5RG9tYWluXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VHJ1c3RlZEhvc3RMaXN0KCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLlRydXN0ZWRIb3N0TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbWV0YWRhdGEgZm9yIHRoZSBwcm92aWRlZCBob3N0XHJcbiAgICAgKiBAcGFyYW0gaG9zdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDbG91ZERpc2NvdmVyeU1ldGFkYXRhKGhvc3Q6IHN0cmluZyk6IENsb3VkRGlzY292ZXJ5TWV0YWRhdGEge1xyXG4gICAgICAgIHJldHVybiB0aGlzLlRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBob3N0IGlzIGluIGEgbGlzdCBvZiB0cnVzdGVkIGhvc3RzXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3Q6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLlRydXN0ZWRIb3N0TGlzdCkuaW5kZXhPZihob3N0LnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogUHJvdG9jb2wgbW9kZXMgc3VwcG9ydGVkIGJ5IE1TQUwuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBQcm90b2NvbE1vZGUge1xyXG4gICAgQUFEID0gXCJBQURcIixcclxuICAgIE9JREMgPSBcIk9JRENcIlxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVR5cGVcIjtcclxuaW1wb3J0IHsgT3BlbklkQ29uZmlnUmVzcG9uc2UgfSBmcm9tIFwiLi9PcGVuSWRDb25maWdSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBVcmxTdHJpbmcgfSBmcm9tIFwiLi4vdXJsL1VybFN0cmluZ1wiO1xyXG5pbXBvcnQgeyBJVXJpIH0gZnJvbSBcIi4uL3VybC9JVXJpXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi4vbmV0d29yay9OZXR3b3JrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRydXN0ZWRBdXRob3JpdHkgfSBmcm9tIFwiLi9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgUHJvdG9jb2xNb2RlIH0gZnJvbSBcIi4vUHJvdG9jb2xNb2RlXCI7XHJcblxyXG4vKipcclxuICogVGhlIGF1dGhvcml0eSBjbGFzcyB2YWxpZGF0ZXMgdGhlIGF1dGhvcml0eSBVUklzIHVzZWQgYnkgdGhlIHVzZXIsIGFuZCByZXRyaWV2ZXMgdGhlIE9wZW5JRCBDb25maWd1cmF0aW9uIERhdGEgZnJvbSB0aGVcclxuICogZW5kcG9pbnQuIEl0IHdpbGwgc3RvcmUgdGhlIHBlcnRpbmVudCBjb25maWcgZGF0YSBpbiB0aGlzIG9iamVjdCBmb3IgdXNlIGR1cmluZyB0b2tlbiBjYWxscy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkge1xyXG5cclxuICAgIC8vIENhbm9uaWNhbCBhdXRob3JpdHkgdXJsIHN0cmluZ1xyXG4gICAgcHJpdmF0ZSBfY2Fub25pY2FsQXV0aG9yaXR5OiBVcmxTdHJpbmc7XHJcbiAgICAvLyBDYW5vbmljYWx5IGF1dGhvcml0eSB1cmwgY29tcG9uZW50c1xyXG4gICAgcHJpdmF0ZSBfY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50czogSVVyaSB8IG51bGw7XHJcbiAgICAvLyBUZW5hbnQgZGlzY292ZXJ5IHJlc3BvbnNlIHJldHJpZXZlZCBmcm9tIE9wZW5JRCBDb25maWd1cmF0aW9uIEVuZHBvaW50XHJcbiAgICBwcml2YXRlIHRlbmFudERpc2NvdmVyeVJlc3BvbnNlOiBPcGVuSWRDb25maWdSZXNwb25zZTtcclxuICAgIC8vIE5ldHdvcmsgaW50ZXJmYWNlIHRvIG1ha2UgcmVxdWVzdHMgd2l0aC5cclxuICAgIHByb3RlY3RlZCBuZXR3b3JrSW50ZXJmYWNlOiBJTmV0d29ya01vZHVsZTtcclxuICAgIC8vIFByb3RvY29sIG1vZGUgdG8gY29uc3RydWN0IGVuZHBvaW50c1xyXG4gICAgcHJpdmF0ZSBhdXRob3JpdHlQcm90b2NvbE1vZGU6IFByb3RvY29sTW9kZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGUsIHByb3RvY29sTW9kZTogUHJvdG9jb2xNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSBhdXRob3JpdHk7XHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5LnZhbGlkYXRlQXNVcmkoKTtcclxuICAgICAgICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5UHJvdG9jb2xNb2RlID0gcHJvdG9jb2xNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlZSBhYm92ZSBmb3IgQXV0aG9yaXR5VHlwZVxyXG4gICAgcHVibGljIGdldCBhdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xyXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcblxyXG4gICAgICAgIGlmIChwYXRoU2VnbWVudHMubGVuZ3RoICYmIHBhdGhTZWdtZW50c1swXS50b0xvd2VyQ2FzZSgpID09PSBDb25zdGFudHMuQURGUykge1xyXG4gICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BZGZzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuRGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3RvY29sTW9kZSBlbnVtIHJlcHJlc2VudGluZyB0aGUgd2F5IGVuZHBvaW50cyBhcmUgY29uc3RydWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJvdG9jb2xNb2RlKCk6IFByb3RvY29sTW9kZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5UHJvdG9jb2xNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBVUkwgdGhhdCBpcyB0aGUgYXV0aG9yaXR5IHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS51cmxTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGNhbm9uaWNhbCBhdXRob3JpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgY2Fub25pY2FsQXV0aG9yaXR5KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5ID0gbmV3IFVybFN0cmluZyh1cmwpO1xyXG4gICAgICAgIHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS52YWxpZGF0ZUFzVXJpKCk7XHJcbiAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYXV0aG9yaXR5IGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IHRoaXMuX2Nhbm9uaWNhbEF1dGhvcml0eS5nZXRVcmxDb21wb25lbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0ZW5hbnQgZm9yIGF1dGhvcml0eS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB0ZW5hbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9BdXRoIC9hdXRob3JpemUgZW5kcG9pbnQgZm9yIHJlcXVlc3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYXV0aG9yaXphdGlvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VUZW5hbnQodGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5hdXRob3JpemF0aW9uX2VuZHBvaW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT0F1dGggL3Rva2VuIGVuZHBvaW50IGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRva2VuRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmRpc2NvdmVyeUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZVRlbmFudCh0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLnRva2VuX2VuZHBvaW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGV2aWNlQ29kZUVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLnRva2VuX2VuZHBvaW50LnJlcGxhY2UoXCIvdG9rZW5cIiwgXCIvZGV2aWNlY29kZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJEaXNjb3ZlcnkgaW5jb21wbGV0ZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT0F1dGggbG9nb3V0IGVuZHBvaW50IGZvciByZXF1ZXN0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVuZFNlc3Npb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlVGVuYW50KHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuZW5kX3Nlc3Npb25fZW5kcG9pbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihcIkRpc2NvdmVyeSBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPQXV0aCBpc3N1ZXIgZm9yIHJlcXVlc3RzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNjb3ZlcnlDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VUZW5hbnQodGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5pc3N1ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludERpc2NvdmVyeUluY29tcGxldGVFcnJvcihcIkRpc2NvdmVyeSBpbmNvbXBsZXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyB0ZW5hbnQgaW4gdXJsIHBhdGggd2l0aCBjdXJyZW50IHRlbmFudC4gRGVmYXVsdHMgdG8gY29tbW9uLlxyXG4gICAgICogQHBhcmFtIHVybFN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlcGxhY2VUZW5hbnQodXJsU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB1cmxTdHJpbmcucmVwbGFjZSgve3RlbmFudH18e3RlbmFudGlkfS9nLCB0aGlzLnRlbmFudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZGVmYXVsdCBvcGVuIGlkIGNvbmZpZ3VyYXRpb24gZW5kcG9pbnQgZm9yIGFueSBjYW5vbmljYWwgYXV0aG9yaXR5LlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpdHlUeXBlID09PSBBdXRob3JpdHlUeXBlLkFkZnMgfHwgdGhpcy5wcm90b2NvbE1vZGUgPT09IFByb3RvY29sTW9kZS5PSURDKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX0ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJvb2xlYW4gdGhhdCByZXR1cm5zIHdoZXRociBvciBub3QgdGVuYW50IGRpc2NvdmVyeSBoYXMgYmVlbiBjb21wbGV0ZWQuXHJcbiAgICAgKi9cclxuICAgIGRpc2NvdmVyeUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIE9BdXRoIGVuZHBvaW50cyBmcm9tIHRoZSBnaXZlbiBPcGVuSUQgY29uZmlndXJhdGlvbiBlbmRwb2ludC5cclxuICAgICAqIEBwYXJhbSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBkaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPE9wZW5JZENvbmZpZ1Jlc3BvbnNlPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmtJbnRlcmZhY2Uuc2VuZEdldFJlcXVlc3RBc3luYzxPcGVuSWRDb25maWdSZXNwb25zZT4ob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgdHJ1c3RlZCBob3N0cyBhbmQgdmFsaWRhdGUgc3Vic2VxdWVudCBjYWxsc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlQW5kU2V0UHJlZmVycmVkTmV0d29yaygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBob3N0ID0gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICBpZiAoVHJ1c3RlZEF1dGhvcml0eS5nZXRUcnVzdGVkSG9zdExpc3QoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgVHJ1c3RlZEF1dGhvcml0eS5zZXRUcnVzdGVkQXV0aG9yaXRpZXNGcm9tTmV0d29yayh0aGlzLl9jYW5vbmljYWxBdXRob3JpdHksIHRoaXMubmV0d29ya0ludGVyZmFjZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVRydXN0ZWRBdXRob3JpdHkuSXNJblRydXN0ZWRIb3N0TGlzdChob3N0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVW50cnVzdGVkQXV0aG9yaXR5RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHByZWZlcnJlZE5ldHdvcmsgPSBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEoaG9zdCkucHJlZmVycmVkX25ldHdvcms7XHJcbiAgICAgICAgaWYgKGhvc3QgIT09IHByZWZlcnJlZE5ldHdvcmspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eS5yZXBsYWNlKGhvc3QsIHByZWZlcnJlZE5ldHdvcmspO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gZW5kcG9pbnQgZGlzY292ZXJ5IHRvIGRpc2NvdmVyIHRoZSAvYXV0aG9yaXplLCAvdG9rZW4gYW5kIGxvZ291dCBlbmRwb2ludHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyByZXNvbHZlRW5kcG9pbnRzQXN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZUFuZFNldFByZWZlcnJlZE5ldHdvcmsoKTtcclxuICAgICAgICBjb25zdCBvcGVuSWRDb25maWdFbmRwb2ludCA9IHRoaXMuZGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlnRW5kcG9pbnQpO1xyXG4gICAgICAgIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UgPSByZXNwb25zZS5ib2R5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGdpdmVuIGhvc3RuYW1lIGlzIGFsaWFzIG9mIHRoaXMgYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gaG9zdCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQXV0aG9yaXR5QWxpYXMoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGhvc3QgPT09IHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFsaWFzZXMgPSBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEodGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkuYWxpYXNlcztcclxuICAgICAgICByZXR1cm4gYWxpYXNlcy5pbmRleE9mKGhvc3QpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBlbnZpcm9ubWVudCBmcm9tIGF1dGhvcml0eSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlRW52aXJvbm1lbnRGcm9tQXV0aG9yaXR5KGF1dGhvcml0eTogQXV0aG9yaXR5KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZXFFbnZpcm9ubWVudCA9IGF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcclxuICAgICAgICByZXR1cm4gVHJ1c3RlZEF1dGhvcml0eS5nZXRDbG91ZERpc2NvdmVyeU1ldGFkYXRhKHJlcUVudmlyb25tZW50KSA/IFRydXN0ZWRBdXRob3JpdHkuZ2V0Q2xvdWREaXNjb3ZlcnlNZXRhZGF0YShyZXFFbnZpcm9ubWVudCkucHJlZmVycmVkX2NhY2hlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5cclxuLyoqXHJcbiAqIENsaWVudCBpbmZvIG9iamVjdCB3aGljaCBjb25zaXN0cyBvZiB0d28gSURzLiBOZWVkIHRvIGFkZCBtb3JlIGluZm8gaGVyZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENsaWVudEluZm8gPSB7XHJcbiAgICB1aWQ6IHN0cmluZyxcclxuICAgIHV0aWQ6IHN0cmluZ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRvIGJ1aWxkIGEgY2xpZW50IGluZm8gb2JqZWN0XHJcbiAqIEBwYXJhbSByYXdDbGllbnRJbmZvXHJcbiAqIEBwYXJhbSBjcnlwdG9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZENsaWVudEluZm8ocmF3Q2xpZW50SW5mbzogc3RyaW5nLCBjcnlwdG86IElDcnlwdG8pOiBDbGllbnRJbmZvIHtcclxuICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9FbXB0eUVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkQ2xpZW50SW5mbzogc3RyaW5nID0gY3J5cHRvLmJhc2U2NERlY29kZShyYXdDbGllbnRJbmZvKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkQ2xpZW50SW5mbykgYXMgQ2xpZW50SW5mbztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgU2VwYXJhdG9ycyxcclxuICAgIENhY2hlQWNjb3VudFR5cGUsXHJcbiAgICBDYWNoZVR5cGUsXHJcbiAgICBDb25zdGFudHMsXHJcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tIFwiLi4vLi4vYWNjb3VudC9BdXRoVG9rZW5cIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi8uLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5pbXBvcnQgeyBidWlsZENsaWVudEluZm8gfSBmcm9tIFwiLi4vLi4vYWNjb3VudC9DbGllbnRJbmZvXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IEFjY291bnRJbmZvIH0gZnJvbSBcIi4uLy4uL2FjY291bnQvQWNjb3VudEluZm9cIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4uLy4uL2F1dGhvcml0eS9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi8uLi9sb2dnZXIvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRva2VuQ2xhaW1zIH0gZnJvbSBcIi4uLy4uL2FjY291bnQvVG9rZW5DbGFpbXNcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZGVmaW5lcyByZXF1aXJlZCBhbmQgb3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgYW4gQWNjb3VudCBmaWVsZCAoYmFzZWQgb24gdW5pdmVyc2FsIGNhY2hlIHNjaGVtYSBpbXBsZW1lbnRlZCBieSBhbGwgTVNBTHMpLlxyXG4gKlxyXG4gKiBLZXkgOiBWYWx1ZSBTY2hlbWFcclxuICpcclxuICogS2V5OiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+LTxyZWFsbSo+XHJcbiAqXHJcbiAqIFZhbHVlIFNjaGVtYTpcclxuICoge1xyXG4gKiAgICAgIGhvbWVBY2NvdW50SWQ6IGhvbWUgYWNjb3VudCBpZGVudGlmaWVyIGZvciB0aGUgYXV0aCBzY2hlbWUsXHJcbiAqICAgICAgZW52aXJvbm1lbnQ6IGVudGl0eSB0aGF0IGlzc3VlZCB0aGUgdG9rZW4sIHJlcHJlc2VudGVkIGFzIGEgZnVsbCBob3N0XHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqICAgICAgbG9jYWxBY2NvdW50SWQ6IE9yaWdpbmFsIHRlbmFudC1zcGVjaWZpYyBhY2NvdW50SUQsIHVzdWFsbHkgdXNlZCBmb3IgbGVnYWN5IGNhc2VzXHJcbiAqICAgICAgdXNlcm5hbWU6IHByaW1hcnkgdXNlcm5hbWUgdGhhdCByZXByZXNlbnRzIHRoZSB1c2VyLCB1c3VhbGx5IGNvcnJlc3BvbmRzIHRvIHByZWZlcnJlZF91c2VybmFtZSBpbiB0aGUgdjIgZW5kcHRcclxuICogICAgICBhdXRob3JpdHlUeXBlOiBBY2NvdW50cyBhdXRob3JpdHkgdHlwZSBhcyBhIHN0cmluZ1xyXG4gKiAgICAgIG5hbWU6IEZ1bGwgbmFtZSBmb3IgdGhlIGFjY291bnQsIGluY2x1ZGluZyBnaXZlbiBuYW1lIGFuZCBmYW1pbHkgbmFtZSxcclxuICogICAgICBjbGllbnRJbmZvOiBGdWxsIGJhc2U2NCBlbmNvZGVkIGNsaWVudCBpbmZvIHJlY2VpdmVkIGZyb20gRVNUU1xyXG4gKiAgICAgIGxhc3RNb2RpZmljYXRpb25UaW1lOiBsYXN0IHRpbWUgdGhpcyBlbnRpdHkgd2FzIG1vZGlmaWVkIGluIHRoZSBjYWNoZVxyXG4gKiAgICAgIGxhc3RNb2RpZmljYXRpb25BcHA6XHJcbiAqICAgICAgb2JvQXNzZXJ0aW9uOiBhY2Nlc3MgdG9rZW4gcGFzc2VkIGluIGFzIHBhcnQgb2YgT0JPIHJlcXVlc3RcclxuICogICAgICBpZFRva2VuQ2xhaW1zOiBPYmplY3QgY29udGFpbmluZyBjbGFpbXMgcGFyc2VkIGZyb20gSUQgdG9rZW5cclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnRFbnRpdHkge1xyXG4gICAgaG9tZUFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuICAgIHJlYWxtOiBzdHJpbmc7XHJcbiAgICBsb2NhbEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGF1dGhvcml0eVR5cGU6IHN0cmluZztcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBjbGllbnRJbmZvPzogc3RyaW5nO1xyXG4gICAgbGFzdE1vZGlmaWNhdGlvblRpbWU/OiBzdHJpbmc7XHJcbiAgICBsYXN0TW9kaWZpY2F0aW9uQXBwPzogc3RyaW5nO1xyXG4gICAgb2JvQXNzZXJ0aW9uPzogc3RyaW5nO1xyXG4gICAgY2xvdWRHcmFwaEhvc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgbXNHcmFwaEhvc3Q/OiBzdHJpbmc7IFxyXG4gICAgaWRUb2tlbkNsYWltcz86IFRva2VuQ2xhaW1zO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgQWNjb3VudCBJZCBrZXkgY29tcG9uZW50IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudElkOiBBcnJheTxzdHJpbmc+ID0gW3RoaXMuaG9tZUFjY291bnRJZCwgdGhpcy5lbnZpcm9ubWVudF07XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRJZC5qb2luKFNlcGFyYXRvcnMuQ0FDSEVfS0VZX1NFUEFSQVRPUikudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIEFjY291bnQgQ2FjaGUgS2V5IGFzIHBlciB0aGUgc2NoZW1hOiA8aG9tZV9hY2NvdW50X2lkPi08ZW52aXJvbm1lbnQ+LTxyZWFsbSo+XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQWNjb3VudEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBBY2NvdW50RW50aXR5LmdlbmVyYXRlQWNjb3VudENhY2hlS2V5KHtcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZDogdGhpcy5ob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogdGhpcy5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgdGVuYW50SWQ6IHRoaXMucmVhbG0sXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBsb2NhbEFjY291bnRJZDogdGhpcy5sb2NhbEFjY291bnRJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgY2FjaGUgKGluIHRoaXMgY2FzZSBhY2NvdW50KVxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVR5cGUoKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYXV0aG9yaXR5VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENhY2hlQWNjb3VudFR5cGUuQURGU19BQ0NPVU5UX1RZUEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLkFERlM7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FjaGVBY2NvdW50VHlwZS5NU0FWMV9BQ0NPVU5UX1RZUEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FjaGVUeXBlLk1TQTtcclxuICAgICAgICAgICAgY2FzZSBDYWNoZUFjY291bnRUeXBlLk1TU1RTX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuTVNTVFM7XHJcbiAgICAgICAgICAgIGNhc2UgQ2FjaGVBY2NvdW50VHlwZS5HRU5FUklDX0FDQ09VTlRfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYWNoZVR5cGUuR0VORVJJQztcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRBY2NvdW50VHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBBY2NvdW50SW5mbyBpbnRlcmZhY2UgZm9yIHRoaXMgYWNjb3VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm8ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IHRoaXMuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IHRoaXMuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiB0aGlzLnJlYWxtLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgbG9jYWxBY2NvdW50SWQ6IHRoaXMubG9jYWxBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgaWRUb2tlbkNsYWltczogdGhpcy5pZFRva2VuQ2xhaW1zXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhY2NvdW50IGtleSBmcm9tIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRJbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQWNjb3VudENhY2hlS2V5KGFjY291bnRJbnRlcmZhY2U6IEFjY291bnRJbmZvKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50S2V5ID0gW1xyXG4gICAgICAgICAgICBhY2NvdW50SW50ZXJmYWNlLmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGFjY291bnRJbnRlcmZhY2UuZW52aXJvbm1lbnQgfHwgXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEludGVyZmFjZS50ZW5hbnRJZCB8fCBcIlwiLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50S2V5LmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgQWNjb3VudCBjYWNoZSBmcm9tIElkVG9rZW4sIGNsaWVudEluZm8gYW5kIGF1dGhvcml0eS9wb2xpY3kuIEFzc29jaWF0ZWQgd2l0aCBBQUQuXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SW5mb1xyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqIEBwYXJhbSBwb2xpY3lcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnQoXHJcbiAgICAgICAgY2xpZW50SW5mbzogc3RyaW5nLFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZyxcclxuICAgICAgICBhdXRob3JpdHk6IEF1dGhvcml0eSxcclxuICAgICAgICBpZFRva2VuOiBBdXRoVG9rZW4sXHJcbiAgICAgICAgb2JvQXNzZXJ0aW9uPzogc3RyaW5nLFxyXG4gICAgICAgIGNsb3VkR3JhcGhIb3N0TmFtZT86IHN0cmluZyxcclxuICAgICAgICBtc0dyYXBoSG9zdD86IHN0cmluZ1xyXG4gICAgKTogQWNjb3VudEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudEVudGl0eSA9IG5ldyBBY2NvdW50RW50aXR5KCk7XHJcblxyXG4gICAgICAgIGFjY291bnQuYXV0aG9yaXR5VHlwZSA9IENhY2hlQWNjb3VudFR5cGUuTVNTVFNfQUNDT1VOVF9UWVBFO1xyXG4gICAgICAgIGFjY291bnQuY2xpZW50SW5mbyA9IGNsaWVudEluZm87XHJcbiAgICAgICAgYWNjb3VudC5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuXHJcbiAgICAgICAgY29uc3QgZW52ID0gQXV0aG9yaXR5LmdlbmVyYXRlRW52aXJvbm1lbnRGcm9tQXV0aG9yaXR5KGF1dGhvcml0eSk7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoZW52KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZENhY2hlRW52aXJvbm1lbnRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWNjb3VudC5lbnZpcm9ubWVudCA9IGVudjtcclxuICAgICAgICAvLyBub24gQUFEIHNjZW5hcmlvcyBjYW4gaGF2ZSBlbXB0eSByZWFsbVxyXG4gICAgICAgIGFjY291bnQucmVhbG0gPSBpZFRva2VuPy5jbGFpbXM/LnRpZCB8fCBcIlwiO1xyXG4gICAgICAgIGFjY291bnQub2JvQXNzZXJ0aW9uID0gb2JvQXNzZXJ0aW9uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgIGFjY291bnQuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW4uY2xhaW1zO1xyXG5cclxuICAgICAgICAgICAgLy8gSG93IGRvIHlvdSBhY2NvdW50IGZvciBNU0EgQ0lEIGhlcmU/XHJcbiAgICAgICAgICAgIGFjY291bnQubG9jYWxBY2NvdW50SWQgPSBpZFRva2VuPy5jbGFpbXM/Lm9pZCB8fCBpZFRva2VuPy5jbGFpbXM/LnN1YiB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogSW4gQjJDIHNjZW5hcmlvcyB0aGUgZW1haWxzIGNsYWltIGlzIHVzZWQgaW5zdGVhZCBvZiBwcmVmZXJyZWRfdXNlcm5hbWUgYW5kIGl0IGlzIGFuIGFycmF5LiBJbiBtb3N0IGNhc2VzIGl0IHdpbGwgY29udGFpbiBhIHNpbmdsZSBlbWFpbC5cclxuICAgICAgICAgICAgICogVGhpcyBmaWVsZCBzaG91bGQgbm90IGJlIHJlbGllZCB1cG9uIGlmIGEgY3VzdG9tIHBvbGljeSBpcyBjb25maWd1cmVkIHRvIHJldHVybiBtb3JlIHRoYW4gMSBlbWFpbC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGFjY291bnQudXNlcm5hbWUgPSBpZFRva2VuPy5jbGFpbXM/LnByZWZlcnJlZF91c2VybmFtZSB8fCAoaWRUb2tlbj8uY2xhaW1zPy5lbWFpbHM/IGlkVG9rZW4uY2xhaW1zLmVtYWlsc1swXTogXCJcIik7XHJcbiAgICAgICAgICAgIGFjY291bnQubmFtZSA9IGlkVG9rZW4/LmNsYWltcz8ubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFjY291bnQuY2xvdWRHcmFwaEhvc3ROYW1lID0gY2xvdWRHcmFwaEhvc3ROYW1lO1xyXG4gICAgICAgIGFjY291bnQubXNHcmFwaEhvc3QgPSBtc0dyYXBoSG9zdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgbm9uLUFBRC9BREZTIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlR2VuZXJpY0FjY291bnQoXHJcbiAgICAgICAgYXV0aG9yaXR5OiBBdXRob3JpdHksXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGlkVG9rZW46IEF1dGhUb2tlbixcclxuICAgICAgICBvYm9Bc3NlcnRpb24/OiBzdHJpbmcsXHJcbiAgICAgICAgY2xvdWRHcmFwaEhvc3ROYW1lPzogc3RyaW5nLFxyXG4gICAgICAgIG1zR3JhcGhIb3N0Pzogc3RyaW5nXHJcbiAgICApOiBBY2NvdW50RW50aXR5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50RW50aXR5ID0gbmV3IEFjY291bnRFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgYWNjb3VudC5hdXRob3JpdHlUeXBlID0gKGF1dGhvcml0eS5hdXRob3JpdHlUeXBlID09PSBBdXRob3JpdHlUeXBlLkFkZnMpID8gQ2FjaGVBY2NvdW50VHlwZS5BREZTX0FDQ09VTlRfVFlQRSA6IENhY2hlQWNjb3VudFR5cGUuR0VORVJJQ19BQ0NPVU5UX1RZUEU7XHJcbiAgICAgICAgYWNjb3VudC5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuICAgICAgICAvLyBub24gQUFEIHNjZW5hcmlvcyBjYW4gaGF2ZSBlbXB0eSByZWFsbVxyXG4gICAgICAgIGFjY291bnQucmVhbG0gPSBcIlwiO1xyXG4gICAgICAgIGFjY291bnQub2JvQXNzZXJ0aW9uID0gb2JvQXNzZXJ0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBlbnYgPSBBdXRob3JpdHkuZ2VuZXJhdGVFbnZpcm9ubWVudEZyb21BdXRob3JpdHkoYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoZW52KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZENhY2hlRW52aXJvbm1lbnRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gSG93IGRvIHlvdSBhY2NvdW50IGZvciBNU0EgQ0lEIGhlcmU/XHJcbiAgICAgICAgICAgIGFjY291bnQubG9jYWxBY2NvdW50SWQgPSBpZFRva2VuPy5jbGFpbXM/Lm9pZCB8fCBpZFRva2VuPy5jbGFpbXM/LnN1YiB8fCBcIlwiO1xyXG4gICAgICAgICAgICAvLyB1cG4gY2xhaW0gZm9yIG1vc3QgQURGUyBzY2VuYXJpb3NcclxuICAgICAgICAgICAgYWNjb3VudC51c2VybmFtZSA9IGlkVG9rZW4/LmNsYWltcz8udXBuIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGFjY291bnQubmFtZSA9IGlkVG9rZW4/LmNsYWltcz8ubmFtZSB8fCBcIlwiO1xyXG4gICAgICAgICAgICBhY2NvdW50LmlkVG9rZW5DbGFpbXMgPSBpZFRva2VuPy5jbGFpbXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY2NvdW50LmVudmlyb25tZW50ID0gZW52O1xyXG5cclxuICAgICAgICBhY2NvdW50LmNsb3VkR3JhcGhIb3N0TmFtZSA9IGNsb3VkR3JhcGhIb3N0TmFtZTtcclxuICAgICAgICBhY2NvdW50Lm1zR3JhcGhIb3N0ID0gbXNHcmFwaEhvc3Q7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogYWRkIHVuaXF1ZU5hbWUgdG8gY2xhaW1zXHJcbiAgICAgICAgICogYWNjb3VudC5uYW1lID0gaWRUb2tlbi5jbGFpbXMudW5pcXVlTmFtZTtcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBIb21lQWNjb3VudElkIGZyb20gc2VydmVyIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyQ2xpZW50SW5mb1xyXG4gICAgICogQHBhcmFtIGF1dGhUeXBlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUhvbWVBY2NvdW50SWQoc2VydmVyQ2xpZW50SW5mbzogc3RyaW5nLCBhdXRoVHlwZTogQXV0aG9yaXR5VHlwZSwgbG9nZ2VyOiBMb2dnZXIsIGNyeXB0b09iajogSUNyeXB0bywgaWRUb2tlbj86IEF1dGhUb2tlbik6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZCA9IGlkVG9rZW4/LmNsYWltcz8uc3ViID8gaWRUb2tlbi5jbGFpbXMuc3ViIDogQ29uc3RhbnRzLkVNUFRZX1NUUklORztcclxuXHJcbiAgICAgICAgLy8gc2luY2UgQURGUyBkb2VzIG5vdCBoYXZlIHRpZCBhbmQgZG9lcyBub3Qgc2V0IGNsaWVudF9pbmZvXHJcbiAgICAgICAgaWYgKGF1dGhUeXBlID09PSBBdXRob3JpdHlUeXBlLkFkZnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY291bnRJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciBjYXNlcyB3aGVyZSB0aGVyZSBpcyBjbGllbnRJbmZvXHJcbiAgICAgICAgaWYgKHNlcnZlckNsaWVudEluZm8pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbyA9IGJ1aWxkQ2xpZW50SW5mbyhzZXJ2ZXJDbGllbnRJbmZvLCBjcnlwdG9PYmopO1xyXG4gICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoY2xpZW50SW5mby51aWQpICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGNsaWVudEluZm8udXRpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjbGllbnRJbmZvLnVpZH0ke1NlcGFyYXRvcnMuQ0xJRU5UX0lORk9fU0VQQVJBVE9SfSR7Y2xpZW50SW5mby51dGlkfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlZmF1bHQgdG8gXCJzdWJcIiBjbGFpbVxyXG4gICAgICAgIGxvZ2dlci52ZXJib3NlKFwiTm8gY2xpZW50IGluZm8gaW4gcmVzcG9uc2VcIik7XHJcbiAgICAgICAgcmV0dXJuIGFjY291bnRJZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlcyBhbiBlbnRpdHk6IGNoZWNrcyBmb3IgYWxsIGV4cGVjdGVkIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGVudGl0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBY2NvdW50RW50aXR5KGVudGl0eTogb2JqZWN0KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICghZW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImhvbWVBY2NvdW50SWRcIikgJiZcclxuICAgICAgICAgICAgZW50aXR5Lmhhc093blByb3BlcnR5KFwiZW52aXJvbm1lbnRcIikgJiZcclxuICAgICAgICAgICAgZW50aXR5Lmhhc093blByb3BlcnR5KFwicmVhbG1cIikgJiZcclxuICAgICAgICAgICAgZW50aXR5Lmhhc093blByb3BlcnR5KFwibG9jYWxBY2NvdW50SWRcIikgJiZcclxuICAgICAgICAgICAgZW50aXR5Lmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikgJiZcclxuICAgICAgICAgICAgZW50aXR5Lmhhc093blByb3BlcnR5KFwiYXV0aG9yaXR5VHlwZVwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgMiBhY2NvdW50cyBhcmUgZXF1YWxcclxuICAgICAqIFVzZWQgdG8gYXZvaWQgdW5uZWNlc3Nhcnkgc3RhdGUgdXBkYXRlc1xyXG4gICAgICogQHBhcmFtIGFycmF5QSBcclxuICAgICAqIEBwYXJhbSBhcnJheUIgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhY2NvdW50SW5mb0lzRXF1YWwoYWNjb3VudEE6IEFjY291bnRJbmZvIHwgbnVsbCwgYWNjb3VudEI6IEFjY291bnRJbmZvIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghYWNjb3VudEEgfHwgIWFjY291bnRCKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhY2NvdW50QS5ob21lQWNjb3VudElkID09PSBhY2NvdW50Qi5ob21lQWNjb3VudElkKSAmJiBcclxuICAgICAgICAgICAgKGFjY291bnRBLmxvY2FsQWNjb3VudElkID09PSBhY2NvdW50Qi5sb2NhbEFjY291bnRJZCkgJiZcclxuICAgICAgICAgICAgKGFjY291bnRBLnVzZXJuYW1lID09PSBhY2NvdW50Qi51c2VybmFtZSkgJiZcclxuICAgICAgICAgICAgKGFjY291bnRBLnRlbmFudElkID09PSBhY2NvdW50Qi50ZW5hbnRJZCkgJiZcclxuICAgICAgICAgICAgKGFjY291bnRBLmVudmlyb25tZW50ID09PSBhY2NvdW50Qi5lbnZpcm9ubWVudCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBUb2tlbkNsYWltcyB9IGZyb20gXCIuL1Rva2VuQ2xhaW1zXCI7XHJcbmltcG9ydCB7IERlY29kZWRBdXRoVG9rZW4gfSBmcm9tIFwiLi9EZWNvZGVkQXV0aFRva2VuXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgSUNyeXB0byB9IGZyb20gXCIuLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5cclxuLyoqXHJcbiAqIEpXVCBUb2tlbiByZXByZXNlbnRhdGlvbiBjbGFzcy4gUGFyc2VzIHRva2VuIHN0cmluZyBhbmQgZ2VuZXJhdGVzIGNsYWltcyBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXV0aFRva2VuIHtcclxuXHJcbiAgICAvLyBSYXcgVG9rZW4gc3RyaW5nXHJcbiAgICByYXdUb2tlbjogc3RyaW5nO1xyXG4gICAgLy8gQ2xhaW1zIGluc2lkZSB0b2tlblxyXG4gICAgY2xhaW1zOiBUb2tlbkNsYWltcztcclxuICAgIGNvbnN0cnVjdG9yKHJhd1Rva2VuOiBzdHJpbmcsIGNyeXB0bzogSUNyeXB0bykge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJhd1Rva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5OdWxsT3JFbXB0eUVycm9yKHJhd1Rva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmF3VG9rZW4gPSByYXdUb2tlbjtcclxuICAgICAgICB0aGlzLmNsYWltcyA9IEF1dGhUb2tlbi5leHRyYWN0VG9rZW5DbGFpbXMocmF3VG9rZW4sIGNyeXB0byk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRyYWN0IHRva2VuIGJ5IGRlY29kaW5nIHRoZSByYXdUb2tlblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBlbmNvZGVkVG9rZW5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGV4dHJhY3RUb2tlbkNsYWltcyhlbmNvZGVkVG9rZW46IHN0cmluZywgY3J5cHRvOiBJQ3J5cHRvKTogVG9rZW5DbGFpbXMge1xyXG5cclxuICAgICAgICBjb25zdCBkZWNvZGVkVG9rZW46IERlY29kZWRBdXRoVG9rZW4gPSBTdHJpbmdVdGlscy5kZWNvZGVBdXRoVG9rZW4oZW5jb2RlZFRva2VuKTtcclxuXHJcbiAgICAgICAgLy8gdG9rZW4gd2lsbCBiZSBkZWNvZGVkIHRvIGdldCB0aGUgdXNlcm5hbWVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRUb2tlblBheWxvYWQgPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIC8vIGJhc2U2NERlY29kZSgpIHNob3VsZCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBhbiBpc3N1ZVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gY3J5cHRvLmJhc2U2NERlY29kZShiYXNlNjRUb2tlblBheWxvYWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjREZWNvZGVkKSBhcyBUb2tlbkNsYWltcztcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVRva2VuUGFyc2luZ0Vycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudENhY2hlLCBBY2NvdW50RmlsdGVyLCBDcmVkZW50aWFsRmlsdGVyLCBDcmVkZW50aWFsQ2FjaGUsIFZhbGlkQ3JlZGVudGlhbFR5cGUsIEFwcE1ldGFkYXRhRmlsdGVyLCBBcHBNZXRhZGF0YUNhY2hlIH0gZnJvbSBcIi4vdXRpbHMvQ2FjaGVUeXBlc1wiO1xyXG5pbXBvcnQgeyBDYWNoZVJlY29yZCB9IGZyb20gXCIuL2VudGl0aWVzL0NhY2hlUmVjb3JkXCI7XHJcbmltcG9ydCB7IENhY2hlU2NoZW1hVHlwZSwgQ3JlZGVudGlhbFR5cGUsIENvbnN0YW50cywgQVBQX01FVEFEQVRBLCBUSEVfRkFNSUxZX0lEIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvQ3JlZGVudGlhbEVudGl0eVwiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuLi9yZXF1ZXN0L1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9BY2NvdW50RW50aXR5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgSWRUb2tlbkVudGl0eSB9IGZyb20gXCIuL2VudGl0aWVzL0lkVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9BdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgSUNhY2hlTWFuYWdlciB9IGZyb20gXCIuL2ludGVyZmFjZS9JQ2FjaGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgQWNjb3VudEluZm8gfSBmcm9tIFwiLi4vYWNjb3VudC9BY2NvdW50SW5mb1wiO1xyXG5pbXBvcnQgeyBUcnVzdGVkQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEFwcE1ldGFkYXRhRW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvQXBwTWV0YWRhdGFFbnRpdHlcIjtcclxuaW1wb3J0IHsgU2VydmVyVGVsZW1ldHJ5RW50aXR5IH0gZnJvbSBcIi4vZW50aXRpZXMvU2VydmVyVGVsZW1ldHJ5RW50aXR5XCI7XHJcbmltcG9ydCB7IFRocm90dGxpbmdFbnRpdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9UaHJvdHRsaW5nRW50aXR5XCI7XHJcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gXCIuLi9hY2NvdW50L0F1dGhUb2tlblwiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGNsYXNzIHdoaWNoIGltcGxlbWVudCBjYWNoZSBzdG9yYWdlIGZ1bmN0aW9ucyB1c2VkIGJ5IE1TQUwgdG8gcGVyZm9ybSB2YWxpZGl0eSBjaGVja3MsIGFuZCBzdG9yZSB0b2tlbnMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FjaGVNYW5hZ2VyIGltcGxlbWVudHMgSUNhY2hlTWFuYWdlciB7XHJcbiAgICBwcm90ZWN0ZWQgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBjcnlwdG9JbXBsOiBJQ3J5cHRvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNsaWVudElkOiBzdHJpbmcsIGNyeXB0b0ltcGw6IElDcnlwdG8pIHtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy5jcnlwdG9JbXBsID0gY3J5cHRvSW1wbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZldGNoIHRoZSBhY2NvdW50IGVudGl0eSBmcm9tIHRoZSBwbGF0Zm9ybSBjYWNoZVxyXG4gICAgICogIEBwYXJhbSBhY2NvdW50S2V5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldEFjY291bnQoYWNjb3VudEtleTogc3RyaW5nKTogQWNjb3VudEVudGl0eSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgYWNjb3VudCBlbnRpdHkgaW4gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBzZXRBY2NvdW50KGFjY291bnQ6IEFjY291bnRFbnRpdHkpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2ggdGhlIGlkVG9rZW4gZW50aXR5IGZyb20gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlbktleVxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRJZFRva2VuQ3JlZGVudGlhbChpZFRva2VuS2V5OiBzdHJpbmcpOiBJZFRva2VuRW50aXR5IHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBpZFRva2VuIGVudGl0eSB0byB0aGUgcGxhdGZvcm0gY2FjaGVcclxuICAgICAqIEBwYXJhbSBpZFRva2VuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldElkVG9rZW5DcmVkZW50aWFsKGlkVG9rZW46IElkVG9rZW5FbnRpdHkpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2ggdGhlIGlkVG9rZW4gZW50aXR5IGZyb20gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5LZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0QWNjZXNzVG9rZW5DcmVkZW50aWFsKGFjY2Vzc1Rva2VuS2V5OiBzdHJpbmcpOiBBY2Nlc3NUb2tlbkVudGl0eSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgaWRUb2tlbiBlbnRpdHkgdG8gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2V0QWNjZXNzVG9rZW5DcmVkZW50aWFsKGFjY2Vzc1Rva2VuOiBBY2Nlc3NUb2tlbkVudGl0eSk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmZXRjaCB0aGUgaWRUb2tlbiBlbnRpdHkgZnJvbSB0aGUgcGxhdGZvcm0gY2FjaGVcclxuICAgICAqIEBwYXJhbSByZWZyZXNoVG9rZW5LZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0UmVmcmVzaFRva2VuQ3JlZGVudGlhbChyZWZyZXNoVG9rZW5LZXk6IHN0cmluZyk6IFJlZnJlc2hUb2tlbkVudGl0eSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgaWRUb2tlbiBlbnRpdHkgdG8gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldFJlZnJlc2hUb2tlbkNyZWRlbnRpYWwocmVmcmVzaFRva2VuOiBSZWZyZXNoVG9rZW5FbnRpdHkpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2ggYXBwTWV0YWRhdGEgZW50aXR5IGZyb20gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYXBwTWV0YWRhdGFLZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0QXBwTWV0YWRhdGEoYXBwTWV0YWRhdGFLZXk6IHN0cmluZyk6IEFwcE1ldGFkYXRhRW50aXR5IHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBhcHBNZXRhZGF0YSBlbnRpdHkgdG8gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYXBwTWV0YWRhdGFcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2V0QXBwTWV0YWRhdGEoYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhRW50aXR5KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGZldGNoIHNlcnZlciB0ZWxlbWV0cnkgZW50aXR5IGZyb20gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVGVsZW1ldHJ5S2V5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldFNlcnZlclRlbGVtZXRyeShzZXJ2ZXJUZWxlbWV0cnlLZXk6IHN0cmluZyk6IFNlcnZlclRlbGVtZXRyeUVudGl0eSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgc2VydmVyIHRlbGVtZXRyeSBlbnRpdHkgdG8gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVGVsZW1ldHJ5S2V5XHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVGVsZW1ldHJ5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldFNlcnZlclRlbGVtZXRyeShzZXJ2ZXJUZWxlbWV0cnlLZXk6IHN0cmluZywgc2VydmVyVGVsZW1ldHJ5OiBTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2ggdGhyb3R0bGluZyBlbnRpdHkgZnJvbSB0aGUgcGxhdGZvcm0gY2FjaGVcclxuICAgICAqIEBwYXJhbSB0aHJvdHRsaW5nQ2FjaGVLZXlcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0VGhyb3R0bGluZ0NhY2hlKHRocm90dGxpbmdDYWNoZUtleTogc3RyaW5nKTogVGhyb3R0bGluZ0VudGl0eSB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdGhyb3R0bGluZyBlbnRpdHkgdG8gdGhlIHBsYXRmb3JtIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gdGhyb3R0bGluZ0NhY2hlS2V5XHJcbiAgICAgKiBAcGFyYW0gdGhyb3R0bGluZ0NhY2hlXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHNldFRocm90dGxpbmdDYWNoZSh0aHJvdHRsaW5nQ2FjaGVLZXk6IHN0cmluZywgdGhyb3R0bGluZ0NhY2hlOiBUaHJvdHRsaW5nRW50aXR5KTogdm9pZDs7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB0byByZW1vdmUgYW4gaXRlbSBmcm9tIGNhY2hlIGdpdmVuIGl0cyBrZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggcmV0dXJucyBib29sZWFuIHdoZXRoZXIgY2FjaGUgY29udGFpbnMgYSBzcGVjaWZpYyBrZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGNvbnRhaW5zS2V5KGtleTogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIHJldHJpZXZlcyBhbGwgY3VycmVudCBrZXlzIGZyb20gdGhlIGNhY2hlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRLZXlzKCk6IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gd2hpY2ggY2xlYXJzIGNhY2hlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBjbGVhcigpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbGwgYWNjb3VudHMgaW4gY2FjaGVcclxuICAgICAqL1xyXG4gICAgZ2V0QWxsQWNjb3VudHMoKTogQWNjb3VudEluZm9bXSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEFjY291bnRzOiBBY2NvdW50Q2FjaGUgPSB0aGlzLmdldEFjY291bnRzRmlsdGVyZWRCeSgpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRWYWx1ZXM6IEFjY291bnRFbnRpdHlbXSA9IE9iamVjdC5rZXlzKGN1cnJlbnRBY2NvdW50cykubWFwKGFjY291bnRLZXkgPT4gY3VycmVudEFjY291bnRzW2FjY291bnRLZXldKTtcclxuICAgICAgICBjb25zdCBudW1BY2NvdW50cyA9IGFjY291bnRWYWx1ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1BY2NvdW50cyA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEFjY291bnRzID0gYWNjb3VudFZhbHVlcy5tYXA8QWNjb3VudEluZm8+KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudEVudGl0eSA9IENhY2hlTWFuYWdlci50b09iamVjdDxBY2NvdW50RW50aXR5PihuZXcgQWNjb3VudEVudGl0eSgpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50SW5mbyA9IGFjY291bnRFbnRpdHkuZ2V0QWNjb3VudEluZm8oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW4gPSB0aGlzLnJlYWRJZFRva2VuRnJvbUNhY2hlKHRoaXMuY2xpZW50SWQsIGFjY291bnRJbmZvKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZFRva2VuICYmICFhY2NvdW50SW5mby5pZFRva2VuQ2xhaW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudEluZm8uaWRUb2tlbkNsYWltcyA9IG5ldyBBdXRoVG9rZW4oaWRUb2tlbi5zZWNyZXQsIHRoaXMuY3J5cHRvSW1wbCkuY2xhaW1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2NvdW50SW5mbztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEFjY291bnRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGEgY2FjaGUgcmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gY2FjaGVSZWNvcmRcclxuICAgICAqL1xyXG4gICAgc2F2ZUNhY2hlUmVjb3JkKGNhY2hlUmVjb3JkOiBDYWNoZVJlY29yZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2FjaGVSZWNvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU51bGxPclVuZGVmaW5lZENhY2hlUmVjb3JkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFjYWNoZVJlY29yZC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWNjb3VudChjYWNoZVJlY29yZC5hY2NvdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWNhY2hlUmVjb3JkLmlkVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJZFRva2VuQ3JlZGVudGlhbChjYWNoZVJlY29yZC5pZFRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWNhY2hlUmVjb3JkLnJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFJlZnJlc2hUb2tlbkNyZWRlbnRpYWwoY2FjaGVSZWNvcmQucmVmcmVzaFRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIWNhY2hlUmVjb3JkLmFwcE1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXBwTWV0YWRhdGEoY2FjaGVSZWNvcmQuYXBwTWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGFjY2VzcyB0b2tlbiBjcmVkZW50aWFsXHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhdmVBY2Nlc3NUb2tlbihjcmVkZW50aWFsOiBBY2Nlc3NUb2tlbkVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUb2tlbkNhY2hlID0gdGhpcy5nZXRDcmVkZW50aWFsc0ZpbHRlcmVkQnkoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogY3JlZGVudGlhbC5jbGllbnRJZCxcclxuICAgICAgICAgICAgY3JlZGVudGlhbFR5cGU6IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTixcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGNyZWRlbnRpYWwuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGNyZWRlbnRpYWwuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgcmVhbG06IGNyZWRlbnRpYWwucmVhbG0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjb3BlcyA9IFNjb3BlU2V0LmZyb21TdHJpbmcoY3JlZGVudGlhbC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRBY2Nlc3NUb2tlbnM6IEFjY2Vzc1Rva2VuRW50aXR5W10gPSBPYmplY3Qua2V5cyhjdXJyZW50VG9rZW5DYWNoZS5hY2Nlc3NUb2tlbnMpLm1hcChrZXkgPT4gY3VycmVudFRva2VuQ2FjaGUuYWNjZXNzVG9rZW5zW2tleV0pO1xyXG4gICAgICAgIGlmIChjdXJyZW50QWNjZXNzVG9rZW5zKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRBY2Nlc3NUb2tlbnMuZm9yRWFjaCgodG9rZW5FbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuU2NvcGVTZXQgPSBTY29wZVNldC5mcm9tU3RyaW5nKHRva2VuRW50aXR5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5TY29wZVNldC5pbnRlcnNlY3RpbmdTY29wZVNldHMoY3VycmVudFNjb3BlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNyZWRlbnRpYWwodG9rZW5FbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBY2Nlc3NUb2tlbkNyZWRlbnRpYWwoY3JlZGVudGlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXRyaWV2ZSBhY2NvdW50cyBtYXRjaGluZyBhbGwgcHJvdmlkZWQgZmlsdGVyczsgaWYgbm8gZmlsdGVyIGlzIHNldCwgZ2V0IGFsbCBhY2NvdW50c1xyXG4gICAgICogbm90IGNoZWNraW5nIGZvciBjYXNpbmcgYXMga2V5cyBhcmUgYWxsIGdlbmVyYXRlZCBpbiBsb3dlciBjYXNlLCByZW1lbWJlciB0byBjb252ZXJ0IHRvIGxvd2VyIGNhc2UgaWYgb2JqZWN0IHByb3BlcnRpZXMgYXJlIGNvbXBhcmVkXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKiBAcGFyYW0gcmVhbG1cclxuICAgICAqL1xyXG4gICAgZ2V0QWNjb3VudHNGaWx0ZXJlZEJ5KGFjY291bnRGaWx0ZXI/OiBBY2NvdW50RmlsdGVyKTogQWNjb3VudENhY2hlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY2NvdW50c0ZpbHRlcmVkQnlJbnRlcm5hbChcclxuICAgICAgICAgICAgYWNjb3VudEZpbHRlciA/IGFjY291bnRGaWx0ZXIuaG9tZUFjY291bnRJZCA6IFwiXCIsXHJcbiAgICAgICAgICAgIGFjY291bnRGaWx0ZXIgPyBhY2NvdW50RmlsdGVyLmVudmlyb25tZW50IDogXCJcIixcclxuICAgICAgICAgICAgYWNjb3VudEZpbHRlciA/IGFjY291bnRGaWx0ZXIucmVhbG0gOiBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHJpZXZlIGFjY291bnRzIG1hdGNoaW5nIGFsbCBwcm92aWRlZCBmaWx0ZXJzOyBpZiBubyBmaWx0ZXIgaXMgc2V0LCBnZXQgYWxsIGFjY291bnRzXHJcbiAgICAgKiBub3QgY2hlY2tpbmcgZm9yIGNhc2luZyBhcyBrZXlzIGFyZSBhbGwgZ2VuZXJhdGVkIGluIGxvd2VyIGNhc2UsIHJlbWVtYmVyIHRvIGNvbnZlcnQgdG8gbG93ZXIgY2FzZSBpZiBvYmplY3QgcHJvcGVydGllcyBhcmUgY29tcGFyZWRcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSByZWFsbVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFjY291bnRzRmlsdGVyZWRCeUludGVybmFsKFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ/OiBzdHJpbmcsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgcmVhbG0/OiBzdHJpbmdcclxuICAgICk6IEFjY291bnRDYWNoZSB7XHJcbiAgICAgICAgY29uc3QgYWxsQ2FjaGVLZXlzID0gdGhpcy5nZXRLZXlzKCk7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdBY2NvdW50czogQWNjb3VudENhY2hlID0ge307XHJcblxyXG4gICAgICAgIGFsbENhY2hlS2V5cy5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRpdHk6IEFjY291bnRFbnRpdHkgfCBudWxsID0gdGhpcy5nZXRBY2NvdW50KGNhY2hlS2V5KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIWhvbWVBY2NvdW50SWQgJiYgIXRoaXMubWF0Y2hIb21lQWNjb3VudElkKGVudGl0eSwgaG9tZUFjY291bnRJZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEhZW52aXJvbm1lbnQgJiYgIXRoaXMubWF0Y2hFbnZpcm9ubWVudChlbnRpdHksIGVudmlyb25tZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISFyZWFsbSAmJiAhdGhpcy5tYXRjaFJlYWxtKGVudGl0eSwgcmVhbG0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdGNoaW5nQWNjb3VudHNbY2FjaGVLZXldID0gZW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hpbmdBY2NvdW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHJpZXZlIGNyZWRlbnRhaWxzIG1hdGNoaW5nIGFsbCBwcm92aWRlZCBmaWx0ZXJzOyBpZiBubyBmaWx0ZXIgaXMgc2V0LCBnZXQgYWxsIGNyZWRlbnRpYWxzXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFR5cGVcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIHJlYWxtXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIGdldENyZWRlbnRpYWxzRmlsdGVyZWRCeShmaWx0ZXI6IENyZWRlbnRpYWxGaWx0ZXIpOiBDcmVkZW50aWFsQ2FjaGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENyZWRlbnRpYWxzRmlsdGVyZWRCeUludGVybmFsKFxyXG4gICAgICAgICAgICBmaWx0ZXIuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZmlsdGVyLmVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBmaWx0ZXIuY3JlZGVudGlhbFR5cGUsXHJcbiAgICAgICAgICAgIGZpbHRlci5jbGllbnRJZCxcclxuICAgICAgICAgICAgZmlsdGVyLmZhbWlseUlkLFxyXG4gICAgICAgICAgICBmaWx0ZXIucmVhbG0sXHJcbiAgICAgICAgICAgIGZpbHRlci50YXJnZXQsXHJcbiAgICAgICAgICAgIGZpbHRlci5vYm9Bc3NlcnRpb25cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VwcG9ydCBmdW5jdGlvbiB0byBoZWxwIG1hdGNoIGNyZWRlbnRpYWxzXHJcbiAgICAgKiBAcGFyYW0gaG9tZUFjY291bnRJZFxyXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XHJcbiAgICAgKiBAcGFyYW0gY3JlZGVudGlhbFR5cGVcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIHJlYWxtXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5SW50ZXJuYWwoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZD86IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudD86IHN0cmluZyxcclxuICAgICAgICBjcmVkZW50aWFsVHlwZT86IHN0cmluZyxcclxuICAgICAgICBjbGllbnRJZD86IHN0cmluZyxcclxuICAgICAgICBmYW1pbHlJZD86IHN0cmluZyxcclxuICAgICAgICByZWFsbT86IHN0cmluZyxcclxuICAgICAgICB0YXJnZXQ/OiBzdHJpbmcsXHJcbiAgICAgICAgb2JvQXNzZXJ0aW9uPzogc3RyaW5nXHJcbiAgICApOiBDcmVkZW50aWFsQ2FjaGUge1xyXG4gICAgICAgIGNvbnN0IGFsbENhY2hlS2V5cyA9IHRoaXMuZ2V0S2V5cygpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoaW5nQ3JlZGVudGlhbHM6IENyZWRlbnRpYWxDYWNoZSA9IHtcclxuICAgICAgICAgICAgaWRUb2tlbnM6IHt9LFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbnM6IHt9LFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW5zOiB7fSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhbGxDYWNoZUtleXMuZm9yRWFjaCgoY2FjaGVLZXkpID0+IHtcclxuICAgICAgICAgICAgLy8gZG9uJ3QgcGFyc2UgYW55IG5vbi1jcmVkZW50aWFsIHR5cGUgY2FjaGUgZW50aXRpZXNcclxuICAgICAgICAgICAgY29uc3QgY3JlZFR5cGUgPSBDcmVkZW50aWFsRW50aXR5LmdldENyZWRlbnRpYWxUeXBlKGNhY2hlS2V5KTtcclxuICAgICAgICAgICAgaWYgKGNyZWRUeXBlID09PSBDb25zdGFudHMuTk9UX0RFRklORUQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXR0ZW1wdCByZXRyaWV2YWxcclxuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5nZXRTcGVjaWZpY0NyZWRlbnRpYWwoY2FjaGVLZXksIGNyZWRUeXBlKTtcclxuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEhb2JvQXNzZXJ0aW9uICYmICF0aGlzLm1hdGNoT2JvQXNzZXJ0aW9uKGVudGl0eSwgb2JvQXNzZXJ0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISFob21lQWNjb3VudElkICYmICF0aGlzLm1hdGNoSG9tZUFjY291bnRJZChlbnRpdHksIGhvbWVBY2NvdW50SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIWVudmlyb25tZW50ICYmICF0aGlzLm1hdGNoRW52aXJvbm1lbnQoZW50aXR5LCBlbnZpcm9ubWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEhcmVhbG0gJiYgIXRoaXMubWF0Y2hSZWFsbShlbnRpdHksIHJlYWxtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISFjcmVkZW50aWFsVHlwZSAmJiAhdGhpcy5tYXRjaENyZWRlbnRpYWxUeXBlKGVudGl0eSwgY3JlZGVudGlhbFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghIWNsaWVudElkICYmICF0aGlzLm1hdGNoQ2xpZW50SWQoZW50aXR5LCBjbGllbnRJZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEhZmFtaWx5SWQgJiYgIXRoaXMubWF0Y2hGYW1pbHlJZChlbnRpdHksIGZhbWlseUlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKiBpZFRva2VucyBkbyBub3QgaGF2ZSBcInRhcmdldFwiLCB0YXJnZXQgc3BlY2lmaWMgcmVmcmVzaFRva2VucyBkbyBleGlzdCBmb3Igc29tZSB0eXBlcyBvZiBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgICAgICAgKiBSZXNvdXJjZSBzcGVjaWZpYyByZWZyZXNoIHRva2VucyBjYXNlIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgc3VwcG9ydCBpcyBkZWVtZWQgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAoISF0YXJnZXQgJiYgIXRoaXMubWF0Y2hUYXJnZXQoZW50aXR5LCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3JlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuSURfVE9LRU46XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmdDcmVkZW50aWFscy5pZFRva2Vuc1tjYWNoZUtleV0gPSBlbnRpdHkgYXMgSWRUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nQ3JlZGVudGlhbHMuYWNjZXNzVG9rZW5zW2NhY2hlS2V5XSA9IGVudGl0eSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjpcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ0NyZWRlbnRpYWxzLnJlZnJlc2hUb2tlbnNbY2FjaGVLZXldID0gZW50aXR5IGFzIFJlZnJlc2hUb2tlbkVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hpbmdDcmVkZW50aWFscztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHJpZXZlIGFwcE1ldGFkYXRhIG1hdGNoaW5nIGFsbCBwcm92aWRlZCBmaWx0ZXJzOyBpZiBubyBmaWx0ZXIgaXMgc2V0LCBnZXQgYWxsIGFwcE1ldGFkYXRhXHJcbiAgICAgKiBAcGFyYW0gZmlsdGVyXHJcbiAgICAgKi9cclxuICAgIGdldEFwcE1ldGFkYXRhRmlsdGVyZWRCeShmaWx0ZXI6IEFwcE1ldGFkYXRhRmlsdGVyKTogQXBwTWV0YWRhdGFDYWNoZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBwTWV0YWRhdGFGaWx0ZXJlZEJ5SW50ZXJuYWwoXHJcbiAgICAgICAgICAgIGZpbHRlci5lbnZpcm9ubWVudCxcclxuICAgICAgICAgICAgZmlsdGVyLmNsaWVudElkLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdXBwb3J0IGZ1bmN0aW9uIHRvIGhlbHAgbWF0Y2ggYXBwTWV0YWRhdGFcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0QXBwTWV0YWRhdGFGaWx0ZXJlZEJ5SW50ZXJuYWwoXHJcbiAgICAgICAgZW52aXJvbm1lbnQ/OiBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50SWQ/OiBzdHJpbmdcclxuICAgICk6IEFwcE1ldGFkYXRhQ2FjaGUge1xyXG5cclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmdldEtleXMoKTtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0FwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YUNhY2hlID0ge307XHJcblxyXG4gICAgICAgIGFsbENhY2hlS2V5cy5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBhbnkgbm9uLWFwcE1ldGFkYXRhIHR5cGUgY2FjaGUgZW50aXRpZXNcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXBwTWV0YWRhdGEoY2FjaGVLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEF0dGVtcHQgcmV0cmlldmFsXHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0QXBwTWV0YWRhdGEoY2FjaGVLZXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEhZW52aXJvbm1lbnQgJiYgIXRoaXMubWF0Y2hFbnZpcm9ubWVudChlbnRpdHksIGVudmlyb25tZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISFjbGllbnRJZCAmJiAhdGhpcy5tYXRjaENsaWVudElkKGVudGl0eSwgY2xpZW50SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdGNoaW5nQXBwTWV0YWRhdGFbY2FjaGVLZXldID0gZW50aXR5O1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoaW5nQXBwTWV0YWRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFsbCBhY2NvdW50cyBhbmQgcmVsYXRlZCB0b2tlbnMgZnJvbSBjYWNoZS5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQWxsQWNjb3VudHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYWxsQ2FjaGVLZXlzID0gdGhpcy5nZXRLZXlzKCk7XHJcbiAgICAgICAgYWxsQ2FjaGVLZXlzLmZvckVhY2goKGNhY2hlS2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0QWNjb3VudChjYWNoZUtleSk7XHJcbiAgICAgICAgICAgIGlmICghZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY2NvdW50KGNhY2hlS2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgYm9vbGVhbiBpZiB0aGUgZ2l2ZW4gYWNjb3VudCBpcyByZW1vdmVkXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICovXHJcbiAgICByZW1vdmVBY2NvdW50KGFjY291bnRLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB0aGlzLmdldEFjY291bnQoYWNjb3VudEtleSk7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0FjY291bnRGb3VuZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhpcy5yZW1vdmVBY2NvdW50Q29udGV4dChhY2NvdW50KSAmJiB0aGlzLnJlbW92ZUl0ZW0oYWNjb3VudEtleSwgQ2FjaGVTY2hlbWFUeXBlLkFDQ09VTlQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBib29sZWFuIGlmIHRoZSBnaXZlbiBhY2NvdW50IGlzIHJlbW92ZWRcclxuICAgICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUFjY291bnRDb250ZXh0KGFjY291bnQ6IEFjY291bnRFbnRpdHkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhbGxDYWNoZUtleXMgPSB0aGlzLmdldEtleXMoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBhY2NvdW50LmdlbmVyYXRlQWNjb3VudElkKCk7XHJcblxyXG4gICAgICAgIGFsbENhY2hlS2V5cy5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBhbnkgbm9uLWNyZWRlbnRpYWwgdHlwZSBjYWNoZSBlbnRpdGllc1xyXG4gICAgICAgICAgICBjb25zdCBjcmVkVHlwZSA9IENyZWRlbnRpYWxFbnRpdHkuZ2V0Q3JlZGVudGlhbFR5cGUoY2FjaGVLZXkpO1xyXG4gICAgICAgICAgICBpZiAoY3JlZFR5cGUgPT09IENvbnN0YW50cy5OT1RfREVGSU5FRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZUVudGl0eSA9IHRoaXMuZ2V0U3BlY2lmaWNDcmVkZW50aWFsKGNhY2hlS2V5LCBjcmVkVHlwZSk7XHJcbiAgICAgICAgICAgIGlmICghIWNhY2hlRW50aXR5ICYmIGFjY291bnRJZCA9PT0gY2FjaGVFbnRpdHkuZ2VuZXJhdGVBY2NvdW50SWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDcmVkZW50aWFsKGNhY2hlRW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBib29sZWFuIGlmIHRoZSBnaXZlbiBjcmVkZW50aWFsIGlzIHJlbW92ZWRcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUNyZWRlbnRpYWwoY3JlZGVudGlhbDogQ3JlZGVudGlhbEVudGl0eSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGNyZWRlbnRpYWwuZ2VuZXJhdGVDcmVkZW50aWFsS2V5KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlSXRlbShrZXksIENhY2hlU2NoZW1hVHlwZS5DUkVERU5USUFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYWxsIGFwcCBtZXRhZGF0YSBvYmplY3RzIGZyb20gY2FjaGUuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUFwcE1ldGFkYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGFsbENhY2hlS2V5cyA9IHRoaXMuZ2V0S2V5cygpO1xyXG4gICAgICAgIGFsbENhY2hlS2V5cy5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FwcE1ldGFkYXRhKGNhY2hlS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGNhY2hlS2V5LCBDYWNoZVNjaGVtYVR5cGUuQVBQX01FVEFEQVRBKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlIHRoZSBjYWNoZWQgY3JlZGVudGlhbHMgaW50byBhIGNhY2hlcmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgcmVhZENhY2hlUmVjb3JkKGFjY291bnQ6IEFjY291bnRJbmZvLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IFNjb3BlU2V0LCBlbnZpcm9ubWVudDogc3RyaW5nKTogQ2FjaGVSZWNvcmQge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQgPSB0aGlzLnJlYWRBY2NvdW50RnJvbUNhY2hlKGFjY291bnQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZElkVG9rZW4gPSB0aGlzLnJlYWRJZFRva2VuRnJvbUNhY2hlKGNsaWVudElkLCBhY2NvdW50KTtcclxuICAgICAgICBjb25zdCBjYWNoZWRBY2Nlc3NUb2tlbiA9IHRoaXMucmVhZEFjY2Vzc1Rva2VuRnJvbUNhY2hlKGNsaWVudElkLCBhY2NvdW50LCBzY29wZXMpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlZnJlc2hUb2tlbiA9IHRoaXMucmVhZFJlZnJlc2hUb2tlbkZyb21DYWNoZShjbGllbnRJZCwgYWNjb3VudCwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFwcE1ldGFkYXRhID0gdGhpcy5yZWFkQXBwTWV0YWRhdGFGcm9tQ2FjaGUoZW52aXJvbm1lbnQsIGNsaWVudElkKTtcclxuXHJcbiAgICAgICAgaWYgKGNhY2hlZEFjY291bnQgJiYgY2FjaGVkSWRUb2tlbikge1xyXG4gICAgICAgICAgICBjYWNoZWRBY2NvdW50LmlkVG9rZW5DbGFpbXMgPSBuZXcgQXV0aFRva2VuKGNhY2hlZElkVG9rZW4uc2VjcmV0LCB0aGlzLmNyeXB0b0ltcGwpLmNsYWltcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjY291bnQ6IGNhY2hlZEFjY291bnQsXHJcbiAgICAgICAgICAgIGlkVG9rZW46IGNhY2hlZElkVG9rZW4sXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBjYWNoZWRBY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBjYWNoZWRSZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgIGFwcE1ldGFkYXRhOiBjYWNoZWRBcHBNZXRhZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmUgQWNjb3VudEVudGl0eSBmcm9tIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICovXHJcbiAgICByZWFkQWNjb3VudEZyb21DYWNoZShhY2NvdW50OiBBY2NvdW50SW5mbyk6IEFjY291bnRFbnRpdHkgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50S2V5OiBzdHJpbmcgPSBBY2NvdW50RW50aXR5LmdlbmVyYXRlQWNjb3VudENhY2hlS2V5KGFjY291bnQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjY291bnQoYWNjb3VudEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZSBJZFRva2VuRW50aXR5IGZyb20gY2FjaGVcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBwYXJhbSBpbnB1dFJlYWxtXHJcbiAgICAgKi9cclxuICAgIHJlYWRJZFRva2VuRnJvbUNhY2hlKGNsaWVudElkOiBzdHJpbmcsIGFjY291bnQ6IEFjY291bnRJbmZvKTogSWRUb2tlbkVudGl0eSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGlkVG9rZW5GaWx0ZXI6IENyZWRlbnRpYWxGaWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGFjY291bnQuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGFjY291bnQuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTixcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxyXG4gICAgICAgICAgICByZWFsbTogYWNjb3VudC50ZW5hbnRJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsQ2FjaGU6IENyZWRlbnRpYWxDYWNoZSA9IHRoaXMuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGlkVG9rZW5GaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGlkVG9rZW5zID0gT2JqZWN0LmtleXMoY3JlZGVudGlhbENhY2hlLmlkVG9rZW5zKS5tYXAoKGtleSkgPT4gY3JlZGVudGlhbENhY2hlLmlkVG9rZW5zW2tleV0pO1xyXG4gICAgICAgIGNvbnN0IG51bUlkVG9rZW5zID0gaWRUb2tlbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobnVtSWRUb2tlbnMgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtSWRUb2tlbnMgPiAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaWRUb2tlbnNbMF0gYXMgSWRUb2tlbkVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlIEFjY2Vzc1Rva2VuRW50aXR5IGZyb20gY2FjaGVcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBwYXJhbSBzY29wZXNcclxuICAgICAqIEBwYXJhbSBpbnB1dFJlYWxtXHJcbiAgICAgKi9cclxuICAgIHJlYWRBY2Nlc3NUb2tlbkZyb21DYWNoZShjbGllbnRJZDogc3RyaW5nLCBhY2NvdW50OiBBY2NvdW50SW5mbywgc2NvcGVzOiBTY29wZVNldCk6IEFjY2Vzc1Rva2VuRW50aXR5IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5GaWx0ZXI6IENyZWRlbnRpYWxGaWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWQ6IGFjY291bnQuaG9tZUFjY291bnRJZCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGFjY291bnQuZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU4sXHJcbiAgICAgICAgICAgIGNsaWVudElkLFxyXG4gICAgICAgICAgICByZWFsbTogYWNjb3VudC50ZW5hbnRJZCxcclxuICAgICAgICAgICAgdGFyZ2V0OiBzY29wZXMucHJpbnRTY29wZXNMb3dlckNhc2UoKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsQ2FjaGU6IENyZWRlbnRpYWxDYWNoZSA9IHRoaXMuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGFjY2Vzc1Rva2VuRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSBPYmplY3Qua2V5cyhjcmVkZW50aWFsQ2FjaGUuYWNjZXNzVG9rZW5zKS5tYXAoKGtleSkgPT4gY3JlZGVudGlhbENhY2hlLmFjY2Vzc1Rva2Vuc1trZXldKTtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtQWNjZXNzVG9rZW5zID0gYWNjZXNzVG9rZW5zLmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtQWNjZXNzVG9rZW5zIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bUFjY2Vzc1Rva2VucyA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbnNbMF0gYXMgQWNjZXNzVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgdG8gcmV0cmlldmUgdGhlIGFwcHJvcHJpYXRlIHJlZnJlc2ggdG9rZW4gZnJvbSBjYWNoZVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAgICogQHBhcmFtIGZhbWlseVJUXHJcbiAgICAgKi9cclxuICAgIHJlYWRSZWZyZXNoVG9rZW5Gcm9tQ2FjaGUoY2xpZW50SWQ6IHN0cmluZywgYWNjb3VudDogQWNjb3VudEluZm8sIGZhbWlseVJUOiBib29sZWFuKTogUmVmcmVzaFRva2VuRW50aXR5IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBmYW1pbHlSVCA/IFRIRV9GQU1JTFlfSUQgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkOiBhY2NvdW50LmhvbWVBY2NvdW50SWQsXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50OiBhY2NvdW50LmVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsVHlwZTogQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTixcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxyXG4gICAgICAgICAgICBmYW1pbHlJZDogaWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsQ2FjaGU6IENyZWRlbnRpYWxDYWNoZSA9IHRoaXMuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KHJlZnJlc2hUb2tlbkZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VucyA9IE9iamVjdC5rZXlzKGNyZWRlbnRpYWxDYWNoZS5yZWZyZXNoVG9rZW5zKS5tYXAoKGtleSkgPT4gY3JlZGVudGlhbENhY2hlLnJlZnJlc2hUb2tlbnNba2V5XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG51bVJlZnJlc2hUb2tlbnMgPSByZWZyZXNoVG9rZW5zLmxlbmd0aDtcclxuICAgICAgICBpZiAobnVtUmVmcmVzaFRva2VucyA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFkZHJlc3MgdGhlIGVsc2UgY2FzZSBhZnRlciByZW1vdmUgZnVuY3Rpb25zIGFkZHJlc3MgZW52aXJvbm1lbnQgYWxpYXNlc1xyXG5cclxuICAgICAgICByZXR1cm4gcmVmcmVzaFRva2Vuc1swXSBhcyBSZWZyZXNoVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZSBBcHBNZXRhZGF0YUVudGl0eSBmcm9tIGNhY2hlXHJcbiAgICAgKi9cclxuICAgIHJlYWRBcHBNZXRhZGF0YUZyb21DYWNoZShlbnZpcm9ubWVudDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nKTogQXBwTWV0YWRhdGFFbnRpdHkgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBhcHBNZXRhZGF0YUZpbHRlcjogQXBwTWV0YWRhdGFGaWx0ZXIgPSB7XHJcbiAgICAgICAgICAgIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBjbGllbnRJZCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGFDYWNoZSA9IHRoaXMuZ2V0QXBwTWV0YWRhdGFGaWx0ZXJlZEJ5KGFwcE1ldGFkYXRhRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBhcHBNZXRhZGF0YUVudHJpZXM6IEFwcE1ldGFkYXRhRW50aXR5W10gPSBPYmplY3Qua2V5cyhhcHBNZXRhZGF0YSkubWFwKChrZXkpID0+IGFwcE1ldGFkYXRhW2tleV0pO1xyXG5cclxuICAgICAgICBjb25zdCBudW1BcHBNZXRhZGF0YSA9IGFwcE1ldGFkYXRhRW50cmllcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG51bUFwcE1ldGFkYXRhIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bUFwcE1ldGFkYXRhID4gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ0FwcE1ldGFkYXRhSW5DYWNoZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXBwTWV0YWRhdGFFbnRyaWVzWzBdIGFzIEFwcE1ldGFkYXRhRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBmYW1pbHlfaWQgdmFsdWUgYXNzb2NpYXRlZCAgd2l0aCBGT0NJXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICovXHJcbiAgICBpc0FwcE1ldGFkYXRhRk9DSShlbnZpcm9ubWVudDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgYXBwTWV0YWRhdGEgPSB0aGlzLnJlYWRBcHBNZXRhZGF0YUZyb21DYWNoZShlbnZpcm9ubWVudCwgY2xpZW50SWQpO1xyXG4gICAgICAgIHJldHVybiAhIShhcHBNZXRhZGF0YSAmJiBhcHBNZXRhZGF0YS5mYW1pbHlJZCA9PT0gVEhFX0ZBTUlMWV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoZWxwZXIgdG8gbWF0Y2ggYWNjb3VudCBpZHNcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaEhvbWVBY2NvdW50SWQoZW50aXR5OiBBY2NvdW50RW50aXR5IHwgQ3JlZGVudGlhbEVudGl0eSwgaG9tZUFjY291bnRJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhKGVudGl0eS5ob21lQWNjb3VudElkICYmIGhvbWVBY2NvdW50SWQgPT09IGVudGl0eS5ob21lQWNjb3VudElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciB0byBtYXRjaCBhc3NlcnRpb25cclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIG9ib0Fzc2VydGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hdGNoT2JvQXNzZXJ0aW9uKGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWxFbnRpdHksIG9ib0Fzc2VydGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhKGVudGl0eS5vYm9Bc3NlcnRpb24gJiYgb2JvQXNzZXJ0aW9uID09PSBlbnRpdHkub2JvQXNzZXJ0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciB0byBtYXRjaCBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaEVudmlyb25tZW50KGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWxFbnRpdHkgfCBBcHBNZXRhZGF0YUVudGl0eSwgZW52aXJvbm1lbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGNsb3VkTWV0YWRhdGEgPSBUcnVzdGVkQXV0aG9yaXR5LmdldENsb3VkRGlzY292ZXJ5TWV0YWRhdGEoZW52aXJvbm1lbnQpO1xyXG4gICAgICAgIGlmIChjbG91ZE1ldGFkYXRhICYmIGNsb3VkTWV0YWRhdGEuYWxpYXNlcy5pbmRleE9mKGVudGl0eS5lbnZpcm9ubWVudCkgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhlbHBlciB0byBtYXRjaCBjcmVkZW50aWFsIHR5cGVcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSBjcmVkZW50aWFsVHlwZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hdGNoQ3JlZGVudGlhbFR5cGUoZW50aXR5OiBDcmVkZW50aWFsRW50aXR5LCBjcmVkZW50aWFsVHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChlbnRpdHkuY3JlZGVudGlhbFR5cGUgJiYgY3JlZGVudGlhbFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZW50aXR5LmNyZWRlbnRpYWxUeXBlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIHRvIG1hdGNoIGNsaWVudCBpZHNcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hdGNoQ2xpZW50SWQoZW50aXR5OiBDcmVkZW50aWFsRW50aXR5IHwgQXBwTWV0YWRhdGFFbnRpdHksIGNsaWVudElkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISEoZW50aXR5LmNsaWVudElkICYmIGNsaWVudElkID09PSBlbnRpdHkuY2xpZW50SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIHRvIG1hdGNoIGZhbWlseSBpZHNcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSBmYW1pbHlJZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hdGNoRmFtaWx5SWQoZW50aXR5OiBDcmVkZW50aWFsRW50aXR5IHwgQXBwTWV0YWRhdGFFbnRpdHksIGZhbWlseUlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISEoZW50aXR5LmZhbWlseUlkICYmIGZhbWlseUlkID09PSBlbnRpdHkuZmFtaWx5SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGVscGVyIHRvIG1hdGNoIHJlYWxtXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKiBAcGFyYW0gcmVhbG1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaFJlYWxtKGVudGl0eTogQWNjb3VudEVudGl0eSB8IENyZWRlbnRpYWxFbnRpdHksIHJlYWxtOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISEoZW50aXR5LnJlYWxtICYmIHJlYWxtID09PSBlbnRpdHkucmVhbG0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0YXJnZXQgc2NvcGVzIGFyZSBhIHN1YnNldCBvZiB0aGUgY3VycmVudCBlbnRpdHkncyBzY29wZXMsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXRjaFRhcmdldChlbnRpdHk6IENyZWRlbnRpYWxFbnRpdHksIHRhcmdldDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGVudGl0eS5jcmVkZW50aWFsVHlwZSAhPT0gQ3JlZGVudGlhbFR5cGUuQUNDRVNTX1RPS0VOIHx8ICFlbnRpdHkudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVudGl0eVNjb3BlU2V0OiBTY29wZVNldCA9IFNjb3BlU2V0LmZyb21TdHJpbmcoZW50aXR5LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFRhcmdldFNjb3BlU2V0OiBTY29wZVNldCA9IFNjb3BlU2V0LmZyb21TdHJpbmcodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0VGFyZ2V0U2NvcGVTZXQuY29udGFpbnNPbmx5RGVmYXVsdFNjb3BlcygpKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RUYXJnZXRTY29wZVNldC5yZW1vdmVEZWZhdWx0U2NvcGVzKCk7IC8vIGlnbm9yZSBkZWZhdWx0IHNjb3Blc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5U2NvcGVTZXQuY29udGFpbnNTY29wZVNldChyZXF1ZXN0VGFyZ2V0U2NvcGVTZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBpZiBhIGdpdmVuIGNhY2hlIGVudGl0eSBpcyBvZiB0aGUgdHlwZSBhcHBtZXRhZGF0YVxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQXBwTWV0YWRhdGEoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4ga2V5LmluZGV4T2YoQVBQX01FVEFEQVRBKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzcGVjaWZpYyBjcmVkZW50aWFsIChJZFRva2VuL0FjY2Vzc1Rva2VuL1JlZnJlc2hUb2tlbikgZnJvbSB0aGUgY2FjaGVcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBjcmVkVHlwZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFNwZWNpZmljQ3JlZGVudGlhbChrZXk6IHN0cmluZywgY3JlZFR5cGU6IHN0cmluZyk6IFZhbGlkQ3JlZGVudGlhbFR5cGUgfCBudWxsIHtcclxuICAgICAgICBzd2l0Y2ggKGNyZWRUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuSURfVE9LRU46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldElkVG9rZW5DcmVkZW50aWFsKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFjY2Vzc1Rva2VuQ3JlZGVudGlhbChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmcmVzaFRva2VuQ3JlZGVudGlhbChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgdG8gY29udmVydCBzZXJpYWxpemVkIGRhdGEgdG8gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKiBAcGFyYW0ganNvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdG9PYmplY3Q8VD4ob2JqOiBULCBqc29uOiBvYmplY3QpOiBUIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBpbiBqc29uKSB7XHJcbiAgICAgICAgICAgIG9ialtwcm9wZXJ0eU5hbWVdID0ganNvbltwcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0b3JhZ2VDbGFzcyBleHRlbmRzIENhY2hlTWFuYWdlciB7XHJcbiAgICBzZXRBY2NvdW50KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gc2V0QWNjb3VudCgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGdldEFjY291bnQoKTogQWNjb3VudEVudGl0eSB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBnZXRBY2NvdW50KCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG4gICAgc2V0SWRUb2tlbkNyZWRlbnRpYWwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBzZXRJZFRva2VuQ3JlZGVudGlhbCgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGdldElkVG9rZW5DcmVkZW50aWFsKCk6IElkVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gZ2V0SWRUb2tlbkNyZWRlbnRpYWwoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBzZXRBY2Nlc3NUb2tlbkNyZWRlbnRpYWwoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBzZXRBY2Nlc3NUb2tlbkNyZWRlbnRpYWwoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBnZXRBY2Nlc3NUb2tlbkNyZWRlbnRpYWwoKTogQWNjZXNzVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gZ2V0QWNjZXNzVG9rZW5DcmVkZW50aWFsKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG4gICAgc2V0UmVmcmVzaFRva2VuQ3JlZGVudGlhbCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIHNldFJlZnJlc2hUb2tlbkNyZWRlbnRpYWwoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBnZXRSZWZyZXNoVG9rZW5DcmVkZW50aWFsKCk6IFJlZnJlc2hUb2tlbkVudGl0eSB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBnZXRSZWZyZXNoVG9rZW5DcmVkZW50aWFsKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG4gICAgc2V0QXBwTWV0YWRhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBzZXRBcHBNZXRhZGF0YSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGdldEFwcE1ldGFkYXRhKCk6IEFwcE1ldGFkYXRhRW50aXR5IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGdldEFwcE1ldGFkYXRhKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmVyVGVsZW1ldHJ5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gc2V0U2VydmVyVGVsZW1ldHJ5KCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmVyVGVsZW1ldHJ5KCk6IFNlcnZlclRlbGVtZXRyeUVudGl0eSB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBnZXRTZXJ2ZXJUZWxlbWV0cnkoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBzZXRUaHJvdHRsaW5nQ2FjaGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBzZXRUaHJvdHRsaW5nQ2FjaGUoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBnZXRUaHJvdHRsaW5nQ2FjaGUoKTogVGhyb3R0bGluZ0VudGl0eSB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiU3RvcmFnZSBpbnRlcmZhY2UgLSBnZXRUaHJvdHRsaW5nQ2FjaGUoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gcmVtb3ZlSXRlbSgpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIGNhY2hlU3RvcmFnZSBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zS2V5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5vdEltcGxFcnIgPSBcIlN0b3JhZ2UgaW50ZXJmYWNlIC0gY29udGFpbnNLZXkoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBnZXRLZXlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGdldEtleXMoKSBoYXMgbm90IGJlZW4gaW1wbGVtZW50ZWQgZm9yIHRoZSBjYWNoZVN0b3JhZ2UgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycik7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJTdG9yYWdlIGludGVyZmFjZSAtIGNsZWFyKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgY2FjaGVTdG9yYWdlIGludGVyZmFjZS5cIjtcclxuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSU5ldHdvcmtNb2R1bGUgfSBmcm9tIFwiLi4vbmV0d29yay9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX0NSWVBUT19JTVBMRU1FTlRBVElPTiwgSUNyeXB0byB9IGZyb20gXCIuLi9jcnlwdG8vSUNyeXB0b1wiO1xyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IElMb2dnZXJDYWxsYmFjaywgTG9nTGV2ZWwgfSBmcm9tIFwiLi4vbG9nZ2VyL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi4vLi4vcGFja2FnZS5qc29uXCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciwgRGVmYXVsdFN0b3JhZ2VDbGFzcyB9IGZyb20gXCIuLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VydmVyVGVsZW1ldHJ5TWFuYWdlciB9IGZyb20gXCIuLi90ZWxlbWV0cnkvc2VydmVyL1NlcnZlclRlbGVtZXRyeU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUHJvdG9jb2xNb2RlIH0gZnJvbSBcIi4uL2F1dGhvcml0eS9Qcm90b2NvbE1vZGVcIjtcclxuaW1wb3J0IHsgSUNhY2hlUGx1Z2luIH0gZnJvbSBcIi4uL2NhY2hlL2ludGVyZmFjZS9JQ2FjaGVQbHVnaW5cIjtcclxuaW1wb3J0IHsgSVNlcmlhbGl6YWJsZVRva2VuQ2FjaGUgfSBmcm9tIFwiLi4vY2FjaGUvaW50ZXJmYWNlL0lTZXJpYWxpemFibGVUb2tlbkNhY2hlXCI7XHJcblxyXG4vLyBUb2tlbiByZW5ld2FsIG9mZnNldCBkZWZhdWx0IGluIHNlY29uZHNcclxuY29uc3QgREVGQVVMVF9UT0tFTl9SRU5FV0FMX09GRlNFVF9TRUMgPSAzMDA7XHJcblxyXG4vKipcclxuICogVXNlIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB0byBjb25maWd1cmUgTVNBTCBNb2R1bGVzIGFuZCBpbml0aWFsaXplIHRoZSBiYXNlIGludGVyZmFjZXMgZm9yIE1TQUwuXHJcbiAqXHJcbiAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY29uZmlndXJlIGltcG9ydGFudCBlbGVtZW50cyBvZiBNU0FMIGZ1bmN0aW9uYWxpdHk6XHJcbiAqIC0gYXV0aE9wdGlvbnMgICAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbiBmb3IgYXBwbGljYXRpb25cclxuICogLSBjcnlwdG9JbnRlcmZhY2UgICAgICAgICAgICAtIEltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBmdW5jdGlvbnNcclxuICogLSBsaWJyYXJ5SW5mbyAgICAgICAgICAgICAgICAtIExpYnJhcnkgbWV0YWRhdGFcclxuICogLSBsb2dnZXJPcHRpb25zICAgICAgICAgICAgICAtIExvZ2dpbmcgZm9yIGFwcGxpY2F0aW9uXHJcbiAqIC0gbmV0d29ya0ludGVyZmFjZSAgICAgICAgICAgLSBOZXR3b3JrIGltcGxlbWVudGF0aW9uXHJcbiAqIC0gc3RvcmFnZUludGVyZmFjZSAgICAgICAgICAgLSBTdG9yYWdlIGltcGxlbWVudGF0aW9uXHJcbiAqIC0gc3lzdGVtT3B0aW9ucyAgICAgICAgICAgICAgLSBBZGRpdGlvbmFsIGxpYnJhcnkgb3B0aW9uc1xyXG4gKiAtIGNsaWVudENyZWRlbnRpYWxzICAgICAgICAgIC0gQ3JlZGVudGlhbHMgb3B0aW9ucyBmb3IgY29uZmlkZW50aWFsIGNsaWVudHNcclxuICovXHJcbmV4cG9ydCB0eXBlIENsaWVudENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMsXHJcbiAgICBzeXN0ZW1PcHRpb25zPzogU3lzdGVtT3B0aW9ucyxcclxuICAgIGxvZ2dlck9wdGlvbnM/OiBMb2dnZXJPcHRpb25zLFxyXG4gICAgc3RvcmFnZUludGVyZmFjZT86IENhY2hlTWFuYWdlcixcclxuICAgIG5ldHdvcmtJbnRlcmZhY2U/OiBJTmV0d29ya01vZHVsZSxcclxuICAgIGNyeXB0b0ludGVyZmFjZT86IElDcnlwdG8sXHJcbiAgICBjbGllbnRDcmVkZW50aWFscz86IENsaWVudENyZWRlbnRpYWxzLFxyXG4gICAgbGlicmFyeUluZm8/OiBMaWJyYXJ5SW5mb1xyXG4gICAgc2VydmVyVGVsZW1ldHJ5TWFuYWdlcj86IFNlcnZlclRlbGVtZXRyeU1hbmFnZXIgfCBudWxsLFxyXG4gICAgcGVyc2lzdGVuY2VQbHVnaW4/OiBJQ2FjaGVQbHVnaW4gfCBudWxsLFxyXG4gICAgc2VyaWFsaXphYmxlQ2FjaGU/OiBJU2VyaWFsaXphYmxlVG9rZW5DYWNoZSB8IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENvbW1vbkNsaWVudENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBhdXRoT3B0aW9uczogUmVxdWlyZWQ8QXV0aE9wdGlvbnM+LFxyXG4gICAgc3lzdGVtT3B0aW9uczogUmVxdWlyZWQ8U3lzdGVtT3B0aW9ucz4sXHJcbiAgICBsb2dnZXJPcHRpb25zIDogUmVxdWlyZWQ8TG9nZ2VyT3B0aW9ucz4sXHJcbiAgICBzdG9yYWdlSW50ZXJmYWNlOiBDYWNoZU1hbmFnZXIsXHJcbiAgICBuZXR3b3JrSW50ZXJmYWNlIDogSU5ldHdvcmtNb2R1bGUsXHJcbiAgICBjcnlwdG9JbnRlcmZhY2UgOiBSZXF1aXJlZDxJQ3J5cHRvPixcclxuICAgIGxpYnJhcnlJbmZvIDogTGlicmFyeUluZm8sXHJcbiAgICBzZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyOiBTZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyIHwgbnVsbCxcclxuICAgIGNsaWVudENyZWRlbnRpYWxzOiBDbGllbnRDcmVkZW50aWFscyxcclxuICAgIHBlcnNpc3RlbmNlUGx1Z2luOiBJQ2FjaGVQbHVnaW4gfCBudWxsLFxyXG4gICAgc2VyaWFsaXphYmxlQ2FjaGU6IElTZXJpYWxpemFibGVUb2tlbkNhY2hlIHwgbnVsbFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYXV0aCBvcHRpb25zIGluIHRoZSBDbGllbnRDb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKlxyXG4gKiAtIGNsaWVudElkICAgICAgICAgICAgICAgICAgICAtIENsaWVudCBJRCBvZiB5b3VyIGFwcCByZWdpc3RlcmVkIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXcgaW4gTWljcm9zb2Z0IElkZW50aXR5IFBsYXRmb3JtXHJcbiAqIC0gYXV0aG9yaXR5ICAgICAgICAgICAgICAgICAgIC0gWW91IGNhbiBjb25maWd1cmUgYSBzcGVjaWZpYyBhdXRob3JpdHksIGRlZmF1bHRzIHRvIFwiIFwiIG9yIFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXHJcbiAqIC0ga25vd25BdXRob3JpdGllcyAgICAgICAgICAgIC0gQW4gYXJyYXkgb2YgVVJJcyB0aGF0IGFyZSBrbm93biB0byBiZSB2YWxpZC4gVXNlZCBpbiBCMkMgc2NlbmFyaW9zLlxyXG4gKiAtIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGEgICAgICAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGNsb3VkIGRpc2NvdmVyeSByZXNwb25zZS4gVXNlZCBpbiBBQUQgc2NlbmFyaW9zLlxyXG4gKiAtIGNsaWVudENhcGFiaWxpdGllcyAgICAgICAgICAtIEFycmF5IG9mIGNhcGFiaWxpdGllcyB3aGljaCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjbGFpbXMuYWNjZXNzX3Rva2VuLnhtc19jYyByZXF1ZXN0IHByb3BlcnR5IG9uIGV2ZXJ5IG5ldHdvcmsgcmVxdWVzdC5cclxuICogLSBwcm90b2NvbE1vZGUgICAgICAgICAgICAgICAgLSBFbnVtIHRoYXQgcmVwcmVzZW50cyB0aGUgcHJvdG9jb2wgdGhhdCBtc2FsIGZvbGxvd3MuIFVzZWQgZm9yIGNvbmZpZ3VyaW5nIHByb3BlciBlbmRwb2ludHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdXRoT3B0aW9ucyA9IHtcclxuICAgIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBhdXRob3JpdHk6IEF1dGhvcml0eTtcclxuICAgIGtub3duQXV0aG9yaXRpZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgY2xvdWREaXNjb3ZlcnlNZXRhZGF0YT86IHN0cmluZztcclxuICAgIGNsaWVudENhcGFiaWxpdGllcz86IEFycmF5PHN0cmluZz47XHJcbiAgICBwcm90b2NvbE1vZGU/OiBQcm90b2NvbE1vZGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRva2VuIHJlbmV3YWwgaW5mbyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICpcclxuICogLSB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzICAgIC0gU2V0cyB0aGUgd2luZG93IG9mIG9mZnNldCBuZWVkZWQgdG8gcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcnlcclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XHJcbiAgICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzPzogbnVtYmVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGxvZ2dpbmcgdGhhdCBNU0FMIGRvZXMsIGJ5IGNvbmZpZ3VyaW5nIGxvZ2dlciBvcHRpb25zIGluIHRoZSBDb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKlxyXG4gKiAtIGxvZ2dlckNhbGxiYWNrICAgICAgICAgICAgICAgIC0gQ2FsbGJhY2sgZm9yIGxvZ2dlclxyXG4gKiAtIHBpaUxvZ2dpbmdFbmFibGVkICAgICAgICAgICAgIC0gU2V0cyB3aGV0aGVyIHBpaSBsb2dnaW5nIGlzIGVuYWJsZWRcclxuICogLSBsb2dMZXZlbCAgICAgICAgICAgICAgICAgICAgICAtIFNldHMgdGhlIGxldmVsIGF0IHdoaWNoIGxvZ2dpbmcgaGFwcGVuc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgTG9nZ2VyT3B0aW9ucyA9IHtcclxuICAgIGxvZ2dlckNhbGxiYWNrPzogSUxvZ2dlckNhbGxiYWNrLFxyXG4gICAgcGlpTG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgbG9nTGV2ZWw/OiBMb2dMZXZlbFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIExpYnJhcnktc3BlY2lmaWMgb3B0aW9uc1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGlicmFyeUluZm8gPSB7XHJcbiAgICBza3U6IHN0cmluZyxcclxuICAgIHZlcnNpb246IHN0cmluZyxcclxuICAgIGNwdTogc3RyaW5nLFxyXG4gICAgb3M6IHN0cmluZ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWRlbnRpYWxzIGZvciBjb25maWRlbnRpYWwgY2xpZW50c1xyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ2xpZW50Q3JlZGVudGlhbHMgPSB7XHJcbiAgICBjbGllbnRTZWNyZXQ/OiBzdHJpbmcsXHJcbiAgICBjbGllbnRBc3NlcnRpb24/IDoge1xyXG4gICAgICAgIGFzc2VydGlvbjogc3RyaW5nLFxyXG4gICAgICAgIGFzc2VydGlvblR5cGU6IHN0cmluZ1xyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBSZXF1aXJlZDxTeXN0ZW1PcHRpb25zPiA9IHtcclxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IERFRkFVTFRfVE9LRU5fUkVORVdBTF9PRkZTRVRfU0VDXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0xPR0dFUl9JTVBMRU1FTlRBVElPTjogUmVxdWlyZWQ8TG9nZ2VyT3B0aW9ucz4gPSB7XHJcbiAgICBsb2dnZXJDYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIC8vIGFsbG93IHVzZXJzIHRvIG5vdCBzZXQgbG9nZ2VyQ2FsbGJhY2tcclxuICAgIH0sXHJcbiAgICBwaWlMb2dnaW5nRW5hYmxlZDogZmFsc2UsXHJcbiAgICBsb2dMZXZlbDogTG9nTGV2ZWwuSW5mb1xyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9ORVRXT1JLX0lNUExFTUVOVEFUSU9OOiBJTmV0d29ya01vZHVsZSA9IHtcclxuICAgIGFzeW5jIHNlbmRHZXRSZXF1ZXN0QXN5bmM8VD4oKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiTmV0d29yayBpbnRlcmZhY2UgLSBzZW5kR2V0UmVxdWVzdEFzeW5jKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZW5kUG9zdFJlcXVlc3RBc3luYzxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCBub3RJbXBsRXJyID0gXCJOZXR3b3JrIGludGVyZmFjZSAtIHNlbmRQb3N0UmVxdWVzdEFzeW5jKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihub3RJbXBsRXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTElCUkFSWV9JTkZPOiBMaWJyYXJ5SW5mbyA9IHtcclxuICAgIHNrdTogQ29uc3RhbnRzLlNLVSxcclxuICAgIHZlcnNpb246IHZlcnNpb24sXHJcbiAgICBjcHU6IFwiXCIsXHJcbiAgICBvczogXCJcIlxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9DTElFTlRfQ1JFREVOVElBTFM6IENsaWVudENyZWRlbnRpYWxzID0ge1xyXG4gICAgY2xpZW50U2VjcmV0OiBcIlwiLFxyXG4gICAgY2xpZW50QXNzZXJ0aW9uOiB1bmRlZmluZWRcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IHNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aGVuIG5vdCBleHBsaWNpdGx5IGNvbmZpZ3VyZWQgZnJvbSBhcHAgZGV2ZWxvcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSBDb25maWd1cmF0aW9uXHJcbiAqXHJcbiAqIEByZXR1cm5zIENvbmZpZ3VyYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZENsaWVudENvbmZpZ3VyYXRpb24oXHJcbiAgICB7XHJcbiAgICAgICAgYXV0aE9wdGlvbnM6IHVzZXJBdXRoT3B0aW9ucyxcclxuICAgICAgICBzeXN0ZW1PcHRpb25zOiB1c2VyU3lzdGVtT3B0aW9ucyxcclxuICAgICAgICBsb2dnZXJPcHRpb25zOiB1c2VyTG9nZ2VyT3B0aW9uLFxyXG4gICAgICAgIHN0b3JhZ2VJbnRlcmZhY2U6IHN0b3JhZ2VJbXBsZW1lbnRhdGlvbixcclxuICAgICAgICBuZXR3b3JrSW50ZXJmYWNlOiBuZXR3b3JrSW1wbGVtZW50YXRpb24sXHJcbiAgICAgICAgY3J5cHRvSW50ZXJmYWNlOiBjcnlwdG9JbXBsZW1lbnRhdGlvbixcclxuICAgICAgICBjbGllbnRDcmVkZW50aWFsczogY2xpZW50Q3JlZGVudGlhbHMsXHJcbiAgICAgICAgbGlicmFyeUluZm86IGxpYnJhcnlJbmZvLFxyXG4gICAgICAgIHNlcnZlclRlbGVtZXRyeU1hbmFnZXI6IHNlcnZlclRlbGVtZXRyeU1hbmFnZXIsXHJcbiAgICAgICAgcGVyc2lzdGVuY2VQbHVnaW46IHBlcnNpc3RlbmNlUGx1Z2luLFxyXG4gICAgICAgIHNlcmlhbGl6YWJsZUNhY2hlOiBzZXJpYWxpemFibGVDYWNoZVxyXG4gICAgfTogQ2xpZW50Q29uZmlndXJhdGlvbik6IENvbW1vbkNsaWVudENvbmZpZ3VyYXRpb24ge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aE9wdGlvbnM6IGJ1aWxkQXV0aE9wdGlvbnModXNlckF1dGhPcHRpb25zKSxcclxuICAgICAgICBzeXN0ZW1PcHRpb25zOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnVzZXJTeXN0ZW1PcHRpb25zIH0sXHJcbiAgICAgICAgbG9nZ2VyT3B0aW9uczogeyAuLi5ERUZBVUxUX0xPR0dFUl9JTVBMRU1FTlRBVElPTiwgLi4udXNlckxvZ2dlck9wdGlvbiB9LFxyXG4gICAgICAgIHN0b3JhZ2VJbnRlcmZhY2U6IHN0b3JhZ2VJbXBsZW1lbnRhdGlvbiB8fCBuZXcgRGVmYXVsdFN0b3JhZ2VDbGFzcyh1c2VyQXV0aE9wdGlvbnMuY2xpZW50SWQsIERFRkFVTFRfQ1JZUFRPX0lNUExFTUVOVEFUSU9OKSxcclxuICAgICAgICBuZXR3b3JrSW50ZXJmYWNlOiBuZXR3b3JrSW1wbGVtZW50YXRpb24gfHwgREVGQVVMVF9ORVRXT1JLX0lNUExFTUVOVEFUSU9OLFxyXG4gICAgICAgIGNyeXB0b0ludGVyZmFjZTogY3J5cHRvSW1wbGVtZW50YXRpb24gfHwgREVGQVVMVF9DUllQVE9fSU1QTEVNRU5UQVRJT04sXHJcbiAgICAgICAgY2xpZW50Q3JlZGVudGlhbHM6IGNsaWVudENyZWRlbnRpYWxzIHx8IERFRkFVTFRfQ0xJRU5UX0NSRURFTlRJQUxTLFxyXG4gICAgICAgIGxpYnJhcnlJbmZvOiB7IC4uLkRFRkFVTFRfTElCUkFSWV9JTkZPLCAuLi5saWJyYXJ5SW5mbyB9LFxyXG4gICAgICAgIHNlcnZlclRlbGVtZXRyeU1hbmFnZXI6IHNlcnZlclRlbGVtZXRyeU1hbmFnZXIgfHwgbnVsbCxcclxuICAgICAgICBwZXJzaXN0ZW5jZVBsdWdpbjogcGVyc2lzdGVuY2VQbHVnaW4gfHwgbnVsbCxcclxuICAgICAgICBzZXJpYWxpemFibGVDYWNoZTogc2VyaWFsaXphYmxlQ2FjaGUgfHwgbnVsbFxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdCBhdXRob3B0aW9ucyBmcm9tIHRoZSBjbGllbnQgYW5kIHBsYXRmb3JtIHBhc3NlZCB2YWx1ZXNcclxuICogQHBhcmFtIGF1dGhPcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZEF1dGhPcHRpb25zKGF1dGhPcHRpb25zOiBBdXRoT3B0aW9ucyk6IFJlcXVpcmVkPEF1dGhPcHRpb25zPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtub3duQXV0aG9yaXRpZXM6IFtdLFxyXG4gICAgICAgIGNsb3VkRGlzY292ZXJ5TWV0YWRhdGE6IFwiXCIsXHJcbiAgICAgICAgY2xpZW50Q2FwYWJpbGl0aWVzOiBbXSxcclxuICAgICAgICBwcm90b2NvbE1vZGU6IFByb3RvY29sTW9kZS5BQUQsXHJcbiAgICAgICAgLi4uYXV0aE9wdGlvbnNcclxuICAgIH07XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU/OiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSwgc3ViRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi9OZXR3b3JrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBIZWFkZXJOYW1lcywgQ2FjaGVTY2hlbWFUeXBlLCBUaHJvdHRsaW5nQ29uc3RhbnRzLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5pbXBvcnQgeyBUaHJvdHRsaW5nRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL1Rocm90dGxpbmdFbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaHJvdHRsaW5nVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZXMgYSBSZXF1ZXN0VGh1bWJwcmludCB0byBiZSBzdG9yZWQgYXMgYSBrZXkuXHJcbiAgICAgKiBAcGFyYW0gdGh1bWJwcmludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVUaHJvdHRsaW5nU3RvcmFnZUtleSh0aHVtYnByaW50OiBSZXF1ZXN0VGh1bWJwcmludCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke1Rocm90dGxpbmdDb25zdGFudHMuVEhST1RUTElOR19QUkVGSVh9LiR7SlNPTi5zdHJpbmdpZnkodGh1bWJwcmludCl9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSB0aHJvdHRsaW5nIGNoZWNrcyBiZWZvcmUgYSBuZXR3b3JrIHJlcXVlc3QuXHJcbiAgICAgKiBAcGFyYW0gY2FjaGVNYW5hZ2VyXHJcbiAgICAgKiBAcGFyYW0gdGh1bWJwcmludFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcHJlUHJvY2VzcyhjYWNoZU1hbmFnZXI6IENhY2hlTWFuYWdlciwgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBUaHJvdHRsaW5nVXRpbHMuZ2VuZXJhdGVUaHJvdHRsaW5nU3RvcmFnZUtleSh0aHVtYnByaW50KTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNhY2hlTWFuYWdlci5nZXRUaHJvdHRsaW5nQ2FjaGUoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS50aHJvdHRsZVRpbWUgPCBEYXRlLm5vdygpKSB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZU1hbmFnZXIucmVtb3ZlSXRlbShrZXksIENhY2hlU2NoZW1hVHlwZS5USFJPVFRMSU5HKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VydmVyRXJyb3IodmFsdWUuZXJyb3JDb2Rlcz8uam9pbihcIiBcIikgfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORywgdmFsdWUuZXJyb3JNZXNzYWdlLCB2YWx1ZS5zdWJFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHRocm90dGxpbmcgY2hlY2tzIGFmdGVyIGEgbmV0d29yayByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIGNhY2hlTWFuYWdlclxyXG4gICAgICogQHBhcmFtIHRodW1icHJpbnRcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcG9zdFByb2Nlc3MoY2FjaGVNYW5hZ2VyOiBDYWNoZU1hbmFnZXIsIHRodW1icHJpbnQ6IFJlcXVlc3RUaHVtYnByaW50LCByZXNwb25zZTogTmV0d29ya1Jlc3BvbnNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPik6IHZvaWQge1xyXG4gICAgICAgIGlmIChUaHJvdHRsaW5nVXRpbHMuY2hlY2tSZXNwb25zZVN0YXR1cyhyZXNwb25zZSkgfHwgVGhyb3R0bGluZ1V0aWxzLmNoZWNrUmVzcG9uc2VGb3JSZXRyeUFmdGVyKHJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aHVtYnByaW50VmFsdWU6IFRocm90dGxpbmdFbnRpdHkgPSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZVRpbWU6IFRocm90dGxpbmdVdGlscy5jYWxjdWxhdGVUaHJvdHRsZVRpbWUocGFyc2VJbnQocmVzcG9uc2UuaGVhZGVyc1tIZWFkZXJOYW1lcy5SRVRSWV9BRlRFUl0pKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiByZXNwb25zZS5ib2R5LmVycm9yLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlczogcmVzcG9uc2UuYm9keS5lcnJvcl9jb2RlcyxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVzcG9uc2UuYm9keS5lcnJvcl9kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIHN1YkVycm9yOiByZXNwb25zZS5ib2R5LnN1YmVycm9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhY2hlTWFuYWdlci5zZXRUaHJvdHRsaW5nQ2FjaGUoXHJcbiAgICAgICAgICAgICAgICBUaHJvdHRsaW5nVXRpbHMuZ2VuZXJhdGVUaHJvdHRsaW5nU3RvcmFnZUtleSh0aHVtYnByaW50KSxcclxuICAgICAgICAgICAgICAgIHRodW1icHJpbnRWYWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBhIE5ldHdvcmtSZXNwb25zZSBvYmplY3QncyBzdGF0dXMgY29kZXMgYWdhaW5zdCA0Mjkgb3IgNXh4XHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNoZWNrUmVzcG9uc2VTdGF0dXMocmVzcG9uc2U6IE5ldHdvcmtSZXNwb25zZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4pOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09PSA0MjkgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDUwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgYSBOZXR3b3JrUmVzcG9uc2Ugb2JqZWN0J3MgUmV0cnlBZnRlciBoZWFkZXJcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2hlY2tSZXNwb25zZUZvclJldHJ5QWZ0ZXIocmVzcG9uc2U6IE5ldHdvcmtSZXNwb25zZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShIZWFkZXJOYW1lcy5SRVRSWV9BRlRFUikgJiYgKHJlc3BvbnNlLnN0YXR1cyA8IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPj0gMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgVW5peC10aW1lIHZhbHVlIGZvciBhIHRocm90dGxlIHRvIGV4cGlyZSBnaXZlbiB0aHJvdHRsZVRpbWUgaW4gc2Vjb25kcy5cclxuICAgICAqIEBwYXJhbSB0aHJvdHRsZVRpbWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNhbGN1bGF0ZVRocm90dGxlVGltZSh0aHJvdHRsZVRpbWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYodGhyb3R0bGVUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3R0bGVUaW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlY29uZHMgPSBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLm1pbihcclxuICAgICAgICAgICAgY3VycmVudFNlY29uZHMgKyAodGhyb3R0bGVUaW1lIHx8IFRocm90dGxpbmdDb25zdGFudHMuREVGQVVMVF9USFJPVFRMRV9USU1FX1NFQ09ORFMpLFxyXG4gICAgICAgICAgICBjdXJyZW50U2Vjb25kcyArIFRocm90dGxpbmdDb25zdGFudHMuREVGQVVMVF9NQVhfVEhST1RUTEVfVElNRV9TRUNPTkRTXHJcbiAgICAgICAgKSAqIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmVUaHJvdHRsZShjYWNoZU1hbmFnZXI6IENhY2hlTWFuYWdlciwgY2xpZW50SWQ6IHN0cmluZywgYXV0aG9yaXR5OiBzdHJpbmcsIHNjb3BlczogQXJyYXk8c3RyaW5nPiwgaG9tZUFjY291bnRJZGVudGlmaWVyPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudElkLFxyXG4gICAgICAgICAgICBhdXRob3JpdHksXHJcbiAgICAgICAgICAgIHNjb3BlcyxcclxuICAgICAgICAgICAgaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZW5lcmF0ZVRocm90dGxpbmdTdG9yYWdlS2V5KHRodW1icHJpbnQpO1xyXG4gICAgICAgIHJldHVybiBjYWNoZU1hbmFnZXIucmVtb3ZlSXRlbShrZXksIENhY2hlU2NoZW1hVHlwZS5USFJPVFRMSU5HKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlLCBOZXR3b3JrUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiLi9JTmV0d29ya01vZHVsZVwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VGh1bWJwcmludCB9IGZyb20gXCIuL1JlcXVlc3RUaHVtYnByaW50XCI7XHJcbmltcG9ydCB7IFRocm90dGxpbmdVdGlscyB9IGZyb20gXCIuL1Rocm90dGxpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBDYWNoZU1hbmFnZXIgfSBmcm9tIFwiLi4vY2FjaGUvQ2FjaGVNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBOZXR3b3JrUmVzcG9uc2U8VD4gPSB7XHJcbiAgICBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gICAgYm9keTogVDtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgbmV0d29ya0NsaWVudDogSU5ldHdvcmtNb2R1bGU7XHJcbiAgICBwcml2YXRlIGNhY2hlTWFuYWdlcjogQ2FjaGVNYW5hZ2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5ldHdvcmtDbGllbnQ6IElOZXR3b3JrTW9kdWxlLCBjYWNoZU1hbmFnZXI6IENhY2hlTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMubmV0d29ya0NsaWVudCA9IG5ldHdvcmtDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIgPSBjYWNoZU1hbmFnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcyBzZW5kUG9zdFJlcXVlc3RBc3luYyB3aXRoIG5lY2Vzc2FyeSBwcmVmbGlnaHQgYW5kIHBvc3RmbGlnaHQgbG9naWNcclxuICAgICAqIEBwYXJhbSB0aHVtYnByaW50XHJcbiAgICAgKiBAcGFyYW0gdG9rZW5FbmRwb2ludFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2VuZFBvc3RSZXF1ZXN0PFQ+KHRodW1icHJpbnQ6IFJlcXVlc3RUaHVtYnByaW50LCB0b2tlbkVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM6IE5ldHdvcmtSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFQ+PiB7XHJcbiAgICAgICAgVGhyb3R0bGluZ1V0aWxzLnByZVByb2Nlc3ModGhpcy5jYWNoZU1hbmFnZXIsIHRodW1icHJpbnQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5uZXR3b3JrQ2xpZW50LnNlbmRQb3N0UmVxdWVzdEFzeW5jPFQ+KHRva2VuRW5kcG9pbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIFRocm90dGxpbmdVdGlscy5wb3N0UHJvY2Vzcyh0aGlzLmNhY2hlTWFuYWdlciwgdGh1bWJwcmludCwgcmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAvLyBQbGFjZWhvbGRlciBmb3IgVGVsZW1ldHJ5IGhvb2tcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiwgYnVpbGRDbGllbnRDb25maWd1cmF0aW9uLCBDb21tb25DbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHsgTmV0d29ya01hbmFnZXIsIE5ldHdvcmtSZXNwb25zZSB9IGZyb20gXCIuLi9uZXR3b3JrL05ldHdvcmtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlci9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgQUFEU2VydmVyUGFyYW1LZXlzLCBDb25zdGFudHMsIEhlYWRlck5hbWVzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBUcnVzdGVkQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9UcnVzdGVkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2VydmVyVGVsZW1ldHJ5TWFuYWdlciB9IGZyb20gXCIuLi90ZWxlbWV0cnkvc2VydmVyL1NlcnZlclRlbGVtZXRyeU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5pbXBvcnQgeyB2ZXJzaW9uLCBuYW1lIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogQmFzZSBhcHBsaWNhdGlvbiBjbGFzcyB3aGljaCB3aWxsIGNvbnN0cnVjdCByZXF1ZXN0cyB0byBzZW5kIHRvIGFuZCBoYW5kbGUgcmVzcG9uc2VzIGZyb20gdGhlIE1pY3Jvc29mdCBTVFMgdXNpbmcgdGhlIGF1dGhvcml6YXRpb24gY29kZSBmbG93LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDbGllbnQge1xyXG4gICAgLy8gTG9nZ2VyIG9iamVjdFxyXG4gICAgcHVibGljIGxvZ2dlcjogTG9nZ2VyO1xyXG5cclxuICAgIC8vIEFwcGxpY2F0aW9uIGNvbmZpZ1xyXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ29tbW9uQ2xpZW50Q29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAvLyBDcnlwdG8gSW50ZXJmYWNlXHJcbiAgICBwcm90ZWN0ZWQgY3J5cHRvVXRpbHM6IElDcnlwdG87XHJcblxyXG4gICAgLy8gU3RvcmFnZSBJbnRlcmZhY2VcclxuICAgIHByb3RlY3RlZCBjYWNoZU1hbmFnZXI6IENhY2hlTWFuYWdlcjtcclxuXHJcbiAgICAvLyBOZXR3b3JrIEludGVyZmFjZVxyXG4gICAgcHJvdGVjdGVkIG5ldHdvcmtDbGllbnQ6IElOZXR3b3JrTW9kdWxlO1xyXG5cclxuICAgIC8vIFNlcnZlciBUZWxlbWV0cnkgTWFuYWdlclxyXG4gICAgcHJvdGVjdGVkIHNlcnZlclRlbGVtZXRyeU1hbmFnZXI6IFNlcnZlclRlbGVtZXRyeU1hbmFnZXIgfCBudWxsO1xyXG5cclxuICAgIC8vIE5ldHdvcmsgTWFuYWdlclxyXG4gICAgcHJvdGVjdGVkIG5ldHdvcmtNYW5hZ2VyOiBOZXR3b3JrTWFuYWdlcjtcclxuXHJcbiAgICAvLyBEZWZhdWx0IGF1dGhvcml0eSBvYmplY3RcclxuICAgIHB1YmxpYyBhdXRob3JpdHk6IEF1dGhvcml0eTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIC8vIFNldCB0aGUgY29uZmlndXJhdGlvblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gYnVpbGRDbGllbnRDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBsb2dnZXJcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5jb25maWcubG9nZ2VyT3B0aW9ucywgbmFtZSwgdmVyc2lvbik7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgY3J5cHRvXHJcbiAgICAgICAgdGhpcy5jcnlwdG9VdGlscyA9IHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzdG9yYWdlIGludGVyZmFjZVxyXG4gICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyID0gdGhpcy5jb25maWcuc3RvcmFnZUludGVyZmFjZTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBuZXR3b3JrIGludGVyZmFjZVxyXG4gICAgICAgIHRoaXMubmV0d29ya0NsaWVudCA9IHRoaXMuY29uZmlnLm5ldHdvcmtJbnRlcmZhY2U7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgTmV0d29ya01hbmFnZXJcclxuICAgICAgICB0aGlzLm5ldHdvcmtNYW5hZ2VyID0gbmV3IE5ldHdvcmtNYW5hZ2VyKHRoaXMubmV0d29ya0NsaWVudCwgdGhpcy5jYWNoZU1hbmFnZXIpO1xyXG5cclxuICAgICAgICAvLyBTZXQgVGVsZW1ldHJ5TWFuYWdlclxyXG4gICAgICAgIHRoaXMuc2VydmVyVGVsZW1ldHJ5TWFuYWdlciA9IHRoaXMuY29uZmlnLnNlcnZlclRlbGVtZXRyeU1hbmFnZXI7XHJcblxyXG4gICAgICAgIC8vIFNldCBUcnVzdGVkQXV0aG9yaXRpZXMgZnJvbSBjb25maWdcclxuICAgICAgICBUcnVzdGVkQXV0aG9yaXR5LnNldFRydXN0ZWRBdXRob3JpdGllc0Zyb21Db25maWcodGhpcy5jb25maWcuYXV0aE9wdGlvbnMua25vd25BdXRob3JpdGllcywgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xvdWREaXNjb3ZlcnlNZXRhZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIHNldCBBdXRob3JpdHlcclxuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmF1dGhvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgZGVmYXVsdCBoZWFkZXJzIGZvciByZXF1ZXN0cyB0byB0b2tlbiBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdFRva2VuUmVxdWVzdEhlYWRlcnMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuY3JlYXRlRGVmYXVsdExpYnJhcnlIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVyc1tIZWFkZXJOYW1lcy5DT05URU5UX1RZUEVdID0gQ29uc3RhbnRzLlVSTF9GT1JNX0NPTlRFTlRfVFlQRTtcclxuICAgICAgICBoZWFkZXJzW0hlYWRlck5hbWVzLlhfTVNfTElCX0NBUEFCSUxJVFldID0gSGVhZGVyTmFtZXMuWF9NU19MSUJfQ0FQQUJJTElUWV9WQUxVRTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyVGVsZW1ldHJ5TWFuYWdlcikge1xyXG4gICAgICAgICAgICBoZWFkZXJzW0hlYWRlck5hbWVzLlhfQ0xJRU5UX0NVUlJfVEVMRU1dID0gdGhpcy5zZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyLmdlbmVyYXRlQ3VycmVudFJlcXVlc3RIZWFkZXJWYWx1ZSgpO1xyXG4gICAgICAgICAgICBoZWFkZXJzW0hlYWRlck5hbWVzLlhfQ0xJRU5UX0xBU1RfVEVMRU1dID0gdGhpcy5zZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyLmdlbmVyYXRlTGFzdFJlcXVlc3RIZWFkZXJWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRMaWJyYXJ5RGF0YVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlRGVmYXVsdExpYnJhcnlIZWFkZXJzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuXHJcbiAgICAgICAgLy8gY2xpZW50IGluZm8gaGVhZGVyc1xyXG4gICAgICAgIGhlYWRlcnNbQUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX1NLVV0gPSB0aGlzLmNvbmZpZy5saWJyYXJ5SW5mby5za3U7XHJcbiAgICAgICAgaGVhZGVyc1tBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfVkVSXSA9IHRoaXMuY29uZmlnLmxpYnJhcnlJbmZvLnZlcnNpb247XHJcbiAgICAgICAgaGVhZGVyc1tBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfT1NdID0gdGhpcy5jb25maWcubGlicmFyeUluZm8ub3M7XHJcbiAgICAgICAgaGVhZGVyc1tBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfQ1BVXSA9IHRoaXMuY29uZmlnLmxpYnJhcnlJbmZvLmNwdTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIdHRwIHBvc3QgdG8gdG9rZW4gZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB0b2tlbkVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gcXVlcnlTdHJpbmdcclxuICAgICAqIEBwYXJhbSBoZWFkZXJzXHJcbiAgICAgKiBAcGFyYW0gdGh1bWJwcmludFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgZXhlY3V0ZVBvc3RUb1Rva2VuRW5kcG9pbnQodG9rZW5FbmRwb2ludDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nLCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCB0aHVtYnByaW50OiBSZXF1ZXN0VGh1bWJwcmludCk6IFByb21pc2U8TmV0d29ya1Jlc3BvbnNlPFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlPj4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5uZXR3b3JrTWFuYWdlci5zZW5kUG9zdFJlcXVlc3Q8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICB0aHVtYnByaW50LFxyXG4gICAgICAgICAgICB0b2tlbkVuZHBvaW50LFxyXG4gICAgICAgICAgICB7IGJvZHk6IHF1ZXJ5U3RyaW5nLCBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuc2VydmVyVGVsZW1ldHJ5TWFuYWdlciAmJiByZXNwb25zZS5zdGF0dXMgPCA1MDAgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSA0MjkpIHtcclxuICAgICAgICAgICAgLy8gVGVsZW1ldHJ5IGRhdGEgc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBieSBzZXJ2ZXIsIGNsZWFyIFRlbGVtZXRyeSBjYWNoZVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXJ2ZXJUZWxlbWV0cnlNYW5hZ2VyLmNsZWFyVGVsZW1ldHJ5Q2FjaGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNsaWVudC4gRW5kcG9pbnQgZGlzY292ZXJ5IG11c3QgYmUgY29tcGxldGVkLlxyXG4gICAgICogQHBhcmFtIHVwZGF0ZWRBdXRob3JpdHkgXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUF1dGhvcml0eSh1cGRhdGVkQXV0aG9yaXR5OiBBdXRob3JpdHkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVwZGF0ZWRBdXRob3JpdHkuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnREaXNjb3ZlcnlJbmNvbXBsZXRlRXJyb3IoXCJVcGRhdGVkIGF1dGhvcml0eSBoYXMgbm90IGNvbXBsZXRlZCBlbmRwb2ludCBkaXNjb3ZlcnkuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHVwZGF0ZWRBdXRob3JpdHk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFByb21wdFZhbHVlLCBDb2RlQ2hhbGxlbmdlTWV0aG9kVmFsdWVzfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi4vdXRpbHMvTXNhbFR5cGVzXCI7XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIHNlcnZlciBjb25zdW1hYmxlIHBhcmFtcyBmcm9tIHRoZSBcInJlcXVlc3RcIiBvYmplY3RzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFZhbGlkYXRvciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIGNoZWNrIGlmIHRoZSBgcmVkaXJlY3RVcmlgIGluIHRoZSByZXF1ZXN0IGlzIGEgbm9uLW51bGwgdmFsdWVcclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVSZWRpcmVjdFVyaShyZWRpcmVjdFVyaTogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJlZGlyZWN0VXJpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RVcmlFbXB0eUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSB0byB2YWxpZGF0ZSBwcm9tcHQgc2VudCBieSB0aGUgdXNlciBpbiB0aGUgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHByb21wdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVQcm9tcHQocHJvbXB0OiBzdHJpbmcpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBQcm9tcHRWYWx1ZS5MT0dJTixcclxuICAgICAgICAgICAgICAgIFByb21wdFZhbHVlLlNFTEVDVF9BQ0NPVU5ULFxyXG4gICAgICAgICAgICAgICAgUHJvbXB0VmFsdWUuQ09OU0VOVCxcclxuICAgICAgICAgICAgICAgIFByb21wdFZhbHVlLk5PTkVcclxuICAgICAgICAgICAgXS5pbmRleE9mKHByb21wdCkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZhbGlkYXRlQ2xhaW1zKGNsYWltczogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UoY2xhaW1zKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDbGFpbXNSZXF1ZXN0RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIHZhbGlkYXRlIGNvZGVfY2hhbGxlbmdlIGFuZCBjb2RlX2NoYWxsZW5nZV9tZXRob2RcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlXHJcbiAgICAgKiBAcGFyYW0gY29kZUNoYWxsZW5nZU1ldGhvZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVDb2RlQ2hhbGxlbmdlUGFyYW1zKGNvZGVDaGFsbGVuZ2U6IHN0cmluZywgY29kZUNoYWxsZW5nZU1ldGhvZDogc3RyaW5nKSA6IHZvaWQgIHtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShjb2RlQ2hhbGxlbmdlKSB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KGNvZGVDaGFsbGVuZ2VNZXRob2QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtc0Vycm9yKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvZGVDaGFsbGVuZ2VNZXRob2QoY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSB0byB2YWxpZGF0ZSBjb2RlX2NoYWxsZW5nZV9tZXRob2RcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlTWV0aG9kXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB2YWxpZGF0ZUNvZGVDaGFsbGVuZ2VNZXRob2QoY29kZUNoYWxsZW5nZU1ldGhvZDogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgQ29kZUNoYWxsZW5nZU1ldGhvZFZhbHVlcy5QTEFJTixcclxuICAgICAgICAgICAgICAgIENvZGVDaGFsbGVuZ2VNZXRob2RWYWx1ZXMuUzI1NlxyXG4gICAgICAgICAgICBdLmluZGV4T2YoY29kZUNoYWxsZW5nZU1ldGhvZCkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZU1ldGhvZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB1bm5lY2Vzc2FyeSBvciBkdXBsaWNhdGUgcXVlcnkgcGFyYW1ldGVycyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2FuaXRpemVFUVBhcmFtcyhlUVBhcmFtczogU3RyaW5nRGljdCwgcXVlcnlQYXJhbXM6IE1hcDxzdHJpbmcsIHN0cmluZz4pIDogU3RyaW5nRGljdCB7XHJcbiAgICAgICAgaWYgKCFlUVBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IHF1ZXJ5IHBhcmFtZXRlcnMgYWxyZWFkeSBpbmNsdWRlZCBpbiBTU08gcGFyYW1zXHJcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZVFQYXJhbXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVRUGFyYW1zO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQUFEU2VydmVyUGFyYW1LZXlzLCBDb25zdGFudHMsIFJlc3BvbnNlTW9kZSwgU1NPVHlwZXMsIENsaWVudEluZm8sIEF1dGhlbnRpY2F0aW9uU2NoZW1lLCBDbGFpbXNSZXF1ZXN0S2V5cywgUGFzc3dvcmRHcmFudENvbnN0YW50c30gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBTY29wZVNldCB9IGZyb20gXCIuL1Njb3BlU2V0XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuLi91dGlscy9Nc2FsVHlwZXNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFZhbGlkYXRvciB9IGZyb20gXCIuL1JlcXVlc3RWYWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgTGlicmFyeUluZm8gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJhbWV0ZXJzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcmVzcG9uc2VfdHlwZSA9IGNvZGVcclxuICAgICAqL1xyXG4gICAgYWRkUmVzcG9uc2VUeXBlQ29kZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFxyXG4gICAgICAgICAgICBBQURTZXJ2ZXJQYXJhbUtleXMuUkVTUE9OU0VfVFlQRSwgZW5jb2RlVVJJQ29tcG9uZW50KENvbnN0YW50cy5DT0RFX1JFU1BPTlNFX1RZUEUpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCByZXNwb25zZV9tb2RlLiBkZWZhdWx0cyB0byBxdWVyeS5cclxuICAgICAqIEBwYXJhbSByZXNwb25zZU1vZGVcclxuICAgICAqL1xyXG4gICAgYWRkUmVzcG9uc2VNb2RlKHJlc3BvbnNlTW9kZT86IFJlc3BvbnNlTW9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoXHJcbiAgICAgICAgICAgIEFBRFNlcnZlclBhcmFtS2V5cy5SRVNQT05TRV9NT0RFLFxyXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoKHJlc3BvbnNlTW9kZSkgPyByZXNwb25zZU1vZGUgOiBSZXNwb25zZU1vZGUuUVVFUlkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBzY29wZXMuIHNldCBhZGRPaWRjU2NvcGVzIHRvIGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBzY29wZXMgaW4gbm9uLXVzZXIgc2NlbmFyaW9zXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVTZXRcclxuICAgICAqIEBwYXJhbSBhZGRPaWRjU2NvcGVzXHJcbiAgICAgKi9cclxuICAgIGFkZFNjb3BlcyhzY29wZXM6IHN0cmluZ1tdLCBhZGRPaWRjU2NvcGVzOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RTY29wZXMgPSBhZGRPaWRjU2NvcGVzID8gWy4uLnNjb3BlcyB8fCBbXSwgQ29uc3RhbnRzLk9QRU5JRF9TQ09QRSwgQ29uc3RhbnRzLlBST0ZJTEVfU0NPUEVdIDogc2NvcGVzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IHNjb3BlU2V0ID0gbmV3IFNjb3BlU2V0KHJlcXVlc3RTY29wZXMpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlNDT1BFLCBlbmNvZGVVUklDb21wb25lbnQoc2NvcGVTZXQucHJpbnRTY29wZXMoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqL1xyXG4gICAgYWRkQ2xpZW50SWQoY2xpZW50SWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMSUVOVF9JRCwgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcmVkaXJlY3RfdXJpXHJcbiAgICAgKiBAcGFyYW0gcmVkaXJlY3RVcmlcclxuICAgICAqL1xyXG4gICAgYWRkUmVkaXJlY3RVcmkocmVkaXJlY3RVcmk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFJlcXVlc3RWYWxpZGF0b3IudmFsaWRhdGVSZWRpcmVjdFVyaShyZWRpcmVjdFVyaSk7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuUkVESVJFQ1RfVVJJLCBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBwb3N0IGxvZ291dCByZWRpcmVjdFVyaVxyXG4gICAgICogQHBhcmFtIHJlZGlyZWN0VXJpXHJcbiAgICAgKi9cclxuICAgIGFkZFBvc3RMb2dvdXRSZWRpcmVjdFVyaShyZWRpcmVjdFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZVJlZGlyZWN0VXJpKHJlZGlyZWN0VXJpKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5QT1NUX0xPR09VVF9VUkksIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGlkX3Rva2VuX2hpbnQgdG8gbG9nb3V0IHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBpZFRva2VuSGludFxyXG4gICAgICovXHJcbiAgICBhZGRJZFRva2VuSGludChpZFRva2VuSGludDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuSURfVE9LRU5fSElOVCwgZW5jb2RlVVJJQ29tcG9uZW50KGlkVG9rZW5IaW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZG9tYWluX2hpbnRcclxuICAgICAqIEBwYXJhbSBkb21haW5IaW50XHJcbiAgICAgKi9cclxuICAgIGFkZERvbWFpbkhpbnQoZG9tYWluSGludDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChTU09UeXBlcy5ET01BSU5fSElOVCwgZW5jb2RlVVJJQ29tcG9uZW50KGRvbWFpbkhpbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBsb2dpbl9oaW50XHJcbiAgICAgKiBAcGFyYW0gbG9naW5IaW50XHJcbiAgICAgKi9cclxuICAgIGFkZExvZ2luSGludChsb2dpbkhpbnQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoU1NPVHlwZXMuTE9HSU5fSElOVCwgZW5jb2RlVVJJQ29tcG9uZW50KGxvZ2luSGludCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHNpZFxyXG4gICAgICogQHBhcmFtIHNpZFxyXG4gICAgICovXHJcbiAgICBhZGRTaWQoc2lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KFNTT1R5cGVzLlNJRCwgZW5jb2RlVVJJQ29tcG9uZW50KHNpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNsYWltc1xyXG4gICAgICogQHBhcmFtIGNsYWltc1xyXG4gICAgICovXHJcbiAgICBhZGRDbGFpbXMoY2xhaW1zPzogc3RyaW5nLCBjbGllbnRDYXBhYmlsaXRpZXM/OiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbWVyZ2VkQ2xhaW1zID0gdGhpcy5hZGRDbGllbnRDYXBhYmlsaXRpZXNUb0NsYWltcyhjbGFpbXMsIGNsaWVudENhcGFiaWxpdGllcyk7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZUNsYWltcyhtZXJnZWRDbGFpbXMpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMQUlNUywgZW5jb2RlVVJJQ29tcG9uZW50KG1lcmdlZENsYWltcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIGNvcnJlbGF0aW9uSWRcclxuICAgICAqIEBwYXJhbSBjb3JyZWxhdGlvbklkXHJcbiAgICAgKi9cclxuICAgIGFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ0xJRU5UX1JFUVVFU1RfSUQsIGVuY29kZVVSSUNvbXBvbmVudChjb3JyZWxhdGlvbklkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgbGlicmFyeSBpbmZvIHF1ZXJ5IHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGxpYnJhcnlJbmZvXHJcbiAgICAgKi9cclxuICAgIGFkZExpYnJhcnlJbmZvKGxpYnJhcnlJbmZvOiBMaWJyYXJ5SW5mbyk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRlbGVtZXRyeSBJbmZvXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfU0tVLCBsaWJyYXJ5SW5mby5za3UpO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlhfQ0xJRU5UX1ZFUiwgbGlicmFyeUluZm8udmVyc2lvbik7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuWF9DTElFTlRfT1MsIGxpYnJhcnlJbmZvLm9zKTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5YX0NMSUVOVF9DUFUsIGxpYnJhcnlJbmZvLmNwdSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgcHJvbXB0XHJcbiAgICAgKiBAcGFyYW0gcHJvbXB0XHJcbiAgICAgKi9cclxuICAgIGFkZFByb21wdChwcm9tcHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIFJlcXVlc3RWYWxpZGF0b3IudmFsaWRhdGVQcm9tcHQocHJvbXB0KTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KGAke0FBRFNlcnZlclBhcmFtS2V5cy5QUk9NUFR9YCwgZW5jb2RlVVJJQ29tcG9uZW50KHByb21wdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVcclxuICAgICAqL1xyXG4gICAgYWRkU3RhdGUoc3RhdGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShzdGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuU1RBVEUsIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBub25jZVxyXG4gICAgICogQHBhcmFtIG5vbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZE5vbmNlKG5vbmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5OT05DRSwgZW5jb2RlVVJJQ29tcG9uZW50KG5vbmNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY29kZV9jaGFsbGVuZ2UgYW5kIGNvZGVfY2hhbGxlbmdlX21ldGhvZFxyXG4gICAgICogLSB0aHJvdyBpZiBlaXRoZXIgb2YgdGhlbSBhcmUgbm90IHBhc3NlZFxyXG4gICAgICogQHBhcmFtIGNvZGVDaGFsbGVuZ2VcclxuICAgICAqIEBwYXJhbSBjb2RlQ2hhbGxlbmdlTWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGFkZENvZGVDaGFsbGVuZ2VQYXJhbXMoXHJcbiAgICAgICAgY29kZUNoYWxsZW5nZTogc3RyaW5nLFxyXG4gICAgICAgIGNvZGVDaGFsbGVuZ2VNZXRob2Q6IHN0cmluZ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci52YWxpZGF0ZUNvZGVDaGFsbGVuZ2VQYXJhbXMoY29kZUNoYWxsZW5nZSwgY29kZUNoYWxsZW5nZU1ldGhvZCk7XHJcbiAgICAgICAgaWYgKGNvZGVDaGFsbGVuZ2UgJiYgY29kZUNoYWxsZW5nZU1ldGhvZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DT0RFX0NIQUxMRU5HRSwgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGVDaGFsbGVuZ2UpKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuQ09ERV9DSEFMTEVOR0VfTUVUSE9ELCBlbmNvZGVVUklDb21wb25lbnQoY29kZUNoYWxsZW5nZU1ldGhvZCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ29kZUNoYWxsZW5nZVBhcmFtc0Vycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHRoZSBgYXV0aG9yaXphdGlvbl9jb2RlYCBwYXNzZWQgYnkgdGhlIHVzZXIgdG8gZXhjaGFuZ2UgZm9yIGEgdG9rZW5cclxuICAgICAqIEBwYXJhbSBjb2RlXHJcbiAgICAgKi9cclxuICAgIGFkZEF1dGhvcml6YXRpb25Db2RlKGNvZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNPREUsIGVuY29kZVVSSUNvbXBvbmVudChjb2RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgdGhlIGBhdXRob3JpemF0aW9uX2NvZGVgIHBhc3NlZCBieSB0aGUgdXNlciB0byBleGNoYW5nZSBmb3IgYSB0b2tlblxyXG4gICAgICogQHBhcmFtIGNvZGVcclxuICAgICAqL1xyXG4gICAgYWRkRGV2aWNlQ29kZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5ERVZJQ0VfQ09ERSwgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCB0aGUgYHJlZnJlc2hUb2tlbmAgcGFzc2VkIGJ5IHRoZSB1c2VyXHJcbiAgICAgKiBAcGFyYW0gcmVmcmVzaFRva2VuXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW46IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLlJFRlJFU0hfVE9LRU4sIGVuY29kZVVSSUNvbXBvbmVudChyZWZyZXNoVG9rZW4pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCB0aGUgYGNvZGVfdmVyaWZpZXJgIHBhc3NlZCBieSB0aGUgdXNlciB0byBleGNoYW5nZSBmb3IgYSB0b2tlblxyXG4gICAgICogQHBhcmFtIGNvZGVWZXJpZmllclxyXG4gICAgICovXHJcbiAgICBhZGRDb2RlVmVyaWZpZXIoY29kZVZlcmlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DT0RFX1ZFUklGSUVSLCBlbmNvZGVVUklDb21wb25lbnQoY29kZVZlcmlmaWVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xpZW50X3NlY3JldFxyXG4gICAgICogQHBhcmFtIGNsaWVudFNlY3JldFxyXG4gICAgICovXHJcbiAgICBhZGRDbGllbnRTZWNyZXQoY2xpZW50U2VjcmV0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5DTElFTlRfU0VDUkVULCBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50U2VjcmV0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xpZW50QXNzZXJ0aW9uIGZvciBjb25maWRlbnRpYWwgY2xpZW50IGZsb3dzXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50QXNzZXJ0aW9uXHJcbiAgICAgKi9cclxuICAgIGFkZENsaWVudEFzc2VydGlvbihjbGllbnRBc3NlcnRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMSUVOVF9BU1NFUlRJT04sIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRBc3NlcnRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjbGllbnRBc3NlcnRpb25UeXBlIGZvciBjb25maWRlbnRpYWwgY2xpZW50IGZsb3dzXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50QXNzZXJ0aW9uVHlwZVxyXG4gICAgICovXHJcbiAgICBhZGRDbGllbnRBc3NlcnRpb25UeXBlKGNsaWVudEFzc2VydGlvblR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLkNMSUVOVF9BU1NFUlRJT05fVFlQRSwgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudEFzc2VydGlvblR5cGUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBPQk8gYXNzZXJ0aW9uIGZvciBjb25maWRlbnRpYWwgY2xpZW50IGZsb3dzXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50QXNzZXJ0aW9uXHJcbiAgICAgKi9cclxuICAgIGFkZE9ib0Fzc2VydGlvbihvYm9Bc3NlcnRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoQUFEU2VydmVyUGFyYW1LZXlzLk9CT19BU1NFUlRJT04sIGVuY29kZVVSSUNvbXBvbmVudChvYm9Bc3NlcnRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBncmFudCB0eXBlXHJcbiAgICAgKiBAcGFyYW0gZ3JhbnRUeXBlXHJcbiAgICAgKi9cclxuICAgIGFkZFJlcXVlc3RUb2tlblVzZSh0b2tlblVzZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuUkVRVUVTVEVEX1RPS0VOX1VTRSwgZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuVXNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZ3JhbnQgdHlwZVxyXG4gICAgICogQHBhcmFtIGdyYW50VHlwZVxyXG4gICAgICovXHJcbiAgICBhZGRHcmFudFR5cGUoZ3JhbnRUeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuc2V0KEFBRFNlcnZlclBhcmFtS2V5cy5HUkFOVF9UWVBFLCBlbmNvZGVVUklDb21wb25lbnQoZ3JhbnRUeXBlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY2xpZW50IGluZm9cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFkZENsaWVudEluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChDbGllbnRJbmZvLCBcIjFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgZXh0cmFRdWVyeVBhcmFtc1xyXG4gICAgICogQHBhcmFtIGVRcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGFkZEV4dHJhUXVlcnlQYXJhbWV0ZXJzKGVRcGFyYW1zOiBTdHJpbmdEaWN0KTogdm9pZCB7XHJcbiAgICAgICAgUmVxdWVzdFZhbGlkYXRvci5zYW5pdGl6ZUVRUGFyYW1zKGVRcGFyYW1zLCB0aGlzLnBhcmFtZXRlcnMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGVRcGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChrZXksIGVRcGFyYW1zW2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENsaWVudENhcGFiaWxpdGllc1RvQ2xhaW1zKGNsYWltcz86IHN0cmluZywgY2xpZW50Q2FwYWJpbGl0aWVzPzogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG1lcmdlZENsYWltczogb2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBQYXJzZSBwcm92aWRlZCBjbGFpbXMgaW50byBKU09OIG9iamVjdCBvciBpbml0aWFsaXplIGVtcHR5IG9iamVjdFxyXG4gICAgICAgIGlmICghY2xhaW1zKSB7XHJcbiAgICAgICAgICAgIG1lcmdlZENsYWltcyA9IHt9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtZXJnZWRDbGFpbXMgPSBKU09OLnBhcnNlKGNsYWltcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDbGFpbXNSZXF1ZXN0RXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsaWVudENhcGFiaWxpdGllcyAmJiBjbGllbnRDYXBhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIW1lcmdlZENsYWltcy5oYXNPd25Qcm9wZXJ0eShDbGFpbXNSZXF1ZXN0S2V5cy5BQ0NFU1NfVE9LRU4pKXtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhY2Nlc3NfdG9rZW4ga2V5IHRvIGNsYWltcyBvYmplY3RcclxuICAgICAgICAgICAgICAgIG1lcmdlZENsYWltc1tDbGFpbXNSZXF1ZXN0S2V5cy5BQ0NFU1NfVE9LRU5dID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCB4bXNfY2MgY2xhaW0gd2l0aCBwcm92aWRlZCBjbGllbnRDYXBhYmlsaXRpZXMgdG8gYWNjZXNzX3Rva2VuIGtleVxyXG4gICAgICAgICAgICBtZXJnZWRDbGFpbXNbQ2xhaW1zUmVxdWVzdEtleXMuQUNDRVNTX1RPS0VOXVtDbGFpbXNSZXF1ZXN0S2V5cy5YTVNfQ0NdID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBjbGllbnRDYXBhYmlsaXRpZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtZXJnZWRDbGFpbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkcyBgdXNlcm5hbWVgIGZvciBQYXNzd29yZCBHcmFudCBmbG93XHJcbiAgICAgKiBAcGFyYW0gdXNlcm5hbWVcclxuICAgICAqL1xyXG4gICAgYWRkVXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoUGFzc3dvcmRHcmFudENvbnN0YW50cy51c2VybmFtZSwgdXNlcm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkcyBgcGFzc3dvcmRgIGZvciBQYXNzd29yZCBHcmFudCBmbG93XHJcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRcclxuICAgICAqL1xyXG4gICAgYWRkUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5zZXQoUGFzc3dvcmRHcmFudENvbnN0YW50cy5wYXNzd29yZCwgcGFzc3dvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkIHBvcF9qd2sgdG8gcXVlcnkgcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gY25mU3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGFkZFBvcFRva2VuKGNuZlN0cmluZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNuZlN0cmluZykpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuVE9LRU5fVFlQRSwgQXV0aGVudGljYXRpb25TY2hlbWUuUE9QKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNldChBQURTZXJ2ZXJQYXJhbUtleXMuUkVRX0NORiwgZW5jb2RlVVJJQ29tcG9uZW50KGNuZlN0cmluZykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgdG8gY3JlYXRlIGEgVVJMIGZyb20gdGhlIHBhcmFtcyBtYXBcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlckFycmF5OiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJBcnJheS5wdXNoKGAke2tleX09JHt2YWx1ZX1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1ldGVyQXJyYXkuam9pbihcIiZcIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogVXRpbGl0eSBjbGFzcyB3aGljaCBleHBvc2VzIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZGF0ZSBhbmQgdGltZSBvcGVyYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRpbWVVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUgKHNlY29uZHMpLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbm93U2Vjb25kcygpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBpZiBhIHRva2VuIGlzIGV4cGlyZWQgYmFzZWQgb24gZ2l2ZW4gVVRDIHRpbWUgaW4gc2Vjb25kcy5cclxuICAgICAqIEBwYXJhbSBleHBpcmVzT25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVG9rZW5FeHBpcmVkKGV4cGlyZXNPbjogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGZvciBhY2Nlc3MgdG9rZW4gZXhwaXJ5XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblNlYyA9IE51bWJlcihleHBpcmVzT24pIHx8IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0Q3VycmVudFRpbWVTZWMgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpICsgb2Zmc2V0OyBcclxuXHJcbiAgICAgICAgLy8gSWYgY3VycmVudCB0aW1lICsgb2Zmc2V0IGlzIGdyZWF0ZXIgdGhhbiB0b2tlbiBleHBpcmF0aW9uIHRpbWUsIHRoZW4gdG9rZW4gaXMgZXhwaXJlZC5cclxuICAgICAgICByZXR1cm4gKG9mZnNldEN1cnJlbnRUaW1lU2VjID4gZXhwaXJhdGlvblNlYyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcmVkZW50aWFsRW50aXR5IH0gZnJvbSBcIi4vQ3JlZGVudGlhbEVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBJRF9UT0tFTiBDYWNoZVxyXG4gKlxyXG4gKiBLZXk6VmFsdWUgU2NoZW1hOlxyXG4gKlxyXG4gKiBLZXkgRXhhbXBsZTogdWlkLnV0aWQtbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS1pZHRva2VuLWNsaWVudElkLWNvbnRvc28uY29tLVxyXG4gKlxyXG4gKiBWYWx1ZSBTY2hlbWE6XHJcbiAqIHtcclxuICogICAgICBob21lQWNjb3VudElkOiBob21lIGFjY291bnQgaWRlbnRpZmllciBmb3IgdGhlIGF1dGggc2NoZW1lLFxyXG4gKiAgICAgIGVudmlyb25tZW50OiBlbnRpdHkgdGhhdCBpc3N1ZWQgdGhlIHRva2VuLCByZXByZXNlbnRlZCBhcyBhIGZ1bGwgaG9zdFxyXG4gKiAgICAgIGNyZWRlbnRpYWxUeXBlOiBUeXBlIG9mIGNyZWRlbnRpYWwgYXMgYSBzdHJpbmcsIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogUmVmcmVzaFRva2VuLCBBY2Nlc3NUb2tlbiwgSWRUb2tlbiwgUGFzc3dvcmQsIENvb2tpZSwgQ2VydGlmaWNhdGUsIE90aGVyXHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBzZWNyZXQ6IEFjdHVhbCBjcmVkZW50aWFsIGFzIGEgc3RyaW5nXHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJZFRva2VuRW50aXR5IGV4dGVuZHMgQ3JlZGVudGlhbEVudGl0eSB7XHJcbiAgICByZWFsbTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIElkVG9rZW5FbnRpdHlcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25SZXN1bHRcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbkVudGl0eShcclxuICAgICAgICBob21lQWNjb3VudElkOiBzdHJpbmcsXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHN0cmluZyxcclxuICAgICAgICBpZFRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgY2xpZW50SWQ6IHN0cmluZyxcclxuICAgICAgICB0ZW5hbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIG9ib0Fzc2VydGlvbj86IHN0cmluZ1xyXG4gICAgKTogSWRUb2tlbkVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgaWRUb2tlbkVudGl0eSA9IG5ldyBJZFRva2VuRW50aXR5KCk7XHJcblxyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkuY3JlZGVudGlhbFR5cGUgPSBDcmVkZW50aWFsVHlwZS5JRF9UT0tFTjtcclxuICAgICAgICBpZFRva2VuRW50aXR5LmhvbWVBY2NvdW50SWQgPSBob21lQWNjb3VudElkO1xyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICBpZFRva2VuRW50aXR5LmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgaWRUb2tlbkVudGl0eS5zZWNyZXQgPSBpZFRva2VuO1xyXG4gICAgICAgIGlkVG9rZW5FbnRpdHkucmVhbG0gPSB0ZW5hbnRJZDtcclxuICAgICAgICBpZFRva2VuRW50aXR5Lm9ib0Fzc2VydGlvbiA9IG9ib0Fzc2VydGlvbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkVG9rZW5FbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZXMgYW4gZW50aXR5OiBjaGVja3MgZm9yIGFsbCBleHBlY3RlZCBwYXJhbXNcclxuICAgICAqIEBwYXJhbSBlbnRpdHlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSWRUb2tlbkVudGl0eShlbnRpdHk6IG9iamVjdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoIWVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlbnRpdHkuaGFzT3duUHJvcGVydHkoXCJob21lQWNjb3VudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImVudmlyb25tZW50XCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNyZWRlbnRpYWxUeXBlXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcInJlYWxtXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNsaWVudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcInNlY3JldFwiKSAmJlxyXG4gICAgICAgICAgICBlbnRpdHlbXCJjcmVkZW50aWFsVHlwZVwiXSA9PT0gQ3JlZGVudGlhbFR5cGUuSURfVE9LRU5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ3JlZGVudGlhbEVudGl0eSB9IGZyb20gXCIuL0NyZWRlbnRpYWxFbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlZGVudGlhbFR5cGUsIEF1dGhlbnRpY2F0aW9uU2NoZW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvVGltZVV0aWxzXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQUNDRVNTX1RPS0VOIENyZWRlbnRpYWwgVHlwZVxyXG4gKlxyXG4gKiBLZXk6VmFsdWUgU2NoZW1hOlxyXG4gKlxyXG4gKiBLZXkgRXhhbXBsZTogdWlkLnV0aWQtbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS1hY2Nlc3N0b2tlbi1jbGllbnRJZC1jb250b3NvLmNvbS11c2VyLnJlYWRcclxuICpcclxuICogVmFsdWUgU2NoZW1hOlxyXG4gKiB7XHJcbiAqICAgICAgaG9tZUFjY291bnRJZDogaG9tZSBhY2NvdW50IGlkZW50aWZpZXIgZm9yIHRoZSBhdXRoIHNjaGVtZSxcclxuICogICAgICBlbnZpcm9ubWVudDogZW50aXR5IHRoYXQgaXNzdWVkIHRoZSB0b2tlbiwgcmVwcmVzZW50ZWQgYXMgYSBmdWxsIGhvc3RcclxuICogICAgICBjcmVkZW50aWFsVHlwZTogVHlwZSBvZiBjcmVkZW50aWFsIGFzIGEgc3RyaW5nLCBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFJlZnJlc2hUb2tlbiwgQWNjZXNzVG9rZW4sIElkVG9rZW4sIFBhc3N3b3JkLCBDb29raWUsIENlcnRpZmljYXRlLCBPdGhlclxyXG4gKiAgICAgIGNsaWVudElkOiBjbGllbnQgSUQgb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAqICAgICAgc2VjcmV0OiBBY3R1YWwgY3JlZGVudGlhbCBhcyBhIHN0cmluZ1xyXG4gKiAgICAgIGZhbWlseUlkOiBGYW1pbHkgSUQgaWRlbnRpZmllciwgdXN1YWxseSBvbmx5IHVzZWQgZm9yIHJlZnJlc2ggdG9rZW5zXHJcbiAqICAgICAgcmVhbG06IEZ1bGwgdGVuYW50IG9yIG9yZ2FuaXphdGlvbmFsIGlkZW50aWZpZXIgdGhhdCB0aGUgYWNjb3VudCBiZWxvbmdzIHRvXHJcbiAqICAgICAgdGFyZ2V0OiBQZXJtaXNzaW9ucyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgdG9rZW4sIG9yIGZvciByZWZyZXNoIHRva2VucywgdGhlIHJlc291cmNlIGlkZW50aWZpZXIuXHJcbiAqICAgICAgY2FjaGVkQXQ6IEFic29sdXRlIGRldmljZSB0aW1lIHdoZW4gZW50cnkgd2FzIGNyZWF0ZWQgaW4gdGhlIGNhY2hlLlxyXG4gKiAgICAgIGV4cGlyZXNPbjogVG9rZW4gZXhwaXJ5IHRpbWUsIGNhbGN1bGF0ZWQgYmFzZWQgb24gY3VycmVudCBVVEMgdGltZSBpbiBzZWNvbmRzLiBSZXByZXNlbnRlZCBhcyBhIHN0cmluZy5cclxuICogICAgICBleHRlbmRlZEV4cGlyZXNPbjogQWRkaXRpb25hbCBleHRlbmRlZCBleHBpcnkgdGltZSB1bnRpbCB3aGVuIHRva2VuIGlzIHZhbGlkIGluIGNhc2Ugb2Ygc2VydmVyLXNpZGUgb3V0YWdlLiBSZXByZXNlbnRlZCBhcyBzdHJpbmcgaW4gVVRDIHNlY29uZHMuXHJcbiAqICAgICAga2V5SWQ6IHVzZWQgZm9yIFBPUCBhbmQgU1NIIHRva2VuVHlwZXNcclxuICogICAgICB0b2tlblR5cGU6IFR5cGUgb2YgdGhlIHRva2VuIGlzc3VlZC4gVXN1YWxseSBcIkJlYXJlclwiXHJcbiAqIH1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkVudGl0eSBleHRlbmRzIENyZWRlbnRpYWxFbnRpdHkge1xyXG4gICAgcmVhbG06IHN0cmluZztcclxuICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgY2FjaGVkQXQ6IHN0cmluZztcclxuICAgIGV4cGlyZXNPbjogc3RyaW5nO1xyXG4gICAgZXh0ZW5kZWRFeHBpcmVzT24/OiBzdHJpbmc7XHJcbiAgICByZWZyZXNoT24/OiBzdHJpbmc7XHJcbiAgICBrZXlJZD86IHN0cmluZzsgLy8gZm9yIFBPUCBhbmQgU1NIIHRva2VuVHlwZXNcclxuICAgIHRva2VuVHlwZT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBBY2Nlc3NUb2tlbkVudGl0eVxyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxyXG4gICAgICogQHBhcmFtIGFjY2Vzc1Rva2VuXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICogQHBhcmFtIGV4cGlyZXNPblxyXG4gICAgICogQHBhcmFtIGV4dEV4cGlyZXNPblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjZXNzVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgaG9tZUFjY291bnRJZDogc3RyaW5nLFxyXG4gICAgICAgIGVudmlyb25tZW50OiBzdHJpbmcsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IHN0cmluZyxcclxuICAgICAgICBjbGllbnRJZDogc3RyaW5nLFxyXG4gICAgICAgIHRlbmFudElkOiBzdHJpbmcsXHJcbiAgICAgICAgc2NvcGVzOiBzdHJpbmcsXHJcbiAgICAgICAgZXhwaXJlc09uOiBudW1iZXIsXHJcbiAgICAgICAgZXh0RXhwaXJlc09uOiBudW1iZXIsXHJcbiAgICAgICAgdG9rZW5UeXBlPzogc3RyaW5nLFxyXG4gICAgICAgIG9ib0Fzc2VydGlvbj86IHN0cmluZ1xyXG4gICAgKTogQWNjZXNzVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IGF0RW50aXR5OiBBY2Nlc3NUb2tlbkVudGl0eSA9IG5ldyBBY2Nlc3NUb2tlbkVudGl0eSgpO1xyXG5cclxuICAgICAgICBhdEVudGl0eS5ob21lQWNjb3VudElkID0gaG9tZUFjY291bnRJZDtcclxuICAgICAgICBhdEVudGl0eS5jcmVkZW50aWFsVHlwZSA9IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTjtcclxuICAgICAgICBhdEVudGl0eS5zZWNyZXQgPSBhY2Nlc3NUb2tlbjtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBUaW1lVXRpbHMubm93U2Vjb25kcygpO1xyXG4gICAgICAgIGF0RW50aXR5LmNhY2hlZEF0ID0gY3VycmVudFRpbWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUb2tlbiBleHBpcnkgdGltZS5cclxuICAgICAgICAgKiBUaGlzIHZhbHVlIHNob3VsZCBiZSDigK9jYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBjdXJyZW50IFVUQyB0aW1lIG1lYXN1cmVkIGxvY2FsbHkgYW5kIHRoZSB2YWx1ZSDigK9leHBpcmVzX2luIFJlcHJlc2VudGVkIGFzIGEgc3RyaW5nIGluIEpTT04uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXRFbnRpdHkuZXhwaXJlc09uID0gZXhwaXJlc09uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYXRFbnRpdHkuZXh0ZW5kZWRFeHBpcmVzT24gPSBleHRFeHBpcmVzT24udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgYXRFbnRpdHkuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgICAgICBhdEVudGl0eS5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgICAgIGF0RW50aXR5LnJlYWxtID0gdGVuYW50SWQ7XHJcbiAgICAgICAgYXRFbnRpdHkudGFyZ2V0ID0gc2NvcGVzO1xyXG4gICAgICAgIGF0RW50aXR5Lm9ib0Fzc2VydGlvbiA9IG9ib0Fzc2VydGlvbjtcclxuXHJcbiAgICAgICAgYXRFbnRpdHkudG9rZW5UeXBlID0gU3RyaW5nVXRpbHMuaXNFbXB0eSh0b2tlblR5cGUpID8gQXV0aGVudGljYXRpb25TY2hlbWUuQkVBUkVSIDogdG9rZW5UeXBlO1xyXG4gICAgICAgIHJldHVybiBhdEVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlcyBhbiBlbnRpdHk6IGNoZWNrcyBmb3IgYWxsIGV4cGVjdGVkIHBhcmFtc1xyXG4gICAgICogQHBhcmFtIGVudGl0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBY2Nlc3NUb2tlbkVudGl0eShlbnRpdHk6IG9iamVjdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoIWVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlbnRpdHkuaGFzT3duUHJvcGVydHkoXCJob21lQWNjb3VudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImVudmlyb25tZW50XCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNyZWRlbnRpYWxUeXBlXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcInJlYWxtXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNsaWVudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcInNlY3JldFwiKSAmJlxyXG4gICAgICAgICAgICBlbnRpdHkuaGFzT3duUHJvcGVydHkoXCJ0YXJnZXRcIikgJiZcclxuICAgICAgICAgICAgZW50aXR5W1wiY3JlZGVudGlhbFR5cGVcIl0gPT09IENyZWRlbnRpYWxUeXBlLkFDQ0VTU19UT0tFTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcmVkZW50aWFsRW50aXR5IH0gZnJvbSBcIi4vQ3JlZGVudGlhbEVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBSRUZSRVNIX1RPS0VOIENhY2hlXHJcbiAqXHJcbiAqIEtleTpWYWx1ZSBTY2hlbWE6XHJcbiAqXHJcbiAqIEtleSBFeGFtcGxlOiB1aWQudXRpZC1sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLXJlZnJlc2h0b2tlbi1jbGllbnRJZC0tXHJcbiAqXHJcbiAqIFZhbHVlOlxyXG4gKiB7XHJcbiAqICAgICAgaG9tZUFjY291bnRJZDogaG9tZSBhY2NvdW50IGlkZW50aWZpZXIgZm9yIHRoZSBhdXRoIHNjaGVtZSxcclxuICogICAgICBlbnZpcm9ubWVudDogZW50aXR5IHRoYXQgaXNzdWVkIHRoZSB0b2tlbiwgcmVwcmVzZW50ZWQgYXMgYSBmdWxsIGhvc3RcclxuICogICAgICBjcmVkZW50aWFsVHlwZTogVHlwZSBvZiBjcmVkZW50aWFsIGFzIGEgc3RyaW5nLCBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFJlZnJlc2hUb2tlbiwgQWNjZXNzVG9rZW4sIElkVG9rZW4sIFBhc3N3b3JkLCBDb29raWUsIENlcnRpZmljYXRlLCBPdGhlclxyXG4gKiAgICAgIGNsaWVudElkOiBjbGllbnQgSUQgb2YgdGhlIGFwcGxpY2F0aW9uXHJcbiAqICAgICAgc2VjcmV0OiBBY3R1YWwgY3JlZGVudGlhbCBhcyBhIHN0cmluZ1xyXG4gKiAgICAgIGZhbWlseUlkOiBGYW1pbHkgSUQgaWRlbnRpZmllciwgJzEnIHJlcHJlc2VudHMgTWljcm9zb2Z0IEZhbWlseVxyXG4gKiAgICAgIHJlYWxtOiBGdWxsIHRlbmFudCBvciBvcmdhbml6YXRpb25hbCBpZGVudGlmaWVyIHRoYXQgdGhlIGFjY291bnQgYmVsb25ncyB0b1xyXG4gKiAgICAgIHRhcmdldDogUGVybWlzc2lvbnMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gdGhlIHRva2VuLCBvciBmb3IgcmVmcmVzaCB0b2tlbnMsIHRoZSByZXNvdXJjZSBpZGVudGlmaWVyLlxyXG4gKiB9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFRva2VuRW50aXR5IGV4dGVuZHMgQ3JlZGVudGlhbEVudGl0eSB7XHJcbiAgICBmYW1pbHlJZD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBSZWZyZXNoVG9rZW5FbnRpdHlcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkXHJcbiAgICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25SZXN1bHRcclxuICAgICAqIEBwYXJhbSBjbGllbnRJZFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVmcmVzaFRva2VuRW50aXR5KFxyXG4gICAgICAgIGhvbWVBY2NvdW50SWQ6IHN0cmluZyxcclxuICAgICAgICBlbnZpcm9ubWVudDogc3RyaW5nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogc3RyaW5nLFxyXG4gICAgICAgIGNsaWVudElkOiBzdHJpbmcsXHJcbiAgICAgICAgZmFtaWx5SWQ/OiBzdHJpbmcsXHJcbiAgICAgICAgb2JvQXNzZXJ0aW9uPzogc3RyaW5nXHJcbiAgICApOiBSZWZyZXNoVG9rZW5FbnRpdHkge1xyXG4gICAgICAgIGNvbnN0IHJ0RW50aXR5ID0gbmV3IFJlZnJlc2hUb2tlbkVudGl0eSgpO1xyXG5cclxuICAgICAgICBydEVudGl0eS5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgICAgIHJ0RW50aXR5LmNyZWRlbnRpYWxUeXBlID0gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTjtcclxuICAgICAgICBydEVudGl0eS5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIHJ0RW50aXR5LmhvbWVBY2NvdW50SWQgPSBob21lQWNjb3VudElkO1xyXG4gICAgICAgIHJ0RW50aXR5LnNlY3JldCA9IHJlZnJlc2hUb2tlbjtcclxuICAgICAgICBydEVudGl0eS5vYm9Bc3NlcnRpb24gPSBvYm9Bc3NlcnRpb247XHJcblxyXG4gICAgICAgIGlmIChmYW1pbHlJZClcclxuICAgICAgICAgICAgcnRFbnRpdHkuZmFtaWx5SWQgPSBmYW1pbHlJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0RW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGFuIGVudGl0eTogY2hlY2tzIGZvciBhbGwgZXhwZWN0ZWQgcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1JlZnJlc2hUb2tlbkVudGl0eShlbnRpdHk6IG9iamVjdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoIWVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlbnRpdHkuaGFzT3duUHJvcGVydHkoXCJob21lQWNjb3VudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImVudmlyb25tZW50XCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNyZWRlbnRpYWxUeXBlXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNsaWVudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcInNlY3JldFwiKSAmJlxyXG4gICAgICAgICAgICBlbnRpdHlbXCJjcmVkZW50aWFsVHlwZVwiXSA9PT0gQ3JlZGVudGlhbFR5cGUuUkVGUkVTSF9UT0tFTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL1NlcnZlckVycm9yXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UgY2xhc3MgY29udGFpbmluZyBzdHJpbmcgY29uc3RhbnRzIHVzZWQgYnkgZXJyb3IgY29kZXMgYW5kIG1lc3NhZ2VzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlID0gW1xyXG4gICAgXCJpbnRlcmFjdGlvbl9yZXF1aXJlZFwiLFxyXG4gICAgXCJjb25zZW50X3JlcXVpcmVkXCIsXHJcbiAgICBcImxvZ2luX3JlcXVpcmVkXCJcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aFN1YkVycm9yTWVzc2FnZSA9IFtcclxuICAgIFwibWVzc2FnZV9vbmx5XCIsXHJcbiAgICBcImFkZGl0aW9uYWxfYWN0aW9uXCIsXHJcbiAgICBcImJhc2ljX2FjdGlvblwiLFxyXG4gICAgXCJ1c2VyX3Bhc3N3b3JkX2V4cGlyZWRcIixcclxuICAgIFwiY29uc2VudF9yZXF1aXJlZFwiXHJcbl07XHJcblxyXG4vKipcclxuICogRXJyb3IgdGhyb3duIHdoZW4gdXNlciBpbnRlcmFjdGlvbiBpcyByZXF1aXJlZCBhdCB0aGUgYXV0aCBzZXJ2ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU/OiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZywgc3ViRXJyb3I/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSwgc3ViRXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihlcnJvckNvZGU/OiBzdHJpbmcsIGVycm9yU3RyaW5nPzogc3RyaW5nLCBzdWJFcnJvcj86IHN0cmluZykgOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvckNvZGUgPSAhIWVycm9yQ29kZSAmJiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbmRleE9mKGVycm9yQ29kZSkgPiAtMTtcclxuICAgICAgICBjb25zdCBpc0ludGVyYWN0aW9uUmVxdWlyZWRTdWJFcnJvciA9ICEhc3ViRXJyb3IgJiYgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhTdWJFcnJvck1lc3NhZ2UuaW5kZXhPZihzdWJFcnJvcikgPiAtMTtcclxuICAgICAgICBjb25zdCBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvckRlc2MgPSAhIWVycm9yU3RyaW5nICYmIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLnNvbWUoKGlyRXJyb3JDb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvclN0cmluZy5pbmRleE9mKGlyRXJyb3JDb2RlKSA+IC0xO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3JDb2RlIHx8IGlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yRGVzYyB8fCBpc0ludGVyYWN0aW9uUmVxdWlyZWRTdWJFcnJvcjtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi9JZFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFRva2VuRW50aXR5IH0gZnJvbSBcIi4vUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi9BY2NvdW50RW50aXR5XCI7XHJcbmltcG9ydCB7IEFwcE1ldGFkYXRhRW50aXR5IH0gZnJvbSBcIi4vQXBwTWV0YWRhdGFFbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWNoZVJlY29yZCB7XHJcbiAgICBhY2NvdW50OiBBY2NvdW50RW50aXR5IHwgbnVsbDtcclxuICAgIGlkVG9rZW46IElkVG9rZW5FbnRpdHkgfCBudWxsO1xyXG4gICAgYWNjZXNzVG9rZW46IEFjY2Vzc1Rva2VuRW50aXR5IHwgbnVsbDtcclxuICAgIHJlZnJlc2hUb2tlbjogUmVmcmVzaFRva2VuRW50aXR5IHwgbnVsbDtcclxuICAgIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YUVudGl0eSB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudEVudGl0eT86IEFjY291bnRFbnRpdHkgfCBudWxsLCBpZFRva2VuRW50aXR5PzogSWRUb2tlbkVudGl0eSB8IG51bGwsIGFjY2Vzc1Rva2VuRW50aXR5PzogQWNjZXNzVG9rZW5FbnRpdHkgfCBudWxsLCByZWZyZXNoVG9rZW5FbnRpdHk/OiBSZWZyZXNoVG9rZW5FbnRpdHkgfCBudWxsLCBhcHBNZXRhZGF0YUVudGl0eT86IEFwcE1ldGFkYXRhRW50aXR5IHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnRFbnRpdHkgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuRW50aXR5IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuRW50aXR5IHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW4gPSByZWZyZXNoVG9rZW5FbnRpdHkgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLmFwcE1ldGFkYXRhID0gYXBwTWV0YWRhdGFFbnRpdHkgfHwgbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi4vY3J5cHRvL0lDcnlwdG9cIjtcclxuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSBcIi4vVGltZVV0aWxzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHdoaWNoIGRlZmluZXMgdGhlIG9iamVjdCB0aGF0IGlzIHN0cmluZ2lmaWVkLCBlbmNvZGVkIGFuZCBzZW50IGluIHRoZSBzdGF0ZSB2YWx1ZS5cclxuICogQ29udGFpbnMgdGhlIGZvbGxvd2luZzpcclxuICogLSBpZCAtIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHJlcXVlc3RcclxuICogLSB0cyAtIHRpbWVzdGFtcCBmb3IgdGhlIHRpbWUgdGhlIHJlcXVlc3Qgd2FzIG1hZGUuIFVzZWQgdG8gZW5zdXJlIHRoYXQgdG9rZW4gZXhwaXJhdGlvbiBpcyBub3QgY2FsY3VsYXRlZCBpbmNvcnJlY3RseS5cclxuICogLSBwbGF0Zm9ybVN0YXRlIC0gc3RyaW5nIHZhbHVlIHNlbnQgZnJvbSB0aGUgcGxhdGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaWJyYXJ5U3RhdGVPYmplY3QgPSB7XHJcbiAgICBpZDogc3RyaW5nLFxyXG4gICAgdHM6IG51bWJlcixcclxuICAgIG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XHJcbn07XHJcblxyXG4vKipcclxuICogVHlwZSB3aGljaCBkZWZpbmVzIHRoZSBzdHJpbmdpZmllZCBhbmQgZW5jb2RlZCBvYmplY3Qgc2VudCB0byB0aGUgc2VydmljZSBpbiB0aGUgYXV0aG9yaXplIHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0U3RhdGVPYmplY3QgPSB7XHJcbiAgICB1c2VyUmVxdWVzdFN0YXRlOiBzdHJpbmcsXHJcbiAgICBsaWJyYXJ5U3RhdGU6IExpYnJhcnlTdGF0ZU9iamVjdFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHdoaWNoIHByb3ZpZGVzIGhlbHBlcnMgZm9yIE9BdXRoIDIuMCBwcm90b2NvbCBzcGVjaWZpYyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQcm90b2NvbFV0aWxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZHMgdXNlciBzdGF0ZSB3aXRoIHJhbmRvbSBndWlkLCBvciByZXR1cm5zIHJhbmRvbSBndWlkLlxyXG4gICAgICogQHBhcmFtIHVzZXJTdGF0ZSBcclxuICAgICAqIEBwYXJhbSByYW5kb21HdWlkIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2V0UmVxdWVzdFN0YXRlKGNyeXB0b09iajogSUNyeXB0bywgdXNlclN0YXRlPzogc3RyaW5nLCBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbGlicmFyeVN0YXRlID0gUHJvdG9jb2xVdGlscy5nZW5lcmF0ZUxpYnJhcnlTdGF0ZShjcnlwdG9PYmosIG1ldGEpO1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nVXRpbHMuaXNFbXB0eSh1c2VyU3RhdGUpID8gYCR7bGlicmFyeVN0YXRlfSR7Q29uc3RhbnRzLlJFU09VUkNFX0RFTElNfSR7dXNlclN0YXRlfWAgOiBsaWJyYXJ5U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIHN0YXRlIHZhbHVlIHVzZWQgYnkgdGhlIGNvbW1vbiBsaWJyYXJ5LlxyXG4gICAgICogQHBhcmFtIHJhbmRvbUd1aWQgXHJcbiAgICAgKiBAcGFyYW0gY3J5cHRvT2JqIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVMaWJyYXJ5U3RhdGUoY3J5cHRvT2JqOiBJQ3J5cHRvLCBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFjcnlwdG9PYmopIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vQ3J5cHRvT2JqZWN0RXJyb3IoXCJnZW5lcmF0ZUxpYnJhcnlTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHN0YXRlIG9iamVjdCBjb250YWluaW5nIGEgdW5pcXVlIGlkIGFuZCB0aGUgdGltZXN0YW1wIG9mIHRoZSByZXF1ZXN0IGNyZWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc3RhdGVPYmo6IExpYnJhcnlTdGF0ZU9iamVjdCA9IHtcclxuICAgICAgICAgICAgaWQ6IGNyeXB0b09iai5jcmVhdGVOZXdHdWlkKCksXHJcbiAgICAgICAgICAgIHRzOiBUaW1lVXRpbHMubm93U2Vjb25kcygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgc3RhdGVPYmoubWV0YSA9IG1ldGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdGF0ZVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHN0YXRlT2JqKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyeXB0b09iai5iYXNlNjRFbmNvZGUoc3RhdGVTdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2VzIHRoZSBzdGF0ZSBpbnRvIHRoZSBSZXF1ZXN0U3RhdGVPYmplY3QsIHdoaWNoIGNvbnRhaW5zIHRoZSBMaWJyYXJ5U3RhdGUgaW5mbyBhbmQgdGhlIHN0YXRlIHBhc3NlZCBieSB0aGUgdXNlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBcclxuICAgICAqIEBwYXJhbSBjcnlwdG9PYmogXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVJlcXVlc3RTdGF0ZShjcnlwdG9PYmo6IElDcnlwdG8sIHN0YXRlOiBzdHJpbmcpOiBSZXF1ZXN0U3RhdGVPYmplY3Qge1xyXG4gICAgICAgIGlmICghY3J5cHRvT2JqKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0NyeXB0b09iamVjdEVycm9yKFwicGFyc2VSZXF1ZXN0U3RhdGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShzdGF0ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKHN0YXRlLCBcIk51bGwsIHVuZGVmaW5lZCBvciBlbXB0eSBzdGF0ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBzdGF0ZSBiZXR3ZWVuIGxpYnJhcnkgc3RhdGUgYW5kIHVzZXIgcGFzc2VkIHN0YXRlIGFuZCBkZWNvZGUgdGhlbSBzZXBhcmF0ZWx5XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0U3RhdGUgPSBkZWNvZGVVUklDb21wb25lbnQoc3RhdGUpLnNwbGl0KENvbnN0YW50cy5SRVNPVVJDRV9ERUxJTSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpYnJhcnlTdGF0ZSA9IHNwbGl0U3RhdGVbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJTdGF0ZSA9IHNwbGl0U3RhdGUubGVuZ3RoID4gMSA/IHNwbGl0U3RhdGUuc2xpY2UoMSkuam9pbihDb25zdGFudHMuUkVTT1VSQ0VfREVMSU0pIDogXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgbGlicmFyeVN0YXRlU3RyaW5nID0gY3J5cHRvT2JqLmJhc2U2NERlY29kZShsaWJyYXJ5U3RhdGUpO1xyXG4gICAgICAgICAgICBjb25zdCBsaWJyYXJ5U3RhdGVPYmogPSBKU09OLnBhcnNlKGxpYnJhcnlTdGF0ZVN0cmluZykgYXMgTGlicmFyeVN0YXRlT2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXNlclJlcXVlc3RTdGF0ZTogIVN0cmluZ1V0aWxzLmlzRW1wdHkodXNlclN0YXRlKSA/IHVzZXJTdGF0ZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBsaWJyYXJ5U3RhdGU6IGxpYnJhcnlTdGF0ZU9ialxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZFN0YXRlRXJyb3Ioc3RhdGUsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElDcnlwdG8gfSBmcm9tIFwiLi9JQ3J5cHRvXCI7XHJcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gXCIuLi9hY2NvdW50L0F1dGhUb2tlblwiO1xyXG5pbXBvcnQgeyBUb2tlbkNsYWltcyB9IGZyb20gXCIuLi9hY2NvdW50L1Rva2VuQ2xhaW1zXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgVXJsU3RyaW5nIH0gZnJvbSBcIi4uL3VybC9VcmxTdHJpbmdcIjtcclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi91cmwvSVVyaVwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogU2VlIGVTVFMgZG9jcyBmb3IgbW9yZSBpbmZvLlxyXG4gKiAtIEEga2lkIGVsZW1lbnQsIHdpdGggdGhlIHZhbHVlIGNvbnRhaW5pbmcgYW4gUkZDIDc2MzgtY29tcGxpYW50IEpXSyB0aHVtYnByaW50IHRoYXQgaXMgYmFzZTY0IGVuY29kZWQuXHJcbiAqIC0gIHhtc19rc2wgZWxlbWVudCwgcmVwcmVzZW50aW5nIHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIHRoZSBrZXkncyBzZWNyZXQgY29tcG9uZW50IG9uIHRoZSBjbGllbnQgZGV2aWNlLiBPbmUgb2YgdHdvIHZhbHVlczpcclxuICogICAgICAtIHN3OiBzb2Z0d2FyZSBzdG9yYWdlXHJcbiAqICAgICAgLSB1aHc6IGhhcmR3YXJlIHN0b3JhZ2VcclxuICovXHJcbnR5cGUgUmVxQ25mID0ge1xyXG4gICAga2lkOiBzdHJpbmc7XHJcbiAgICB4bXNfa3NsOiBLZXlMb2NhdGlvbjtcclxufTtcclxuXHJcbmVudW0gS2V5TG9jYXRpb24ge1xyXG4gICAgU1cgPSBcInN3XCIsXHJcbiAgICBVSFcgPSBcInVod1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3BUb2tlbkdlbmVyYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBjcnlwdG9VdGlsczogSUNyeXB0bztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjcnlwdG9VdGlsczogSUNyeXB0bykge1xyXG4gICAgICAgIHRoaXMuY3J5cHRvVXRpbHMgPSBjcnlwdG9VdGlscztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZW5lcmF0ZUNuZihyZXNvdXJjZVJlcXVlc3RNZXRob2Q6IHN0cmluZywgcmVzb3VyY2VSZXF1ZXN0VXJpOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IGtpZFRodW1icHJpbnQgPSBhd2FpdCB0aGlzLmNyeXB0b1V0aWxzLmdldFB1YmxpY0tleVRodW1icHJpbnQocmVzb3VyY2VSZXF1ZXN0TWV0aG9kLCByZXNvdXJjZVJlcXVlc3RVcmkpO1xyXG4gICAgICAgIGNvbnN0IHJlcUNuZjogUmVxQ25mID0ge1xyXG4gICAgICAgICAgICBraWQ6IGtpZFRodW1icHJpbnQsXHJcbiAgICAgICAgICAgIHhtc19rc2w6IEtleUxvY2F0aW9uLlNXXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUoSlNPTi5zdHJpbmdpZnkocmVxQ25mKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2lnblBvcFRva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHJlc291cmNlUmVxdWVzdE1ldGhvZDogc3RyaW5nLCByZXNvdXJjZVJlcXVlc3RVcmk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5DbGFpbXM6IFRva2VuQ2xhaW1zIHwgbnVsbCA9IEF1dGhUb2tlbi5leHRyYWN0VG9rZW5DbGFpbXMoYWNjZXNzVG9rZW4sIHRoaXMuY3J5cHRvVXRpbHMpO1xyXG4gICAgICAgIGNvbnN0IHJlc291cmNlVXJsU3RyaW5nOiBVcmxTdHJpbmcgPSBuZXcgVXJsU3RyaW5nKHJlc291cmNlUmVxdWVzdFVyaSk7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VVcmxDb21wb25lbnRzOiBJVXJpID0gcmVzb3VyY2VVcmxTdHJpbmcuZ2V0VXJsQ29tcG9uZW50cygpO1xyXG5cclxuICAgICAgICBpZiAoIXRva2VuQ2xhaW1zPy5jbmY/LmtpZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5DbGFpbXNSZXF1aXJlZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5jcnlwdG9VdGlscy5zaWduSnd0KHtcclxuICAgICAgICAgICAgYXQ6IGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICB0czogYCR7VGltZVV0aWxzLm5vd1NlY29uZHMoKX1gLFxyXG4gICAgICAgICAgICBtOiByZXNvdXJjZVJlcXVlc3RNZXRob2QudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgdTogcmVzb3VyY2VVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCB8fCBcIlwiLFxyXG4gICAgICAgICAgICBub25jZTogdGhpcy5jcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCksXHJcbiAgICAgICAgICAgIHA6IHJlc291cmNlVXJsQ29tcG9uZW50cy5BYnNvbHV0ZVBhdGgsXHJcbiAgICAgICAgICAgIHE6IFtbXSwgcmVzb3VyY2VVcmxDb21wb25lbnRzLlF1ZXJ5U3RyaW5nXSxcclxuICAgICAgICB9LCB0b2tlbkNsYWltcy5jbmYua2lkKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFQUF9NRVRBREFUQSwgU2VwYXJhdG9ycyB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbi8qKlxyXG4gKiBBUFBfTUVUQURBVEEgQ2FjaGVcclxuICpcclxuICogS2V5OlZhbHVlIFNjaGVtYTpcclxuICpcclxuICogS2V5OiBhcHBtZXRhZGF0YS08ZW52aXJvbm1lbnQ+LTxjbGllbnRfaWQ+XHJcbiAqXHJcbiAqIFZhbHVlOlxyXG4gKiB7XHJcbiAqICAgICAgY2xpZW50SWQ6IGNsaWVudCBJRCBvZiB0aGUgYXBwbGljYXRpb25cclxuICogICAgICBlbnZpcm9ubWVudDogZW50aXR5IHRoYXQgaXNzdWVkIHRoZSB0b2tlbiwgcmVwcmVzZW50ZWQgYXMgYSBmdWxsIGhvc3RcclxuICogICAgICBmYW1pbHlJZDogRmFtaWx5IElEIGlkZW50aWZpZXIsICcxJyByZXByZXNlbnRzIE1pY3Jvc29mdCBGYW1pbHlcclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwcE1ldGFkYXRhRW50aXR5IHtcclxuICAgIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBlbnZpcm9ubWVudDogc3RyaW5nO1xyXG4gICAgZmFtaWx5SWQ/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBBcHBNZXRhZGF0YSBDYWNoZSBLZXkgYXMgcGVyIHRoZSBzY2hlbWE6IGFwcG1ldGFkYXRhLTxlbnZpcm9ubWVudD4tPGNsaWVudF9pZD5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVBcHBNZXRhZGF0YUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBBcHBNZXRhZGF0YUVudGl0eS5nZW5lcmF0ZUFwcE1ldGFkYXRhQ2FjaGVLZXkodGhpcy5lbnZpcm9ubWVudCwgdGhpcy5jbGllbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBBcHBNZXRhZGF0YSBDYWNoZSBLZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlQXBwTWV0YWRhdGFDYWNoZUtleShlbnZpcm9ubWVudDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhcHBNZXRhRGF0YUtleUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgICAgICBBUFBfTUVUQURBVEEsXHJcbiAgICAgICAgICAgIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICBjbGllbnRJZCxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBhcHBNZXRhRGF0YUtleUFycmF5LmpvaW4oU2VwYXJhdG9ycy5DQUNIRV9LRVlfU0VQQVJBVE9SKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBBcHBNZXRhZGF0YUVudGl0eVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqIEBwYXJhbSBmYW1pbHlJZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQXBwTWV0YWRhdGFFbnRpdHkoY2xpZW50SWQ6IHN0cmluZywgZW52aXJvbm1lbnQ6IHN0cmluZywgZmFtaWx5SWQ/OiBzdHJpbmcpOiBBcHBNZXRhZGF0YUVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgYXBwTWV0YWRhdGEgPSBuZXcgQXBwTWV0YWRhdGFFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgYXBwTWV0YWRhdGEuY2xpZW50SWQgPSBjbGllbnRJZDtcclxuICAgICAgICBhcHBNZXRhZGF0YS5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gICAgICAgIGlmIChmYW1pbHlJZCkge1xyXG4gICAgICAgICAgICBhcHBNZXRhZGF0YS5mYW1pbHlJZCA9IGZhbWlseUlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFwcE1ldGFkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGFuIGVudGl0eTogY2hlY2tzIGZvciBhbGwgZXhwZWN0ZWQgcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FwcE1ldGFkYXRhRW50aXR5KGtleTogc3RyaW5nLCBlbnRpdHk6IG9iamVjdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoIWVudGl0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBrZXkuaW5kZXhPZihBUFBfTUVUQURBVEEpID09PSAwICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNsaWVudElkXCIpICYmXHJcbiAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImVudmlyb25tZW50XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElTZXJpYWxpemFibGVUb2tlbkNhY2hlIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9JU2VyaWFsaXphYmxlVG9rZW5DYWNoZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuQ2FjaGVDb250ZXh0IHtcclxuICAgIGhhc0NoYW5nZWQ6IGJvb2xlYW47XHJcbiAgICBjYWNoZTogSVNlcmlhbGl6YWJsZVRva2VuQ2FjaGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9rZW5DYWNoZTogSVNlcmlhbGl6YWJsZVRva2VuQ2FjaGUsIGhhc0NoYW5nZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNhY2hlID0gdG9rZW5DYWNoZTtcclxuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjYWNoZUhhc0NoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQ2hhbmdlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9rZW5DYWNoZSgpOiBJU2VyaWFsaXphYmxlVG9rZW5DYWNoZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGU7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IGJ1aWxkQ2xpZW50SW5mb30gZnJvbSBcIi4uL2FjY291bnQvQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBJQ3J5cHRvIH0gZnJvbSBcIi4uL2NyeXB0by9JQ3J5cHRvXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSB9IGZyb20gXCIuL1NlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlci9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSBcIi4uL2FjY291bnQvQXV0aFRva2VuXCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUmVzdWx0XCI7XHJcbmltcG9ydCB7IEFjY291bnRFbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjb3VudEVudGl0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlUeXBlXCI7XHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkVudGl0eSB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9BY2Nlc3NUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvUmVmcmVzaFRva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDYWNoZVJlY29yZCB9IGZyb20gXCIuLi9jYWNoZS9lbnRpdGllcy9DYWNoZVJlY29yZFwiO1xyXG5pbXBvcnQgeyBDYWNoZU1hbmFnZXIgfSBmcm9tIFwiLi4vY2FjaGUvQ2FjaGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFByb3RvY29sVXRpbHMsIExpYnJhcnlTdGF0ZU9iamVjdCwgUmVxdWVzdFN0YXRlT2JqZWN0IH0gZnJvbSBcIi4uL3V0aWxzL1Byb3RvY29sVXRpbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TY2hlbWUsIENvbnN0YW50cywgVEhFX0ZBTUlMWV9JRCB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgUG9wVG9rZW5HZW5lcmF0b3IgfSBmcm9tIFwiLi4vY3J5cHRvL1BvcFRva2VuR2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IEFwcE1ldGFkYXRhRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FwcE1ldGFkYXRhRW50aXR5XCI7XHJcbmltcG9ydCB7IElDYWNoZVBsdWdpbiB9IGZyb20gXCIuLi9jYWNoZS9pbnRlcmZhY2UvSUNhY2hlUGx1Z2luXCI7XHJcbmltcG9ydCB7IFRva2VuQ2FjaGVDb250ZXh0IH0gZnJvbSBcIi4uL2NhY2hlL3BlcnNpc3RlbmNlL1Rva2VuQ2FjaGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IElTZXJpYWxpemFibGVUb2tlbkNhY2hlIH0gZnJvbSBcIi4uL2NhY2hlL2ludGVyZmFjZS9JU2VyaWFsaXphYmxlVG9rZW5DYWNoZVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uQ29kZVBheWxvYWQgfSBmcm9tIFwiLi9BdXRob3JpemF0aW9uQ29kZVBheWxvYWRcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaGFuZGxlcyByZXNwb25zZSBwYXJzaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlSGFuZGxlciB7XHJcbiAgICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhY2hlU3RvcmFnZTogQ2FjaGVNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjcnlwdG9PYmo6IElDcnlwdG87XHJcbiAgICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xyXG4gICAgcHJpdmF0ZSBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgc2VyaWFsaXphYmxlQ2FjaGU6IElTZXJpYWxpemFibGVUb2tlbkNhY2hlIHwgbnVsbDtcclxuICAgIHByaXZhdGUgcGVyc2lzdGVuY2VQbHVnaW46IElDYWNoZVBsdWdpbiB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2xpZW50SWQ6IHN0cmluZywgY2FjaGVTdG9yYWdlOiBDYWNoZU1hbmFnZXIsIGNyeXB0b09iajogSUNyeXB0bywgbG9nZ2VyOiBMb2dnZXIsIHNlcmlhbGl6YWJsZUNhY2hlOiBJU2VyaWFsaXphYmxlVG9rZW5DYWNoZSB8IG51bGwsIHBlcnNpc3RlbmNlUGx1Z2luOiBJQ2FjaGVQbHVnaW4gfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlID0gY2FjaGVTdG9yYWdlO1xyXG4gICAgICAgIHRoaXMuY3J5cHRvT2JqID0gY3J5cHRvT2JqO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuc2VyaWFsaXphYmxlQ2FjaGUgPSBzZXJpYWxpemFibGVDYWNoZTtcclxuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlUGx1Z2luID0gcGVyc2lzdGVuY2VQbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiB3aGljaCB2YWxpZGF0ZXMgc2VydmVyIGF1dGhvcml6YXRpb24gY29kZSByZXNwb25zZS5cclxuICAgICAqIEBwYXJhbSBzZXJ2ZXJSZXNwb25zZUhhc2hcclxuICAgICAqIEBwYXJhbSBjYWNoZWRTdGF0ZVxyXG4gICAgICogQHBhcmFtIGNyeXB0b09ialxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVNlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2VIYXNoOiBTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlLCBjYWNoZWRTdGF0ZTogc3RyaW5nLCBjcnlwdG9PYmo6IElDcnlwdG8pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCFzZXJ2ZXJSZXNwb25zZUhhc2guc3RhdGUgfHwgIWNhY2hlZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93ICFzZXJ2ZXJSZXNwb25zZUhhc2guc3RhdGUgPyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlU3RhdGVOb3RGb3VuZEVycm9yKFwiU2VydmVyIFN0YXRlXCIpIDogQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVN0YXRlTm90Rm91bmRFcnJvcihcIkNhY2hlZCBTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQoc2VydmVyUmVzcG9uc2VIYXNoLnN0YXRlKSAhPT0gZGVjb2RlVVJJQ29tcG9uZW50KGNhY2hlZFN0YXRlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlU3RhdGVNaXNtYXRjaEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBmb3IgZXJyb3JcclxuICAgICAgICBpZiAoc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yIHx8IHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvcl9kZXNjcmlwdGlvbiB8fCBzZXJ2ZXJSZXNwb25zZUhhc2guc3ViZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IuaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3Ioc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yLCBzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcikpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKHNlcnZlclJlc3BvbnNlSGFzaC5lcnJvciB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLCBzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlSGFzaC5zdWJlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZXJ2ZXJFcnJvcihzZXJ2ZXJSZXNwb25zZUhhc2guZXJyb3IgfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORywgc2VydmVyUmVzcG9uc2VIYXNoLmVycm9yX2Rlc2NyaXB0aW9uLCBzZXJ2ZXJSZXNwb25zZUhhc2guc3ViZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlcnZlclJlc3BvbnNlSGFzaC5jbGllbnRfaW5mbykge1xyXG4gICAgICAgICAgICBidWlsZENsaWVudEluZm8oc2VydmVyUmVzcG9uc2VIYXNoLmNsaWVudF9pbmZvLCBjcnlwdG9PYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHdoaWNoIHZhbGlkYXRlcyBzZXJ2ZXIgYXV0aG9yaXphdGlvbiB0b2tlbiByZXNwb25zZS5cclxuICAgICAqIEBwYXJhbSBzZXJ2ZXJSZXNwb25zZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVRva2VuUmVzcG9uc2Uoc2VydmVyUmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGVycm9yXHJcbiAgICAgICAgaWYgKHNlcnZlclJlc3BvbnNlLmVycm9yIHx8IHNlcnZlclJlc3BvbnNlLmVycm9yX2Rlc2NyaXB0aW9uIHx8IHNlcnZlclJlc3BvbnNlLnN1YmVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKHNlcnZlclJlc3BvbnNlLmVycm9yLCBzZXJ2ZXJSZXNwb25zZS5lcnJvcl9kZXNjcmlwdGlvbiwgc2VydmVyUmVzcG9uc2Uuc3ViZXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihzZXJ2ZXJSZXNwb25zZS5lcnJvciwgc2VydmVyUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb24sIHNlcnZlclJlc3BvbnNlLnN1YmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZXJyU3RyaW5nID0gYCR7c2VydmVyUmVzcG9uc2UuZXJyb3JfY29kZXN9IC0gWyR7c2VydmVyUmVzcG9uc2UudGltZXN0YW1wfV06ICR7c2VydmVyUmVzcG9uc2UuZXJyb3JfZGVzY3JpcHRpb259IC0gQ29ycmVsYXRpb24gSUQ6ICR7c2VydmVyUmVzcG9uc2UuY29ycmVsYXRpb25faWR9IC0gVHJhY2UgSUQ6ICR7c2VydmVyUmVzcG9uc2UudHJhY2VfaWR9YDtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlcnZlckVycm9yKHNlcnZlclJlc3BvbnNlLmVycm9yLCBlcnJTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjb25zdHJ1Y3RlZCB0b2tlbiByZXNwb25zZSBiYXNlZCBvbiBnaXZlbiBzdHJpbmcuIEFsc28gbWFuYWdlcyB0aGUgY2FjaGUgdXBkYXRlcyBhbmQgY2xlYW51cHMuXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVG9rZW5SZXNwb25zZVxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBhc3luYyBoYW5kbGVTZXJ2ZXJUb2tlblJlc3BvbnNlKFxyXG4gICAgICAgIHNlcnZlclRva2VuUmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlLFxyXG4gICAgICAgIGF1dGhvcml0eTogQXV0aG9yaXR5LFxyXG4gICAgICAgIHJlc291cmNlUmVxdWVzdE1ldGhvZD86IHN0cmluZyxcclxuICAgICAgICByZXNvdXJjZVJlcXVlc3RVcmk/OiBzdHJpbmcsXHJcbiAgICAgICAgYXV0aENvZGVQYXlsb2FkPzogQXV0aG9yaXphdGlvbkNvZGVQYXlsb2FkLFxyXG4gICAgICAgIHJlcXVlc3RTY29wZXM/OiBzdHJpbmdbXSxcclxuICAgICAgICBvYm9Bc3NlcnRpb24/OiBzdHJpbmcsXHJcbiAgICAgICAgaGFuZGxpbmdSZWZyZXNoVG9rZW5SZXNwb25zZT86IGJvb2xlYW4pOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBpZFRva2VuIG9iamVjdCAobm90IGVudGl0eSlcclxuICAgICAgICBsZXQgaWRUb2tlbk9iajogQXV0aFRva2VuIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChzZXJ2ZXJUb2tlblJlc3BvbnNlLmlkX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgQXV0aFRva2VuKHNlcnZlclRva2VuUmVzcG9uc2UuaWRfdG9rZW4gfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORywgdGhpcy5jcnlwdG9PYmopO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIHRva2VuIG5vbmNlIGNoZWNrIChUT0RPOiBBZGQgYSB3YXJuaW5nIGlmIG5vIG5vbmNlIGlzIGdpdmVuPylcclxuICAgICAgICAgICAgaWYgKGF1dGhDb2RlUGF5bG9hZCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhdXRoQ29kZVBheWxvYWQubm9uY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iai5jbGFpbXMubm9uY2UgIT09IGF1dGhDb2RlUGF5bG9hZC5ub25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb25jZU1pc21hdGNoRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgaG9tZUFjY291bnRJZFxyXG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gQWNjb3VudEVudGl0eS5nZW5lcmF0ZUhvbWVBY2NvdW50SWQoc2VydmVyVG9rZW5SZXNwb25zZS5jbGllbnRfaW5mbyB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLCBhdXRob3JpdHkuYXV0aG9yaXR5VHlwZSwgdGhpcy5sb2dnZXIsIHRoaXMuY3J5cHRvT2JqLCBpZFRva2VuT2JqKTtcclxuXHJcbiAgICAgICAgLy8gc2F2ZSB0aGUgcmVzcG9uc2UgdG9rZW5zXHJcbiAgICAgICAgbGV0IHJlcXVlc3RTdGF0ZU9iajogUmVxdWVzdFN0YXRlT2JqZWN0IHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICghIWF1dGhDb2RlUGF5bG9hZCAmJiAhIWF1dGhDb2RlUGF5bG9hZC5zdGF0ZSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0U3RhdGVPYmogPSBQcm90b2NvbFV0aWxzLnBhcnNlUmVxdWVzdFN0YXRlKHRoaXMuY3J5cHRvT2JqLCBhdXRoQ29kZVBheWxvYWQuc3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVSZWNvcmQgPSB0aGlzLmdlbmVyYXRlQ2FjaGVSZWNvcmQoc2VydmVyVG9rZW5SZXNwb25zZSwgYXV0aG9yaXR5LCBpZFRva2VuT2JqLCByZXF1ZXN0U3RhdGVPYmogJiYgcmVxdWVzdFN0YXRlT2JqLmxpYnJhcnlTdGF0ZSwgcmVxdWVzdFNjb3Blcywgb2JvQXNzZXJ0aW9uLCBhdXRoQ29kZVBheWxvYWQpO1xyXG4gICAgICAgIGxldCBjYWNoZUNvbnRleHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGVyc2lzdGVuY2VQbHVnaW4gJiYgdGhpcy5zZXJpYWxpemFibGVDYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlBlcnNpc3RlbmNlIGVuYWJsZWQsIGNhbGxpbmcgYmVmb3JlQ2FjaGVBY2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBjYWNoZUNvbnRleHQgPSBuZXcgVG9rZW5DYWNoZUNvbnRleHQodGhpcy5zZXJpYWxpemFibGVDYWNoZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlUGx1Z2luLmJlZm9yZUNhY2hlQWNjZXNzKGNhY2hlQ29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogV2hlbiBzYXZpbmcgYSByZWZyZXNoZWQgdG9rZW5zIHRvIHRoZSBjYWNoZSwgaXQgaXMgZXhwZWN0ZWQgdGhhdCB0aGUgYWNjb3VudCB0aGF0IHdhcyB1c2VkIGlzIHByZXNlbnQgaW4gdGhlIGNhY2hlLlxyXG4gICAgICAgICAgICAgKiBJZiBub3QgcHJlc2VudCwgd2Ugc2hvdWxkIHJldHVybiBudWxsLCBhcyBpdCdzIHRoZSBjYXNlIHRoYXQgYW5vdGhlciBhcHBsaWNhdGlvbiBjYWxsZWQgcmVtb3ZlQWNjb3VudCBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAqIHRoZSBjYWxscyB0byBnZXRBbGxBY2NvdW50cyBhbmQgYWNxdWlyZVRva2VuU2lsZW50LiBXZSBzaG91bGQgbm90IG92ZXJ3cml0ZSB0aGF0IHJlbW92YWwuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxpbmdSZWZyZXNoVG9rZW5SZXNwb25zZSAmJiBjYWNoZVJlY29yZC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBjYWNoZVJlY29yZC5hY2NvdW50LmdlbmVyYXRlQWNjb3VudEtleSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFjY291bnQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJBY2NvdW50IHVzZWQgdG8gcmVmcmVzaCB0b2tlbnMgbm90IGluIHBlcnNpc3RlbmNlLCByZWZyZXNoZWQgdG9rZW5zIHdpbGwgbm90IGJlIHN0b3JlZCBpbiB0aGUgY2FjaGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlSGFuZGxlci5nZW5lcmF0ZUF1dGhlbnRpY2F0aW9uUmVzdWx0KHRoaXMuY3J5cHRvT2JqLCBhdXRob3JpdHksIGNhY2hlUmVjb3JkLCBmYWxzZSwgaWRUb2tlbk9iaiwgcmVxdWVzdFN0YXRlT2JqLCByZXNvdXJjZVJlcXVlc3RNZXRob2QsIHJlc291cmNlUmVxdWVzdFVyaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2F2ZUNhY2hlUmVjb3JkKGNhY2hlUmVjb3JkKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW5jZVBsdWdpbiAmJiB0aGlzLnNlcmlhbGl6YWJsZUNhY2hlICYmIGNhY2hlQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlBlcnNpc3RlbmNlIGVuYWJsZWQsIGNhbGxpbmcgYWZ0ZXJDYWNoZUFjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VQbHVnaW4uYWZ0ZXJDYWNoZUFjY2VzcyhjYWNoZUNvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSZXNwb25zZUhhbmRsZXIuZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdCh0aGlzLmNyeXB0b09iaiwgYXV0aG9yaXR5LCBjYWNoZVJlY29yZCwgZmFsc2UsIGlkVG9rZW5PYmosIHJlcXVlc3RTdGF0ZU9iaiwgcmVzb3VyY2VSZXF1ZXN0TWV0aG9kLCByZXNvdXJjZVJlcXVlc3RVcmkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIENhY2hlUmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVG9rZW5SZXNwb25zZVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5PYmpcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNhY2hlUmVjb3JkKHNlcnZlclRva2VuUmVzcG9uc2U6IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlLCBhdXRob3JpdHk6IEF1dGhvcml0eSwgaWRUb2tlbk9iaj86IEF1dGhUb2tlbiwgbGlicmFyeVN0YXRlPzogTGlicmFyeVN0YXRlT2JqZWN0LCByZXF1ZXN0U2NvcGVzPzogc3RyaW5nW10sIG9ib0Fzc2VydGlvbj86IHN0cmluZywgYXV0aENvZGVQYXlsb2FkPzogQXV0aG9yaXphdGlvbkNvZGVQYXlsb2FkKTogQ2FjaGVSZWNvcmQge1xyXG5cclxuICAgICAgICBjb25zdCBlbnYgPSBBdXRob3JpdHkuZ2VuZXJhdGVFbnZpcm9ubWVudEZyb21BdXRob3JpdHkoYXV0aG9yaXR5KTtcclxuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShlbnYpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVFbnZpcm9ubWVudEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZFRva2VuOiBub24gQUFEIHNjZW5hcmlvcyBjYW4gaGF2ZSBlbXB0eSByZWFsbVxyXG4gICAgICAgIGxldCBjYWNoZWRJZFRva2VuOiBJZFRva2VuRW50aXR5IHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBjYWNoZWRBY2NvdW50OiBBY2NvdW50RW50aXR5IHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShzZXJ2ZXJUb2tlblJlc3BvbnNlLmlkX3Rva2VuKSAmJiAhIWlkVG9rZW5PYmopIHtcclxuICAgICAgICAgICAgY2FjaGVkSWRUb2tlbiA9IElkVG9rZW5FbnRpdHkuY3JlYXRlSWRUb2tlbkVudGl0eShcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgZW52LFxyXG4gICAgICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS5pZF90b2tlbiB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW5PYmouY2xhaW1zLnRpZCB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICAgICAgb2JvQXNzZXJ0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjYWNoZWRBY2NvdW50ID0gdGhpcy5nZW5lcmF0ZUFjY291bnRFbnRpdHkoXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbk9iaixcclxuICAgICAgICAgICAgICAgIGF1dGhvcml0eSxcclxuICAgICAgICAgICAgICAgIG9ib0Fzc2VydGlvbixcclxuICAgICAgICAgICAgICAgIGF1dGhDb2RlUGF5bG9hZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWNjZXNzVG9rZW5cclxuICAgICAgICBsZXQgY2FjaGVkQWNjZXNzVG9rZW46IEFjY2Vzc1Rva2VuRW50aXR5IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHNlcnZlclRva2VuUmVzcG9uc2UuYWNjZXNzX3Rva2VuKSkge1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgc2NvcGVzIG5vdCByZXR1cm5lZCBpbiBzZXJ2ZXIgcmVzcG9uc2UsIHVzZSByZXF1ZXN0IHNjb3Blc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVNjb3BlcyA9IHNlcnZlclRva2VuUmVzcG9uc2Uuc2NvcGUgPyBTY29wZVNldC5mcm9tU3RyaW5nKHNlcnZlclRva2VuUmVzcG9uc2Uuc2NvcGUpIDogbmV3IFNjb3BlU2V0KHJlcXVlc3RTY29wZXMgfHwgW10pO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhwaXJhdGlvbiBjYWxjdWxhdGlvblxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IFRpbWVVdGlscy5ub3dTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lc3RhbXAgd2FzIHNlbnQgaW4gdGhlIGxpYnJhcnkgc3RhdGUsIHVzZSB0aGF0IHRpbWVzdGFtcCB0byBjYWxjdWxhdGUgZXhwaXJhdGlvbi4gT3RoZXJ3aXNlLCB1c2UgY3VycmVudCB0aW1lLlxyXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBsaWJyYXJ5U3RhdGUgPyBsaWJyYXJ5U3RhdGUudHMgOiBjdXJyZW50VGltZTtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5FeHBpcmF0aW9uU2Vjb25kcyA9IHRpbWVzdGFtcCArIChzZXJ2ZXJUb2tlblJlc3BvbnNlLmV4cGlyZXNfaW4gfHwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuZGVkVG9rZW5FeHBpcmF0aW9uU2Vjb25kcyA9IHRva2VuRXhwaXJhdGlvblNlY29uZHMgKyAoc2VydmVyVG9rZW5SZXNwb25zZS5leHRfZXhwaXJlc19pbiB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vbiBBQUQgc2NlbmFyaW9zIGNhbiBoYXZlIGVtcHR5IHJlYWxtXHJcbiAgICAgICAgICAgIGNhY2hlZEFjY2Vzc1Rva2VuID0gQWNjZXNzVG9rZW5FbnRpdHkuY3JlYXRlQWNjZXNzVG9rZW5FbnRpdHkoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgIGVudixcclxuICAgICAgICAgICAgICAgIHNlcnZlclRva2VuUmVzcG9uc2UuYWNjZXNzX3Rva2VuIHx8IENvbnN0YW50cy5FTVBUWV9TVFJJTkcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA/IGlkVG9rZW5PYmouY2xhaW1zLnRpZCB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HIDogYXV0aG9yaXR5LnRlbmFudCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlU2NvcGVzLnByaW50U2NvcGVzKCksXHJcbiAgICAgICAgICAgICAgICB0b2tlbkV4cGlyYXRpb25TZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kZWRUb2tlbkV4cGlyYXRpb25TZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgc2VydmVyVG9rZW5SZXNwb25zZS50b2tlbl90eXBlLFxyXG4gICAgICAgICAgICAgICAgb2JvQXNzZXJ0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWZyZXNoVG9rZW5cclxuICAgICAgICBsZXQgY2FjaGVkUmVmcmVzaFRva2VuOiBSZWZyZXNoVG9rZW5FbnRpdHkgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoc2VydmVyVG9rZW5SZXNwb25zZS5yZWZyZXNoX3Rva2VuKSkge1xyXG4gICAgICAgICAgICBjYWNoZWRSZWZyZXNoVG9rZW4gPSBSZWZyZXNoVG9rZW5FbnRpdHkuY3JlYXRlUmVmcmVzaFRva2VuRW50aXR5KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICBlbnYsXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLnJlZnJlc2hfdG9rZW4gfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORyxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJUb2tlblJlc3BvbnNlLmZvY2ksXHJcbiAgICAgICAgICAgICAgICBvYm9Bc3NlcnRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFwcE1ldGFkYXRhXHJcbiAgICAgICAgbGV0IGNhY2hlZEFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YUVudGl0eSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShzZXJ2ZXJUb2tlblJlc3BvbnNlLmZvY2kpKSB7XHJcbiAgICAgICAgICAgIGNhY2hlZEFwcE1ldGFkYXRhID0gQXBwTWV0YWRhdGFFbnRpdHkuY3JlYXRlQXBwTWV0YWRhdGFFbnRpdHkodGhpcy5jbGllbnRJZCwgZW52LCBzZXJ2ZXJUb2tlblJlc3BvbnNlLmZvY2kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBDYWNoZVJlY29yZChjYWNoZWRBY2NvdW50LCBjYWNoZWRJZFRva2VuLCBjYWNoZWRBY2Nlc3NUb2tlbiwgY2FjaGVkUmVmcmVzaFRva2VuLCBjYWNoZWRBcHBNZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBBY2NvdW50XHJcbiAgICAgKiBAcGFyYW0gc2VydmVyVG9rZW5SZXNwb25zZVxyXG4gICAgICogQHBhcmFtIGlkVG9rZW5cclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUFjY291bnRFbnRpdHkoc2VydmVyVG9rZW5SZXNwb25zZTogU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UsIGlkVG9rZW46IEF1dGhUb2tlbiwgYXV0aG9yaXR5OiBBdXRob3JpdHksIG9ib0Fzc2VydGlvbj86IHN0cmluZywgYXV0aENvZGVQYXlsb2FkPzogQXV0aG9yaXphdGlvbkNvZGVQYXlsb2FkKTogQWNjb3VudEVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5VHlwZSA9IGF1dGhvcml0eS5hdXRob3JpdHlUeXBlO1xyXG4gICAgICAgIGNvbnN0IGNsb3VkR3JhcGhIb3N0TmFtZSA9IGF1dGhDb2RlUGF5bG9hZCA/IGF1dGhDb2RlUGF5bG9hZC5jbG91ZF9ncmFwaF9ob3N0X25hbWUgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IG1zR3JhcGhob3N0ID0gYXV0aENvZGVQYXlsb2FkID8gYXV0aENvZGVQYXlsb2FkLm1zZ3JhcGhfaG9zdCA6IFwiXCI7XHJcblxyXG4gICAgICAgIC8vIEFERlMgZG9lcyBub3QgcmVxdWlyZSBjbGllbnRfaW5mbyBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICBpZiAoYXV0aG9yaXR5VHlwZSA9PT0gQXV0aG9yaXR5VHlwZS5BZGZzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJBdXRob3JpdHkgdHlwZSBpcyBBREZTLCBjcmVhdGluZyBBREZTIGFjY291bnRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBBY2NvdW50RW50aXR5LmNyZWF0ZUdlbmVyaWNBY2NvdW50KGF1dGhvcml0eSwgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4sIG9ib0Fzc2VydGlvbiwgY2xvdWRHcmFwaEhvc3ROYW1lLCBtc0dyYXBoaG9zdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUaGlzIGZhbGxiYWNrIGFwcGxpZXMgdG8gQjJDIGFzIHdlbGwgYXMgdGhleSBmYWxsIHVuZGVyIGFuIEFBRCBhY2NvdW50IHR5cGUuXHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoc2VydmVyVG9rZW5SZXNwb25zZS5jbGllbnRfaW5mbykgJiYgYXV0aG9yaXR5LnByb3RvY29sTW9kZSA9PT0gXCJBQURcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb0VtcHR5RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2ZXJUb2tlblJlc3BvbnNlLmNsaWVudF9pbmZvID9cclxuICAgICAgICAgICAgQWNjb3VudEVudGl0eS5jcmVhdGVBY2NvdW50KHNlcnZlclRva2VuUmVzcG9uc2UuY2xpZW50X2luZm8sIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyLCBhdXRob3JpdHksIGlkVG9rZW4sIG9ib0Fzc2VydGlvbiwgY2xvdWRHcmFwaEhvc3ROYW1lLCBtc0dyYXBoaG9zdCkgOlxyXG4gICAgICAgICAgICBBY2NvdW50RW50aXR5LmNyZWF0ZUdlbmVyaWNBY2NvdW50KGF1dGhvcml0eSwgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4sIG9ib0Fzc2VydGlvbiwgY2xvdWRHcmFwaEhvc3ROYW1lLCBtc0dyYXBoaG9zdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIEBBdXRoZW50aWNhdGlvblJlc3VsdCBmcm9tIEBDYWNoZVJlY29yZCAsIEBJZFRva2VuICwgYW5kIGEgYm9vbGVhbiB0aGF0IHN0YXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgcmVzdWx0IGlzIGZyb20gY2FjaGUuXHJcbiAgICAgKlxyXG4gICAgICogT3B0aW9uYWxseSB0YWtlcyBhIHN0YXRlIHN0cmluZyB0aGF0IGlzIHNldCBhcy1pcyBpbiB0aGUgcmVzcG9uc2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhY2hlUmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gaWRUb2tlbk9ialxyXG4gICAgICogQHBhcmFtIGZyb21Ub2tlbkNhY2hlXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVTdHJpbmdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGdlbmVyYXRlQXV0aGVudGljYXRpb25SZXN1bHQoXHJcbiAgICAgICAgY3J5cHRvT2JqOiBJQ3J5cHRvLCBcclxuICAgICAgICBhdXRob3JpdHk6IEF1dGhvcml0eSxcclxuICAgICAgICBjYWNoZVJlY29yZDogQ2FjaGVSZWNvcmQsIFxyXG4gICAgICAgIGZyb21Ub2tlbkNhY2hlOiBib29sZWFuLCBcclxuICAgICAgICBpZFRva2VuT2JqPzogQXV0aFRva2VuLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0ZT86IFJlcXVlc3RTdGF0ZU9iamVjdCxcclxuICAgICAgICByZXNvdXJjZVJlcXVlc3RNZXRob2Q/OiBzdHJpbmcsIFxyXG4gICAgICAgIHJlc291cmNlUmVxdWVzdFVyaT86IHN0cmluZyk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlU2NvcGVzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgbGV0IGV4cGlyZXNPbjogRGF0ZSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGxldCBleHRFeHBpcmVzT246IERhdGUgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGZhbWlseUlkOiBzdHJpbmcgPSBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xyXG4gICAgICAgIGlmIChjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVSZWNvcmQuYWNjZXNzVG9rZW4udG9rZW5UeXBlID09PSBBdXRoZW50aWNhdGlvblNjaGVtZS5QT1ApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcFRva2VuR2VuZXJhdG9yOiBQb3BUb2tlbkdlbmVyYXRvciA9IG5ldyBQb3BUb2tlbkdlbmVyYXRvcihjcnlwdG9PYmopO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmVzb3VyY2VSZXF1ZXN0TWV0aG9kIHx8ICFyZXNvdXJjZVJlcXVlc3RVcmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVzb3VyY2VSZXF1ZXN0UGFyYW1ldGVyc1JlcXVpcmVkRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuID0gYXdhaXQgcG9wVG9rZW5HZW5lcmF0b3Iuc2lnblBvcFRva2VuKGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuLnNlY3JldCwgcmVzb3VyY2VSZXF1ZXN0TWV0aG9kLCByZXNvdXJjZVJlcXVlc3RVcmkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW4gPSBjYWNoZVJlY29yZC5hY2Nlc3NUb2tlbi5zZWNyZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2VTY29wZXMgPSBTY29wZVNldC5mcm9tU3RyaW5nKGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuLnRhcmdldCkuYXNBcnJheSgpO1xyXG4gICAgICAgICAgICBleHBpcmVzT24gPSBuZXcgRGF0ZShOdW1iZXIoY2FjaGVSZWNvcmQuYWNjZXNzVG9rZW4uZXhwaXJlc09uKSAqIDEwMDApO1xyXG4gICAgICAgICAgICBleHRFeHBpcmVzT24gPSBuZXcgRGF0ZShOdW1iZXIoY2FjaGVSZWNvcmQuYWNjZXNzVG9rZW4uZXh0ZW5kZWRFeHBpcmVzT24pICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FjaGVSZWNvcmQuYXBwTWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgZmFtaWx5SWQgPSBjYWNoZVJlY29yZC5hcHBNZXRhZGF0YS5mYW1pbHlJZCA9PT0gVEhFX0ZBTUlMWV9JRCA/IFRIRV9GQU1JTFlfSUQgOiBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1aWQgPSBpZFRva2VuT2JqPy5jbGFpbXMub2lkIHx8IGlkVG9rZW5PYmo/LmNsYWltcy5zdWIgfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORztcclxuICAgICAgICBjb25zdCB0aWQgPSBpZFRva2VuT2JqPy5jbGFpbXMudGlkIHx8IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGF1dGhvcml0eTogYXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eSxcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IHVpZCxcclxuICAgICAgICAgICAgdGVuYW50SWQ6IHRpZCxcclxuICAgICAgICAgICAgc2NvcGVzOiByZXNwb25zZVNjb3BlcyxcclxuICAgICAgICAgICAgYWNjb3VudDogY2FjaGVSZWNvcmQuYWNjb3VudCA/IGNhY2hlUmVjb3JkLmFjY291bnQuZ2V0QWNjb3VudEluZm8oKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmogPyBpZFRva2VuT2JqLnJhd1Rva2VuIDogQ29uc3RhbnRzLkVNUFRZX1NUUklORyxcclxuICAgICAgICAgICAgaWRUb2tlbkNsYWltczogaWRUb2tlbk9iaiA/IGlkVG9rZW5PYmouY2xhaW1zIDoge30sXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgZnJvbUNhY2hlOiBmcm9tVG9rZW5DYWNoZSxcclxuICAgICAgICAgICAgZXhwaXJlc09uOiBleHBpcmVzT24sXHJcbiAgICAgICAgICAgIGV4dEV4cGlyZXNPbjogZXh0RXhwaXJlc09uLFxyXG4gICAgICAgICAgICBmYW1pbHlJZDogZmFtaWx5SWQsXHJcbiAgICAgICAgICAgIHRva2VuVHlwZTogY2FjaGVSZWNvcmQuYWNjZXNzVG9rZW4/LnRva2VuVHlwZSB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICBzdGF0ZTogcmVxdWVzdFN0YXRlID8gcmVxdWVzdFN0YXRlLnVzZXJSZXF1ZXN0U3RhdGUgOiBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICBjbG91ZEdyYXBoSG9zdE5hbWU6IGNhY2hlUmVjb3JkLmFjY291bnQ/LmNsb3VkR3JhcGhIb3N0TmFtZSB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICBtc0dyYXBoSG9zdDogY2FjaGVSZWNvcmQuYWNjb3VudD8ubXNHcmFwaEhvc3QgfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklOR1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uVXJsUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0F1dGhvcml6YXRpb25VcmxSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25Db2RlUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0F1dGhvcml6YXRpb25Db2RlUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlciB9IGZyb20gXCIuLi9yZXF1ZXN0L1JlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCB7IEdyYW50VHlwZSwgQXV0aGVudGljYXRpb25TY2hlbWUgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vY29uZmlnL0NsaWVudENvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgTmV0d29ya1Jlc3BvbnNlIH0gZnJvbSBcIi4uL25ldHdvcmsvTmV0d29ya01hbmFnZXJcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IFVybFN0cmluZyB9IGZyb20gXCIuLi91cmwvVXJsU3RyaW5nXCI7XHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Db2RlUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHlcIjtcclxuaW1wb3J0IHsgRW5kU2Vzc2lvblJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9FbmRTZXNzaW9uUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFBvcFRva2VuR2VuZXJhdG9yIH0gZnJvbSBcIi4uL2NyeXB0by9Qb3BUb2tlbkdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0VGh1bWJwcmludCB9IGZyb20gXCIuLi9uZXR3b3JrL1JlcXVlc3RUaHVtYnByaW50XCI7XHJcbmltcG9ydCB7IEF1dGhvcml6YXRpb25Db2RlUGF5bG9hZCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRob3JpemF0aW9uQ29kZVBheWxvYWRcIjtcclxuXHJcbi8qKlxyXG4gKiBPYXV0aDIuMCBBdXRob3JpemF0aW9uIENvZGUgY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvbkNvZGVDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDbGllbnRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlndXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBVUkwgb2YgdGhlIGF1dGhvcml6YXRpb24gcmVxdWVzdCBsZXR0aW5nIHRoZSB1c2VyIGlucHV0IGNyZWRlbnRpYWxzIGFuZCBjb25zZW50IHRvIHRoZVxyXG4gICAgICogYXBwbGljYXRpb24uIFRoZSBVUkwgdGFyZ2V0IHRoZSAvYXV0aG9yaXplIGVuZHBvaW50IG9mIHRoZSBhdXRob3JpdHkgY29uZmlndXJlZCBpbiB0aGVcclxuICAgICAqIGFwcGxpY2F0aW9uIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBPbmNlIHRoZSB1c2VyIGlucHV0cyB0aGVpciBjcmVkZW50aWFscyBhbmQgY29uc2VudHMsIHRoZSBhdXRob3JpdHkgd2lsbCBzZW5kIGEgcmVzcG9uc2UgdG8gdGhlIHJlZGlyZWN0IFVSSVxyXG4gICAgICogc2VudCBpbiB0aGUgcmVxdWVzdCBhbmQgc2hvdWxkIGNvbnRhaW4gYW4gYXV0aG9yaXphdGlvbiBjb2RlLCB3aGljaCBjYW4gdGhlbiBiZSB1c2VkIHRvIGFjcXVpcmUgdG9rZW5zIHZpYVxyXG4gICAgICogYWNxdWlyZVRva2VuKEF1dGhvcml6YXRpb25Db2RlUmVxdWVzdClcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEF1dGhDb2RlVXJsKHJlcXVlc3Q6IEF1dGhvcml6YXRpb25VcmxSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHRoaXMuY3JlYXRlQXV0aENvZGVVcmxRdWVyeVN0cmluZyhyZXF1ZXN0KTtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hdXRob3JpdHkuYXV0aG9yaXphdGlvbkVuZHBvaW50fT8ke3F1ZXJ5U3RyaW5nfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBUEkgdG8gYWNxdWlyZSBhIHRva2VuIGluIGV4Y2hhbmdlIG9mICdhdXRob3JpemF0aW9uX2NvZGVgIGFjcXVpcmVkIGJ5IHRoZSB1c2VyIGluIHRoZSBmaXJzdCBsZWcgb2YgdGhlXHJcbiAgICAgKiBhdXRob3JpemF0aW9uX2NvZGVfZ3JhbnRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGFjcXVpcmVUb2tlbihyZXF1ZXN0OiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QsIGF1dGhDb2RlUGF5bG9hZD86IEF1dGhvcml6YXRpb25Db2RlUGF5bG9hZCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaW4gYWNxdWlyZVRva2VuIGNhbGxcIik7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkocmVxdWVzdC5jb2RlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5SZXF1ZXN0Q2Fubm90QmVNYWRlRXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHRoaXMuYXV0aG9yaXR5LCByZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNyeXB0b1V0aWxzLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VyaWFsaXphYmxlQ2FjaGUsXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBlcnNpc3RlbmNlUGx1Z2luXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgcmVzcG9uc2UuIFRoaXMgZnVuY3Rpb24gdGhyb3dzIGEgc2VydmVyIGVycm9yIGlmIGFuIGVycm9yIGlzIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyLnZhbGlkYXRlVG9rZW5SZXNwb25zZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VIYW5kbGVyLmhhbmRsZVNlcnZlclRva2VuUmVzcG9uc2UocmVzcG9uc2UuYm9keSwgdGhpcy5hdXRob3JpdHksIHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0TWV0aG9kLCByZXF1ZXN0LnJlc291cmNlUmVxdWVzdFVyaSwgYXV0aENvZGVQYXlsb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgdGhlIGhhc2ggZnJhZ21lbnQgcmVzcG9uc2UgZnJvbSBwdWJsaWMgY2xpZW50IGNvZGUgcmVxdWVzdC4gUmV0dXJucyBhIGNvZGUgcmVzcG9uc2UgdXNlZCBieVxyXG4gICAgICogdGhlIGNsaWVudCB0byBleGNoYW5nZSBmb3IgYSB0b2tlbiBpbiBhY3F1aXJlVG9rZW4uXHJcbiAgICAgKiBAcGFyYW0gaGFzaEZyYWdtZW50XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUZyYWdtZW50UmVzcG9uc2UoaGFzaEZyYWdtZW50OiBzdHJpbmcsIGNhY2hlZFN0YXRlOiBzdHJpbmcpOiBBdXRob3JpemF0aW9uQ29kZVBheWxvYWQge1xyXG4gICAgICAgIC8vIEhhbmRsZSByZXNwb25zZXMuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcih0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCwgdGhpcy5jYWNoZU1hbmFnZXIsIHRoaXMuY3J5cHRvVXRpbHMsIHRoaXMubG9nZ2VyLCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAgICAgLy8gRGVzZXJpYWxpemUgaGFzaCBmcmFnbWVudCByZXNwb25zZSBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIGNvbnN0IGhhc2hVcmxTdHJpbmcgPSBuZXcgVXJsU3RyaW5nKGhhc2hGcmFnbWVudCk7XHJcbiAgICAgICAgLy8gRGVzZXJpYWxpemUgaGFzaCBmcmFnbWVudCByZXNwb25zZSBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIGNvbnN0IHNlcnZlclBhcmFtczogU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSA9IFVybFN0cmluZy5nZXREZXNlcmlhbGl6ZWRIYXNoKGhhc2hVcmxTdHJpbmcuZ2V0SGFzaCgpKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGNvZGUgcmVzcG9uc2VcclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVTZXJ2ZXJBdXRob3JpemF0aW9uQ29kZVJlc3BvbnNlKHNlcnZlclBhcmFtcywgY2FjaGVkU3RhdGUsIHRoaXMuY3J5cHRvVXRpbHMpO1xyXG5cclxuICAgICAgICAvLyB0aHJvdyB3aGVuIHRoZXJlIGlzIG5vIGF1dGggY29kZSBpbiB0aGUgcmVzcG9uc2VcclxuICAgICAgICBpZiAoIXNlcnZlclBhcmFtcy5jb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0F1dGhDb2RlSW5TZXJ2ZXJSZXNwb25zZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zZXJ2ZXJQYXJhbXMsXHJcbiAgICAgICAgICAgIC8vIENvZGUgcGFyYW0gaXMgb3B0aW9uYWwgaW4gU2VydmVyQXV0aG9yaXphdGlvbkNvZGVSZXNwb25zZSBidXQgcmVxdWlyZWQgaW4gQXV0aG9yaXphdGlvbkNvZGVQYXlsb2RcclxuICAgICAgICAgICAgY29kZTogc2VydmVyUGFyYW1zLmNvZGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRvIGxvZyBvdXQgdGhlIGN1cnJlbnQgdXNlciwgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICAgKiBEZWZhdWx0IGJlaGF2aW91ciBpcyB0byByZWRpcmVjdCB0aGUgdXNlciB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVVyaVxyXG4gICAgICovXHJcbiAgICBnZXRMb2dvdXRVcmkobG9nb3V0UmVxdWVzdDogRW5kU2Vzc2lvblJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIGxvZ291dFJlcXVlc3QgaXMgbnVsbC91bmRlZmluZWRcclxuICAgICAgICBpZiAoIWxvZ291dFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5TG9nb3V0UmVxdWVzdEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobG9nb3V0UmVxdWVzdC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIGdpdmVuIGFjY291bnQuXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLnJlbW92ZUFjY291bnQoQWNjb3VudEVudGl0eS5nZW5lcmF0ZUFjY291bnRDYWNoZUtleShsb2dvdXRSZXF1ZXN0LmFjY291bnQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDbGVhciBhbGwgYWNjb3VudHMgYW5kIHRva2Vuc1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlTWFuYWdlci5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLmNyZWF0ZUxvZ291dFVybFF1ZXJ5U3RyaW5nKGxvZ291dFJlcXVlc3QpO1xyXG5cclxuICAgICAgICAvLyBDb25zdHJ1Y3QgbG9nb3V0IFVSSS5cclxuICAgICAgICByZXR1cm4gU3RyaW5nVXRpbHMuaXNFbXB0eShxdWVyeVN0cmluZykgPyB0aGlzLmF1dGhvcml0eS5lbmRTZXNzaW9uRW5kcG9pbnQgOiBgJHt0aGlzLmF1dGhvcml0eS5lbmRTZXNzaW9uRW5kcG9pbnR9PyR7cXVlcnlTdHJpbmd9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVzIFBPU1QgcmVxdWVzdCB0byB0b2tlbiBlbmRwb2ludFxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlVG9rZW5SZXF1ZXN0KGF1dGhvcml0eTogQXV0aG9yaXR5LCByZXF1ZXN0OiBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QpOiBQcm9taXNlPE5ldHdvcmtSZXNwb25zZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4+IHtcclxuICAgICAgICBjb25zdCB0aHVtYnByaW50OiBSZXF1ZXN0VGh1bWJwcmludCA9IHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLFxyXG4gICAgICAgICAgICBhdXRob3JpdHk6IGF1dGhvcml0eS5jYW5vbmljYWxBdXRob3JpdHksXHJcbiAgICAgICAgICAgIHNjb3BlczogcmVxdWVzdC5zY29wZXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMsIHRodW1icHJpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgbWFwIGZvciBhbGwgdGhlIHBhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogQXV0aG9yaXphdGlvbkNvZGVSZXF1ZXN0KTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSB0aGUgcmVkaXJlY3RVcmkgKHRvIGJlIGEgbm9uIG51bGwgdmFsdWUpXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWRpcmVjdFVyaShyZXF1ZXN0LnJlZGlyZWN0VXJpKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHNjb3BlIGFycmF5LCBwYXJhbWV0ZXIgYnVpbGRlciB3aWxsIGFkZCBkZWZhdWx0IHNjb3BlcyBhbmQgZGVkdXBlXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTY29wZXMocmVxdWVzdC5zY29wZXMpO1xyXG5cclxuICAgICAgICAvLyBhZGQgY29kZTogdXNlciBzZXQsIG5vdCB2YWxpZGF0ZWRcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZEF1dGhvcml6YXRpb25Db2RlKHJlcXVlc3QuY29kZSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBjb2RlX3ZlcmlmaWVyIGlmIHBhc3NlZFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmNvZGVWZXJpZmllcikge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvZGVWZXJpZmllcihyZXF1ZXN0LmNvZGVWZXJpZmllcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50U2VjcmV0KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50U2VjcmV0KHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudFNlY3JldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50QXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEFzc2VydGlvbiA9IHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudEFzc2VydGlvbjtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRBc3NlcnRpb24oY2xpZW50QXNzZXJ0aW9uLmFzc2VydGlvbik7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50QXNzZXJ0aW9uVHlwZShjbGllbnRBc3NlcnRpb24uYXNzZXJ0aW9uVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZEdyYW50VHlwZShHcmFudFR5cGUuQVVUSE9SSVpBVElPTl9DT0RFX0dSQU5UKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudEluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuYXV0aGVudGljYXRpb25TY2hlbWUgPT09IEF1dGhlbnRpY2F0aW9uU2NoZW1lLlBPUCAmJiAhIXJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0TWV0aG9kICYmICEhcmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RVcmkpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9wVG9rZW5HZW5lcmF0b3IgPSBuZXcgUG9wVG9rZW5HZW5lcmF0b3IodGhpcy5jcnlwdG9VdGlscyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNuZlN0cmluZyA9IGF3YWl0IHBvcFRva2VuR2VuZXJhdG9yLmdlbmVyYXRlQ25mKHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0TWV0aG9kLCByZXF1ZXN0LnJlc291cmNlUmVxdWVzdFVyaSk7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUG9wVG9rZW4oY25mU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyZXF1ZXN0LmNsYWltcykgfHwgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzICYmIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xhaW1zKHJlcXVlc3QuY2xhaW1zLCB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgQVBJIHZhbGlkYXRlcyB0aGUgYEF1dGhvcml6YXRpb25Db2RlVXJsUmVxdWVzdGAgYW5kIGNyZWF0ZXMgYSBVUkxcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlQXV0aENvZGVVcmxRdWVyeVN0cmluZyhyZXF1ZXN0OiBBdXRob3JpemF0aW9uVXJsUmVxdWVzdCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyQnVpbGRlciA9IG5ldyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlcigpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFNjb3BlcyA9IFsuLi5yZXF1ZXN0LnNjb3BlcyB8fCBbXSwgLi4ucmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCB8fCBbXV07XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTY29wZXMocmVxdWVzdFNjb3Blcyk7XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlIHRoZSByZWRpcmVjdFVyaSAodG8gYmUgYSBub24gbnVsbCB2YWx1ZSlcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlZGlyZWN0VXJpKHJlcXVlc3QucmVkaXJlY3RVcmkpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgY29ycmVsYXRpb25JZCBpZiBub3Qgc2V0IGJ5IHRoZSB1c2VyIGFuZCBhZGRcclxuICAgICAgICBjb25zdCBjb3JyZWxhdGlvbklkID0gcmVxdWVzdC5jb3JyZWxhdGlvbklkIHx8IHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZS5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb3JyZWxhdGlvbklkKGNvcnJlbGF0aW9uSWQpO1xyXG5cclxuICAgICAgICAvLyBhZGQgcmVzcG9uc2VfbW9kZS4gSWYgbm90IHBhc3NlZCBpbiBpdCBkZWZhdWx0cyB0byBxdWVyeS5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFJlc3BvbnNlTW9kZShyZXF1ZXN0LnJlc3BvbnNlTW9kZSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCByZXNwb25zZV90eXBlID0gY29kZVxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVzcG9uc2VUeXBlQ29kZSgpO1xyXG5cclxuICAgICAgICAvLyBhZGQgbGlicmFyeSBpbmZvIHBhcmFtZXRlcnNcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZExpYnJhcnlJbmZvKHRoaXMuY29uZmlnLmxpYnJhcnlJbmZvKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGNsaWVudF9pbmZvPTFcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudEluZm8oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuY29kZUNoYWxsZW5nZSAmJiByZXF1ZXN0LmNvZGVDaGFsbGVuZ2VNZXRob2QpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb2RlQ2hhbGxlbmdlUGFyYW1zKHJlcXVlc3QuY29kZUNoYWxsZW5nZSwgcmVxdWVzdC5jb2RlQ2hhbGxlbmdlTWV0aG9kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnByb21wdCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFByb21wdChyZXF1ZXN0LnByb21wdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5kb21haW5IaW50KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkRG9tYWluSGludChyZXF1ZXN0LmRvbWFpbkhpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIHNpZCBvciBsb2dpbkhpbnQgd2l0aCBwcmVmZXJlbmNlIGZvciBzaWQgLT4gbG9naW5IaW50IC0+IHVzZXJuYW1lIG9mIEFjY291bnRJbmZvIG9iamVjdFxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnNpZCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFNpZChyZXF1ZXN0LnNpZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmxvZ2luSGludCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZExvZ2luSGludChyZXF1ZXN0LmxvZ2luSGludCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjY291bnQgJiYgcmVxdWVzdC5hY2NvdW50LnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkTG9naW5IaW50KHJlcXVlc3QuYWNjb3VudC51c2VybmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5ub25jZSkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZE5vbmNlKHJlcXVlc3Qubm9uY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdGUpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRTdGF0ZShyZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyZXF1ZXN0LmNsYWltcykgfHwgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzICYmIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xhaW1zKHJlcXVlc3QuY2xhaW1zLCB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRFeHRyYVF1ZXJ5UGFyYW1ldGVycyhyZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIEFQSSB2YWxpZGF0ZXMgdGhlIGBFbmRTZXNzaW9uUmVxdWVzdGAgYW5kIGNyZWF0ZXMgYSBVUkxcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlTG9nb3V0VXJsUXVlcnlTdHJpbmcocmVxdWVzdDogRW5kU2Vzc2lvblJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QucG9zdExvZ291dFJlZGlyZWN0VXJpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUG9zdExvZ291dFJlZGlyZWN0VXJpKHJlcXVlc3QucG9zdExvZ291dFJlZGlyZWN0VXJpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmNvcnJlbGF0aW9uSWQpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb3JyZWxhdGlvbklkKHJlcXVlc3QuY29ycmVsYXRpb25JZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5pZFRva2VuSGludCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZElkVG9rZW5IaW50KHJlcXVlc3QuaWRUb2tlbkhpbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERldmljZUNvZGVSZXNwb25zZSwgU2VydmVyRGV2aWNlQ29kZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL0RldmljZUNvZGVSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBEZXZpY2VDb2RlUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0RldmljZUNvZGVSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIgfSBmcm9tIFwiLi4vcmVxdWVzdC9SZXF1ZXN0UGFyYW1ldGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMsIEdyYW50VHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9jb25maWcvQ2xpZW50Q29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVGltZVV0aWxzXCI7XHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlSGFuZGxlciB9IGZyb20gXCIuLi9yZXNwb25zZS9SZXNwb25zZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXN1bHQgfSBmcm9tIFwiLi4vcmVzcG9uc2UvQXV0aGVudGljYXRpb25SZXN1bHRcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5cclxuLyoqXHJcbiAqIE9BdXRoMi4wIERldmljZSBjb2RlIGNsaWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERldmljZUNvZGVDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDbGllbnRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlndXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGRldmljZSBjb2RlIGZyb20gZGV2aWNlIGNvZGUgZW5kcG9pbnQsIGNhbGxzIGJhY2sgdG8gd2l0aCBkZXZpY2UgY29kZSByZXNwb25zZSwgYW5kXHJcbiAgICAgKiBwb2xscyB0b2tlbiBlbmRwb2ludCB0byBleGNoYW5nZSBkZXZpY2UgY29kZSBmb3IgdG9rZW5zXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgYWNxdWlyZVRva2VuKHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdCB8IG51bGw+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGV2aWNlQ29kZVJlc3BvbnNlOiBEZXZpY2VDb2RlUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldERldmljZUNvZGUocmVxdWVzdCk7XHJcbiAgICAgICAgcmVxdWVzdC5kZXZpY2VDb2RlQ2FsbGJhY2soZGV2aWNlQ29kZVJlc3BvbnNlKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogU2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFjcXVpcmVUb2tlbldpdGhEZXZpY2VDb2RlKFxyXG4gICAgICAgICAgICByZXF1ZXN0LFxyXG4gICAgICAgICAgICBkZXZpY2VDb2RlUmVzcG9uc2UpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZUhhbmRsZXIgPSBuZXcgUmVzcG9uc2VIYW5kbGVyKFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvVXRpbHMsXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXJpYWxpemFibGVDYWNoZSxcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGVyc2lzdGVuY2VQbHVnaW5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZSByZXNwb25zZS4gVGhpcyBmdW5jdGlvbiB0aHJvd3MgYSBzZXJ2ZXIgZXJyb3IgaWYgYW4gZXJyb3IgaXMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVUb2tlblJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VIYW5kbGVyLmhhbmRsZVNlcnZlclRva2VuUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgICAgICAgcmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RNZXRob2QsXHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0VXJpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgZGV2aWNlIGNvZGUgcmVxdWVzdCBhbmQgZXhlY3V0ZXMgaHR0cCBHRVRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0RGV2aWNlQ29kZShyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCk6IFByb21pc2U8RGV2aWNlQ29kZVJlc3BvbnNlPiB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB0aGlzLmNyZWF0ZVF1ZXJ5U3RyaW5nKHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZURlZmF1bHRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XHJcbiAgICAgICAgY29uc3QgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiByZXF1ZXN0LmF1dGhvcml0eSxcclxuICAgICAgICAgICAgc2NvcGVzOiByZXF1ZXN0LnNjb3Blc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVQb3N0UmVxdWVzdFRvRGV2aWNlQ29kZUVuZHBvaW50KHRoaXMuYXV0aG9yaXR5LmRldmljZUNvZGVFbmRwb2ludCwgcXVlcnlTdHJpbmcsIGhlYWRlcnMsIHRodW1icHJpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgUE9TVCByZXF1ZXN0IHRvIGRldmljZSBjb2RlIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gZGV2aWNlQ29kZUVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gcXVlcnlTdHJpbmdcclxuICAgICAqIEBwYXJhbSBoZWFkZXJzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZXhlY3V0ZVBvc3RSZXF1ZXN0VG9EZXZpY2VDb2RlRW5kcG9pbnQoXHJcbiAgICAgICAgZGV2aWNlQ29kZUVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICAgICAgcXVlcnlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxyXG4gICAgICAgIHRodW1icHJpbnQ6IFJlcXVlc3RUaHVtYnByaW50KTogUHJvbWlzZTxEZXZpY2VDb2RlUmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyX2NvZGU6IHVzZXJDb2RlLFxyXG4gICAgICAgICAgICAgICAgZGV2aWNlX2NvZGU6IGRldmljZUNvZGUsXHJcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdXJpOiB2ZXJpZmljYXRpb25VcmksXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzX2luOiBleHBpcmVzSW4sXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLm5ldHdvcmtNYW5hZ2VyLnNlbmRQb3N0UmVxdWVzdDxTZXJ2ZXJEZXZpY2VDb2RlUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICB0aHVtYnByaW50LFxyXG4gICAgICAgICAgICBkZXZpY2VDb2RlRW5kcG9pbnQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IHF1ZXJ5U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlckNvZGUsXHJcbiAgICAgICAgICAgIGRldmljZUNvZGUsXHJcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvblVyaSxcclxuICAgICAgICAgICAgZXhwaXJlc0luLFxyXG4gICAgICAgICAgICBpbnRlcnZhbCxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGV2aWNlIGNvZGUgZW5kcG9pbnQgcXVlcnkgcGFyYW1ldGVycyBhbmQgcmV0dXJucyBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVRdWVyeVN0cmluZyhyZXF1ZXN0OiBEZXZpY2VDb2RlUmVxdWVzdCk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXI6IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHJlcXVlc3Quc2NvcGVzKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuXHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHJlcXVlc3QuY2xhaW1zKSB8fCB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMgJiYgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGFpbXMocmVxdWVzdC5jbGFpbXMsIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyQnVpbGRlci5jcmVhdGVRdWVyeVN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0b2tlbiByZXF1ZXN0IHdpdGggZGV2aWNlIGNvZGUgcmVzcG9uc2UgYW5kIHBvbGxzIHRva2VuIGVuZHBvaW50IGF0IGludGVydmFsIHNldCBieSB0aGUgZGV2aWNlIGNvZGVcclxuICAgICAqIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIGRldmljZUNvZGVSZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGFjcXVpcmVUb2tlbldpdGhEZXZpY2VDb2RlKFxyXG4gICAgICAgIHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0LFxyXG4gICAgICAgIGRldmljZUNvZGVSZXNwb25zZTogRGV2aWNlQ29kZVJlc3BvbnNlKTogUHJvbWlzZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0LCBkZXZpY2VDb2RlUmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB0aGlzLmNyZWF0ZURlZmF1bHRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJTcGVjaWZpZWRUaW1lb3V0ID0gcmVxdWVzdC50aW1lb3V0ID8gVGltZVV0aWxzLm5vd1NlY29uZHMoKSArIHJlcXVlc3QudGltZW91dCA6IHVuZGVmaW5lZDsgXHJcbiAgICAgICAgY29uc3QgZGV2aWNlQ29kZUV4cGlyYXRpb25UaW1lID0gVGltZVV0aWxzLm5vd1NlY29uZHMoKSArIGRldmljZUNvZGVSZXNwb25zZS5leHBpcmVzSW47XHJcbiAgICAgICAgY29uc3QgcG9sbGluZ0ludGVydmFsTWlsbGkgPSBkZXZpY2VDb2RlUmVzcG9uc2UuaW50ZXJ2YWwgKiAxMDAwO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFBvbGwgdG9rZW4gZW5kcG9pbnQgd2hpbGUgKGRldmljZSBjb2RlIGlzIG5vdCBleHBpcmVkIEFORCBvcGVyYXRpb24gaGFzIG5vdCBiZWVuIGNhbmNlbGxlZCBieVxyXG4gICAgICAgICAqIHNldHRpbmcgQ2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsID0gdHJ1ZSkuIFBPU1QgcmVxdWVzdCBpcyBzZW50IGF0IGludGVydmFsIHNldCBieSBwb2xsaW5nSW50ZXJ2YWxNaWxsaVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxJZDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNhbmNlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJUb2tlbiByZXF1ZXN0IGNhbmNlbGxlZCBieSBzZXR0aW5nIERldmljZUNvZGVSZXF1ZXN0LmNhbmNlbCA9IHRydWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRGV2aWNlQ29kZUNhbmNlbGxlZEVycm9yKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVzZXJTcGVjaWZpZWRUaW1lb3V0ICYmIHVzZXJTcGVjaWZpZWRUaW1lb3V0IDwgZGV2aWNlQ29kZUV4cGlyYXRpb25UaW1lICYmIFRpbWVVdGlscy5ub3dTZWNvbmRzKCkgPiB1c2VyU3BlY2lmaWVkVGltZW91dCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFVzZXIgZGVmaW5lZCB0aW1lb3V0IGZvciBkZXZpY2UgY29kZSBwb2xsaW5nIHJlYWNoZWQuIFRoZSB0aW1lb3V0IHdhcyBzZXQgZm9yICR7dXNlclNwZWNpZmllZFRpbWVvdXR9YCk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlclRpbWVvdXRSZWFjaGVkRXJyb3IoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoVGltZVV0aWxzLm5vd1NlY29uZHMoKSA+IGRldmljZUNvZGVFeHBpcmF0aW9uVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJTcGVjaWZpZWRUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKGBVc2VyIHNwZWNpZmllZCB0aW1lb3V0IGlnbm9yZWQgYXMgdGhlIGRldmljZSBjb2RlIGhhcyBleHBpcmVkIGJlZm9yZSB0aGUgdGltZW91dCBlbGFwc2VkLiBUaGUgdXNlciBzcGVjaWZpZWQgdGltZW91dCB3YXMgc2V0IGZvciAke3VzZXJTcGVjaWZpZWRUaW1lb3V0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgRGV2aWNlIGNvZGUgZXhwaXJlZC4gRXhwaXJhdGlvbiB0aW1lIG9mIGRldmljZSBjb2RlIHdhcyAke2RldmljZUNvZGVFeHBpcmF0aW9uVGltZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVEZXZpY2VDb2RlRXhwaXJlZEVycm9yKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYnByaW50OiBSZXF1ZXN0VGh1bWJwcmludCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml0eTogcmVxdWVzdC5hdXRob3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZXM6IHJlcXVlc3Quc2NvcGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5LnRva2VuRW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYnByaW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5ICYmIHJlc3BvbnNlLmJvZHkuZXJyb3IgPT09IENvbnN0YW50cy5BVVRIT1JJWkFUSU9OX1BFTkRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXIgYXV0aG9yaXphdGlvbiBpcyBwZW5kaW5nLiBTbGVlcCBmb3IgcG9sbGluZyBpbnRlcnZhbCBhbmQgdHJ5IGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKHJlc3BvbnNlLmJvZHkuZXJyb3JfZGVzY3JpcHRpb24gfHwgXCJub19lcnJvcl9kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHBvbGxpbmdJbnRlcnZhbE1pbGxpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcXVlcnkgcGFyYW1ldGVycyBhbmQgY29udmVydHMgdG8gc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBkZXZpY2VDb2RlUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3Q6IERldmljZUNvZGVSZXF1ZXN0LCBkZXZpY2VDb2RlUmVzcG9uc2U6IERldmljZUNvZGVSZXNwb25zZSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RQYXJhbWV0ZXJzOiBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlciA9IG5ldyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlcigpO1xyXG5cclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGRTY29wZXMocmVxdWVzdC5zY29wZXMpO1xyXG4gICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZENsaWVudElkKHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLkRFVklDRV9DT0RFX0dSQU5UKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGREZXZpY2VDb2RlKGRldmljZUNvZGVSZXNwb25zZS5kZXZpY2VDb2RlKTtcclxuICAgICAgICBjb25zdCBjb3JyZWxhdGlvbklkID0gcmVxdWVzdC5jb3JyZWxhdGlvbklkIHx8IHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZS5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICAgICAgcmVxdWVzdFBhcmFtZXRlcnMuYWRkQ29ycmVsYXRpb25JZChjb3JyZWxhdGlvbklkKTtcclxuICAgICAgICByZXF1ZXN0UGFyYW1ldGVycy5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyZXF1ZXN0LmNsYWltcykgfHwgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzICYmIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RQYXJhbWV0ZXJzLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcywgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RQYXJhbWV0ZXJzLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hUb2tlblJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9SZWZyZXNoVG9rZW5SZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFNlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1NlcnZlckF1dGhvcml6YXRpb25Ub2tlblJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3JlcXVlc3QvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgR3JhbnRUeXBlLCBBdXRoZW50aWNhdGlvblNjaGVtZSwgRXJyb3JzICB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBQb3BUb2tlbkdlbmVyYXRvciB9IGZyb20gXCIuLi9jcnlwdG8vUG9wVG9rZW5HZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi4vbmV0d29yay9OZXR3b3JrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTaWxlbnRGbG93UmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L1NpbGVudEZsb3dSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xyXG5cclxuLyoqXHJcbiAqIE9BdXRoMi4wIHJlZnJlc2ggdG9rZW4gY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFRva2VuQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogUmVmcmVzaFRva2VuUmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3QsIHRoaXMuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNyeXB0b1V0aWxzLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VyaWFsaXphYmxlQ2FjaGUsXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBlcnNpc3RlbmNlUGx1Z2luXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyLnZhbGlkYXRlVG9rZW5SZXNwb25zZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VIYW5kbGVyLmhhbmRsZVNlcnZlclRva2VuUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmJvZHksXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICByZXF1ZXN0LnJlc291cmNlUmVxdWVzdE1ldGhvZCxcclxuICAgICAgICAgICAgcmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RVcmksXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGNhY2hlZCByZWZyZXNoIHRva2VuIGFuZCBhdHRhY2hlcyB0byByZXF1ZXN0LCB0aGVuIGNhbGxzIGFjcXVpcmVUb2tlbiBBUElcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhY3F1aXJlVG9rZW5CeVJlZnJlc2hUb2tlbihyZXF1ZXN0OiBTaWxlbnRGbG93UmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQ+IHtcclxuICAgICAgICAvLyBDYW5ub3QgcmVuZXcgdG9rZW4gaWYgbm8gcmVxdWVzdCBvYmplY3QgaXMgZ2l2ZW4uXHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVRva2VuUmVxdWVzdEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgc2lsZW50IGZsb3cgZm9yIGFjY291bnQgPT09IG51bGwgdXNlIGNhc2VzOyBUaGlzIHdpbGwgYmUgcmV2aXNpdGVkIGZvciBjb25maWRlbnRpYWwgZmxvdyB1c2VjYXNlc1xyXG4gICAgICAgIGlmICghcmVxdWVzdC5hY2NvdW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVOb0FjY291bnRJblNpbGVudFJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdHJ5IGNoZWNraW5nIGlmIEZPQ0kgaXMgZW5hYmxlZCBmb3IgdGhlIGdpdmVuIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgY29uc3QgaXNGT0NJID0gdGhpcy5jYWNoZU1hbmFnZXIuaXNBcHBNZXRhZGF0YUZPQ0kocmVxdWVzdC5hY2NvdW50LmVudmlyb25tZW50LCB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBhcHAgaXMgcGFydCBvZiB0aGUgZmFtaWx5LCByZXRyaXZlIGEgRmFtaWx5IHJlZnJlc2ggdG9rZW4gaWYgcHJlc2VudCBhbmQgbWFrZSBhIHJlZnJlc2hUb2tlblJlcXVlc3RcclxuICAgICAgICBpZiAoaXNGT0NJKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW5XaXRoQ2FjaGVkUmVmcmVzaFRva2VuKHJlcXVlc3QsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub0ZhbWlseVJUSW5DYWNoZSA9IGUgaW5zdGFuY2VvZiBDbGllbnRBdXRoRXJyb3IgJiYgZS5lcnJvckNvZGUgPT09IENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9Ub2tlbnNGb3VuZEVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRNaXNtYXRjaEVycm9yV2l0aEZhbWlseVJUID0gZSBpbnN0YW5jZW9mIFNlcnZlckVycm9yICYmIGUuZXJyb3JDb2RlID09PSBFcnJvcnMuSU5WQUxJRF9HUkFOVF9FUlJPUiAmJiBlLnN1YkVycm9yID09PSBFcnJvcnMuQ0xJRU5UX01JU01BVENIX0VSUk9SO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIGZhbWlseSBSZWZyZXNoIFRva2VuIChGUlQpIGNhY2hlIGFjcXVpc2l0aW9uIGZhaWxzIG9yIGlmIGNsaWVudF9taXNtYXRjaCBlcnJvciBpcyBzZWVuIHdpdGggRlJULCByZWF0dGVtcHQgd2l0aCBhcHBsaWNhdGlvbiBSZWZyZXNoIFRva2VuIChBUlQpXHJcbiAgICAgICAgICAgICAgICBpZiAobm9GYW1pbHlSVEluQ2FjaGUgfHwgY2xpZW50TWlzbWF0Y2hFcnJvcldpdGhGYW1pbHlSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjcXVpcmVUb2tlbldpdGhDYWNoZWRSZWZyZXNoVG9rZW4ocmVxdWVzdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgaW4gYWxsIG90aGVyIGNhc2VzXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBhcHBsaWNhdGlvbiByZWZyZXNoIHRva2VuIGFjcXVpc2l0aW9uXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNxdWlyZVRva2VuV2l0aENhY2hlZFJlZnJlc2hUb2tlbihyZXF1ZXN0LCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgYSBuZXR3b3JrIGNhbGwgdG8gYWNxdWlyZSB0b2tlbnMgYnkgZXhjaGFuZ2luZyBSZWZyZXNoVG9rZW4gYXZhaWxhYmxlIGluIHVzZXJDYWNoZTsgdGhyb3dzIGlmIHJlZnJlc2ggdG9rZW4gaXMgbm90IGNhY2hlZFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBhY3F1aXJlVG9rZW5XaXRoQ2FjaGVkUmVmcmVzaFRva2VuKHJlcXVlc3Q6IFNpbGVudEZsb3dSZXF1ZXN0LCBmb2NpOiBib29sZWFuKSB7XHJcbiAgICAgICAgLy8gZmV0Y2hlcyBmYW1pbHkgUlQgb3IgYXBwbGljYXRpb24gUlQgYmFzZWQgb24gRk9DSSB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHRoaXMuY2FjaGVNYW5hZ2VyLnJlYWRSZWZyZXNoVG9rZW5Gcm9tQ2FjaGUodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsIHJlcXVlc3QuYWNjb3VudCwgZm9jaSk7XHJcblxyXG4gICAgICAgIC8vIG5vIHJlZnJlc2ggVG9rZW5cclxuICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9Ub2tlbnNGb3VuZEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW5SZXF1ZXN0OiBSZWZyZXNoVG9rZW5SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAuLi5yZXF1ZXN0LFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbi5zZWNyZXQsXHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU2NoZW1lOiBBdXRoZW50aWNhdGlvblNjaGVtZS5CRUFSRVJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW4ocmVmcmVzaFRva2VuUmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIHRoZSBuZXR3b3JrIG1lc3NhZ2UgYW5kIG1ha2VzIGEgTlcgY2FsbCB0byB0aGUgdW5kZXJseWluZyBzZWN1cmUgdG9rZW4gc2VydmljZVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QsIGF1dGhvcml0eTogQXV0aG9yaXR5KVxyXG4gICAgICAgIDogUHJvbWlzZTxOZXR3b3JrUmVzcG9uc2U8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB0aGlzLmNyZWF0ZURlZmF1bHRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XHJcbiAgICAgICAgY29uc3QgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiBhdXRob3JpdHkuY2Fub25pY2FsQXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBzY29wZXM6IHJlcXVlc3Quc2NvcGVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZVBvc3RUb1Rva2VuRW5kcG9pbnQoYXV0aG9yaXR5LnRva2VuRW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoZWFkZXJzLCB0aHVtYnByaW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHRva2VuIHJlcXVlc3QgYm9keVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBjcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3Q6IFJlZnJlc2hUb2tlblJlcXVlc3QpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHJlcXVlc3Quc2NvcGVzKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRHcmFudFR5cGUoR3JhbnRUeXBlLlJFRlJFU0hfVE9LRU5fR1JBTlQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudEluZm8oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29ycmVsYXRpb25JZCA9IHJlcXVlc3QuY29ycmVsYXRpb25JZCB8fCB0aGlzLmNvbmZpZy5jcnlwdG9JbnRlcmZhY2UuY3JlYXRlTmV3R3VpZCgpO1xyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ29ycmVsYXRpb25JZChjb3JyZWxhdGlvbklkKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRSZWZyZXNoVG9rZW4ocmVxdWVzdC5yZWZyZXNoVG9rZW4pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50U2VjcmV0KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50U2VjcmV0KHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudFNlY3JldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50QXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEFzc2VydGlvbiA9IHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudEFzc2VydGlvbjtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRBc3NlcnRpb24oY2xpZW50QXNzZXJ0aW9uLmFzc2VydGlvbik7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50QXNzZXJ0aW9uVHlwZShjbGllbnRBc3NlcnRpb24uYXNzZXJ0aW9uVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5hdXRoZW50aWNhdGlvblNjaGVtZSA9PT0gQXV0aGVudGljYXRpb25TY2hlbWUuUE9QKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcFRva2VuR2VuZXJhdG9yID0gbmV3IFBvcFRva2VuR2VuZXJhdG9yKHRoaXMuY3J5cHRvVXRpbHMpO1xyXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0TWV0aG9kIHx8ICFyZXF1ZXN0LnJlc291cmNlUmVxdWVzdFVyaSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVJlc291cmNlUmVxdWVzdFBhcmFtZXRlcnNSZXF1aXJlZEVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUG9wVG9rZW4oYXdhaXQgcG9wVG9rZW5HZW5lcmF0b3IuZ2VuZXJhdGVDbmYocmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RNZXRob2QsIHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0VXJpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVxdWVzdC5jbGFpbXMpIHx8IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcyAmJiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcywgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3JlcXVlc3QvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBHcmFudFR5cGUgLCBDcmVkZW50aWFsVHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJlc3VsdCB9IGZyb20gXCIuLi9yZXNwb25zZS9BdXRoZW50aWNhdGlvblJlc3VsdFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDcmVkZW50aWFsUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0L0NsaWVudENyZWRlbnRpYWxSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxGaWx0ZXIsIENyZWRlbnRpYWxDYWNoZSB9IGZyb20gXCIuLi9jYWNoZS91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY2Vzc1Rva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuLi91dGlscy9UaW1lVXRpbHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcblxyXG4vKipcclxuICogT0F1dGgyLjAgY2xpZW50IGNyZWRlbnRpYWwgZ3JhbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRDcmVkZW50aWFsQ2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29wZVNldDogU2NvcGVTZXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHVibGljIEFQSSB0byBhY3F1aXJlIGEgdG9rZW4gd2l0aCBDbGllbnRDcmVkZW50aWFsIEZsb3cgZm9yIENvbmZpZGVudGlhbCBjbGllbnRzXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgYWNxdWlyZVRva2VuKHJlcXVlc3Q6IENsaWVudENyZWRlbnRpYWxSZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdCB8IG51bGw+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zY29wZVNldCA9IG5ldyBTY29wZVNldChyZXF1ZXN0LnNjb3BlcyB8fCBbXSk7XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0LnNraXBDYWNoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3QsIHRoaXMuYXV0aG9yaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlZEF1dGhlbnRpY2F0aW9uUmVzdWx0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZWRBdXRoZW50aWNhdGlvblJlc3VsdCgpO1xyXG4gICAgICAgIGlmIChjYWNoZWRBdXRoZW50aWNhdGlvblJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQXV0aGVudGljYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXhlY3V0ZVRva2VuUmVxdWVzdChyZXF1ZXN0LCB0aGlzLmF1dGhvcml0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9va3MgdXAgY2FjaGUgaWYgdGhlIHRva2VucyBhcmUgY2FjaGVkIGFscmVhZHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYWNoZWRBdXRoZW50aWNhdGlvblJlc3VsdCgpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbD4ge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY2Vzc1Rva2VuID0gdGhpcy5yZWFkQWNjZXNzVG9rZW5Gcm9tQ2FjaGUoKTtcclxuICAgICAgICBpZiAoIWNhY2hlZEFjY2Vzc1Rva2VuIHx8XHJcbiAgICAgICAgICAgIFRpbWVVdGlscy5pc1Rva2VuRXhwaXJlZChjYWNoZWRBY2Nlc3NUb2tlbi5leHBpcmVzT24sIHRoaXMuY29uZmlnLnN5c3RlbU9wdGlvbnMudG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgUmVzcG9uc2VIYW5kbGVyLmdlbmVyYXRlQXV0aGVudGljYXRpb25SZXN1bHQoXHJcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvVXRpbHMsXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBjYWNoZWRBY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFwcE1ldGFkYXRhOiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVhZHMgYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgKiBUT0RPOiBNb3ZlIHRoaXMgY2FsbCB0byBjYWNoZU1hbmFnZXIgaW5zdGVhZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRBY2Nlc3NUb2tlbkZyb21DYWNoZSgpOiBBY2Nlc3NUb2tlbkVudGl0eSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkOiBcIlwiLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogdGhpcy5hdXRob3JpdHkuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU4sXHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgcmVhbG06IHRoaXMuYXV0aG9yaXR5LnRlbmFudCxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnNjb3BlU2V0LnByaW50U2NvcGVzTG93ZXJDYXNlKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxDYWNoZTogQ3JlZGVudGlhbENhY2hlID0gdGhpcy5jYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGFjY2Vzc1Rva2VuRmlsdGVyKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbnMgPSBPYmplY3Qua2V5cyhjcmVkZW50aWFsQ2FjaGUuYWNjZXNzVG9rZW5zKS5tYXAoa2V5ID0+IGNyZWRlbnRpYWxDYWNoZS5hY2Nlc3NUb2tlbnNba2V5XSk7XHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2Vucy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWNjZXNzVG9rZW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2Vuc1swXSBhcyBBY2Nlc3NUb2tlbkVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIGEgbmV0d29yayBjYWxsIHRvIHJlcXVlc3QgdGhlIHRva2VuIGZyb20gdGhlIHNlcnZpY2VcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZXhlY3V0ZVRva2VuUmVxdWVzdChyZXF1ZXN0OiBDbGllbnRDcmVkZW50aWFsUmVxdWVzdCwgYXV0aG9yaXR5OiBBdXRob3JpdHkpXHJcbiAgICAgICAgOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbD4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG4gICAgICAgIGNvbnN0IHRodW1icHJpbnQ6IFJlcXVlc3RUaHVtYnByaW50ID0ge1xyXG4gICAgICAgICAgICBjbGllbnRJZDogdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGF1dGhvcml0eTogcmVxdWVzdC5hdXRob3JpdHksXHJcbiAgICAgICAgICAgIHNjb3BlczogcmVxdWVzdC5zY29wZXNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZXhlY3V0ZVBvc3RUb1Rva2VuRW5kcG9pbnQoYXV0aG9yaXR5LnRva2VuRW5kcG9pbnQsIHJlcXVlc3RCb2R5LCBoZWFkZXJzLCB0aHVtYnByaW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VIYW5kbGVyID0gbmV3IFJlc3BvbnNlSGFuZGxlcihcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNyeXB0b1V0aWxzLFxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlcixcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VyaWFsaXphYmxlQ2FjaGUsXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBlcnNpc3RlbmNlUGx1Z2luXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmVzcG9uc2VIYW5kbGVyLnZhbGlkYXRlVG9rZW5SZXNwb25zZShyZXNwb25zZS5ib2R5KTtcclxuICAgICAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VIYW5kbGVyLmhhbmRsZVNlcnZlclRva2VuUmVzcG9uc2UoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmJvZHksXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXR5LFxyXG4gICAgICAgICAgICByZXF1ZXN0LnJlc291cmNlUmVxdWVzdE1ldGhvZCxcclxuICAgICAgICAgICAgcmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RVcmksXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcmVxdWVzdC5zY29wZXNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5SZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHRoZSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgaW4gdGhlIGFjY2VwdGFibGUgZm9ybWF0XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogQ2xpZW50Q3JlZGVudGlhbFJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkU2NvcGVzKHJlcXVlc3Quc2NvcGVzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkR3JhbnRUeXBlKEdyYW50VHlwZS5DTElFTlRfQ1JFREVOVElBTFNfR1JBTlQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb3JyZWxhdGlvbklkID0gcmVxdWVzdC5jb3JyZWxhdGlvbklkIHx8IHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZS5jcmVhdGVOZXdHdWlkKCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDb3JyZWxhdGlvbklkKGNvcnJlbGF0aW9uSWQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50U2VjcmV0KSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50U2VjcmV0KHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudFNlY3JldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50QXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEFzc2VydGlvbiA9IHRoaXMuY29uZmlnLmNsaWVudENyZWRlbnRpYWxzLmNsaWVudEFzc2VydGlvbjtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRBc3NlcnRpb24oY2xpZW50QXNzZXJ0aW9uLmFzc2VydGlvbik7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50QXNzZXJ0aW9uVHlwZShjbGllbnRBc3NlcnRpb24uYXNzZXJ0aW9uVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVxdWVzdC5jbGFpbXMpIHx8IHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcyAmJiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsYWltcyhyZXF1ZXN0LmNsYWltcywgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEJhc2VDbGllbnQgfSBmcm9tIFwiLi9CYXNlQ2xpZW50XCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyIH0gZnJvbSBcIi4uL3JlcXVlc3QvUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBHcmFudFR5cGUsIEFBRFNlcnZlclBhcmFtS2V5cyAsIENyZWRlbnRpYWxUeXBlLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlSGFuZGxlciB9IGZyb20gXCIuLi9yZXNwb25zZS9SZXNwb25zZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXN1bHQgfSBmcm9tIFwiLi4vcmVzcG9uc2UvQXV0aGVudGljYXRpb25SZXN1bHRcIjtcclxuaW1wb3J0IHsgT25CZWhhbGZPZlJlcXVlc3QgfSBmcm9tIFwiLi4vcmVxdWVzdC9PbkJlaGFsZk9mUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVGltZVV0aWxzXCI7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxGaWx0ZXIsIENyZWRlbnRpYWxDYWNoZSB9IGZyb20gXCIuLi9jYWNoZS91dGlscy9DYWNoZVR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY2Vzc1Rva2VuRW50aXR5XCI7XHJcbmltcG9ydCB7IElkVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvSWRUb2tlbkVudGl0eVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50RW50aXR5IH0gZnJvbSBcIi4uL2NhY2hlL2VudGl0aWVzL0FjY291bnRFbnRpdHlcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSBcIi4uL2FjY291bnQvQXV0aFRva2VuXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9hY2NvdW50L0FjY291bnRJbmZvXCI7XHJcblxyXG4vKipcclxuICogT24tQmVoYWxmLU9mIGNsaWVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9uQmVoYWxmT2ZDbGllbnQgZXh0ZW5kcyBCYXNlQ2xpZW50IHtcclxuXHJcbiAgICBwcml2YXRlIHNjb3BlU2V0OiBTY29wZVNldDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDbGllbnRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlndXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQdWJsaWMgQVBJIHRvIGFjcXVpcmUgdG9rZW5zIHdpdGggb24gYmVoYWxmIG9mIGZsb3dcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogT25CZWhhbGZPZlJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbD4ge1xyXG4gICAgICAgIHRoaXMuc2NvcGVTZXQgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdC5za2lwQ2FjaGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXhlY3V0ZVRva2VuUmVxdWVzdChyZXF1ZXN0LCB0aGlzLmF1dGhvcml0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYWNoZWRBdXRoZW50aWNhdGlvblJlc3VsdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVkQXV0aGVudGljYXRpb25SZXN1bHQocmVxdWVzdCk7XHJcbiAgICAgICAgaWYgKGNhY2hlZEF1dGhlbnRpY2F0aW9uUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRBdXRoZW50aWNhdGlvblJlc3VsdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3QsIHRoaXMuYXV0aG9yaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb29rIHVwIGNhY2hlIGZvciB0b2tlbnNcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZ2V0Q2FjaGVkQXV0aGVudGljYXRpb25SZXN1bHQocmVxdWVzdDogT25CZWhhbGZPZlJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbD4ge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEFjY2Vzc1Rva2VuID0gdGhpcy5yZWFkQWNjZXNzVG9rZW5Gcm9tQ2FjaGUocmVxdWVzdCk7XHJcbiAgICAgICAgaWYgKCFjYWNoZWRBY2Nlc3NUb2tlbiB8fFxyXG4gICAgICAgICAgICBUaW1lVXRpbHMuaXNUb2tlbkV4cGlyZWQoY2FjaGVkQWNjZXNzVG9rZW4uZXhwaXJlc09uLCB0aGlzLmNvbmZpZy5zeXN0ZW1PcHRpb25zLnRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVkSWRUb2tlbiA9IHRoaXMucmVhZElkVG9rZW5Gcm9tQ2FjaGUocmVxdWVzdCk7XHJcbiAgICAgICAgbGV0IGlkVG9rZW5PYmplY3Q6IEF1dGhUb2tlbiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgY2FjaGVkQWNjb3VudDogQWNjb3VudEVudGl0eSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChjYWNoZWRJZFRva2VuKSB7XHJcbiAgICAgICAgICAgIGlkVG9rZW5PYmplY3QgPSBuZXcgQXV0aFRva2VuKGNhY2hlZElkVG9rZW4uc2VjcmV0LCB0aGlzLmNvbmZpZy5jcnlwdG9JbnRlcmZhY2UpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbEFjY291bnRJZCA9IGlkVG9rZW5PYmplY3QuY2xhaW1zLm9pZCA/IGlkVG9rZW5PYmplY3QuY2xhaW1zLm9pZCA6IGlkVG9rZW5PYmplY3QuY2xhaW1zLnN1YjtcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudEluZm86IEFjY291bnRJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgaG9tZUFjY291bnRJZDogY2FjaGVkSWRUb2tlbi5ob21lQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGNhY2hlZElkVG9rZW4uZW52aXJvbm1lbnQsXHJcbiAgICAgICAgICAgICAgICB0ZW5hbnRJZDogY2FjaGVkSWRUb2tlbi5yZWFsbSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBDb25zdGFudHMuRU1QVFlfU1RSSU5HLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxBY2NvdW50SWQ6IGxvY2FsQWNjb3VudElkIHx8IFwiXCJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNhY2hlZEFjY291bnQgPSB0aGlzLnJlYWRBY2NvdW50RnJvbUNhY2hlKGFjY291bnRJbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBSZXNwb25zZUhhbmRsZXIuZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdChcclxuICAgICAgICAgICAgdGhpcy5jcnlwdG9VdGlscyxcclxuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHksXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGNhY2hlZEFjY291bnQsXHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogY2FjaGVkQWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBjYWNoZWRJZFRva2VuLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYXBwTWV0YWRhdGE6IG51bGxcclxuICAgICAgICAgICAgfSwgdHJ1ZSwgaWRUb2tlbk9iamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWFkIGFjY2VzcyB0b2tlbiBmcm9tIGNhY2hlIFRPRE86IENhY2hlTWFuYWdlciBBUEkgc2hvdWxkIGJlIHVzZWQgaGVyZVxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkQWNjZXNzVG9rZW5Gcm9tQ2FjaGUocmVxdWVzdDogT25CZWhhbGZPZlJlcXVlc3QpOiBBY2Nlc3NUb2tlbkVudGl0eSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuRmlsdGVyOiBDcmVkZW50aWFsRmlsdGVyID0ge1xyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogdGhpcy5hdXRob3JpdHkuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxUeXBlOiBDcmVkZW50aWFsVHlwZS5BQ0NFU1NfVE9LRU4sXHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgcmVhbG06IHRoaXMuYXV0aG9yaXR5LnRlbmFudCxcclxuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLnNjb3BlU2V0LnByaW50U2NvcGVzTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIG9ib0Fzc2VydGlvbjogcmVxdWVzdC5vYm9Bc3NlcnRpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsQ2FjaGU6IENyZWRlbnRpYWxDYWNoZSA9IHRoaXMuY2FjaGVNYW5hZ2VyLmdldENyZWRlbnRpYWxzRmlsdGVyZWRCeShhY2Nlc3NUb2tlbkZpbHRlcik7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5zID0gT2JqZWN0LmtleXMoY3JlZGVudGlhbENhY2hlLmFjY2Vzc1Rva2VucykubWFwKGtleSA9PiBjcmVkZW50aWFsQ2FjaGUuYWNjZXNzVG9rZW5zW2tleV0pO1xyXG5cclxuICAgICAgICBjb25zdCBudW1BY2Nlc3NUb2tlbnMgPSBhY2Nlc3NUb2tlbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1BY2Nlc3NUb2tlbnMgPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtQWNjZXNzVG9rZW5zID4gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW5zWzBdIGFzIEFjY2Vzc1Rva2VuRW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVhZCBpZHRva2VuIGZyb20gY2FjaGUgVE9ETzogQ2FjaGVNYW5hZ2VyIEFQSSBzaG91bGQgYmUgdXNlZCBoZXJlIGluc3RlYWRcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZElkVG9rZW5Gcm9tQ2FjaGUocmVxdWVzdDogT25CZWhhbGZPZlJlcXVlc3QpOiBJZFRva2VuRW50aXR5IHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgaWRUb2tlbkZpbHRlcjogQ3JlZGVudGlhbEZpbHRlciA9IHtcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IHRoaXMuYXV0aG9yaXR5LmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsVHlwZTogQ3JlZGVudGlhbFR5cGUuSURfVE9LRU4sXHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgcmVhbG06IHRoaXMuYXV0aG9yaXR5LnRlbmFudCxcclxuICAgICAgICAgICAgb2JvQXNzZXJ0aW9uOiByZXF1ZXN0Lm9ib0Fzc2VydGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxDYWNoZTogQ3JlZGVudGlhbENhY2hlID0gdGhpcy5jYWNoZU1hbmFnZXIuZ2V0Q3JlZGVudGlhbHNGaWx0ZXJlZEJ5KGlkVG9rZW5GaWx0ZXIpO1xyXG4gICAgICAgIGNvbnN0IGlkVG9rZW5zID0gT2JqZWN0LmtleXMoY3JlZGVudGlhbENhY2hlLmlkVG9rZW5zKS5tYXAoa2V5ID0+IGNyZWRlbnRpYWxDYWNoZS5pZFRva2Vuc1trZXldKTtcclxuICAgICAgICAvLyBXaGVuIGFjcXVpcmluZyBhIHRva2VuIG9uIGJlaGFsZiBvZiBhbiBhcHBsaWNhdGlvbiwgdGhlcmUgbWlnaHQgbm90IGJlIGFuIGlkIHRva2VuIGluIHRoZSBjYWNoZVxyXG4gICAgICAgIGlmIChpZFRva2Vucy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaWRUb2tlbnNbMF0gYXMgSWRUb2tlbkVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlYWQgYWNjb3VudCBmcm9tIGNhY2hlLCBUT0RPOiBDYWNoZU1hbmFnZXIgQVBJIHNob3VsZCBiZSB1c2VkIGhlcmUgaW5zdGVhZFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkQWNjb3VudEZyb21DYWNoZShhY2NvdW50OiBBY2NvdW50SW5mbyk6IEFjY291bnRFbnRpdHkgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZU1hbmFnZXIucmVhZEFjY291bnRGcm9tQ2FjaGUoYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgbmV0d29yayBjYWxsIHRvIHRoZSBzZXJ2ZXIgcmVxdWVzdGluZyBjcmVkZW50aWFsc1xyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBleGVjdXRlVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IE9uQmVoYWxmT2ZSZXF1ZXN0LCBhdXRob3JpdHk6IEF1dGhvcml0eSlcclxuICAgICAgICA6IFByb21pc2U8QXV0aGVudGljYXRpb25SZXN1bHQgfCBudWxsPiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0gdGhpcy5jcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB0aGlzLmNyZWF0ZURlZmF1bHRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XHJcbiAgICAgICAgY29uc3QgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiByZXF1ZXN0LmF1dGhvcml0eSxcclxuICAgICAgICAgICAgc2NvcGVzOiByZXF1ZXN0LnNjb3Blc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMsIHRodW1icHJpbnQpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZUhhbmRsZXIgPSBuZXcgUmVzcG9uc2VIYW5kbGVyKFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvVXRpbHMsXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXJpYWxpemFibGVDYWNoZSxcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGVyc2lzdGVuY2VQbHVnaW5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVUb2tlblJlc3BvbnNlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZUhhbmRsZXIuaGFuZGxlU2VydmVyVG9rZW5SZXNwb25zZShcclxuICAgICAgICAgICAgcmVzcG9uc2UuYm9keSxcclxuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHksXHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0TWV0aG9kLFxyXG4gICAgICAgICAgICByZXF1ZXN0LnJlc291cmNlUmVxdWVzdFVyaSxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByZXF1ZXN0LnNjb3BlcyxcclxuICAgICAgICAgICAgcmVxdWVzdC5vYm9Bc3NlcnRpb25cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9rZW5SZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIGEgc2VydmVyIHJlcXVlc3QgaW4gYWNjZXBhYmxlIGZvcm1hdFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUb2tlblJlcXVlc3RCb2R5KHJlcXVlc3Q6IE9uQmVoYWxmT2ZSZXF1ZXN0KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJCdWlsZGVyID0gbmV3IFJlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyKCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xpZW50SWQodGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50SWQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFNjb3BlcyhyZXF1ZXN0LnNjb3Blcyk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkR3JhbnRUeXBlKEdyYW50VHlwZS5KV1RfQkVBUkVSKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkUmVxdWVzdFRva2VuVXNlKEFBRFNlcnZlclBhcmFtS2V5cy5PTl9CRUhBTEZfT0YpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZE9ib0Fzc2VydGlvbihyZXF1ZXN0Lm9ib0Fzc2VydGlvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jbGllbnRDcmVkZW50aWFscy5jbGllbnRTZWNyZXQpIHtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRTZWNyZXQodGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50U2VjcmV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jbGllbnRDcmVkZW50aWFscy5jbGllbnRBc3NlcnRpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50QXNzZXJ0aW9uID0gdGhpcy5jb25maWcuY2xpZW50Q3JlZGVudGlhbHMuY2xpZW50QXNzZXJ0aW9uO1xyXG4gICAgICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENsaWVudEFzc2VydGlvbihjbGllbnRBc3NlcnRpb24uYXNzZXJ0aW9uKTtcclxuICAgICAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRBc3NlcnRpb25UeXBlKGNsaWVudEFzc2VydGlvbi5hc3NlcnRpb25UeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJCdWlsZGVyLmNyZWF0ZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNpbGVudEZsb3dSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvU2lsZW50Rmxvd1JlcXVlc3RcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXN1bHQgfSBmcm9tIFwiLi4vcmVzcG9uc2UvQXV0aGVudGljYXRpb25SZXN1bHRcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5FbnRpdHkgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQWNjZXNzVG9rZW5FbnRpdHlcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vcmVxdWVzdC9TY29wZVNldFwiO1xyXG5pbXBvcnQgeyBBdXRoVG9rZW4gfSBmcm9tIFwiLi4vYWNjb3VudC9BdXRoVG9rZW5cIjtcclxuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVG9rZW5DbGllbnQgfSBmcm9tIFwiLi9SZWZyZXNoVG9rZW5DbGllbnRcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlSGFuZGxlciB9IGZyb20gXCIuLi9yZXNwb25zZS9SZXNwb25zZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ2FjaGVSZWNvcmQgfSBmcm9tIFwiLi4vY2FjaGUvZW50aXRpZXMvQ2FjaGVSZWNvcmRcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWxlbnRGbG93Q2xpZW50IGV4dGVuZHMgQmFzZUNsaWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ2xpZW50Q29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgdG9rZW4gZnJvbSBjYWNoZSBpZiBpdCBpcyBzdGlsbCB2YWxpZCwgb3IgdXNlcyB0aGUgY2FjaGVkIHJlZnJlc2ggdG9rZW4gdG8gcmVuZXdcclxuICAgICAqIHRoZSBnaXZlbiB0b2tlbiBhbmQgcmV0dXJucyB0aGUgcmVuZXdlZCB0b2tlblxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgYWNxdWlyZVRva2VuKHJlcXVlc3Q6IFNpbGVudEZsb3dSZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmFjcXVpcmVDYWNoZWRUb2tlbihyZXF1ZXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgQ2xpZW50QXV0aEVycm9yICYmIGUuZXJyb3JDb2RlID09PSBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVmcmVzaFJlcXVpcmVkLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbkNsaWVudCA9IG5ldyBSZWZyZXNoVG9rZW5DbGllbnQodGhpcy5jb25maWcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbkNsaWVudC5hY3F1aXJlVG9rZW5CeVJlZnJlc2hUb2tlbihyZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgdG9rZW4gZnJvbSBjYWNoZSBvciB0aHJvd3MgYW4gZXJyb3IgaWYgaXQgbXVzdCBiZSByZWZyZXNoZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBhY3F1aXJlQ2FjaGVkVG9rZW4ocmVxdWVzdDogU2lsZW50Rmxvd1JlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0PiB7XHJcbiAgICAgICAgLy8gQ2Fubm90IHJlbmV3IHRva2VuIGlmIG5vIHJlcXVlc3Qgb2JqZWN0IGlzIGdpdmVuLlxyXG4gICAgICAgIGlmICghcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlUb2tlblJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2UgY3VycmVudGx5IGRvIG5vdCBzdXBwb3J0IHNpbGVudCBmbG93IGZvciBhY2NvdW50ID09PSBudWxsIHVzZSBjYXNlczsgVGhpcyB3aWxsIGJlIHJldmlzaXRlZCBmb3IgY29uZmlkZW50aWFsIGZsb3cgdXNlY2FzZXNcclxuICAgICAgICBpZiAoIXJlcXVlc3QuYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9BY2NvdW50SW5TaWxlbnRSZXF1ZXN0RXJyb3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RTY29wZXMgPSBuZXcgU2NvcGVTZXQocmVxdWVzdC5zY29wZXMgfHwgW10pO1xyXG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gcmVxdWVzdC5hdXRob3JpdHkgfHwgQXV0aG9yaXR5LmdlbmVyYXRlRW52aXJvbm1lbnRGcm9tQXV0aG9yaXR5KHRoaXMuYXV0aG9yaXR5KTtcclxuICAgICAgICBjb25zdCBjYWNoZVJlY29yZCA9IHRoaXMuY2FjaGVNYW5hZ2VyLnJlYWRDYWNoZVJlY29yZChyZXF1ZXN0LmFjY291bnQsIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudElkLCByZXF1ZXN0U2NvcGVzLCBlbnZpcm9ubWVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzUmVmcmVzaFJlcXVpcmVkKHJlcXVlc3QsIGNhY2hlUmVjb3JkLmFjY2Vzc1Rva2VuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUmVmcmVzaFJlcXVpcmVkRXJyb3IoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuc2VydmVyVGVsZW1ldHJ5TWFuYWdlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2VydmVyVGVsZW1ldHJ5TWFuYWdlci5pbmNyZW1lbnRDYWNoZUhpdHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZW5lcmF0ZVJlc3VsdEZyb21DYWNoZVJlY29yZChjYWNoZVJlY29yZCwgcmVxdWVzdC5yZXNvdXJjZVJlcXVlc3RNZXRob2QsIHJlcXVlc3QucmVzb3VyY2VSZXF1ZXN0VXJpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYnVpbGQgcmVzcG9uc2Ugb2JqZWN0IGZyb20gdGhlIENhY2hlUmVjb3JkXHJcbiAgICAgKiBAcGFyYW0gY2FjaGVSZWNvcmRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBnZW5lcmF0ZVJlc3VsdEZyb21DYWNoZVJlY29yZChjYWNoZVJlY29yZDogQ2FjaGVSZWNvcmQsIHJlc291cmNlUmVxdWVzdE1ldGhvZD86IHN0cmluZywgcmVzb3VyY2VSZXF1ZXN0VXJpPzogc3RyaW5nKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvblJlc3VsdD4ge1xyXG4gICAgICAgIGxldCBpZFRva2VuT2JqOiBBdXRoVG9rZW4gfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGNhY2hlUmVjb3JkLmlkVG9rZW4pIHtcclxuICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBBdXRoVG9rZW4oY2FjaGVSZWNvcmQuaWRUb2tlbi5zZWNyZXQsIHRoaXMuY29uZmlnLmNyeXB0b0ludGVyZmFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBSZXNwb25zZUhhbmRsZXIuZ2VuZXJhdGVBdXRoZW50aWNhdGlvblJlc3VsdChcclxuICAgICAgICAgICAgdGhpcy5jcnlwdG9VdGlscyxcclxuICAgICAgICAgICAgdGhpcy5hdXRob3JpdHksXHJcbiAgICAgICAgICAgIGNhY2hlUmVjb3JkLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBpZFRva2VuT2JqLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJlc291cmNlUmVxdWVzdE1ldGhvZCxcclxuICAgICAgICAgICAgcmVzb3VyY2VSZXF1ZXN0VXJpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgcmVxdWVzdCBvYmplY3QgYW5kIGFuIGFjY2Vzc1Rva2VuRW50aXR5IGRldGVybWluZSBpZiB0aGUgYWNjZXNzVG9rZW4gbmVlZHMgdG8gYmUgcmVmcmVzaGVkXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIGNhY2hlZEFjY2Vzc1Rva2VuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNSZWZyZXNoUmVxdWlyZWQocmVxdWVzdDogU2lsZW50Rmxvd1JlcXVlc3QsIGNhY2hlZEFjY2Vzc1Rva2VuOiBBY2Nlc3NUb2tlbkVudGl0eXxudWxsKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9yY2VSZWZyZXNoIHx8IHJlcXVlc3QuY2xhaW1zKSB7XHJcbiAgICAgICAgICAgIC8vIE11c3QgcmVmcmVzaCBkdWUgdG8gcmVxdWVzdCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWNhY2hlZEFjY2Vzc1Rva2VuIHx8IFRpbWVVdGlscy5pc1Rva2VuRXhwaXJlZChjYWNoZWRBY2Nlc3NUb2tlbi5leHBpcmVzT24sIHRoaXMuY29uZmlnLnN5c3RlbU9wdGlvbnMudG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcykpIHtcclxuICAgICAgICAgICAgLy8gTXVzdCByZWZyZXNoIGR1ZSB0byBleHBpcmVkIG9yIG5vbi1leGlzdGVudCBhY2Nlc3NfdG9rZW5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBCYXNlQ2xpZW50IH0gZnJvbSBcIi4vQmFzZUNsaWVudFwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbmZpZy9DbGllbnRDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXJuYW1lUGFzc3dvcmRSZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvVXNlcm5hbWVQYXNzd29yZFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZXN1bHQgfSBmcm9tIFwiLi4vcmVzcG9uc2UvQXV0aGVudGljYXRpb25SZXN1bHRcIjtcclxuaW1wb3J0IHsgUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL1Jlc3BvbnNlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi4vbmV0d29yay9OZXR3b3JrTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9TZXJ2ZXJBdXRob3JpemF0aW9uVG9rZW5SZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBSZXF1ZXN0UGFyYW1ldGVyQnVpbGRlciB9IGZyb20gXCIuLi9yZXF1ZXN0L1JlcXVlc3RQYXJhbWV0ZXJCdWlsZGVyXCI7XHJcbmltcG9ydCB7IEdyYW50VHlwZSB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgUmVxdWVzdFRodW1icHJpbnQgfSBmcm9tIFwiLi4vbmV0d29yay9SZXF1ZXN0VGh1bWJwcmludFwiO1xyXG5cclxuLyoqXHJcbiAqIE9hdXRoMi4wIFBhc3N3b3JkIGdyYW50IGNsaWVudFxyXG4gKiBOb3RlOiBXZSBhcmUgb25seSBzdXBwb3J0aW5nIHB1YmxpYyBjbGllbnRzIGZvciBwYXNzd29yZCBncmFudCBhbmQgZm9yIHB1cmVseSB0ZXN0aW5nIHB1cnBvc2VzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXNlcm5hbWVQYXNzd29yZENsaWVudCBleHRlbmRzIEJhc2VDbGllbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENsaWVudENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBzdXBlcihjb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFQSSB0byBhY3F1aXJlIGEgdG9rZW4gYnkgcGFzc2luZyB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHRvIHRoZSBzZXJ2aWNlIGluIGV4Y2hhZ2Ugb2YgY3JlZGVudGlhbHNcclxuICAgICAqIHBhc3N3b3JkX2dyYW50XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBhY3F1aXJlVG9rZW4ocmVxdWVzdDogVXNlcm5hbWVQYXNzd29yZFJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uUmVzdWx0IHwgbnVsbD4ge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpbiBhY3F1aXJlVG9rZW4gY2FsbFwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmV4ZWN1dGVUb2tlblJlcXVlc3QodGhpcy5hdXRob3JpdHksIHJlcXVlc3QpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZUhhbmRsZXIgPSBuZXcgUmVzcG9uc2VIYW5kbGVyKFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuY3J5cHRvVXRpbHMsXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXJpYWxpemFibGVDYWNoZSxcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGVyc2lzdGVuY2VQbHVnaW5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBWYWxpZGF0ZSByZXNwb25zZS4gVGhpcyBmdW5jdGlvbiB0aHJvd3MgYSBzZXJ2ZXIgZXJyb3IgaWYgYW4gZXJyb3IgaXMgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cclxuICAgICAgICByZXNwb25zZUhhbmRsZXIudmFsaWRhdGVUb2tlblJlc3BvbnNlKHJlc3BvbnNlLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSByZXNwb25zZUhhbmRsZXIuaGFuZGxlU2VydmVyVG9rZW5SZXNwb25zZShyZXNwb25zZS5ib2R5LCB0aGlzLmF1dGhvcml0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZXMgUE9TVCByZXF1ZXN0IHRvIHRva2VuIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGV4ZWN1dGVUb2tlblJlcXVlc3QoYXV0aG9yaXR5OiBBdXRob3JpdHksIHJlcXVlc3Q6IFVzZXJuYW1lUGFzc3dvcmRSZXF1ZXN0KTogUHJvbWlzZTxOZXR3b3JrUmVzcG9uc2U8U2VydmVyQXV0aG9yaXphdGlvblRva2VuUmVzcG9uc2U+PiB7XHJcbiAgICAgICAgY29uc3QgdGh1bWJwcmludDogUmVxdWVzdFRodW1icHJpbnQgPSB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiBhdXRob3JpdHkuY2Fub25pY2FsQXV0aG9yaXR5LFxyXG4gICAgICAgICAgICBzY29wZXM6IHJlcXVlc3Quc2NvcGVzXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHRoaXMuY3JlYXRlVG9rZW5SZXF1ZXN0Qm9keShyZXF1ZXN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gdGhpcy5jcmVhdGVEZWZhdWx0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlUG9zdFRvVG9rZW5FbmRwb2ludChhdXRob3JpdHkudG9rZW5FbmRwb2ludCwgcmVxdWVzdEJvZHksIGhlYWRlcnMsIHRodW1icHJpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgbWFwIGZvciBhbGwgdGhlIHBhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2aWNlXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRva2VuUmVxdWVzdEJvZHkocmVxdWVzdDogVXNlcm5hbWVQYXNzd29yZFJlcXVlc3QpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckJ1aWxkZXIgPSBuZXcgUmVxdWVzdFBhcmFtZXRlckJ1aWxkZXIoKTtcclxuXHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJZCh0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRJZCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRVc2VybmFtZShyZXF1ZXN0LnVzZXJuYW1lKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFBhc3N3b3JkKHJlcXVlc3QucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZFNjb3BlcyhyZXF1ZXN0LnNjb3Blcyk7XHJcblxyXG4gICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkR3JhbnRUeXBlKEdyYW50VHlwZS5SRVNPVVJDRV9PV05FUl9QQVNTV09SRF9HUkFOVCk7XHJcbiAgICAgICAgcGFyYW1ldGVyQnVpbGRlci5hZGRDbGllbnRJbmZvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSByZXF1ZXN0LmNvcnJlbGF0aW9uSWQgfHwgdGhpcy5jb25maWcuY3J5cHRvSW50ZXJmYWNlLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICBwYXJhbWV0ZXJCdWlsZGVyLmFkZENvcnJlbGF0aW9uSWQoY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShyZXF1ZXN0LmNsYWltcykgfHwgdGhpcy5jb25maWcuYXV0aE9wdGlvbnMuY2xpZW50Q2FwYWJpbGl0aWVzICYmIHRoaXMuY29uZmlnLmF1dGhPcHRpb25zLmNsaWVudENhcGFiaWxpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlckJ1aWxkZXIuYWRkQ2xhaW1zKHJlcXVlc3QuY2xhaW1zLCB0aGlzLmNvbmZpZy5hdXRoT3B0aW9ucy5jbGllbnRDYXBhYmlsaXRpZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckJ1aWxkZXIuY3JlYXRlUXVlcnlTdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IElOZXR3b3JrTW9kdWxlIH0gZnJvbSBcIi4uL25ldHdvcmsvSU5ldHdvcmtNb2R1bGVcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBQcm90b2NvbE1vZGUgfSBmcm9tIFwiLi9Qcm90b2NvbE1vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBhdXRob3JpdHkgb2JqZWN0IG9mIHRoZSBjb3JyZWN0IHR5cGUgYmFzZWQgb24gdGhlIHVybFxyXG4gICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChpLmUuIGFhZCwgYjJjLCBhZGZzKVxyXG4gICAgICpcclxuICAgICAqIEFsc28gcGVyZm9ybXMgZW5kcG9pbnQgZGlzY292ZXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlVcmlcclxuICAgICAqIEBwYXJhbSBuZXR3b3JrQ2xpZW50XHJcbiAgICAgKiBAcGFyYW0gcHJvdG9jb2xNb2RlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBjcmVhdGVEaXNjb3ZlcmVkSW5zdGFuY2UoYXV0aG9yaXR5VXJpOiBzdHJpbmcsIG5ldHdvcmtDbGllbnQ6IElOZXR3b3JrTW9kdWxlLCBwcm90b2NvbE1vZGU6IFByb3RvY29sTW9kZSk6IFByb21pc2U8QXV0aG9yaXR5PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhdXRob3JpdHkgYW5kIHBlcmZvcm0gZGlzY292ZXJ5IGVuZHBvaW50IGNoZWNrLlxyXG4gICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eTogQXV0aG9yaXR5ID0gQXV0aG9yaXR5RmFjdG9yeS5jcmVhdGVJbnN0YW5jZShhdXRob3JpdHlVcmksIG5ldHdvcmtDbGllbnQsIHByb3RvY29sTW9kZSk7XHJcblxyXG4gICAgICAgIGlmIChhY3F1aXJlVG9rZW5BdXRob3JpdHkuZGlzY292ZXJ5Q29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNxdWlyZVRva2VuQXV0aG9yaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNxdWlyZVRva2VuQXV0aG9yaXR5O1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50RGlzY292ZXJ5SW5jb21wbGV0ZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBhdXRob3JpdHkgb2JqZWN0IG9mIHRoZSBjb3JyZWN0IHR5cGUgYmFzZWQgb24gdGhlIHVybFxyXG4gICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChpLmUuIGFhZCwgYjJjLCBhZGZzKVxyXG4gICAgICpcclxuICAgICAqIERvZXMgbm90IHBlcmZvcm0gZW5kcG9pbnQgZGlzY292ZXJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlVcmxcclxuICAgICAqIEBwYXJhbSBuZXR3b3JrSW50ZXJmYWNlXHJcbiAgICAgKiBAcGFyYW0gcHJvdG9jb2xNb2RlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVJbnN0YW5jZShhdXRob3JpdHlVcmw6IHN0cmluZywgbmV0d29ya0ludGVyZmFjZTogSU5ldHdvcmtNb2R1bGUsIHByb3RvY29sTW9kZTogUHJvdG9jb2xNb2RlKTogQXV0aG9yaXR5IHtcclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBhdXRob3JpdHkgdXJsIGlzIGVtcHR5XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlVXJsRW1wdHlFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCBuZXR3b3JrSW50ZXJmYWNlLCBwcm90b2NvbE1vZGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU0VSVkVSX1RFTEVNX0NPTlNUQU5UUyB9IGZyb20gXCIuLi8uLi91dGlscy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkge1xyXG4gICAgZmFpbGVkUmVxdWVzdHM6IEFycmF5PHN0cmluZ3xudW1iZXI+O1xyXG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcclxuICAgIGNhY2hlSGl0czogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZmFpbGVkUmVxdWVzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FjaGVIaXRzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGdpdmVuIGNhY2hlIGVudHJ5IGlzIFwiVGVsZW1ldHJ5XCIsIHBhcnNlcyA8a2V5LHZhbHVlPlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIGVudGl0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkoa2V5OiBzdHJpbmcsIGVudGl0eT86IG9iamVjdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0ZUtleTogYm9vbGVhbiA9IGtleS5pbmRleE9mKFNFUlZFUl9URUxFTV9DT05TVEFOVFMuQ0FDSEVfS0VZKSA9PT0gMDtcclxuICAgICAgICBsZXQgdmFsaWRhdGVFbnRpdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZW50aXR5KSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRW50aXR5ID1cclxuICAgICAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImZhaWxlZFJlcXVlc3RzXCIpICYmXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkuaGFzT3duUHJvcGVydHkoXCJlcnJvcnNcIikgJiZcclxuICAgICAgICAgICAgICAgIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShcImNhY2hlSGl0c1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZUtleSAmJiB2YWxpZGF0ZUVudGl0eTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFRocm90dGxpbmdDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGhyb3R0bGluZ0VudGl0eSB7XHJcbiAgICAvLyBVbml4LXRpbWUgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBleHBpcmF0aW9uIG9mIHRoZSB0aHJvdHRsZVxyXG4gICAgdGhyb3R0bGVUaW1lOiBudW1iZXI7XHJcbiAgICAvLyBJbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgc2VydmVyXHJcbiAgICBlcnJvcj86IHN0cmluZztcclxuICAgIGVycm9yQ29kZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgc3ViRXJyb3I/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBnaXZlbiBjYWNoZSBlbnRyeSBpcyBcIlRocm90dGxpbmdcIiwgcGFyc2VzIDxrZXksdmFsdWU+XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gZW50aXR5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1Rocm90dGxpbmdFbnRpdHkoa2V5OiBzdHJpbmcsIGVudGl0eT86IG9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2YWxpZGF0ZUtleTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVLZXkgPSBrZXkuaW5kZXhPZihUaHJvdHRsaW5nQ29uc3RhbnRzLlRIUk9UVExJTkdfUFJFRklYKSA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHZhbGlkYXRlRW50aXR5OiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZW50aXR5KSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRW50aXR5ID0gZW50aXR5Lmhhc093blByb3BlcnR5KFwidGhyb3R0bGVUaW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlS2V5ICYmIHZhbGlkYXRlRW50aXR5O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBOZXR3b3JrUmVzcG9uc2UgfSBmcm9tIFwiLi9OZXR3b3JrTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgYWxsb3dlZCBieSBuZXR3b3JrIHJlcXVlc3QgQVBJcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5ldHdvcmtSZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIGhlYWRlcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxyXG4gICAgYm9keT86IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbGllbnQgbmV0d29yayBpbnRlcmZhY2UgdG8gc2VuZCBiYWNrZW5kIHJlcXVlc3RzLlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOZXR3b3JrTW9kdWxlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVyZmFjZSBmdW5jdGlvbiBmb3IgYXN5bmMgbmV0d29yayBcIkdFVFwiIHJlcXVlc3RzLiBCYXNlZCBvbiB0aGUgRmV0Y2ggc3RhbmRhcmQ6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnL1xyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RQYXJhbXNcclxuICAgICAqIEBwYXJhbSBlbmFibGVDYWNoaW5nXHJcbiAgICAgKi9cclxuICAgIHNlbmRHZXRSZXF1ZXN0QXN5bmM8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBOZXR3b3JrUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPE5ldHdvcmtSZXNwb25zZTxUPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcmZhY2UgZnVuY3Rpb24gZm9yIGFzeW5jIG5ldHdvcmsgXCJQT1NUXCIgcmVxdWVzdHMuIEJhc2VkIG9uIHRoZSBGZXRjaCBzdGFuZGFyZDogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtc1xyXG4gICAgICogQHBhcmFtIGVuYWJsZUNhY2hpbmdcclxuICAgICAqL1xyXG4gICAgc2VuZFBvc3RSZXF1ZXN0QXN5bmM8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBOZXR3b3JrUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPE5ldHdvcmtSZXNwb25zZTxUPj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdHViYmVkTmV0d29ya01vZHVsZTogSU5ldHdvcmtNb2R1bGUgPSB7XHJcbiAgICBzZW5kR2V0UmVxdWVzdEFzeW5jOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiTmV0d29yayBpbnRlcmZhY2UgLSBzZW5kR2V0UmVxdWVzdEFzeW5jKCkgaGFzIG5vdCBiZWVuIGltcGxlbWVudGVkIGZvciB0aGUgTmV0d29yayBpbnRlcmZhY2UuXCI7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3Iobm90SW1wbEVycikpO1xyXG4gICAgfSxcclxuICAgIHNlbmRQb3N0UmVxdWVzdEFzeW5jOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90SW1wbEVyciA9IFwiTmV0d29yayBpbnRlcmZhY2UgLSBzZW5kUG9zdFJlcXVlc3RBc3luYygpIGhhcyBub3QgYmVlbiBpbXBsZW1lbnRlZCBmb3IgdGhlIE5ldHdvcmsgaW50ZXJmYWNlLlwiO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKG5vdEltcGxFcnIpKTtcclxuICAgIH1cclxufTtcclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLCBTZXBhcmF0b3JzLCBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENhY2hlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9jYWNoZS9DYWNoZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9yL0F1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJUZWxlbWV0cnlSZXF1ZXN0IH0gZnJvbSBcIi4vU2VydmVyVGVsZW1ldHJ5UmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkgfSBmcm9tIFwiLi4vLi4vY2FjaGUvZW50aXRpZXMvU2VydmVyVGVsZW1ldHJ5RW50aXR5XCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyVGVsZW1ldHJ5TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGNhY2hlTWFuYWdlcjogQ2FjaGVNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBhcGlJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjb3JyZWxhdGlvbklkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGZvcmNlUmVmcmVzaDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgdGVsZW1ldHJ5Q2FjaGVLZXk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZWxlbWV0cnlSZXF1ZXN0OiBTZXJ2ZXJUZWxlbWV0cnlSZXF1ZXN0LCBjYWNoZU1hbmFnZXI6IENhY2hlTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyID0gY2FjaGVNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuYXBpSWQgPSB0ZWxlbWV0cnlSZXF1ZXN0LmFwaUlkO1xyXG4gICAgICAgIHRoaXMuY29ycmVsYXRpb25JZCA9IHRlbGVtZXRyeVJlcXVlc3QuY29ycmVsYXRpb25JZDtcclxuICAgICAgICB0aGlzLmZvcmNlUmVmcmVzaCA9IHRlbGVtZXRyeVJlcXVlc3QuZm9yY2VSZWZyZXNoIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnRlbGVtZXRyeUNhY2hlS2V5ID0gU0VSVkVSX1RFTEVNX0NPTlNUQU5UUy5DQUNIRV9LRVkgKyBTZXBhcmF0b3JzLkNBQ0hFX0tFWV9TRVBBUkFUT1IgKyB0ZWxlbWV0cnlSZXF1ZXN0LmNsaWVudElkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVBJIHRvIGFkZCBNU0VSIFRlbGVtZXRyeSB0byByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlQ3VycmVudFJlcXVlc3RIZWFkZXJWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IGZvcmNlUmVmcmVzaEludCA9IHRoaXMuZm9yY2VSZWZyZXNoID8gMSA6IDA7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGAke3RoaXMuYXBpSWR9JHtTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLlZBTFVFX1NFUEFSQVRPUn0ke2ZvcmNlUmVmcmVzaEludH1gO1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRmllbGRzID0gXCJcIjsgLy8gVE9ETzogRGV0ZXJtaW5lIHdoYXQgd2Ugd2FudCB0byBpbmNsdWRlXHJcblxyXG4gICAgICAgIHJldHVybiBbU0VSVkVSX1RFTEVNX0NPTlNUQU5UUy5TQ0hFTUFfVkVSU0lPTiwgcmVxdWVzdCwgcGxhdGZvcm1GaWVsZHNdLmpvaW4oU0VSVkVSX1RFTEVNX0NPTlNUQU5UUy5DQVRFR09SWV9TRVBBUkFUT1IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVBJIHRvIGFkZCBNU0VSIFRlbGVtZXRyeSBmb3IgdGhlIGxhc3QgZmFpbGVkIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVMYXN0UmVxdWVzdEhlYWRlclZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgbGFzdFJlcXVlc3RzID0gdGhpcy5nZXRMYXN0UmVxdWVzdHMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3JzID0gU2VydmVyVGVsZW1ldHJ5TWFuYWdlci5tYXhFcnJvcnNUb1NlbmQobGFzdFJlcXVlc3RzKTtcclxuICAgICAgICBjb25zdCBmYWlsZWRSZXF1ZXN0cyA9IGxhc3RSZXF1ZXN0cy5mYWlsZWRSZXF1ZXN0cy5zbGljZSgwLCAyKm1heEVycm9ycykuam9pbihTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLlZBTFVFX1NFUEFSQVRPUik7XHJcbiAgICAgICAgY29uc3QgZXJyb3JzID0gbGFzdFJlcXVlc3RzLmVycm9ycy5zbGljZSgwLCBtYXhFcnJvcnMpLmpvaW4oU0VSVkVSX1RFTEVNX0NPTlNUQU5UUy5WQUxVRV9TRVBBUkFUT1IpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ291bnQgPSBsYXN0UmVxdWVzdHMuZXJyb3JzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIGhlYWRlciBjb250YWlucyBhbGwgZGF0YSBvciBwYXJ0aWFsIGRhdGFcclxuICAgICAgICBjb25zdCBvdmVyZmxvdyA9IG1heEVycm9ycyA8IGVycm9yQ291bnQgPyBTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLk9WRVJGTE9XX1RSVUUgOiBTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLk9WRVJGTE9XX0ZBTFNFO1xyXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtRmllbGRzID0gW2Vycm9yQ291bnQsIG92ZXJmbG93XS5qb2luKFNFUlZFUl9URUxFTV9DT05TVEFOVFMuVkFMVUVfU0VQQVJBVE9SKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLlNDSEVNQV9WRVJTSU9OLCBsYXN0UmVxdWVzdHMuY2FjaGVIaXRzLCBmYWlsZWRSZXF1ZXN0cywgZXJyb3JzLCBwbGF0Zm9ybUZpZWxkc10uam9pbihTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLkNBVEVHT1JZX1NFUEFSQVRPUik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBUEkgdG8gY2FjaGUgdG9rZW4gZmFpbHVyZXMgZm9yIE1TRVIgZGF0YSBjYXB0dXJlXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JcclxuICAgICAqL1xyXG4gICAgY2FjaGVGYWlsZWRSZXF1ZXN0KGVycm9yOiBBdXRoRXJyb3IpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBsYXN0UmVxdWVzdHMgPSB0aGlzLmdldExhc3RSZXF1ZXN0cygpO1xyXG4gICAgICAgIGxhc3RSZXF1ZXN0cy5mYWlsZWRSZXF1ZXN0cy5wdXNoKHRoaXMuYXBpSWQsIHRoaXMuY29ycmVsYXRpb25JZCk7XHJcblxyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShlcnJvci5zdWJFcnJvcikpIHtcclxuICAgICAgICAgICAgbGFzdFJlcXVlc3RzLmVycm9ycy5wdXNoKGVycm9yLnN1YkVycm9yKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGVycm9yLmVycm9yQ29kZSkpIHtcclxuICAgICAgICAgICAgbGFzdFJlcXVlc3RzLmVycm9ycy5wdXNoKGVycm9yLmVycm9yQ29kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghIWVycm9yICYmIGVycm9yLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgbGFzdFJlcXVlc3RzLmVycm9ycy5wdXNoKGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxhc3RSZXF1ZXN0cy5lcnJvcnMucHVzaChTRVJWRVJfVEVMRU1fQ09OU1RBTlRTLlVOS05PV05fRVJST1IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIuc2V0U2VydmVyVGVsZW1ldHJ5KHRoaXMudGVsZW1ldHJ5Q2FjaGVLZXksIGxhc3RSZXF1ZXN0cyk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBzZXJ2ZXIgdGVsZW1ldHJ5IGNhY2hlIGVudHJ5IGJ5IGluY3JlbWVudGluZyBjYWNoZSBoaXQgY291bnRlclxyXG4gICAgICovXHJcbiAgICBpbmNyZW1lbnRDYWNoZUhpdHMoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBsYXN0UmVxdWVzdHMgPSB0aGlzLmdldExhc3RSZXF1ZXN0cygpO1xyXG4gICAgICAgIGxhc3RSZXF1ZXN0cy5jYWNoZUhpdHMgKz0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIuc2V0U2VydmVyVGVsZW1ldHJ5KHRoaXMudGVsZW1ldHJ5Q2FjaGVLZXksIGxhc3RSZXF1ZXN0cyk7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RSZXF1ZXN0cy5jYWNoZUhpdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHNlcnZlciB0ZWxlbWV0cnkgZW50aXR5IGZyb20gY2FjaGUgb3IgaW5pdGlhbGl6ZSBhIG5ldyBvbmVcclxuICAgICAqL1xyXG4gICAgZ2V0TGFzdFJlcXVlc3RzKCk6IFNlcnZlclRlbGVtZXRyeUVudGl0eSB7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlOiBTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkgPSBuZXcgU2VydmVyVGVsZW1ldHJ5RW50aXR5KCk7XHJcbiAgICAgICAgY29uc3QgbGFzdFJlcXVlc3RzID0gdGhpcy5jYWNoZU1hbmFnZXIuZ2V0U2VydmVyVGVsZW1ldHJ5KHRoaXMudGVsZW1ldHJ5Q2FjaGVLZXkpIGFzIFNlcnZlclRlbGVtZXRyeUVudGl0eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhc3RSZXF1ZXN0cyB8fCBpbml0aWFsVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgc2VydmVyIHRlbGVtZXRyeSBjYWNoZSBlbnRyeVxyXG4gICAgICovXHJcbiAgICBjbGVhclRlbGVtZXRyeUNhY2hlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGxhc3RSZXF1ZXN0cyA9IHRoaXMuZ2V0TGFzdFJlcXVlc3RzKCk7XHJcbiAgICAgICAgY29uc3QgbnVtRXJyb3JzRmx1c2hlZCA9IFNlcnZlclRlbGVtZXRyeU1hbmFnZXIubWF4RXJyb3JzVG9TZW5kKGxhc3RSZXF1ZXN0cyk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JDb3VudCA9IGxhc3RSZXF1ZXN0cy5lcnJvcnMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChudW1FcnJvcnNGbHVzaGVkID09PSBlcnJvckNvdW50KSB7XHJcbiAgICAgICAgICAgIC8vIEFsbCBlcnJvcnMgd2VyZSBzZW50IG9uIGxhc3QgcmVxdWVzdCwgY2xlYXIgVGVsZW1ldHJ5IGNhY2hlXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLnJlbW92ZUl0ZW0odGhpcy50ZWxlbWV0cnlDYWNoZUtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gUGFydGlhbCBkYXRhIHdhcyBmbHVzaGVkIHRvIHNlcnZlciwgY29uc3RydWN0IGEgbmV3IHRlbGVtZXRyeSBjYWNoZSBpdGVtIHdpdGggZXJyb3JzIHRoYXQgd2VyZSBub3QgZmx1c2hlZFxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJUZWxlbUVudGl0eSA9IG5ldyBTZXJ2ZXJUZWxlbWV0cnlFbnRpdHkoKTtcclxuICAgICAgICAgICAgc2VydmVyVGVsZW1FbnRpdHkuZmFpbGVkUmVxdWVzdHMgPSBsYXN0UmVxdWVzdHMuZmFpbGVkUmVxdWVzdHMuc2xpY2UobnVtRXJyb3JzRmx1c2hlZCoyKTsgLy8gZmFpbGVkUmVxdWVzdHMgY29udGFpbnMgMiBpdGVtcyBmb3IgZWFjaCBlcnJvclxyXG4gICAgICAgICAgICBzZXJ2ZXJUZWxlbUVudGl0eS5lcnJvcnMgPSBsYXN0UmVxdWVzdHMuZXJyb3JzLnNsaWNlKG51bUVycm9yc0ZsdXNoZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZU1hbmFnZXIuc2V0U2VydmVyVGVsZW1ldHJ5KHRoaXMudGVsZW1ldHJ5Q2FjaGVLZXksIHNlcnZlclRlbGVtRW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG51bWJlciBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgZmx1c2hlZCB0byB0aGUgc2VydmVyIGluIHRoZSBuZXh0IG5ldHdvcmsgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHNlcnZlclRlbGVtZXRyeUVudGl0eVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbWF4RXJyb3JzVG9TZW5kKHNlcnZlclRlbGVtZXRyeUVudGl0eTogU2VydmVyVGVsZW1ldHJ5RW50aXR5KTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBsZXQgbWF4RXJyb3JzID0gMDtcclxuICAgICAgICBsZXQgZGF0YVNpemUgPSAwO1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ291bnQgPSBzZXJ2ZXJUZWxlbWV0cnlFbnRpdHkuZXJyb3JzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXJyb3JDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGZhaWxlZFJlcXVlc3RzIHBhcmFtZXRlciBjb250YWlucyBwYWlycyBvZiBhcGlJZCBhbmQgY29ycmVsYXRpb25JZCwgbXVsdGlwbHkgaW5kZXggYnkgMiB0byBwcmVzZXJ2ZSBwYWlyc1xyXG4gICAgICAgICAgICBjb25zdCBhcGlJZCA9IHNlcnZlclRlbGVtZXRyeUVudGl0eS5mYWlsZWRSZXF1ZXN0c1syKmldIHx8IENvbnN0YW50cy5FTVBUWV9TVFJJTkc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlbGF0aW9uSWQgPSBzZXJ2ZXJUZWxlbWV0cnlFbnRpdHkuZmFpbGVkUmVxdWVzdHNbMippICsgMV0gfHwgQ29uc3RhbnRzLkVNUFRZX1NUUklORztcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gc2VydmVyVGVsZW1ldHJ5RW50aXR5LmVycm9yc1tpXSB8fCBDb25zdGFudHMuRU1QVFlfU1RSSU5HO1xyXG5cclxuICAgICAgICAgICAgLy8gQ291bnQgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBiZSBhZGRlZCB0byBoZWFkZXIsIGVhY2ggY2hhcmFjdGVyIGlzIDEgYnl0ZS4gQWRkIDMgYXQgdGhlIGVuZCB0byBhY2NvdW50IGZvciBzZXBhcmF0b3JzXHJcbiAgICAgICAgICAgIGRhdGFTaXplICs9IGFwaUlkLnRvU3RyaW5nKCkubGVuZ3RoICsgY29ycmVsYXRpb25JZC50b1N0cmluZygpLmxlbmd0aCArIGVycm9yQ29kZS5sZW5ndGggKyAzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFTaXplIDwgU0VSVkVSX1RFTEVNX0NPTlNUQU5UUy5NQVhfSEVBREVSX0JZVEVTKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGRpbmcgdGhpcyBlbnRyeSB0byB0aGUgaGVhZGVyIHdvdWxkIHN0aWxsIGtlZXAgaGVhZGVyIHNpemUgYmVsb3cgdGhlIGxpbWl0XHJcbiAgICAgICAgICAgICAgICBtYXhFcnJvcnMgKz0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF4RXJyb3JzO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFLYSxTQUFTLEdBQUc7SUFDckIsWUFBWSxFQUFFLFNBQVM7SUFDdkIsR0FBRyxFQUFFLGdCQUFnQjs7SUFFckIsWUFBWSxF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
