/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
export const ListByocTrunkServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const ListByocTrunkRequest$inboundSchema = z.object({
    PageSize: z.number().int().optional(),
    Page: z.number().int().optional(),
    PageToken: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        "PageSize": "pageSize",
        "Page": "page",
        "PageToken": "pageToken",
    });
});
/** @internal */
export const ListByocTrunkRequest$outboundSchema = z.object({
    pageSize: z.number().int().optional(),
    page: z.number().int().optional(),
    pageToken: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        pageSize: "PageSize",
        page: "Page",
        pageToken: "PageToken",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var ListByocTrunkRequest$;
(function (ListByocTrunkRequest$) {
    /** @deprecated use `ListByocTrunkRequest$inboundSchema` instead. */
    ListByocTrunkRequest$.inboundSchema = ListByocTrunkRequest$inboundSchema;
    /** @deprecated use `ListByocTrunkRequest$outboundSchema` instead. */
    ListByocTrunkRequest$.outboundSchema = ListByocTrunkRequest$outboundSchema;
})(ListByocTrunkRequest$ || (ListByocTrunkRequest$ = {}));
export function listByocTrunkRequestToJSON(listByocTrunkRequest) {
    return JSON.stringify(ListByocTrunkRequest$outboundSchema.parse(listByocTrunkRequest));
}
export function listByocTrunkRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListByocTrunkRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListByocTrunkRequest' from JSON`);
}
/** @internal */
export const Meta$inboundSchema = z
    .object({
    first_page_url: z.string().optional(),
    key: z.string().optional(),
    next_page_url: z.nullable(z.string()).optional(),
    page: z.number().int().optional(),
    page_size: z.number().int().optional(),
    previous_page_url: z.nullable(z.string()).optional(),
    url: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        "first_page_url": "firstPageUrl",
        "next_page_url": "nextPageUrl",
        "page_size": "pageSize",
        "previous_page_url": "previousPageUrl",
    });
});
/** @internal */
export const Meta$outboundSchema = z.object({
    firstPageUrl: z.string().optional(),
    key: z.string().optional(),
    nextPageUrl: z.nullable(z.string()).optional(),
    page: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    previousPageUrl: z.nullable(z.string()).optional(),
    url: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        firstPageUrl: "first_page_url",
        nextPageUrl: "next_page_url",
        pageSize: "page_size",
        previousPageUrl: "previous_page_url",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var Meta$;
(function (Meta$) {
    /** @deprecated use `Meta$inboundSchema` instead. */
    Meta$.inboundSchema = Meta$inboundSchema;
    /** @deprecated use `Meta$outboundSchema` instead. */
    Meta$.outboundSchema = Meta$outboundSchema;
})(Meta$ || (Meta$ = {}));
export function metaToJSON(meta) {
    return JSON.stringify(Meta$outboundSchema.parse(meta));
}
export function metaFromJSON(jsonString) {
    return safeParse(jsonString, (x) => Meta$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'Meta' from JSON`);
}
/** @internal */
export const ListByocTrunkListByocTrunkResponse$inboundSchema = z.object({
    byoc_trunks: z.array(components.VoiceV1ByocTrunk$inboundSchema).optional(),
    meta: z.lazy(() => Meta$inboundSchema).optional(),
}).transform((v) => {
    return remap$(v, {
        "byoc_trunks": "byocTrunks",
    });
});
/** @internal */
export const ListByocTrunkListByocTrunkResponse$outboundSchema = z.object({
    byocTrunks: z.array(components.VoiceV1ByocTrunk$outboundSchema).optional(),
    meta: z.lazy(() => Meta$outboundSchema).optional(),
}).transform((v) => {
    return remap$(v, {
        byocTrunks: "byoc_trunks",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var ListByocTrunkListByocTrunkResponse$;
(function (ListByocTrunkListByocTrunkResponse$) {
    /** @deprecated use `ListByocTrunkListByocTrunkResponse$inboundSchema` instead. */
    ListByocTrunkListByocTrunkResponse$.inboundSchema = ListByocTrunkListByocTrunkResponse$inboundSchema;
    /** @deprecated use `ListByocTrunkListByocTrunkResponse$outboundSchema` instead. */
    ListByocTrunkListByocTrunkResponse$.outboundSchema = ListByocTrunkListByocTrunkResponse$outboundSchema;
})(ListByocTrunkListByocTrunkResponse$ || (ListByocTrunkListByocTrunkResponse$ = {}));
export function listByocTrunkListByocTrunkResponseToJSON(listByocTrunkListByocTrunkResponse) {
    return JSON.stringify(ListByocTrunkListByocTrunkResponse$outboundSchema.parse(listByocTrunkListByocTrunkResponse));
}
export function listByocTrunkListByocTrunkResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListByocTrunkListByocTrunkResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListByocTrunkListByocTrunkResponse' from JSON`);
}
/** @internal */
export const ListByocTrunkResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.lazy(() => ListByocTrunkListByocTrunkResponse$inboundSchema),
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const ListByocTrunkResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: z.lazy(() => ListByocTrunkListByocTrunkResponse$outboundSchema),
}).transform((v) => {
    return remap$(v, {
        headers: "Headers",
        result: "Result",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var ListByocTrunkResponse$;
(function (ListByocTrunkResponse$) {
    /** @deprecated use `ListByocTrunkResponse$inboundSchema` instead. */
    ListByocTrunkResponse$.inboundSchema = ListByocTrunkResponse$inboundSchema;
    /** @deprecated use `ListByocTrunkResponse$outboundSchema` instead. */
    ListByocTrunkResponse$.outboundSchema = ListByocTrunkResponse$outboundSchema;
})(ListByocTrunkResponse$ || (ListByocTrunkResponse$ = {}));
export function listByocTrunkResponseToJSON(listByocTrunkResponse) {
    return JSON.stringify(ListByocTrunkResponse$outboundSchema.parse(listByocTrunkResponse));
}
export function listByocTrunkResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListByocTrunkResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListByocTrunkResponse' from JSON`);
}
//# sourceMappingURL=listbyoctrunk.js.map