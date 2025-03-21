/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
export const DeleteConnectionPolicyTargetServerList = [
    "https://voice.twilio.com",
];
/** @internal */
export const DeleteConnectionPolicyTargetRequest$inboundSchema = z.object({
    ConnectionPolicySid: z.string(),
    Sid: z.string(),
}).transform((v) => {
    return remap$(v, {
        "ConnectionPolicySid": "connectionPolicySid",
        "Sid": "sid",
    });
});
/** @internal */
export const DeleteConnectionPolicyTargetRequest$outboundSchema = z.object({
    connectionPolicySid: z.string(),
    sid: z.string(),
}).transform((v) => {
    return remap$(v, {
        connectionPolicySid: "ConnectionPolicySid",
        sid: "Sid",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export var DeleteConnectionPolicyTargetRequest$;
(function (DeleteConnectionPolicyTargetRequest$) {
    /** @deprecated use `DeleteConnectionPolicyTargetRequest$inboundSchema` instead. */
    DeleteConnectionPolicyTargetRequest$.inboundSchema = DeleteConnectionPolicyTargetRequest$inboundSchema;
    /** @deprecated use `DeleteConnectionPolicyTargetRequest$outboundSchema` instead. */
    DeleteConnectionPolicyTargetRequest$.outboundSchema = DeleteConnectionPolicyTargetRequest$outboundSchema;
})(DeleteConnectionPolicyTargetRequest$ || (DeleteConnectionPolicyTargetRequest$ = {}));
export function deleteConnectionPolicyTargetRequestToJSON(deleteConnectionPolicyTargetRequest) {
    return JSON.stringify(DeleteConnectionPolicyTargetRequest$outboundSchema.parse(deleteConnectionPolicyTargetRequest));
}
export function deleteConnectionPolicyTargetRequestFromJSON(jsonString) {
    return safeParse(jsonString, (x) => DeleteConnectionPolicyTargetRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'DeleteConnectionPolicyTargetRequest' from JSON`);
}
//# sourceMappingURL=deleteconnectionpolicytarget.js.map