import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateIpRecordServerList: readonly ["https://voice.twilio.com"];
export type CreateIpRecordCreateIpRecordRequest = {
    /**
     * An IP address in dotted decimal notation, IPv4 only.
     */
    ipAddress: string;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
    /**
     * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
     */
    cidrPrefixLength?: number | undefined;
};
export type CreateIpRecordResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1IpRecord;
};
/** @internal */
export declare const CreateIpRecordCreateIpRecordRequest$inboundSchema: z.ZodType<CreateIpRecordCreateIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIpRecordCreateIpRecordRequest$Outbound = {
    IpAddress: string;
    FriendlyName?: string | undefined;
    CidrPrefixLength?: number | undefined;
};
/** @internal */
export declare const CreateIpRecordCreateIpRecordRequest$outboundSchema: z.ZodType<CreateIpRecordCreateIpRecordRequest$Outbound, z.ZodTypeDef, CreateIpRecordCreateIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateIpRecordCreateIpRecordRequest$ {
    /** @deprecated use `CreateIpRecordCreateIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateIpRecordCreateIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateIpRecordCreateIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateIpRecordCreateIpRecordRequest$Outbound, z.ZodTypeDef, CreateIpRecordCreateIpRecordRequest>;
    /** @deprecated use `CreateIpRecordCreateIpRecordRequest$Outbound` instead. */
    type Outbound = CreateIpRecordCreateIpRecordRequest$Outbound;
}
export declare function createIpRecordCreateIpRecordRequestToJSON(createIpRecordCreateIpRecordRequest: CreateIpRecordCreateIpRecordRequest): string;
export declare function createIpRecordCreateIpRecordRequestFromJSON(jsonString: string): SafeParseResult<CreateIpRecordCreateIpRecordRequest, SDKValidationError>;
/** @internal */
export declare const CreateIpRecordResponse$inboundSchema: z.ZodType<CreateIpRecordResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateIpRecordResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1IpRecord$Outbound;
};
/** @internal */
export declare const CreateIpRecordResponse$outboundSchema: z.ZodType<CreateIpRecordResponse$Outbound, z.ZodTypeDef, CreateIpRecordResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateIpRecordResponse$ {
    /** @deprecated use `CreateIpRecordResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateIpRecordResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateIpRecordResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateIpRecordResponse$Outbound, z.ZodTypeDef, CreateIpRecordResponse>;
    /** @deprecated use `CreateIpRecordResponse$Outbound` instead. */
    type Outbound = CreateIpRecordResponse$Outbound;
}
export declare function createIpRecordResponseToJSON(createIpRecordResponse: CreateIpRecordResponse): string;
export declare function createIpRecordResponseFromJSON(jsonString: string): SafeParseResult<CreateIpRecordResponse, SDKValidationError>;
//# sourceMappingURL=createiprecord.d.ts.map