import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export type UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest = {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
    /**
     * The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
     */
    target?: string | undefined;
    /**
     * The relative importance of the target. Can be an integer from 0 to 65535, inclusive. The lowest number represents the most important target.
     */
    priority?: number | undefined;
    /**
     * The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive. Targets with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number | undefined;
    /**
     * Whether the Target is enabled.
     */
    enabled?: boolean | undefined;
};
export type UpdateConnectionPolicyTargetRequest = {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    /**
     * The unique string that we created to identify the Target resource to update.
     */
    sid: string;
    requestBody?: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest | undefined;
};
export type UpdateConnectionPolicyTargetResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget;
};
/** @internal */
export declare const UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema: z.ZodType<UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound = {
    FriendlyName?: string | undefined;
    Target?: string | undefined;
    Priority?: number | undefined;
    Weight?: number | undefined;
    Enabled?: boolean | undefined;
};
/** @internal */
export declare const UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema: z.ZodType<UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$ {
    /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest>;
    /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound;
}
export declare function updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequestToJSON(updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest): string;
export declare function updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const UpdateConnectionPolicyTargetRequest$inboundSchema: z.ZodType<UpdateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyTargetRequest$Outbound = {
    ConnectionPolicySid: string;
    Sid: string;
    RequestBody?: UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound | undefined;
};
/** @internal */
export declare const UpdateConnectionPolicyTargetRequest$outboundSchema: z.ZodType<UpdateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyTargetRequest$ {
    /** @deprecated use `UpdateConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetRequest>;
    /** @deprecated use `UpdateConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyTargetRequest$Outbound;
}
export declare function updateConnectionPolicyTargetRequestToJSON(updateConnectionPolicyTargetRequest: UpdateConnectionPolicyTargetRequest): string;
export declare function updateConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const UpdateConnectionPolicyTargetResponse$inboundSchema: z.ZodType<UpdateConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateConnectionPolicyTargetResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound;
};
/** @internal */
export declare const UpdateConnectionPolicyTargetResponse$outboundSchema: z.ZodType<UpdateConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateConnectionPolicyTargetResponse$ {
    /** @deprecated use `UpdateConnectionPolicyTargetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateConnectionPolicyTargetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, UpdateConnectionPolicyTargetResponse>;
    /** @deprecated use `UpdateConnectionPolicyTargetResponse$Outbound` instead. */
    type Outbound = UpdateConnectionPolicyTargetResponse$Outbound;
}
export declare function updateConnectionPolicyTargetResponseToJSON(updateConnectionPolicyTargetResponse: UpdateConnectionPolicyTargetResponse): string;
export declare function updateConnectionPolicyTargetResponseFromJSON(jsonString: string): SafeParseResult<UpdateConnectionPolicyTargetResponse, SDKValidationError>;
//# sourceMappingURL=updateconnectionpolicytarget.d.ts.map