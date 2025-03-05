import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export type DeleteConnectionPolicyTargetRequest = {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    /**
     * The unique string that we created to identify the Target resource to delete.
     */
    sid: string;
};
/** @internal */
export declare const DeleteConnectionPolicyTargetRequest$inboundSchema: z.ZodType<DeleteConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteConnectionPolicyTargetRequest$Outbound = {
    ConnectionPolicySid: string;
    Sid: string;
};
/** @internal */
export declare const DeleteConnectionPolicyTargetRequest$outboundSchema: z.ZodType<DeleteConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, DeleteConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteConnectionPolicyTargetRequest$ {
    /** @deprecated use `DeleteConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, DeleteConnectionPolicyTargetRequest>;
    /** @deprecated use `DeleteConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = DeleteConnectionPolicyTargetRequest$Outbound;
}
export declare function deleteConnectionPolicyTargetRequestToJSON(deleteConnectionPolicyTargetRequest: DeleteConnectionPolicyTargetRequest): string;
export declare function deleteConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<DeleteConnectionPolicyTargetRequest, SDKValidationError>;
//# sourceMappingURL=deleteconnectionpolicytarget.d.ts.map