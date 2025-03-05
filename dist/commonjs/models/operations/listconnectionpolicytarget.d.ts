import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export type ListConnectionPolicyTargetRequest = {
    /**
     * The SID of the Connection Policy from which to read the Targets.
     */
    connectionPolicySid: string;
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
export type ListConnectionPolicyTargetMeta = {
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
export type ListConnectionPolicyTargetListConnectionPolicyTargetResponse = {
    targets?: Array<components.VoiceV1ConnectionPolicyConnectionPolicyTarget> | undefined;
    meta?: ListConnectionPolicyTargetMeta | undefined;
};
export type ListConnectionPolicyTargetResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListConnectionPolicyTargetListConnectionPolicyTargetResponse;
};
/** @internal */
export declare const ListConnectionPolicyTargetRequest$inboundSchema: z.ZodType<ListConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyTargetRequest$Outbound = {
    ConnectionPolicySid: string;
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListConnectionPolicyTargetRequest$outboundSchema: z.ZodType<ListConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyTargetRequest$ {
    /** @deprecated use `ListConnectionPolicyTargetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyTargetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyTargetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyTargetRequest$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetRequest>;
    /** @deprecated use `ListConnectionPolicyTargetRequest$Outbound` instead. */
    type Outbound = ListConnectionPolicyTargetRequest$Outbound;
}
export declare function listConnectionPolicyTargetRequestToJSON(listConnectionPolicyTargetRequest: ListConnectionPolicyTargetRequest): string;
export declare function listConnectionPolicyTargetRequestFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyTargetRequest, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyTargetMeta$inboundSchema: z.ZodType<ListConnectionPolicyTargetMeta, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyTargetMeta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const ListConnectionPolicyTargetMeta$outboundSchema: z.ZodType<ListConnectionPolicyTargetMeta$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetMeta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyTargetMeta$ {
    /** @deprecated use `ListConnectionPolicyTargetMeta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyTargetMeta, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyTargetMeta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyTargetMeta$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetMeta>;
    /** @deprecated use `ListConnectionPolicyTargetMeta$Outbound` instead. */
    type Outbound = ListConnectionPolicyTargetMeta$Outbound;
}
export declare function listConnectionPolicyTargetMetaToJSON(listConnectionPolicyTargetMeta: ListConnectionPolicyTargetMeta): string;
export declare function listConnectionPolicyTargetMetaFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyTargetMeta, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyTargetListConnectionPolicyTargetResponse$inboundSchema: z.ZodType<ListConnectionPolicyTargetListConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound = {
    targets?: Array<components.VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound> | undefined;
    meta?: ListConnectionPolicyTargetMeta$Outbound | undefined;
};
/** @internal */
export declare const ListConnectionPolicyTargetListConnectionPolicyTargetResponse$outboundSchema: z.ZodType<ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetListConnectionPolicyTargetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyTargetListConnectionPolicyTargetResponse$ {
    /** @deprecated use `ListConnectionPolicyTargetListConnectionPolicyTargetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyTargetListConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyTargetListConnectionPolicyTargetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetListConnectionPolicyTargetResponse>;
    /** @deprecated use `ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound` instead. */
    type Outbound = ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound;
}
export declare function listConnectionPolicyTargetListConnectionPolicyTargetResponseToJSON(listConnectionPolicyTargetListConnectionPolicyTargetResponse: ListConnectionPolicyTargetListConnectionPolicyTargetResponse): string;
export declare function listConnectionPolicyTargetListConnectionPolicyTargetResponseFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyTargetListConnectionPolicyTargetResponse, SDKValidationError>;
/** @internal */
export declare const ListConnectionPolicyTargetResponse$inboundSchema: z.ZodType<ListConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListConnectionPolicyTargetResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListConnectionPolicyTargetListConnectionPolicyTargetResponse$Outbound;
};
/** @internal */
export declare const ListConnectionPolicyTargetResponse$outboundSchema: z.ZodType<ListConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListConnectionPolicyTargetResponse$ {
    /** @deprecated use `ListConnectionPolicyTargetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListConnectionPolicyTargetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListConnectionPolicyTargetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListConnectionPolicyTargetResponse$Outbound, z.ZodTypeDef, ListConnectionPolicyTargetResponse>;
    /** @deprecated use `ListConnectionPolicyTargetResponse$Outbound` instead. */
    type Outbound = ListConnectionPolicyTargetResponse$Outbound;
}
export declare function listConnectionPolicyTargetResponseToJSON(listConnectionPolicyTargetResponse: ListConnectionPolicyTargetResponse): string;
export declare function listConnectionPolicyTargetResponseFromJSON(jsonString: string): SafeParseResult<ListConnectionPolicyTargetResponse, SDKValidationError>;
//# sourceMappingURL=listconnectionpolicytarget.d.ts.map