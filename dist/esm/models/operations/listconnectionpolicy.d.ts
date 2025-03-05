import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export type ListConnectionPolicyRequest = {
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
export type ListConnectionPolicyMeta = {
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
export type ListConnectionPolicyListConnectionPolicyResponse = {
    connectionPolicies?: Array<components.VoiceV1ConnectionPolicy> | undefined;
    meta?: ListConnectionPolicyMeta | undefined;
};
export type ListConnectionPolicyResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListConnectionPolicyListConnectionPolicyResponse;
};
/** @internal */
export declare const ListConnectionPolicyRequest$inboundSchema: z.ZodType<ListConnectionPolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyRequest$Outbound = {
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListConnectionPolicyRequest$outboundSchema: z.ZodType<ListConnectionPolicyRequest$Outbound, z.ZodTypeDef, ListConnectionPolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyRequest$ {
    /** @deprecated use `ListConnectionPolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyRequest$Outbound, z.ZodTypeDef, ListConnectionPolicyRequest>;
    /** @deprecated use `ListConnectionPolicyRequest$Outbound` instead. */
    type Outbound = ListConnectionPolicyRequest$Outbound;
}
export declare function listConnectionPolicyRequestToJSON(listConnectionPolicyRequest: ListConnectionPolicyRequest): string;
export declare function listConnectionPolicyRequestFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyRequest, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyMeta$inboundSchema: z.ZodType<ListConnectionPolicyMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListConnectionPolicyMeta$outboundSchema: z.ZodType<ListConnectionPolicyMeta$Outbound, z.ZodTypeDef, ListConnectionPolicyMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyMeta$ {
    /** @deprecated use `ListConnectionPolicyMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyMeta$Outbound, z.ZodTypeDef, ListConnectionPolicyMeta>;
    /** @deprecated use `ListConnectionPolicyMeta$Outbound` instead. */
    type Outbound = ListConnectionPolicyMeta$Outbound;
}
export declare function listConnectionPolicyMetaToJSON(listConnectionPolicyMeta: ListConnectionPolicyMeta): string;
export declare function listConnectionPolicyMetaFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyMeta, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyListConnectionPolicyResponse$inboundSchema: z.ZodType<ListConnectionPolicyListConnectionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyListConnectionPolicyResponse$Outbound = {
    connection_policies?: Array<components.VoiceV1ConnectionPolicy$Outbound> | undefined;
    meta?: ListConnectionPolicyMeta$Outbound | undefined;
};
/** @internal */
export declare const ListConnectionPolicyListConnectionPolicyResponse$outboundSchema: z.ZodType<ListConnectionPolicyListConnectionPolicyResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyListConnectionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyListConnectionPolicyResponse$ {
    /** @deprecated use `ListConnectionPolicyListConnectionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyListConnectionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyListConnectionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyListConnectionPolicyResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyListConnectionPolicyResponse>;
    /** @deprecated use `ListConnectionPolicyListConnectionPolicyResponse$Outbound` instead. */
    type Outbound = ListConnectionPolicyListConnectionPolicyResponse$Outbound;
}
export declare function listConnectionPolicyListConnectionPolicyResponseToJSON(listConnectionPolicyListConnectionPolicyResponse: ListConnectionPolicyListConnectionPolicyResponse): string;
export declare function listConnectionPolicyListConnectionPolicyResponseFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyListConnectionPolicyResponse, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyResponse$inboundSchema: z.ZodType<ListConnectionPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListConnectionPolicyListConnectionPolicyResponse$Outbound;
};
/** @internal */
export declare const ListConnectionPolicyResponse$outboundSchema: z.ZodType<ListConnectionPolicyResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyResponse$ {
    /** @deprecated use `ListConnectionPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyResponse>;
    /** @deprecated use `ListConnectionPolicyResponse$Outbound` instead. */
    type Outbound = ListConnectionPolicyResponse$Outbound;
}
export declare function listConnectionPolicyResponseToJSON(listConnectionPolicyResponse: ListConnectionPolicyResponse): string;
export declare function listConnectionPolicyResponseFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyResponse, SDKValidationError>;
//# sourceMappingURL=listconnectionpolicy.d.ts.map