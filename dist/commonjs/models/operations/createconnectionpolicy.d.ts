import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export type CreateConnectionPolicyCreateConnectionPolicyRequest = {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
};
export type CreateConnectionPolicyResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicy;
};
/** @internal */
export declare const CreateConnectionPolicyCreateConnectionPolicyRequest$inboundSchema: z.ZodType<CreateConnectionPolicyCreateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConnectionPolicyCreateConnectionPolicyRequest$Outbound = {
    FriendlyName?: string | undefined;
};
/** @internal */
export declare const CreateConnectionPolicyCreateConnectionPolicyRequest$outboundSchema: z.ZodType<CreateConnectionPolicyCreateConnectionPolicyRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyCreateConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateConnectionPolicyCreateConnectionPolicyRequest$ {
    /** @deprecated use `CreateConnectionPolicyCreateConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateConnectionPolicyCreateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateConnectionPolicyCreateConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateConnectionPolicyCreateConnectionPolicyRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyCreateConnectionPolicyRequest>;
    /** @deprecated use `CreateConnectionPolicyCreateConnectionPolicyRequest$Outbound` instead. */
    type Outbound = CreateConnectionPolicyCreateConnectionPolicyRequest$Outbound;
}
export declare function createConnectionPolicyCreateConnectionPolicyRequestToJSON(createConnectionPolicyCreateConnectionPolicyRequest: CreateConnectionPolicyCreateConnectionPolicyRequest): string;
export declare function createConnectionPolicyCreateConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<CreateConnectionPolicyCreateConnectionPolicyRequest, SDKValidationError>;
/** @internal */
export declare const CreateConnectionPolicyResponse$inboundSchema: z.ZodType<CreateConnectionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConnectionPolicyResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicy$Outbound;
};
/** @internal */
export declare const CreateConnectionPolicyResponse$outboundSchema: z.ZodType<CreateConnectionPolicyResponse$Outbound, z.ZodTypeDef, CreateConnectionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateConnectionPolicyResponse$ {
    /** @deprecated use `CreateConnectionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateConnectionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateConnectionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateConnectionPolicyResponse$Outbound, z.ZodTypeDef, CreateConnectionPolicyResponse>;
    /** @deprecated use `CreateConnectionPolicyResponse$Outbound` instead. */
    type Outbound = CreateConnectionPolicyResponse$Outbound;
}
export declare function createConnectionPolicyResponseToJSON(createConnectionPolicyResponse: CreateConnectionPolicyResponse): string;
export declare function createConnectionPolicyResponseFromJSON(jsonString: string): SafeParseResult<CreateConnectionPolicyResponse, SDKValidationError>;
//# sourceMappingURL=createconnectionpolicy.d.ts.map