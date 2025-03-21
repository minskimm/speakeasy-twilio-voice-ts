/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate } from "../../funcs/voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult } from "../tools.js";
const args = {
    request: operations
        .CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema
        .optional(),
};
export const tool$voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate = {
    name: "voice-v1-bulk-country-update_create-dialing-permissions-country-bulk-update",
    description: `Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)`,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
        if (!result.ok) {
            return {
                content: [{ type: "text", text: result.error.message }],
                isError: true,
            };
        }
        const value = result.value.result;
        return formatResult(value, apiCall);
    },
};
//# sourceMappingURL=voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js.map