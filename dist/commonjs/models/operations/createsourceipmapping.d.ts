import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export type CreateSourceIpMappingCreateSourceIpMappingRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
     */
    ipRecordSid: string;
    /**
     * The SID of the SIP Domain that the IP Record should be mapped to.
     */
    sipDomainSid: string;
};
export type CreateSourceIpMappingResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1SourceIpMapping;
};
/** @internal */
export declare const CreateSourceIpMappingCreateSourceIpMappingRequest$inboundSchema: z.ZodType<CreateSourceIpMappingCreateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSourceIpMappingCreateSourceIpMappingRequest$Outbound = {
    IpRecordSid: string;
    SipDomainSid: string;
};
/** @internal */
export declare const CreateSourceIpMappingCreateSourceIpMappingRequest$outboundSchema: z.ZodType<CreateSourceIpMappingCreateSourceIpMappingRequest$Outbound, z.ZodTypeDef, CreateSourceIpMappingCreateSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSourceIpMappingCreateSourceIpMappingRequest$ {
    /** @deprecated use `CreateSourceIpMappingCreateSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSourceIpMappingCreateSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSourceIpMappingCreateSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSourceIpMappingCreateSourceIpMappingRequest$Outbound, z.ZodTypeDef, CreateSourceIpMappingCreateSourceIpMappingRequest>;
    /** @deprecated use `CreateSourceIpMappingCreateSourceIpMappingRequest$Outbound` instead. */
    type Outbound = CreateSourceIpMappingCreateSourceIpMappingRequest$Outbound;
}
export declare function createSourceIpMappingCreateSourceIpMappingRequestToJSON(createSourceIpMappingCreateSourceIpMappingRequest: CreateSourceIpMappingCreateSourceIpMappingRequest): string;
export declare function createSourceIpMappingCreateSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<CreateSourceIpMappingCreateSourceIpMappingRequest, SDKValidationError>;
/** @internal */
export declare const CreateSourceIpMappingResponse$inboundSchema: z.ZodType<CreateSourceIpMappingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateSourceIpMappingResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1SourceIpMapping$Outbound;
};
/** @internal */
export declare const CreateSourceIpMappingResponse$outboundSchema: z.ZodType<CreateSourceIpMappingResponse$Outbound, z.ZodTypeDef, CreateSourceIpMappingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateSourceIpMappingResponse$ {
    /** @deprecated use `CreateSourceIpMappingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateSourceIpMappingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateSourceIpMappingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateSourceIpMappingResponse$Outbound, z.ZodTypeDef, CreateSourceIpMappingResponse>;
    /** @deprecated use `CreateSourceIpMappingResponse$Outbound` instead. */
    type Outbound = CreateSourceIpMappingResponse$Outbound;
}
export declare function createSourceIpMappingResponseToJSON(createSourceIpMappingResponse: CreateSourceIpMappingResponse): string;
export declare function createSourceIpMappingResponseFromJSON(jsonString: string): SafeParseResult<CreateSourceIpMappingResponse, SDKValidationError>;
//# sourceMappingURL=createsourceipmapping.d.ts.map