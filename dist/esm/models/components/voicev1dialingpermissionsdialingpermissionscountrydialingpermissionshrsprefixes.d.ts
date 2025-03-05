import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes = {
    /**
     * A prefix is a contiguous number range for a block of E.164 numbers that includes the E.164 assigned country code. For example, a North American Numbering Plan prefix like `+1510720` written like `+1(510) 720` matches all numbers inclusive from `+1(510) 720-0000` to `+1(510) 720-9999`.
     */
    prefix?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound = {
    prefix?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixesToJSON(voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes: VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixesFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes, SDKValidationError>;
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionscountrydialingpermissionshrsprefixes.d.ts.map