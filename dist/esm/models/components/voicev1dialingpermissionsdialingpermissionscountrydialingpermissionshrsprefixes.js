/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
/** @internal */
export const VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema = z.object({
    prefix: z.nullable(z.string()).optional(),
});
/** @internal */
export const VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema = z.object({
    prefix: z.nullable(z.string()).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$;
(function (VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$) {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema` instead. */
    VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$.inboundSchema = VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema` instead. */
    VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$.outboundSchema = VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema;
})(VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$ || (VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$ = {}));
export function voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixesToJSON(voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes) {
    return JSON.stringify(VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$outboundSchema
        .parse(voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes));
}
export function voiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixesFromJSON(jsonString) {
    return safeParse(jsonString, (x) => VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$inboundSchema
        .parse(JSON.parse(x)), `Failed to parse 'VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes' from JSON`);
}
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionscountrydialingpermissionshrsprefixes.js.map