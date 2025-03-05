import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteIpRecordServerList: readonly ["https://voice.twilio.com"];
export type DeleteIpRecordRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to delete.
     */
    sid: string;
};
/** @internal */
export declare const DeleteIpRecordRequest$inboundSchema: z.ZodType<DeleteIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteIpRecordRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const DeleteIpRecordRequest$outboundSchema: z.ZodType<DeleteIpRecordRequest$Outbound, z.ZodTypeDef, DeleteIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteIpRecordRequest$ {
    /** @deprecated use `DeleteIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteIpRecordRequest$Outbound, z.ZodTypeDef, DeleteIpRecordRequest>;
    /** @deprecated use `DeleteIpRecordRequest$Outbound` instead. */
    type Outbound = DeleteIpRecordRequest$Outbound;
}
export declare function deleteIpRecordRequestToJSON(deleteIpRecordRequest: DeleteIpRecordRequest): string;
export declare function deleteIpRecordRequestFromJSON(jsonString: string): SafeParseResult<DeleteIpRecordRequest, SDKValidationError>;
//# sourceMappingURL=deleteiprecord.d.ts.map