import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const DeleteSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export type DeleteSourceIpMappingRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to delete.
     */
    sid: string;
};
/** @internal */
export declare const DeleteSourceIpMappingRequest$inboundSchema: z.ZodType<DeleteSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteSourceIpMappingRequest$Outbound = {
    Sid: string;
};
/** @internal */
export declare const DeleteSourceIpMappingRequest$outboundSchema: z.ZodType<DeleteSourceIpMappingRequest$Outbound, z.ZodTypeDef, DeleteSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteSourceIpMappingRequest$ {
    /** @deprecated use `DeleteSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteSourceIpMappingRequest$Outbound, z.ZodTypeDef, DeleteSourceIpMappingRequest>;
    /** @deprecated use `DeleteSourceIpMappingRequest$Outbound` instead. */
    type Outbound = DeleteSourceIpMappingRequest$Outbound;
}
export declare function deleteSourceIpMappingRequestToJSON(deleteSourceIpMappingRequest: DeleteSourceIpMappingRequest): string;
export declare function deleteSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<DeleteSourceIpMappingRequest, SDKValidationError>;
//# sourceMappingURL=deletesourceipmapping.d.ts.map