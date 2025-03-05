import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://voice.twilio.com"];
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>) | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number | undefined;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "1.0.0";
    readonly sdkVersion: "0.0.2";
    readonly genVersion: "2.529.2";
    readonly userAgent: "speakeasy-sdk/typescript 0.0.2 2.529.2 1.0.0 twilio-voice";
};
//# sourceMappingURL=config.d.ts.map