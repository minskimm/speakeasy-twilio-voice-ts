import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export type CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest = {
    /**
     * The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
     */
    target: string;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
    /**
     * The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.
     */
    priority?: number | undefined;
    /**
     * The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number | undefined;
    /**
     * Whether the Target is enabled. The default is `true`.
     */
    enabled?: boolean | undefined;
};
export type CreateConnectionPolicyTargetRequest = {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    requestBody?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest | undefined;
};
export type CreateConnectionPolicyTargetResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget;
};
/** @internal */
export declare const CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$inboundSchema: z.ZodType<CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound = {
    Target: string;
    FriendlyName?: string | undefined;
    Priority?: number | undefined;
    Weight?: number | undefined;
    Enabled?: boolean | undefined;
};
/** @internal */
export declare const CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$outboundSchema: z.ZodType<CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$ {
    /** @deprecated use `CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest>;
    /** @deprecated use `CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound;
}
export declare function createConnectionPolicyTargetCreateConnectionPolicyTargetRequestToJSON(createConnectionPolicyTargetCreateConnectionPolicyTargetRequest: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest): string;
export declare function createConnectionPolicyTargetCreateConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const CreateConnectionPolicyTargetRequest$inboundSchema: z.ZodType<CreateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConnectionPolicyTargetRequest$Outbound = {
    ConnectionPolicySid: string;
    RequestBody?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest$Outbound | undefined;
};
/** @internal */
export declare const CreateConnectionPolicyTargetRequest$outboundSchema: z.ZodType<CreateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateConnectionPolicyTargetRequest$ {
    /** @deprecated use `CreateConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetRequest>;
    /** @deprecated use `CreateConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = CreateConnectionPolicyTargetRequest$Outbound;
}
export declare function createConnectionPolicyTargetRequestToJSON(createConnectionPolicyTargetRequest: CreateConnectionPolicyTargetRequest): string;
export declare function createConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<CreateConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const CreateConnectionPolicyTargetResponse$inboundSchema: z.ZodType<CreateConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateConnectionPolicyTargetResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound;
};
/** @internal */
export declare const CreateConnectionPolicyTargetResponse$outboundSchema: z.ZodType<CreateConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateConnectionPolicyTargetResponse$ {
    /** @deprecated use `CreateConnectionPolicyTargetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateConnectionPolicyTargetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, CreateConnectionPolicyTargetResponse>;
    /** @deprecated use `CreateConnectionPolicyTargetResponse$Outbound` instead. */
    type Outbound = CreateConnectionPolicyTargetResponse$Outbound;
}
export declare function createConnectionPolicyTargetResponseToJSON(createConnectionPolicyTargetResponse: CreateConnectionPolicyTargetResponse): string;
export declare function createConnectionPolicyTargetResponseFromJSON(jsonString: string): SafeParseResult<CreateConnectionPolicyTargetResponse, SDKValidationError>;
//# sourceMappingURL=createconnectionpolicytarget.d.ts.map