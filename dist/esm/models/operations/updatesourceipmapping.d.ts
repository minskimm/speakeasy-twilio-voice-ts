import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export type UpdateSourceIpMappingUpdateSourceIpMappingRequest = {
    /**
     * The SID of the SIP Domain that the IP Record should be mapped to.
     */
    sipDomainSid: string;
};
export type UpdateSourceIpMappingRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to update.
     */
    sid: string;
    requestBody?: UpdateSourceIpMappingUpdateSourceIpMappingRequest | undefined;
};
export type UpdateSourceIpMappingResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1SourceIpMapping;
};
/** @internal */
export declare const UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema: z.ZodType<UpdateSourceIpMappingUpdateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound = {
    SipDomainSid: string;
};
/** @internal */
export declare const UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema: z.ZodType<UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound, z.ZodTypeDef, UpdateSourceIpMappingUpdateSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSourceIpMappingUpdateSourceIpMappingRequest$ {
    /** @deprecated use `UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSourceIpMappingUpdateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound, z.ZodTypeDef, UpdateSourceIpMappingUpdateSourceIpMappingRequest>;
    /** @deprecated use `UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound` instead. */
    type Outbound = UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound;
}
export declare function updateSourceIpMappingUpdateSourceIpMappingRequestToJSON(updateSourceIpMappingUpdateSourceIpMappingRequest: UpdateSourceIpMappingUpdateSourceIpMappingRequest): string;
export declare function updateSourceIpMappingUpdateSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<UpdateSourceIpMappingUpdateSourceIpMappingRequest, SDKValidationError>;
/** @internal */
export declare const UpdateSourceIpMappingRequest$inboundSchema: z.ZodType<UpdateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSourceIpMappingRequest$Outbound = {
    Sid: string;
    RequestBody?: UpdateSourceIpMappingUpdateSourceIpMappingRequest$Outbound | undefined;
};
/** @internal */
export declare const UpdateSourceIpMappingRequest$outboundSchema: z.ZodType<UpdateSourceIpMappingRequest$Outbound, z.ZodTypeDef, UpdateSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSourceIpMappingRequest$ {
    /** @deprecated use `UpdateSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSourceIpMappingRequest$Outbound, z.ZodTypeDef, UpdateSourceIpMappingRequest>;
    /** @deprecated use `UpdateSourceIpMappingRequest$Outbound` instead. */
    type Outbound = UpdateSourceIpMappingRequest$Outbound;
}
export declare function updateSourceIpMappingRequestToJSON(updateSourceIpMappingRequest: UpdateSourceIpMappingRequest): string;
export declare function updateSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<UpdateSourceIpMappingRequest, SDKValidationError>;
/** @internal */
export declare const UpdateSourceIpMappingResponse$inboundSchema: z.ZodType<UpdateSourceIpMappingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateSourceIpMappingResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1SourceIpMapping$Outbound;
};
/** @internal */
export declare const UpdateSourceIpMappingResponse$outboundSchema: z.ZodType<UpdateSourceIpMappingResponse$Outbound, z.ZodTypeDef, UpdateSourceIpMappingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateSourceIpMappingResponse$ {
    /** @deprecated use `UpdateSourceIpMappingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateSourceIpMappingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateSourceIpMappingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateSourceIpMappingResponse$Outbound, z.ZodTypeDef, UpdateSourceIpMappingResponse>;
    /** @deprecated use `UpdateSourceIpMappingResponse$Outbound` instead. */
    type Outbound = UpdateSourceIpMappingResponse$Outbound;
}
export declare function updateSourceIpMappingResponseToJSON(updateSourceIpMappingResponse: UpdateSourceIpMappingResponse): string;
export declare function updateSourceIpMappingResponseFromJSON(jsonString: string): SafeParseResult<UpdateSourceIpMappingResponse, SDKValidationError>;
//# sourceMappingURL=updatesourceipmapping.d.ts.map