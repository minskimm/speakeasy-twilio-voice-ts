import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export type FetchConnectionPolicyRequest = {
    /**
     * The unique string that we created to identify the Connection Policy resource to fetch.
     */
    sid: string;
};
export type FetchConnectionPolicyResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicy;
};
/** @internal */
export declare const FetchConnectionPolicyRequest$inboundSchema: z.ZodType<FetchConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchConnectionPolicyRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const FetchConnectionPolicyRequest$outboundSchema: z.ZodType<FetchConnectionPolicyRequest$Outbound, z.ZodTypeDef, FetchConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchConnectionPolicyRequest$ {
    /** @deprecated use `FetchConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchConnectionPolicyRequest$Outbound, z.ZodTypeDef, FetchConnectionPolicyRequest>;
    /** @deprecated use `FetchConnectionPolicyRequest$Outbound` instead. */
    type Outbound = FetchConnectionPolicyRequest$Outbound;
}
export declare function fetchConnectionPolicyRequestToJSON(fetchConnectionPolicyRequest: FetchConnectionPolicyRequest): string;
export declare function fetchConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<FetchConnectionPolicyRequest, SDKValidationError>;
/** @internal */
export declare const FetchConnectionPolicyResponse$inboundSchema: z.ZodType<FetchConnectionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchConnectionPolicyResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicy$Outbound;
};
/** @internal */
export declare const FetchConnectionPolicyResponse$outboundSchema: z.ZodType<FetchConnectionPolicyResponse$Outbound, z.ZodTypeDef, FetchConnectionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchConnectionPolicyResponse$ {
    /** @deprecated use `FetchConnectionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchConnectionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchConnectionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchConnectionPolicyResponse$Outbound, z.ZodTypeDef, FetchConnectionPolicyResponse>;
    /** @deprecated use `FetchConnectionPolicyResponse$Outbound` instead. */
    type Outbound = FetchConnectionPolicyResponse$Outbound;
}
export declare function fetchConnectionPolicyResponseToJSON(fetchConnectionPolicyResponse: FetchConnectionPolicyResponse): string;
export declare function fetchConnectionPolicyResponseFromJSON(jsonString: string): SafeParseResult<FetchConnectionPolicyResponse, SDKValidationError>;
//# sourceMappingURL=fetchconnectionpolicy.d.ts.map