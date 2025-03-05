import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export type ListSourceIpMappingRequest = {
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
export type ListSourceIpMappingMeta = {
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
export type ListSourceIpMappingListSourceIpMappingResponse = {
    sourceIpMappings?: Array<components.VoiceV1SourceIpMapping> | undefined;
    meta?: ListSourceIpMappingMeta | undefined;
};
export type ListSourceIpMappingResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListSourceIpMappingListSourceIpMappingResponse;
};
/** @internal */
export declare const ListSourceIpMappingRequest$inboundSchema: z.ZodType<ListSourceIpMappingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSourceIpMappingRequest$Outbound = {
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListSourceIpMappingRequest$outboundSchema: z.ZodType<ListSourceIpMappingRequest$Outbound, z.ZodTypeDef, ListSourceIpMappingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSourceIpMappingRequest$ {
    /** @deprecated use `ListSourceIpMappingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSourceIpMappingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSourceIpMappingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSourceIpMappingRequest$Outbound, z.ZodTypeDef, ListSourceIpMappingRequest>;
    /** @deprecated use `ListSourceIpMappingRequest$Outbound` instead. */
    type Outbound = ListSourceIpMappingRequest$Outbound;
}
export declare function listSourceIpMappingRequestToJSON(listSourceIpMappingRequest: ListSourceIpMappingRequest): string;
export declare function listSourceIpMappingRequestFromJSON(jsonString: string): SafeParseResult<ListSourceIpMappingRequest, SDKValidationError>;
/** @internal */
export declare const ListSourceIpMappingMeta$inboundSchema: z.ZodType<ListSourceIpMappingMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSourceIpMappingMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListSourceIpMappingMeta$outboundSchema: z.ZodType<ListSourceIpMappingMeta$Outbound, z.ZodTypeDef, ListSourceIpMappingMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSourceIpMappingMeta$ {
    /** @deprecated use `ListSourceIpMappingMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSourceIpMappingMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSourceIpMappingMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSourceIpMappingMeta$Outbound, z.ZodTypeDef, ListSourceIpMappingMeta>;
    /** @deprecated use `ListSourceIpMappingMeta$Outbound` instead. */
    type Outbound = ListSourceIpMappingMeta$Outbound;
}
export declare function listSourceIpMappingMetaToJSON(listSourceIpMappingMeta: ListSourceIpMappingMeta): string;
export declare function listSourceIpMappingMetaFromJSON(jsonString: string): SafeParseResult<ListSourceIpMappingMeta, SDKValidationError>;
/** @internal */
export declare const ListSourceIpMappingListSourceIpMappingResponse$inboundSchema: z.ZodType<ListSourceIpMappingListSourceIpMappingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSourceIpMappingListSourceIpMappingResponse$Outbound = {
    source_ip_mappings?: Array<components.VoiceV1SourceIpMapping$Outbound> | undefined;
    meta?: ListSourceIpMappingMeta$Outbound | undefined;
};
/** @internal */
export declare const ListSourceIpMappingListSourceIpMappingResponse$outboundSchema: z.ZodType<ListSourceIpMappingListSourceIpMappingResponse$Outbound, z.ZodTypeDef, ListSourceIpMappingListSourceIpMappingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSourceIpMappingListSourceIpMappingResponse$ {
    /** @deprecated use `ListSourceIpMappingListSourceIpMappingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSourceIpMappingListSourceIpMappingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSourceIpMappingListSourceIpMappingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSourceIpMappingListSourceIpMappingResponse$Outbound, z.ZodTypeDef, ListSourceIpMappingListSourceIpMappingResponse>;
    /** @deprecated use `ListSourceIpMappingListSourceIpMappingResponse$Outbound` instead. */
    type Outbound = ListSourceIpMappingListSourceIpMappingResponse$Outbound;
}
export declare function listSourceIpMappingListSourceIpMappingResponseToJSON(listSourceIpMappingListSourceIpMappingResponse: ListSourceIpMappingListSourceIpMappingResponse): string;
export declare function listSourceIpMappingListSourceIpMappingResponseFromJSON(jsonString: string): SafeParseResult<ListSourceIpMappingListSourceIpMappingResponse, SDKValidationError>;
/** @internal */
export declare const ListSourceIpMappingResponse$inboundSchema: z.ZodType<ListSourceIpMappingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSourceIpMappingResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListSourceIpMappingListSourceIpMappingResponse$Outbound;
};
/** @internal */
export declare const ListSourceIpMappingResponse$outboundSchema: z.ZodType<ListSourceIpMappingResponse$Outbound, z.ZodTypeDef, ListSourceIpMappingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSourceIpMappingResponse$ {
    /** @deprecated use `ListSourceIpMappingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSourceIpMappingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSourceIpMappingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSourceIpMappingResponse$Outbound, z.ZodTypeDef, ListSourceIpMappingResponse>;
    /** @deprecated use `ListSourceIpMappingResponse$Outbound` instead. */
    type Outbound = ListSourceIpMappingResponse$Outbound;
}
export declare function listSourceIpMappingResponseToJSON(listSourceIpMappingResponse: ListSourceIpMappingResponse): string;
export declare function listSourceIpMappingResponseFromJSON(jsonString: string): SafeParseResult<ListSourceIpMappingResponse, SDKValidationError>;
//# sourceMappingURL=listsourceipmapping.d.ts.map