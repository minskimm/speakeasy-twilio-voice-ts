/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { voiceV1ByocTrunkListByocTrunk } from "../../funcs/voiceV1ByocTrunkListByocTrunk.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListByocTrunkRequest$inboundSchema,
};

export const tool$voiceV1ByocTrunkListByocTrunk: ToolDefinition<typeof args> = {
  name: "voice-v1-byoc-trunk_list-byoc-trunk",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await voiceV1ByocTrunkListByocTrunk(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

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
