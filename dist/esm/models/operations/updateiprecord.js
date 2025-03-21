/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
export const UpdateIpRecordServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const UpdateIpRecordUpdateIpRecordRequest$inboundSchema = z.object({
    FriendlyName: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        "FriendlyName": "friendlyName",
    });
});
/** @internal */
export const UpdateIpRecordUpdateIpRecordRequest$outboundSchema = z.object({
    friendlyName: z.string().optional(),
}).transform((v) => {
    return remap$(v, {
        friendlyName: "FriendlyName",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var UpdateIpRecordUpdateIpRecordRequest$;
(function (UpdateIpRecordUpdateIpRecordRequest$) {
    /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$inboundSchema` instead. */
    UpdateIpRecordUpdateIpRecordRequest$.inboundSchema = UpdateIpRecordUpdateIpRecordRequest$inboundSchema;
    /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$outboundSchema` instead. */
    UpdateIpRecordUpdateIpRecordRequest$.outboundSchema = UpdateIpRecordUpdateIpRecordRequest$outboundSchema;
})(UpdateIpRecordUpdateIpRecordRequest$ || (UpdateIpRecordUpdateIpRecordRequest$ = {}));
export function updateIpRecordUpdateIpRecordRequestToJSON(updateIpRecordUpdateIpRecordRequest) {
    return JSON.stringify(UpdateIpRecordUpdateIpRecordRequest$outboundSchema.parse(updateIpRecordUpdateIpRecordRequest));
}
export function updateIpRecordUpdateIpRecordRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => UpdateIpRecordUpdateIpRecordRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateIpRecordUpdateIpRecordRequest' from JSON`);
}
/** @internal */
export const UpdateIpRecordRequest$inboundSchema = z.object({
    Sid: z.string(),
    RequestBody: z.lazy(() => UpdateIpRecordUpdateIpRecordRequest$inboundSchema)
        .optional(),
}).transform((v) => {
    return remap$(v, {
        "Sid": "sid",
        "RequestBody": "requestBody",
    });
});
/** @internal */
export const UpdateIpRecordRequest$outboundSchema = z.object({
    sid: z.string(),
    requestBody: z.lazy(() => UpdateIpRecordUpdateIpRecordRequest$outboundSchema)
        .optional(),
}).transform((v) => {
    return remap$(v, {
        sid: "Sid",
        requestBody: "RequestBody",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var UpdateIpRecordRequest$;
(function (UpdateIpRecordRequest$) {
    /** @deprecated use `UpdateIpRecordRequest$inboundSchema` instead. */
    UpdateIpRecordRequest$.inboundSchema = UpdateIpRecordRequest$inboundSchema;
    /** @deprecated use `UpdateIpRecordRequest$outboundSchema` instead. */
    UpdateIpRecordRequest$.outboundSchema = UpdateIpRecordRequest$outboundSchema;
})(UpdateIpRecordRequest$ || (UpdateIpRecordRequest$ = {}));
export function updateIpRecordRequestToJSON(updateIpRecordRequest) {
    return JSON.stringify(UpdateIpRecordRequest$outboundSchema.parse(updateIpRecordRequest));
}
export function updateIpRecordRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => UpdateIpRecordRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateIpRecordRequest' from JSON`);
}
/** @internal */
export const UpdateIpRecordResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1IpRecord$inboundSchema,
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const UpdateIpRecordResponse$outboundSchema = z.object({
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
export var UpdateIpRecordResponse$;
(function (UpdateIpRecordResponse$) {
    /** @deprecated use `UpdateIpRecordResponse$inboundSchema` instead. */
    UpdateIpRecordResponse$.inboundSchema = UpdateIpRecordResponse$inboundSchema;
    /** @deprecated use `UpdateIpRecordResponse$outboundSchema` instead. */
    UpdateIpRecordResponse$.outboundSchema = UpdateIpRecordResponse$outboundSchema;
})(UpdateIpRecordResponse$ || (UpdateIpRecordResponse$ = {}));
export function updateIpRecordResponseToJSON(updateIpRecordResponse) {
    return JSON.stringify(UpdateIpRecordResponse$outboundSchema.parse(updateIpRecordResponse));
}
export function updateIpRecordResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => UpdateIpRecordResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateIpRecordResponse' from JSON`);
}
//# sourceMappingURL=updateiprecord.js.map