import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export type UpdateConnectionPolicyUpdateConnectionPolicyRequest = {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
};
export type UpdateConnectionPolicyRequest = {
    /**
     * The unique string that we created to identify the Connection Policy resource to update.
     */
    sid: string;
    requestBody?: UpdateConnectionPolicyUpdateConnectionPolicyRequest | undefined;
};
export type UpdateConnectionPolicyResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicy;
};
/** @internal */
export declare const UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema: z.ZodType<UpdateConnectionPolicyUpdateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound = {
    FriendlyName?: string | undefined;
};
/** @internal */
export declare const UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema: z.ZodType<UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyUpdateConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyUpdateConnectionPolicyRequest$ {
    /** @deprecated use `UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyUpdateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyUpdateConnectionPolicyRequest>;
    /** @deprecated use `UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound;
}
export declare function updateConnectionPolicyUpdateConnectionPolicyRequestToJSON(updateConnectionPolicyUpdateConnectionPolicyRequest: UpdateConnectionPolicyUpdateConnectionPolicyRequest): string;
export declare function updateConnectionPolicyUpdateConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyUpdateConnectionPolicyRequest, SDKValidationError>;
/** @internal */
export declare const UpdateConnectionPolicyRequest$inboundSchema: z.ZodType<UpdateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyRequest$Outbound = {
    Sid: string;
    RequestBody?: UpdateConnectionPolicyUpdateConnectionPolicyRequest$Outbound | undefined;
};
/** @internal */
export declare const UpdateConnectionPolicyRequest$outboundSchema: z.ZodType<UpdateConnectionPolicyRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyRequest$ {
    /** @deprecated use `UpdateConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyRequest>;
    /** @deprecated use `UpdateConnectionPolicyRequest$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyRequest$Outbound;
}
export declare function updateConnectionPolicyRequestToJSON(updateConnectionPolicyRequest: UpdateConnectionPolicyRequest): string;
export declare function updateConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyRequest, SDKValidationError>;
/** @internal */
export declare const UpdateConnectionPolicyResponse$inboundSchema: z.ZodType<UpdateConnectionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicy$Outbound;
};
/** @internal */
export declare const UpdateConnectionPolicyResponse$outboundSchema: z.ZodType<UpdateConnectionPolicyResponse$Outbound, z.ZodTypeDef, UpdateConnectionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyResponse$ {
    /** @deprecated use `UpdateConnectionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyResponse$Outbound, z.ZodTypeDef, UpdateConnectionPolicyResponse>;
    /** @deprecated use `UpdateConnectionPolicyResponse$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyResponse$Outbound;
}
export declare function updateConnectionPolicyResponseToJSON(updateConnectionPolicyResponse: UpdateConnectionPolicyResponse): string;
export declare function updateConnectionPolicyResponseFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyResponse, SDKValidationError>;
//# sourceMappingURL=updateconnectionpolicy.d.ts.map