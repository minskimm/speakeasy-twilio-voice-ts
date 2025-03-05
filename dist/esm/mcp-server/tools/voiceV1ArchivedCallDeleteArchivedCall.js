/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1ArchivedCallDeleteArchivedCall } from "../../funcs/voiceV1ArchivedCallDeleteArchivedCall.js";
import * as operations from "../../models/operations/index.js";
import { formatResult } from "../tools.js";
const args = {
    request: operations.DeleteArchivedCallRequest$inboundSchema,
};
export const tool$voiceV1ArchivedCallDeleteArchivedCall = {
    name: "voice-v1-archived-call_delete-archived-call",
    description: `Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.`,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await voiceV1ArchivedCallDeleteArchivedCall(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
        if (!result.ok) {
            return {
                content: [{ type: "text", text: result.error.message }],
                isError: true,
            };
        }
        return formatResult(void 0, apiCall);
    },
};
//# sourceMappingURL=voiceV1ArchivedCallDeleteArchivedCall.js.map