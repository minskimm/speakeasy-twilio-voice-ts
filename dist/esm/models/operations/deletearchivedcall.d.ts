import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteArchivedCallServerList: readonly ["https://voice.twilio.com"];
export type DeleteArchivedCallRequest = {
    /**
     * The date of the Call in UTC.
     */
    date: RFCDate;
    /**
     * The Twilio-provided Call SID that uniquely identifies the Call resource to delete
     */
    sid: string;
};
/** @internal */
export declare const DeleteArchivedCallRequest$inboundSchema: z.ZodType<DeleteArchivedCallRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteArchivedCallRequest$Outbound = {
    Date: string;
    Sid: string;
};
/** @internal */
export declare const DeleteArchivedCallRequest$outboundSchema: z.ZodType<DeleteArchivedCallRequest$Outbound, z.ZodTypeDef, DeleteArchivedCallRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteArchivedCallRequest$ {
    /** @deprecated use `DeleteArchivedCallRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteArchivedCallRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteArchivedCallRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteArchivedCallRequest$Outbound, z.ZodTypeDef, DeleteArchivedCallRequest>;
    /** @deprecated use `DeleteArchivedCallRequest$Outbound` instead. */
    type Outbound = DeleteArchivedCallRequest$Outbound;
}
export declare function deleteArchivedCallRequestToJSON(deleteArchivedCallRequest: DeleteArchivedCallRequest): string;
export declare function deleteArchivedCallRequestFromJSON(jsonString: string): SafeParseResult<DeleteArchivedCallRequest, SDKValidationError>;
//# sourceMappingURL=deletearchivedcall.d.ts.map