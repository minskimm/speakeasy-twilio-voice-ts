import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListIpRecordServerList: readonly ["https://voice.twilio.com"];
export type ListIpRecordRequest = {
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
export type ListIpRecordMeta = {
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
export type ListIpRecordListIpRecordResponse = {
    ipRecords?: Array<components.VoiceV1IpRecord> | undefined;
    meta?: ListIpRecordMeta | undefined;
};
export type ListIpRecordResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListIpRecordListIpRecordResponse;
};
/** @internal */
export declare const ListIpRecordRequest$inboundSchema: z.ZodType<ListIpRecordRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListIpRecordRequest$Outbound = {
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListIpRecordRequest$outboundSchema: z.ZodType<ListIpRecordRequest$Outbound, z.ZodTypeDef, ListIpRecordRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListIpRecordRequest$ {
    /** @deprecated use `ListIpRecordRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListIpRecordRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListIpRecordRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListIpRecordRequest$Outbound, z.ZodTypeDef, ListIpRecordRequest>;
    /** @deprecated use `ListIpRecordRequest$Outbound` instead. */
    type Outbound = ListIpRecordRequest$Outbound;
}
export declare function listIpRecordRequestToJSON(listIpRecordRequest: ListIpRecordRequest): string;
export declare function listIpRecordRequestFromJSON(jsonString: string): SafeParseResult<ListIpRecordRequest, SDKValidationError>;
/** @internal */
export declare const ListIpRecordMeta$inboundSchema: z.ZodType<ListIpRecordMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListIpRecordMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListIpRecordMeta$outboundSchema: z.ZodType<ListIpRecordMeta$Outbound, z.ZodTypeDef, ListIpRecordMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListIpRecordMeta$ {
    /** @deprecated use `ListIpRecordMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListIpRecordMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListIpRecordMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListIpRecordMeta$Outbound, z.ZodTypeDef, ListIpRecordMeta>;
    /** @deprecated use `ListIpRecordMeta$Outbound` instead. */
    type Outbound = ListIpRecordMeta$Outbound;
}
export declare function listIpRecordMetaToJSON(listIpRecordMeta: ListIpRecordMeta): string;
export declare function listIpRecordMetaFromJSON(jsonString: string): SafeParseResult<ListIpRecordMeta, SDKValidationError>;
/** @internal */
export declare const ListIpRecordListIpRecordResponse$inboundSchema: z.ZodType<ListIpRecordListIpRecordResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListIpRecordListIpRecordResponse$Outbound = {
    ip_records?: Array<components.VoiceV1IpRecord$Outbound> | undefined;
    meta?: ListIpRecordMeta$Outbound | undefined;
};
/** @internal */
export declare const ListIpRecordListIpRecordResponse$outboundSchema: z.ZodType<ListIpRecordListIpRecordResponse$Outbound, z.ZodTypeDef, ListIpRecordListIpRecordResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListIpRecordListIpRecordResponse$ {
    /** @deprecated use `ListIpRecordListIpRecordResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListIpRecordListIpRecordResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListIpRecordListIpRecordResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListIpRecordListIpRecordResponse$Outbound, z.ZodTypeDef, ListIpRecordListIpRecordResponse>;
    /** @deprecated use `ListIpRecordListIpRecordResponse$Outbound` instead. */
    type Outbound = ListIpRecordListIpRecordResponse$Outbound;
}
export declare function listIpRecordListIpRecordResponseToJSON(listIpRecordListIpRecordResponse: ListIpRecordListIpRecordResponse): string;
export declare function listIpRecordListIpRecordResponseFromJSON(jsonString: string): SafeParseResult<ListIpRecordListIpRecordResponse, SDKValidationError>;
/** @internal */
export declare const ListIpRecordResponse$inboundSchema: z.ZodType<ListIpRecordResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListIpRecordResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListIpRecordListIpRecordResponse$Outbound;
};
/** @internal */
export declare const ListIpRecordResponse$outboundSchema: z.ZodType<ListIpRecordResponse$Outbound, z.ZodTypeDef, ListIpRecordResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListIpRecordResponse$ {
    /** @deprecated use `ListIpRecordResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListIpRecordResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListIpRecordResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListIpRecordResponse$Outbound, z.ZodTypeDef, ListIpRecordResponse>;
    /** @deprecated use `ListIpRecordResponse$Outbound` instead. */
    type Outbound = ListIpRecordResponse$Outbound;
}
export declare function listIpRecordResponseToJSON(listIpRecordResponse: ListIpRecordResponse): string;
export declare function listIpRecordResponseFromJSON(jsonString: string): SafeParseResult<ListIpRecordResponse, SDKValidationError>;
//# sourceMappingURL=listiprecord.d.ts.map