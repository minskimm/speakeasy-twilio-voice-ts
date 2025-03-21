/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget } from "../../funcs/voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateConnectionPolicyTargetRequest$inboundSchema,
};

export const tool$voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget:
  ToolDefinition<typeof args> = {
    name: "voice-v1-connection-policy-target_update-connection-policy-target",
    description: ``,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget(
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
