import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListDialingPermissionsHrsPrefixesServerList: readonly ["https://voice.twilio.com"];
export type ListDialingPermissionsHrsPrefixesRequest = {
    /**
     * The [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to identify the country permissions from which high-risk special service number prefixes are fetched
     */
    isoCode: string;
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
export type ListDialingPermissionsHrsPrefixesMeta = {
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
export type ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse = {
    content?: Array<components.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes> | undefined;
    meta?: ListDialingPermissionsHrsPrefixesMeta | undefined;
};
export type ListDialingPermissionsHrsPrefixesResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse;
};
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesRequest$inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsHrsPrefixesRequest$Outbound = {
    IsoCode: string;
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesRequest$outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesRequest$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsHrsPrefixesRequest$ {
    /** @deprecated use `ListDialingPermissionsHrsPrefixesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesRequest$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesRequest>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesRequest$Outbound` instead. */
    type Outbound = ListDialingPermissionsHrsPrefixesRequest$Outbound;
}
export declare function listDialingPermissionsHrsPrefixesRequestToJSON(listDialingPermissionsHrsPrefixesRequest: ListDialingPermissionsHrsPrefixesRequest): string;
export declare function listDialingPermissionsHrsPrefixesRequestFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsHrsPrefixesRequest, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesMeta$inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsHrsPrefixesMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesMeta$outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesMeta$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsHrsPrefixesMeta$ {
    /** @deprecated use `ListDialingPermissionsHrsPrefixesMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesMeta$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesMeta>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesMeta$Outbound` instead. */
    type Outbound = ListDialingPermissionsHrsPrefixesMeta$Outbound;
}
export declare function listDialingPermissionsHrsPrefixesMetaToJSON(listDialingPermissionsHrsPrefixesMeta: ListDialingPermissionsHrsPrefixesMeta): string;
export declare function listDialingPermissionsHrsPrefixesMetaFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsHrsPrefixesMeta, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound = {
    content?: Array<components.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes$Outbound> | undefined;
    meta?: ListDialingPermissionsHrsPrefixesMeta$Outbound | undefined;
};
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$ {
    /** @deprecated use `ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound` instead. */
    type Outbound = ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound;
}
export declare function listDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseToJSON(listDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse): string;
export declare function listDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse, SDKValidationError>;
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesResponse$inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDialingPermissionsHrsPrefixesResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse$Outbound;
};
/** @internal */
export declare const ListDialingPermissionsHrsPrefixesResponse$outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDialingPermissionsHrsPrefixesResponse$ {
    /** @deprecated use `ListDialingPermissionsHrsPrefixesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDialingPermissionsHrsPrefixesResponse$Outbound, z.ZodTypeDef, ListDialingPermissionsHrsPrefixesResponse>;
    /** @deprecated use `ListDialingPermissionsHrsPrefixesResponse$Outbound` instead. */
    type Outbound = ListDialingPermissionsHrsPrefixesResponse$Outbound;
}
export declare function listDialingPermissionsHrsPrefixesResponseToJSON(listDialingPermissionsHrsPrefixesResponse: ListDialingPermissionsHrsPrefixesResponse): string;
export declare function listDialingPermissionsHrsPrefixesResponseFromJSON(jsonString: string): SafeParseResult<ListDialingPermissionsHrsPrefixesResponse, SDKValidationError>;
//# sourceMappingURL=listdialingpermissionshrsprefixes.d.ts.map