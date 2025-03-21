/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
export const FetchIpRecordServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const FetchIpRecordRequest$inboundSchema = z.object({
    Sid: z.string(),
}).transform((v) => {
    return remap$(v, {
        "Sid": "sid",
    });
});
/** @internal */
export const FetchIpRecordRequest$outboundSchema = z.object({
    sid: z.string(),
}).transform((v) => {
    return remap$(v, {
        sid: "Sid",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var FetchIpRecordRequest$;
(function (FetchIpRecordRequest$) {
    /** @deprecated use `FetchIpRecordRequest$inboundSchema` instead. */
    FetchIpRecordRequest$.inboundSchema = FetchIpRecordRequest$inboundSchema;
    /** @deprecated use `FetchIpRecordRequest$outboundSchema` instead. */
    FetchIpRecordRequest$.outboundSchema = FetchIpRecordRequest$outboundSchema;
})(FetchIpRecordRequest$ || (FetchIpRecordRequest$ = {}));
export function fetchIpRecordRequestToJSON(fetchIpRecordRequest) {
    return JSON.stringify(FetchIpRecordRequest$outboundSchema.parse(fetchIpRecordRequest));
}
export function fetchIpRecordRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => FetchIpRecordRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'FetchIpRecordRequest' from JSON`);
}
/** @internal */
export const FetchIpRecordResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1IpRecord$inboundSchema,
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const FetchIpRecordResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components.VoiceV1IpRecord$outboundSchema,
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
export var FetchIpRecordResponse$;
(function (FetchIpRecordResponse$) {
    /** @deprecated use `FetchIpRecordResponse$inboundSchema` instead. */
    FetchIpRecordResponse$.inboundSchema = FetchIpRecordResponse$inboundSchema;
    /** @deprecated use `FetchIpRecordResponse$outboundSchema` instead. */
    FetchIpRecordResponse$.outboundSchema = FetchIpRecordResponse$outboundSchema;
})(FetchIpRecordResponse$ || (FetchIpRecordResponse$ = {}));
export function fetchIpRecordResponseToJSON(fetchIpRecordResponse) {
    return JSON.stringify(FetchIpRecordResponse$outboundSchema.parse(fetchIpRecordResponse));
}
export function fetchIpRecordResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => FetchIpRecordResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'FetchIpRecordResponse' from JSON`);
}
//# sourceMappingURL=fetchiprecord.js.map