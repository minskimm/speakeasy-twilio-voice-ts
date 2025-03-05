import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A list of URLs related to this resource.
 */
export type VoiceV1DialingPermissionsDialingPermissionsCountryLinks = {};
export type VoiceV1DialingPermissionsDialingPermissionsCountry = {
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
    links?: VoiceV1DialingPermissionsDialingPermissionsCountryLinks | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryLinks$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryLinks, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound = {};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountryLinks$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryLinks>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountryLinks$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryLinks$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryLinks, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryLinks$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountryLinks>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryLinksToJSON(voiceV1DialingPermissionsDialingPermissionsCountryLinks: VoiceV1DialingPermissionsDialingPermissionsCountryLinks): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryLinksFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountryLinks, SDKValidationError>;
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountry$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountry, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound = {
    iso_code?: string | null | undefined;
    name?: string | null | undefined;
    continent?: string | null | undefined;
    country_codes?: Array<string> | null | undefined;
    low_risk_numbers_enabled?: boolean | null | undefined;
    high_risk_special_numbers_enabled?: boolean | null | undefined;
    high_risk_tollfraud_numbers_enabled?: boolean | null | undefined;
    url?: string | null | undefined;
    links?: VoiceV1DialingPermissionsDialingPermissionsCountryLinks$Outbound | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsCountry$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountry>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsCountry$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountry$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountry, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountry$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsCountry>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsCountryToJSON(voiceV1DialingPermissionsDialingPermissionsCountry: VoiceV1DialingPermissionsDialingPermissionsCountry): string;
export declare function voiceV1DialingPermissionsDialingPermissionsCountryFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsCountry, SDKValidationError>;
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionscountry.d.ts.map