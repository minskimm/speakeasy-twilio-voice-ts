import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateIpRecordServerList: readonly ["https://voice.twilio.com"];
export type UpdateIpRecordUpdateIpRecordRequest = {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
};
export type UpdateIpRecordRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to update.
     */
    sid: string;
    requestBody?: UpdateIpRecordUpdateIpRecordRequest | undefined;
};
export type UpdateIpRecordResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1IpRecord;
};
/** @internal */
export declare const UpdateIpRecordUpdateIpRecordRequest$inboundSchema: z.ZodType<UpdateIpRecordUpdateIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateIpRecordUpdateIpRecordRequest$Outbound = {
    FriendlyName?: string | undefined;
};
/** @internal */
export declare const UpdateIpRecordUpdateIpRecordRequest$outboundSchema: z.ZodType<UpdateIpRecordUpdateIpRecordRequest$Outbound, z.ZodTypeDef, UpdateIpRecordUpdateIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateIpRecordUpdateIpRecordRequest$ {
    /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateIpRecordUpdateIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateIpRecordUpdateIpRecordRequest$Outbound, z.ZodTypeDef, UpdateIpRecordUpdateIpRecordRequest>;
    /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$Outbound` instead. */
    type Outbound = UpdateIpRecordUpdateIpRecordRequest$Outbound;
}
export declare function updateIpRecordUpdateIpRecordRequestToJSON(updateIpRecordUpdateIpRecordRequest: UpdateIpRecordUpdateIpRecordRequest): string;
export declare function updateIpRecordUpdateIpRecordRequestFromJSON(jsonString: string): SafeParseResult<UpdateIpRecordUpdateIpRecordRequest, SDKValidationError>;
/** @internal */
export declare const UpdateIpRecordRequest$inboundSchema: z.ZodType<UpdateIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateIpRecordRequest$Outbound = {
    Sid: string;
    RequestBody?: UpdateIpRecordUpdateIpRecordRequest$Outbound | undefined;
};
/** @internal */
export declare const UpdateIpRecordRequest$outboundSchema: z.ZodType<UpdateIpRecordRequest$Outbound, z.ZodTypeDef, UpdateIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateIpRecordRequest$ {
    /** @deprecated use `UpdateIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateIpRecordRequest$Outbound, z.ZodTypeDef, UpdateIpRecordRequest>;
    /** @deprecated use `UpdateIpRecordRequest$Outbound` instead. */
    type Outbound = UpdateIpRecordRequest$Outbound;
}
export declare function updateIpRecordRequestToJSON(updateIpRecordRequest: UpdateIpRecordRequest): string;
export declare function updateIpRecordRequestFromJSON(jsonString: string): SafeParseResult<UpdateIpRecordRequest, SDKValidationError>;
/** @internal */
export declare const UpdateIpRecordResponse$inboundSchema: z.ZodType<UpdateIpRecordResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateIpRecordResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1IpRecord$Outbound;
};
/** @internal */
export declare const UpdateIpRecordResponse$outboundSchema: z.ZodType<UpdateIpRecordResponse$Outbound, z.ZodTypeDef, UpdateIpRecordResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateIpRecordResponse$ {
    /** @deprecated use `UpdateIpRecordResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateIpRecordResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateIpRecordResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateIpRecordResponse$Outbound, z.ZodTypeDef, UpdateIpRecordResponse>;
    /** @deprecated use `UpdateIpRecordResponse$Outbound` instead. */
    type Outbound = UpdateIpRecordResponse$Outbound;
}
export declare function updateIpRecordResponseToJSON(updateIpRecordResponse: UpdateIpRecordResponse): string;
export declare function updateIpRecordResponseFromJSON(jsonString: string): SafeParseResult<UpdateIpRecordResponse, SDKValidationError>;
//# sourceMappingURL=updateiprecord.d.ts.map