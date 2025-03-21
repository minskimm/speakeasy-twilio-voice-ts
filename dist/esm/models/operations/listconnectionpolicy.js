/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
export const ListConnectionPolicyServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const ListConnectionPolicyRequest$inboundSchema = z.object({
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
export const ListConnectionPolicyRequest$outboundSchema = z.object({
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
export var ListConnectionPolicyRequest$;
(function (ListConnectionPolicyRequest$) {
    /** @deprecated use `ListConnectionPolicyRequest$inboundSchema` instead. */
    ListConnectionPolicyRequest$.inboundSchema = ListConnectionPolicyRequest$inboundSchema;
    /** @deprecated use `ListConnectionPolicyRequest$outboundSchema` instead. */
    ListConnectionPolicyRequest$.outboundSchema = ListConnectionPolicyRequest$outboundSchema;
})(ListConnectionPolicyRequest$ || (ListConnectionPolicyRequest$ = {}));
export function listConnectionPolicyRequestToJSON(listConnectionPolicyRequest) {
    return JSON.stringify(ListConnectionPolicyRequest$outboundSchema.parse(listConnectionPolicyRequest));
}
export function listConnectionPolicyRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListConnectionPolicyRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListConnectionPolicyRequest' from JSON`);
}
/** @internal */
export const ListConnectionPolicyMeta$inboundSchema = z.object({
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
export const ListConnectionPolicyMeta$outboundSchema = z.object({
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
export var ListConnectionPolicyMeta$;
(function (ListConnectionPolicyMeta$) {
    /** @deprecated use `ListConnectionPolicyMeta$inboundSchema` instead. */
    ListConnectionPolicyMeta$.inboundSchema = ListConnectionPolicyMeta$inboundSchema;
    /** @deprecated use `ListConnectionPolicyMeta$outboundSchema` instead. */
    ListConnectionPolicyMeta$.outboundSchema = ListConnectionPolicyMeta$outboundSchema;
})(ListConnectionPolicyMeta$ || (ListConnectionPolicyMeta$ = {}));
export function listConnectionPolicyMetaToJSON(listConnectionPolicyMeta) {
    return JSON.stringify(ListConnectionPolicyMeta$outboundSchema.parse(listConnectionPolicyMeta));
}
export function listConnectionPolicyMetaFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListConnectionPolicyMeta$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListConnectionPolicyMeta' from JSON`);
}
/** @internal */
export const ListConnectionPolicyListConnectionPolicyResponse$inboundSchema = z.object({
    connection_policies: z.array(components.VoiceV1ConnectionPolicy$inboundSchema).optional(),
    meta: z.lazy(() => ListConnectionPolicyMeta$inboundSchema).optional(),
}).transform((v) => {
    return remap$(v, {
        "connection_policies": "connectionPolicies",
    });
});
/** @internal */
export const ListConnectionPolicyListConnectionPolicyResponse$outboundSchema = z.object({
    connectionPolicies: z.array(components.VoiceV1ConnectionPolicy$outboundSchema).optional(),
    meta: z.lazy(() => ListConnectionPolicyMeta$outboundSchema).optional(),
}).transform((v) => {
    return remap$(v, {
        connectionPolicies: "connection_policies",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var ListConnectionPolicyListConnectionPolicyResponse$;
(function (ListConnectionPolicyListConnectionPolicyResponse$) {
    /** @deprecated use `ListConnectionPolicyListConnectionPolicyResponse$inboundSchema` instead. */
    ListConnectionPolicyListConnectionPolicyResponse$.inboundSchema = ListConnectionPolicyListConnectionPolicyResponse$inboundSchema;
    /** @deprecated use `ListConnectionPolicyListConnectionPolicyResponse$outboundSchema` instead. */
    ListConnectionPolicyListConnectionPolicyResponse$.outboundSchema = ListConnectionPolicyListConnectionPolicyResponse$outboundSchema;
})(ListConnectionPolicyListConnectionPolicyResponse$ || (ListConnectionPolicyListConnectionPolicyResponse$ = {}));
export function listConnectionPolicyListConnectionPolicyResponseToJSON(listConnectionPolicyListConnectionPolicyResponse) {
    return JSON.stringify(ListConnectionPolicyListConnectionPolicyResponse$outboundSchema.parse(listConnectionPolicyListConnectionPolicyResponse));
}
export function listConnectionPolicyListConnectionPolicyResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListConnectionPolicyListConnectionPolicyResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListConnectionPolicyListConnectionPolicyResponse' from JSON`);
}
/** @internal */
export const ListConnectionPolicyResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.lazy(() => ListConnectionPolicyListConnectionPolicyResponse$inboundSchema),
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const ListConnectionPolicyResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: z.lazy(() => ListConnectionPolicyListConnectionPolicyResponse$outboundSchema),
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
export var ListConnectionPolicyResponse$;
(function (ListConnectionPolicyResponse$) {
    /** @deprecated use `ListConnectionPolicyResponse$inboundSchema` instead. */
    ListConnectionPolicyResponse$.inboundSchema = ListConnectionPolicyResponse$inboundSchema;
    /** @deprecated use `ListConnectionPolicyResponse$outboundSchema` instead. */
    ListConnectionPolicyResponse$.outboundSchema = ListConnectionPolicyResponse$outboundSchema;
})(ListConnectionPolicyResponse$ || (ListConnectionPolicyResponse$ = {}));
export function listConnectionPolicyResponseToJSON(listConnectionPolicyResponse) {
    return JSON.stringify(ListConnectionPolicyResponse$outboundSchema.parse(listConnectionPolicyResponse));
}
export function listConnectionPolicyResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => ListConnectionPolicyResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListConnectionPolicyResponse' from JSON`);
}
//# sourceMappingURL=listconnectionpolicy.js.map