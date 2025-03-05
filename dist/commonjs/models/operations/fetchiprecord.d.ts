import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchIpRecordServerList: readonly ["https://voice.twilio.com"];
export type FetchIpRecordRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
     */
    sid: string;
};
export type FetchIpRecordResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1IpRecord;
};
/** @internal */
export declare const FetchIpRecordRequest$inboundSchema: z.ZodType<FetchIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchIpRecordRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const FetchIpRecordRequest$outboundSchema: z.ZodType<FetchIpRecordRequest$Outbound, z.ZodTypeDef, FetchIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchIpRecordRequest$ {
    /** @deprecated use `FetchIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchIpRecordRequest$Outbound, z.ZodTypeDef, FetchIpRecordRequest>;
    /** @deprecated use `FetchIpRecordRequest$Outbound` instead. */
    type Outbound = FetchIpRecordRequest$Outbound;
}
export declare function fetchIpRecordRequestToJSON(fetchIpRecordRequest: FetchIpRecordRequest): string;
export declare function fetchIpRecordRequestFromJSON(jsonString: string): SafeParseResult<FetchIpRecordRequest, SDKValidationError>;
/** @internal */
export declare const FetchIpRecordResponse$inboundSchema: z.ZodType<FetchIpRecordResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchIpRecordResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1IpRecord$Outbound;
};
/** @internal */
export declare const FetchIpRecordResponse$outboundSchema: z.ZodType<FetchIpRecordResponse$Outbound, z.ZodTypeDef, FetchIpRecordResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchIpRecordResponse$ {
    /** @deprecated use `FetchIpRecordResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchIpRecordResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchIpRecordResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchIpRecordResponse$Outbound, z.ZodTypeDef, FetchIpRecordResponse>;
    /** @deprecated use `FetchIpRecordResponse$Outbound` instead. */
    type Outbound = FetchIpRecordResponse$Outbound;
}
export declare function fetchIpRecordResponseToJSON(fetchIpRecordResponse: FetchIpRecordResponse): string;
export declare function fetchIpRecordResponseFromJSON(jsonString: string): SafeParseResult<FetchIpRecordResponse, SDKValidationError>;
//# sourceMappingURL=fetchiprecord.d.ts.map