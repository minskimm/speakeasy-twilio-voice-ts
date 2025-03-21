/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { voiceV1SourceIpMappingDeleteSourceIpMapping } from "../../funcs/voiceV1SourceIpMappingDeleteSourceIpMapping.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DeleteSourceIpMappingRequest$inboundSchema,
};

export const tool$voiceV1SourceIpMappingDeleteSourceIpMapping: ToolDefinition<
  typeof args
> = {
  name: "voice-v1-source-ip-mapping_delete-source-ip-mapping",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await voiceV1SourceIpMappingDeleteSourceIpMapping(
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

    return formatResult(void 0, apiCall);
  },
};
