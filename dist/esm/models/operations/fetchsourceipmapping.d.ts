import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export type FetchSourceIpMappingRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
     */
    sid: string;
};
export type FetchSourceIpMappingResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1SourceIpMapping;
};
/** @internal */
export declare const FetchSourceIpMappingRequest$inboundSchema: z.ZodType<FetchSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchSourceIpMappingRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const FetchSourceIpMappingRequest$outboundSchema: z.ZodType<FetchSourceIpMappingRequest$Outbound, z.ZodTypeDef, FetchSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchSourceIpMappingRequest$ {
    /** @deprecated use `FetchSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchSourceIpMappingRequest$Outbound, z.ZodTypeDef, FetchSourceIpMappingRequest>;
    /** @deprecated use `FetchSourceIpMappingRequest$Outbound` instead. */
    type Outbound = FetchSourceIpMappingRequest$Outbound;
}
export declare function fetchSourceIpMappingRequestToJSON(fetchSourceIpMappingRequest: FetchSourceIpMappingRequest): string;
export declare function fetchSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<FetchSourceIpMappingRequest, SDKValidationError>;
/** @internal */
export declare const FetchSourceIpMappingResponse$inboundSchema: z.ZodType<FetchSourceIpMappingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchSourceIpMappingResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1SourceIpMapping$Outbound;
};
/** @internal */
export declare const FetchSourceIpMappingResponse$outboundSchema: z.ZodType<FetchSourceIpMappingResponse$Outbound, z.ZodTypeDef, FetchSourceIpMappingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchSourceIpMappingResponse$ {
    /** @deprecated use `FetchSourceIpMappingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchSourceIpMappingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchSourceIpMappingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchSourceIpMappingResponse$Outbound, z.ZodTypeDef, FetchSourceIpMappingResponse>;
    /** @deprecated use `FetchSourceIpMappingResponse$Outbound` instead. */
    type Outbound = FetchSourceIpMappingResponse$Outbound;
}
export declare function fetchSourceIpMappingResponseToJSON(fetchSourceIpMappingResponse: FetchSourceIpMappingResponse): string;
export declare function fetchSourceIpMappingResponseFromJSON(jsonString: string): SafeParseResult<FetchSourceIpMappingResponse, SDKValidationError>;
//# sourceMappingURL=fetchsourceipmapping.d.ts.map