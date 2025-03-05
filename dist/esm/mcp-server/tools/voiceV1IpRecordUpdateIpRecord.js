/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1IpRecordUpdateIpRecord } from "../../funcs/voiceV1IpRecordUpdateIpRecord.js";
import * as operations from "../../models/operations/index.js";
import { formatResult } from "../tools.js";
const args = {
    request: operations.UpdateIpRecordRequest$inboundSchema,
};
export const tool$voiceV1IpRecordUpdateIpRecord = {
    name: "voice-v1-ip-record_update-ip-record",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await voiceV1IpRecordUpdateIpRecord(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
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
//# sourceMappingURL=voiceV1IpRecordUpdateIpRecord.js.map