/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const UpdateConnectionPolicyTargetServerList = [
  "https://voice.twilio.com",
] as const;

export type UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest = {
  /**
   * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
   */
  friendlyName?: string | undefined;
  /**
   * The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
   */
  target?: string | undefined;
  /**
   * The relative importance of the target. Can be an integer from 0 to 65535, inclusive. The lowest number represents the most important target.
   */
  priority?: number | undefined;
  /**
   * The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive. Targets with higher values receive more load than those with lower ones with the same priority.
   */
  weight?: number | undefined;
  /**
   * Whether the Target is enabled.
   */
  enabled?: boolean | undefined;
};

export type UpdateConnectionPolicyTargetRequest = {
  /**
   * The SID of the Connection Policy that owns the Target.
   */
  connectionPolicySid: string;
  /**
   * The unique string that we created to identify the Target resource to update.
   */
  sid: string;
  requestBody?:
    | UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest
    | undefined;
};

export type UpdateConnectionPolicyTargetResponse = {
  headers: { [k: string]: Array<string> };
  result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget;
};

/** @internal */
export const UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema:
  z.ZodType<
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    FriendlyName: z.string().optional(),
    Target: z.string().optional(),
    Priority: z.number().int().optional(),
    Weight: z.number().int().optional(),
    Enabled: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      "FriendlyName": "friendlyName",
      "Target": "target",
      "Priority": "priority",
      "Weight": "weight",
      "Enabled": "enabled",
    });
  });

/** @internal */
export type UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound =
  {
    FriendlyName?: string | undefined;
    Target?: string | undefined;
    Priority?: number | undefined;
    Weight?: number | undefined;
    Enabled?: boolean | undefined;
  };

/** @internal */
export const UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema:
  z.ZodType<
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound,
    z.ZodTypeDef,
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest
  > = z.object({
    friendlyName: z.string().optional(),
    target: z.string().optional(),
    priority: z.number().int().optional(),
    weight: z.number().int().optional(),
    enabled: z.boolean().optional(),
  }).transform((v) => {
    return remap$(v, {
      friendlyName: "FriendlyName",
      target: "Target",
      priority: "Priority",
      weight: "Weight",
      enabled: "Enabled",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$ {
  /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound` instead. */
  export type Outbound =
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound;
}

export function updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequestToJSON(
  updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest:
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest,
): string {
  return JSON.stringify(
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema
      .parse(updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest),
  );
}

export function updateConnectionPolicyTargetUpdateConnectionPolicyTargetRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest' from JSON`,
  );
}

/** @internal */
export const UpdateConnectionPolicyTargetRequest$inboundSchema: z.ZodType<
  UpdateConnectionPolicyTargetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ConnectionPolicySid: z.string(),
  Sid: z.string(),
  RequestBody: z.lazy(() =>
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "ConnectionPolicySid": "connectionPolicySid",
    "Sid": "sid",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateConnectionPolicyTargetRequest$Outbound = {
  ConnectionPolicySid: string;
  Sid: string;
  RequestBody?:
    | UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$Outbound
    | undefined;
};

/** @internal */
export const UpdateConnectionPolicyTargetRequest$outboundSchema: z.ZodType<
  UpdateConnectionPolicyTargetRequest$Outbound,
  z.ZodTypeDef,
  UpdateConnectionPolicyTargetRequest
> = z.object({
  connectionPolicySid: z.string(),
  sid: z.string(),
  requestBody: z.lazy(() =>
    UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    connectionPolicySid: "ConnectionPolicySid",
    sid: "Sid",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConnectionPolicyTargetRequest$ {
  /** @deprecated use `UpdateConnectionPolicyTargetRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateConnectionPolicyTargetRequest$inboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateConnectionPolicyTargetRequest$outboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetRequest$Outbound` instead. */
  export type Outbound = UpdateConnectionPolicyTargetRequest$Outbound;
}

export function updateConnectionPolicyTargetRequestToJSON(
  updateConnectionPolicyTargetRequest: UpdateConnectionPolicyTargetRequest,
): string {
  return JSON.stringify(
    UpdateConnectionPolicyTargetRequest$outboundSchema.parse(
      updateConnectionPolicyTargetRequest,
    ),
  );
}

export function updateConnectionPolicyTargetRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConnectionPolicyTargetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateConnectionPolicyTargetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConnectionPolicyTargetRequest' from JSON`,
  );
}

/** @internal */
export const UpdateConnectionPolicyTargetResponse$inboundSchema: z.ZodType<
  UpdateConnectionPolicyTargetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result:
    components.VoiceV1ConnectionPolicyConnectionPolicyTarget$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type UpdateConnectionPolicyTargetResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound;
};

/** @internal */
export const UpdateConnectionPolicyTargetResponse$outboundSchema: z.ZodType<
  UpdateConnectionPolicyTargetResponse$Outbound,
  z.ZodTypeDef,
  UpdateConnectionPolicyTargetResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result:
    components.VoiceV1ConnectionPolicyConnectionPolicyTarget$outboundSchema,
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
export namespace UpdateConnectionPolicyTargetResponse$ {
  /** @deprecated use `UpdateConnectionPolicyTargetResponse$inboundSchema` instead. */
  export const inboundSchema =
    UpdateConnectionPolicyTargetResponse$inboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetResponse$outboundSchema` instead. */
  export const outboundSchema =
    UpdateConnectionPolicyTargetResponse$outboundSchema;
  /** @deprecated use `UpdateConnectionPolicyTargetResponse$Outbound` instead. */
  export type Outbound = UpdateConnectionPolicyTargetResponse$Outbound;
}

export function updateConnectionPolicyTargetResponseToJSON(
  updateConnectionPolicyTargetResponse: UpdateConnectionPolicyTargetResponse,
): string {
  return JSON.stringify(
    UpdateConnectionPolicyTargetResponse$outboundSchema.parse(
      updateConnectionPolicyTargetResponse,
    ),
  );
}

export function updateConnectionPolicyTargetResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConnectionPolicyTargetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateConnectionPolicyTargetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConnectionPolicyTargetResponse' from JSON`,
  );
}
