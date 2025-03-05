/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const UpdateIpRecordServerList = [
  "https://voice.twilio.com",
] as const;

export type UpdateIpRecordUpdateIpRecordRequest = {
  /**
   * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
   */
  friendlyName?: string | undefined;
};

export type UpdateIpRecordRequest = {
  /**
   * The Twilio-provided string that uniquely identifies the IP Record resource to update.
   */
  sid: string;
  requestBody?: UpdateIpRecordUpdateIpRecordRequest | undefined;
};

export type UpdateIpRecordResponse = {
  headers: { [k: string]: Array<string> };
  result: components.VoiceV1IpRecord;
};

/** @internal */
export const UpdateIpRecordUpdateIpRecordRequest$inboundSchema: z.ZodType<
  UpdateIpRecordUpdateIpRecordRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  FriendlyName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "FriendlyName": "friendlyName",
  });
});

/** @internal */
export type UpdateIpRecordUpdateIpRecordRequest$Outbound = {
  FriendlyName?: string | undefined;
};

/** @internal */
export const UpdateIpRecordUpdateIpRecordRequest$outboundSchema: z.ZodType<
  UpdateIpRecordUpdateIpRecordRequest$Outbound,
  z.ZodTypeDef,
  UpdateIpRecordUpdateIpRecordRequest
> = z.object({
  friendlyName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    friendlyName: "FriendlyName",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIpRecordUpdateIpRecordRequest$ {
  /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateIpRecordUpdateIpRecordRequest$inboundSchema;
  /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateIpRecordUpdateIpRecordRequest$outboundSchema;
  /** @deprecated use `UpdateIpRecordUpdateIpRecordRequest$Outbound` instead. */
  export type Outbound = UpdateIpRecordUpdateIpRecordRequest$Outbound;
}

export function updateIpRecordUpdateIpRecordRequestToJSON(
  updateIpRecordUpdateIpRecordRequest: UpdateIpRecordUpdateIpRecordRequest,
): string {
  return JSON.stringify(
    UpdateIpRecordUpdateIpRecordRequest$outboundSchema.parse(
      updateIpRecordUpdateIpRecordRequest,
    ),
  );
}

export function updateIpRecordUpdateIpRecordRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIpRecordUpdateIpRecordRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateIpRecordUpdateIpRecordRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIpRecordUpdateIpRecordRequest' from JSON`,
  );
}

/** @internal */
export const UpdateIpRecordRequest$inboundSchema: z.ZodType<
  UpdateIpRecordRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  Sid: z.string(),
  RequestBody: z.lazy(() => UpdateIpRecordUpdateIpRecordRequest$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "Sid": "sid",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateIpRecordRequest$Outbound = {
  Sid: string;
  RequestBody?: UpdateIpRecordUpdateIpRecordRequest$Outbound | undefined;
};

/** @internal */
export const UpdateIpRecordRequest$outboundSchema: z.ZodType<
  UpdateIpRecordRequest$Outbound,
  z.ZodTypeDef,
  UpdateIpRecordRequest
> = z.object({
  sid: z.string(),
  requestBody: z.lazy(() => UpdateIpRecordUpdateIpRecordRequest$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    sid: "Sid",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIpRecordRequest$ {
  /** @deprecated use `UpdateIpRecordRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateIpRecordRequest$inboundSchema;
  /** @deprecated use `UpdateIpRecordRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateIpRecordRequest$outboundSchema;
  /** @deprecated use `UpdateIpRecordRequest$Outbound` instead. */
  export type Outbound = UpdateIpRecordRequest$Outbound;
}

export function updateIpRecordRequestToJSON(
  updateIpRecordRequest: UpdateIpRecordRequest,
): string {
  return JSON.stringify(
    UpdateIpRecordRequest$outboundSchema.parse(updateIpRecordRequest),
  );
}

export function updateIpRecordRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIpRecordRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIpRecordRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIpRecordRequest' from JSON`,
  );
}

/** @internal */
export const UpdateIpRecordResponse$inboundSchema: z.ZodType<
  UpdateIpRecordResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.VoiceV1IpRecord$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdateIpRecordResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.VoiceV1IpRecord$Outbound;
};

/** @internal */
export const UpdateIpRecordResponse$outboundSchema: z.ZodType<
  UpdateIpRecordResponse$Outbound,
  z.ZodTypeDef,
  UpdateIpRecordResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.VoiceV1IpRecord$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    headers: "Headers",
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateIpRecordResponse$ {
  /** @deprecated use `UpdateIpRecordResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateIpRecordResponse$inboundSchema;
  /** @deprecated use `UpdateIpRecordResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateIpRecordResponse$outboundSchema;
  /** @deprecated use `UpdateIpRecordResponse$Outbound` instead. */
  export type Outbound = UpdateIpRecordResponse$Outbound;
}

export function updateIpRecordResponseToJSON(
  updateIpRecordResponse: UpdateIpRecordResponse,
): string {
  return JSON.stringify(
    UpdateIpRecordResponse$outboundSchema.parse(updateIpRecordResponse),
  );
}

export function updateIpRecordResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateIpRecordResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateIpRecordResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateIpRecordResponse' from JSON`,
  );
}
