/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1IpRecordCreateIpRecord } from "../../funcs/voiceV1IpRecordCreateIpRecord.js";
import * as operations from "../../models/operations/index.js";
import { formatResult } from "../tools.js";
const args = {
    request: operations.CreateIpRecordCreateIpRecordRequest$inboundSchema
        .optional(),
};
export const tool$voiceV1IpRecordCreateIpRecord = {
    name: "voice-v1-ip-record_create-ip-record",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await voiceV1IpRecordCreateIpRecord(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
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
//# sourceMappingURL=voiceV1IpRecordCreateIpRecord.js.map