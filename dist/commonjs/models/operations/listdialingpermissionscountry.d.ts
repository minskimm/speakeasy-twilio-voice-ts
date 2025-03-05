import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListDialingPermissionsCountryServerList: readonly ["https://voice.twilio.com"];
export type ListDialingPermissionsCountryRequest = {
    /**
     * Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    isoCode?: string | undefined;
    /**
     * Filter to retrieve the country permissions by specifying the continent
     */
    continent?: string | undefined;
    /**
     * Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
     */
    countryCode?: string | undefined;
    /**
     * Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
     */
    lowRiskNumbersEnabled?: boolean | undefined;
    /**
     * Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
     */
    highRiskSpecialNumbersEnabled?: boolean | undefined;
    /**
     * Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers enabled. Can be: `true` or `false`.
     */
    highRiskTollfraudNumbersEnabled?: boolean | undefined;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number | undefined;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number | undefined;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string | undefined;
};
export type ListDialingPermissionsCountryMeta = {
    firstPageUrl?: string | undefined;
    key?: string | undefined;
    nextPageUrl?: string | null | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    previousPageUrl?: string | null | undefined;
    url?: string | undefined;
};
/**
 * OK
 */
export type ListDialingPermissionsCountryListDialingPermissionsCountryResponse = {
    content?: Array<components.VoiceV1DialingPermissionsDialingPermissionsCountry> | undefined;
    meta?: ListDialingPermissionsCountryMeta | undefined;
};
export type ListDialingPermissionsCountryResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
};
/** @internal */
export declare const ListDialingPermissionsCountryRequest$inboundSchema: z.ZodType<ListDialingPermissionsCountryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsCountryRequest$Outbound = {
    IsoCode?: string | undefined;
    Continent?: string | undefined;
    CountryCode?: string | undefined;
    LowRiskNumbersEnabled?: boolean | undefined;
    HighRiskSpecialNumbersEnabled?: boolean | undefined;
    HighRiskTollfraudNumbersEnabled?: boolean | undefined;
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListDialingPermissionsCountryRequest$outboundSchema: z.ZodType<ListDialingPermissionsCountryRequest$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsCountryRequest$ {
    /** @deprecated use `ListDialingPermissionsCountryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsCountryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsCountryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsCountryRequest$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryRequest>;
    /** @deprecated use `ListDialingPermissionsCountryRequest$Outbound` instead. */
    type Outbound = ListDialingPermissionsCountryRequest$Outbound;
}
export declare function listDialingPermissionsCountryRequestToJSON(listDialingPermissionsCountryRequest: ListDialingPermissionsCountryRequest): string;
export declare function listDialingPermissionsCountryRequestFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsCountryRequest, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsCountryMeta$inboundSchema: z.ZodType<ListDialingPermissionsCountryMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsCountryMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListDialingPermissionsCountryMeta$outboundSchema: z.ZodType<ListDialingPermissionsCountryMeta$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsCountryMeta$ {
    /** @deprecated use `ListDialingPermissionsCountryMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsCountryMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsCountryMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsCountryMeta$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryMeta>;
    /** @deprecated use `ListDialingPermissionsCountryMeta$Outbound` instead. */
    type Outbound = ListDialingPermissionsCountryMeta$Outbound;
}
export declare function listDialingPermissionsCountryMetaToJSON(listDialingPermissionsCountryMeta: ListDialingPermissionsCountryMeta): string;
export declare function listDialingPermissionsCountryMetaFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsCountryMeta, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema: z.ZodType<ListDialingPermissionsCountryListDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound = {
    content?: Array<components.VoiceV1DialingPermissionsDialingPermissionsCountry$Outbound> | undefined;
    meta?: ListDialingPermissionsCountryMeta$Outbound | undefined;
};
/** @internal */
export declare const ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema: z.ZodType<ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryListDialingPermissionsCountryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsCountryListDialingPermissionsCountryResponse$ {
    /** @deprecated use `ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsCountryListDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryListDialingPermissionsCountryResponse>;
    /** @deprecated use `ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound` instead. */
    type Outbound = ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound;
}
export declare function listDialingPermissionsCountryListDialingPermissionsCountryResponseToJSON(listDialingPermissionsCountryListDialingPermissionsCountryResponse: ListDialingPermissionsCountryListDialingPermissionsCountryResponse): string;
export declare function listDialingPermissionsCountryListDialingPermissionsCountryResponseFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsCountryListDialingPermissionsCountryResponse, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsCountryResponse$inboundSchema: z.ZodType<ListDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsCountryResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListDialingPermissionsCountryListDialingPermissionsCountryResponse$Outbound;
};
/** @internal */
export declare const ListDialingPermissionsCountryResponse$outboundSchema: z.ZodType<ListDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsCountryResponse$ {
    /** @deprecated use `ListDialingPermissionsCountryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsCountryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsCountryResponse>;
    /** @deprecated use `ListDialingPermissionsCountryResponse$Outbound` instead. */
    type Outbound = ListDialingPermissionsCountryResponse$Outbound;
}
export declare function listDialingPermissionsCountryResponseToJSON(listDialingPermissionsCountryResponse: ListDialingPermissionsCountryResponse): string;
export declare function listDialingPermissionsCountryResponseFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsCountryResponse, SDKValidationError>;
//# sourceMappingURL=listdialingpermissionscountry.d.ts.map