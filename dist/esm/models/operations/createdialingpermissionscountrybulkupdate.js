/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import * as components from "../components/index.js";
export const CreateDialingPermissionsCountryBulkUpdateServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema = z.object({
    UpdateRequest: z.string(),
}).transform((v) => {
    return remap$(v, {
        "UpdateRequest": "updateRequest",
    });
});
/** @internal */
export const CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema = z.object({
    updateRequest: z.string(),
}).transform((v) => {
    return remap$(v, {
        updateRequest: "UpdateRequest",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$;
(function (CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$) {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$.inboundSchema = CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$.outboundSchema = CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema;
})(CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ || (CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ = {}));
export function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestToJSON(createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest) {
    return JSON.stringify(CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema
        .parse(createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest));
}
export function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema
        .parse(JSON.parse(x)), `Failed to parse 'CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest' from JSON`);
}
/** @internal */
export const CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components
        .VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$inboundSchema,
}).transform((v) => {
    return remap$(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
export const CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components
        .VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$outboundSchema,
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
export var CreateDialingPermissionsCountryBulkUpdateResponse$;
(function (CreateDialingPermissionsCountryBulkUpdateResponse$) {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateResponse$.inboundSchema = CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateResponse$.outboundSchema = CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema;
})(CreateDialingPermissionsCountryBulkUpdateResponse$ || (CreateDialingPermissionsCountryBulkUpdateResponse$ = {}));
export function createDialingPermissionsCountryBulkUpdateResponseToJSON(createDialingPermissionsCountryBulkUpdateResponse) {
    return JSON.stringify(CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema.parse(createDialingPermissionsCountryBulkUpdateResponse));
}
export function createDialingPermissionsCountryBulkUpdateResponseFromJSON(jsonString) {
    return safeParse(jsonString, (x) => CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'CreateDialingPermissionsCountryBulkUpdateResponse' from JSON`);
}
//# sourceMappingURL=createdialingpermissionscountrybulkupdate.js.map