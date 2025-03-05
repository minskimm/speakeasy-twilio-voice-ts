import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A list of URLs related to this resource.
 */
export type VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks = {};
export type VoiceV1DialingPermissionsDialingPermissionsCountryInstance = {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCode?: string | null | undefined;
    /**
     * The name of the country.
     */
    name?: string | null | undefined;
    /**
     * The name of the continent in which the country is located.
     */
    continent?: string | null | undefined;
    /**
     * The E.164 assigned [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
     */
    countryCodes?: Array<string> | null | undefined;
    /**
     * Whether dialing to low-risk numbers is enabled.
     */
    lowRiskNumbersEnabled?: boolean | null | undefined;
    /**
     * Whether dialing to high-risk special services numbers is enabled. These prefixes include number ranges allocated by the country and include premium numbers, special services, shared cost, and others
     */
    highRiskSpecialNumbersEnabled?: boolean | null | undefined;
    /**
     * Whether dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers is enabled. These prefixes include narrow number ranges that have a high-risk of international revenue sharing fraud (IRSF) attacks, also known as [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html). These prefixes are collected from anti-fraud databases and verified by analyzing calls on our network. These prefixes are not available for download and are updated frequently
     */
    highRiskTollfraudNumbersEnabled?: boolean | null | undefined;
    /**
     * The absolute URL of this resource.
     */
    url?: string | null | undefined;
    /**
     * A list of URLs related to this resource.
     */
    links?: VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound = {};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryInstanceLinksToJSON(voiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks: VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryInstanceLinksFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks, SDKValidationError>;
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryInstance$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound = {
    iso_code?: string | null | undefined;
    name?: string | null | undefined;
    continent?: string | null | undefined;
    country_codes?: Array<string> | null | undefined;
    low_risk_numbers_enabled?: boolean | null | undefined;
    high_risk_special_numbers_enabled?: boolean | null | undefined;
    high_risk_tollfraud_numbers_enabled?: boolean | null | undefined;
    url?: string | null | undefined;
    links?: VoiceV1DialingPermissionsDialingPermissionsCountryInstanceLinks$Outbound | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryInstance$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountryInstance$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryInstance>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryInstanceToJSON(voiceV1DialingPermissionsDialingPermissionsCountryInstance: VoiceV1DialingPermissionsDialingPermissionsCountryInstance): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryInstanceFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountryInstance, SDKValidationError>;
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionscountryinstance.d.ts.map