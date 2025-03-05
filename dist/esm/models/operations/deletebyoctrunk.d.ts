import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteByocTrunkServerList: readonly ["https://voice.twilio.com"];
export type DeleteByocTrunkRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to delete.
     */
    sid: string;
};
/** @internal */
export declare const DeleteByocTrunkRequest$inboundSchema: z.ZodType<DeleteByocTrunkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteByocTrunkRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const DeleteByocTrunkRequest$outboundSchema: z.ZodType<DeleteByocTrunkRequest$Outbound, z.ZodTypeDef, DeleteByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteByocTrunkRequest$ {
    /** @deprecated use `DeleteByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteByocTrunkRequest$Outbound, z.ZodTypeDef, DeleteByocTrunkRequest>;
    /** @deprecated use `DeleteByocTrunkRequest$Outbound` instead. */
    type Outbound = DeleteByocTrunkRequest$Outbound;
}
export declare function deleteByocTrunkRequestToJSON(deleteByocTrunkRequest: DeleteByocTrunkRequest): string;
export declare function deleteByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<DeleteByocTrunkRequest, SDKValidationError>;
//# sourceMappingURL=deletebyoctrunk.d.ts.map