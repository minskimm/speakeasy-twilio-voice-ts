import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const ListByocTrunkServerList: readonly ["https://voice.twilio.com"];
export type ListByocTrunkRequest = {
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
export type Meta = {
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
export type ListByocTrunkListByocTrunkResponse = {
    byocTrunks?: Array<components.VoiceV1ByocTrunk> | undefined;
    meta?: Meta | undefined;
};
export type ListByocTrunkResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: ListByocTrunkListByocTrunkResponse;
};
/** @internal */
export declare const ListByocTrunkRequest$inboundSchema: z.ZodType<ListByocTrunkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ListByocTrunkRequest$Outbound = {
    PageSize?: number | undefined;
    Page?: number | undefined;
    PageToken?: string | undefined;
};
/** @internal */
export declare const ListByocTrunkRequest$outboundSchema: z.ZodType<ListByocTrunkRequest$Outbound, z.ZodTypeDef, ListByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListByocTrunkRequest$ {
    /** @deprecated use `ListByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListByocTrunkRequest$Outbound, z.ZodTypeDef, ListByocTrunkRequest>;
    /** @deprecated use `ListByocTrunkRequest$Outbound` instead. */
    type Outbound = ListByocTrunkRequest$Outbound;
}
export declare function listByocTrunkRequestToJSON(listByocTrunkRequest: ListByocTrunkRequest): string;
export declare function listByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<ListByocTrunkRequest, SDKValidationError>;
/** @internal */
export declare const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown>;
/** @internal */
export type Meta$Outbound = {
    first_page_url?: string | undefined;
    key?: string | undefined;
    next_page_url?: string | null | undefined;
    page?: number | undefined;
    page_size?: number | undefined;
    previous_page_url?: string | null | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Meta$ {
    /** @deprecated use `Meta$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown>;
    /** @deprecated use `Meta$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta>;
    /** @deprecated use `Meta$Outbound` instead. */
    type Outbound = Meta$Outbound;
}
export declare function metaToJSON(meta: Meta): string;
export declare function metaFromJSON(jsonString: string): SafeParseResult<Meta, SDKValidationError>;
/** @internal */
export declare const ListByocTrunkListByocTrunkResponse$inboundSchema: z.ZodType<ListByocTrunkListByocTrunkResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListByocTrunkListByocTrunkResponse$Outbound = {
    byoc_trunks?: Array<components.VoiceV1ByocTrunk$Outbound> | undefined;
    meta?: Meta$Outbound | undefined;
};
/** @internal */
export declare const ListByocTrunkListByocTrunkResponse$outboundSchema: z.ZodType<ListByocTrunkListByocTrunkResponse$Outbound, z.ZodTypeDef, ListByocTrunkListByocTrunkResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListByocTrunkListByocTrunkResponse$ {
    /** @deprecated use `ListByocTrunkListByocTrunkResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListByocTrunkListByocTrunkResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListByocTrunkListByocTrunkResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListByocTrunkListByocTrunkResponse$Outbound, z.ZodTypeDef, ListByocTrunkListByocTrunkResponse>;
    /** @deprecated use `ListByocTrunkListByocTrunkResponse$Outbound` instead. */
    type Outbound = ListByocTrunkListByocTrunkResponse$Outbound;
}
export declare function listByocTrunkListByocTrunkResponseToJSON(listByocTrunkListByocTrunkResponse: ListByocTrunkListByocTrunkResponse): string;
export declare function listByocTrunkListByocTrunkResponseFromJSON(jsonString: string): SafeParseResult<ListByocTrunkListByocTrunkResponse, SDKValidationError>;
/** @internal */
export declare const ListByocTrunkResponse$inboundSchema: z.ZodType<ListByocTrunkResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListByocTrunkResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: ListByocTrunkListByocTrunkResponse$Outbound;
};
/** @internal */
export declare const ListByocTrunkResponse$outboundSchema: z.ZodType<ListByocTrunkResponse$Outbound, z.ZodTypeDef, ListByocTrunkResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListByocTrunkResponse$ {
    /** @deprecated use `ListByocTrunkResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListByocTrunkResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListByocTrunkResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListByocTrunkResponse$Outbound, z.ZodTypeDef, ListByocTrunkResponse>;
    /** @deprecated use `ListByocTrunkResponse$Outbound` instead. */
    type Outbound = ListByocTrunkResponse$Outbound;
}
export declare function listByocTrunkResponseToJSON(listByocTrunkResponse: ListByocTrunkResponse): string;
export declare function listByocTrunkResponseFromJSON(jsonString: string): SafeParseResult<ListByocTrunkResponse, SDKValidationError>;
//# sourceMappingURL=listbyoctrunk.d.ts.map