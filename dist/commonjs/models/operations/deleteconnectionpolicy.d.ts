import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export type DeleteConnectionPolicyRequest = {
    /**
     * The unique string that we created to identify the Connection Policy resource to delete.
     */
    sid: string;
};
/** @internal */
export declare const DeleteConnectionPolicyRequest$inboundSchema: z.ZodType<DeleteConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteConnectionPolicyRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const DeleteConnectionPolicyRequest$outboundSchema: z.ZodType<DeleteConnectionPolicyRequest$Outbound, z.ZodTypeDef, DeleteConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteConnectionPolicyRequest$ {
    /** @deprecated use `DeleteConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteConnectionPolicyRequest$Outbound, z.ZodTypeDef, DeleteConnectionPolicyRequest>;
    /** @deprecated use `DeleteConnectionPolicyRequest$Outbound` instead. */
    type Outbound = DeleteConnectionPolicyRequest$Outbound;
}
export declare function deleteConnectionPolicyRequestToJSON(deleteConnectionPolicyRequest: DeleteConnectionPolicyRequest): string;
export declare function deleteConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<DeleteConnectionPolicyRequest, SDKValidationError>;
//# sourceMappingURL=deleteconnectionpolicy.d.ts.map