import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = {
    /**
     * The number of countries updated
     */
    updateCount?: number | undefined;
    /**
     * A bulk update request to change voice dialing country permissions stored as a URL-encoded, JSON array of update objects. For example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
     */
    updateRequest?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound = {
    update_count: number;
    update_request?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdateToJSON(voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate: VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdateFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate, SDKValidationError>;
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionscountrybulkupdate.d.ts.map