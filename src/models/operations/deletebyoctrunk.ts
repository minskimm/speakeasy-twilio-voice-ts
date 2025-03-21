/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DeleteByocTrunkServerList = [
  "https://voice.twilio.com",
] as const;

export type DeleteByocTrunkRequest = {
  /**
   * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to delete.
   */
  sid: string;
};

/** @internal */
export const DeleteByocTrunkRequest$inboundSchema: z.ZodType<
  DeleteByocTrunkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  Sid: z.string(),
}).transform((v) => {
  return remap$(v, {
    "Sid": "sid",
  });
});

/** @internal */
export type DeleteByocTrunkRequest$Outbound = {
  Sid: string;
};

/** @internal */
export const DeleteByocTrunkRequest$outboundSchema: z.ZodType<
  DeleteByocTrunkRequest$Outbound,
  z.ZodTypeDef,
  DeleteByocTrunkRequest
> = z.object({
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
export namespace DeleteByocTrunkRequest$ {
  /** @deprecated use `DeleteByocTrunkRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteByocTrunkRequest$inboundSchema;
  /** @deprecated use `DeleteByocTrunkRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteByocTrunkRequest$outboundSchema;
  /** @deprecated use `DeleteByocTrunkRequest$Outbound` instead. */
  export type Outbound = DeleteByocTrunkRequest$Outbound;
}

export function deleteByocTrunkRequestToJSON(
  deleteByocTrunkRequest: DeleteByocTrunkRequest,
): string {
  return JSON.stringify(
    DeleteByocTrunkRequest$outboundSchema.parse(deleteByocTrunkRequest),
  );
}

export function deleteByocTrunkRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteByocTrunkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteByocTrunkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteByocTrunkRequest' from JSON`,
  );
}
