/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
export const DeleteByocTrunkServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const DeleteByocTrunkRequest$inboundSchema = z.object({
    Sid: z.string(),
}).transform((v) => {
    return remap$(v, {
        "Sid": "sid",
    });
});
/** @internal */
export const DeleteByocTrunkRequest$outboundSchema = z.object({
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
export var DeleteByocTrunkRequest$;
(function (DeleteByocTrunkRequest$) {
    /** @deprecated use `DeleteByocTrunkRequest$inboundSchema` instead. */
    DeleteByocTrunkRequest$.inboundSchema = DeleteByocTrunkRequest$inboundSchema;
    /** @deprecated use `DeleteByocTrunkRequest$outboundSchema` instead. */
    DeleteByocTrunkRequest$.outboundSchema = DeleteByocTrunkRequest$outboundSchema;
})(DeleteByocTrunkRequest$ || (DeleteByocTrunkRequest$ = {}));
export function deleteByocTrunkRequestToJSON(deleteByocTrunkRequest) {
    return JSON.stringify(DeleteByocTrunkRequest$outboundSchema.parse(deleteByocTrunkRequest));
}
export function deleteByocTrunkRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => DeleteByocTrunkRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'DeleteByocTrunkRequest' from JSON`);
}
//# sourceMappingURL=deletebyoctrunk.js.map