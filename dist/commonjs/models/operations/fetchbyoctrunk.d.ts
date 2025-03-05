import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchByocTrunkServerList: readonly ["https://voice.twilio.com"];
export type FetchByocTrunkRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to fetch.
     */
    sid: string;
};
export type FetchByocTrunkResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ByocTrunk;
};
/** @internal */
export declare const FetchByocTrunkRequest$inboundSchema: z.ZodType<FetchByocTrunkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchByocTrunkRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const FetchByocTrunkRequest$outboundSchema: z.ZodType<FetchByocTrunkRequest$Outbound, z.ZodTypeDef, FetchByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchByocTrunkRequest$ {
    /** @deprecated use `FetchByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchByocTrunkRequest$Outbound, z.ZodTypeDef, FetchByocTrunkRequest>;
    /** @deprecated use `FetchByocTrunkRequest$Outbound` instead. */
    type Outbound = FetchByocTrunkRequest$Outbound;
}
export declare function fetchByocTrunkRequestToJSON(fetchByocTrunkRequest: FetchByocTrunkRequest): string;
export declare function fetchByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<FetchByocTrunkRequest, SDKValidationError>;
/** @internal */
export declare const FetchByocTrunkResponse$inboundSchema: z.ZodType<FetchByocTrunkResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchByocTrunkResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ByocTrunk$Outbound;
};
/** @internal */
export declare const FetchByocTrunkResponse$outboundSchema: z.ZodType<FetchByocTrunkResponse$Outbound, z.ZodTypeDef, FetchByocTrunkResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchByocTrunkResponse$ {
    /** @deprecated use `FetchByocTrunkResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchByocTrunkResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchByocTrunkResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchByocTrunkResponse$Outbound, z.ZodTypeDef, FetchByocTrunkResponse>;
    /** @deprecated use `FetchByocTrunkResponse$Outbound` instead. */
    type Outbound = FetchByocTrunkResponse$Outbound;
}
export declare function fetchByocTrunkResponseToJSON(fetchByocTrunkResponse: FetchByocTrunkResponse): string;
export declare function fetchByocTrunkResponseFromJSON(jsonString: string): SafeParseResult<FetchByocTrunkResponse, SDKValidationError>;
//# sourceMappingURL=fetchbyoctrunk.d.ts.map