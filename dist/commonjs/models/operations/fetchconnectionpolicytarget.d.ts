import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export type FetchConnectionPolicyTargetRequest = {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    /**
     * The unique string that we created to identify the Target resource to fetch.
     */
    sid: string;
};
export type FetchConnectionPolicyTargetResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget;
};
/** @internal */
export declare const FetchConnectionPolicyTargetRequest$inboundSchema: z.ZodType<FetchConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchConnectionPolicyTargetRequest$Outbound = {
    ConnectionPolicySid: string;
    Sid: string;
};
/** @internal */
export declare const FetchConnectionPolicyTargetRequest$outboundSchema: z.ZodType<FetchConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, FetchConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchConnectionPolicyTargetRequest$ {
    /** @deprecated use `FetchConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, FetchConnectionPolicyTargetRequest>;
    /** @deprecated use `FetchConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = FetchConnectionPolicyTargetRequest$Outbound;
}
export declare function fetchConnectionPolicyTargetRequestToJSON(fetchConnectionPolicyTargetRequest: FetchConnectionPolicyTargetRequest): string;
export declare function fetchConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<FetchConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const FetchConnectionPolicyTargetResponse$inboundSchema: z.ZodType<FetchConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchConnectionPolicyTargetResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound;
};
/** @internal */
export declare const FetchConnectionPolicyTargetResponse$outboundSchema: z.ZodType<FetchConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, FetchConnectionPolicyTargetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchConnectionPolicyTargetResponse$ {
    /** @deprecated use `FetchConnectionPolicyTargetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchConnectionPolicyTargetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, FetchConnectionPolicyTargetResponse>;
    /** @deprecated use `FetchConnectionPolicyTargetResponse$Outbound` instead. */
    type Outbound = FetchConnectionPolicyTargetResponse$Outbound;
}
export declare function fetchConnectionPolicyTargetResponseToJSON(fetchConnectionPolicyTargetResponse: FetchConnectionPolicyTargetResponse): string;
export declare function fetchConnectionPolicyTargetResponseFromJSON(jsonString: string): SafeParseResult<FetchConnectionPolicyTargetResponse, SDKValidationError>;
//# sourceMappingURL=fetchconnectionpolicytarget.d.ts.map