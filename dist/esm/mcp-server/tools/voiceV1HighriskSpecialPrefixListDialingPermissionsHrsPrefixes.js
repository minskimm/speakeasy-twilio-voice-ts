/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes } from "../../funcs/voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.js";
import * as operations from "../../models/operations/index.js";
import { formatResult } from "../tools.js";
const args = {
    request: operations.ListDialingPermissionsHrsPrefixesRequest$inboundSchema,
};
export const tool$voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes = {
    name: "voice-v1-highrisk-special-prefix_list-dialing-permissions-hrs-prefixes",
    description: `Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)`,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
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
//# sourceMappingURL=voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.js.map