/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CreateByocTrunkServerList = [
  "https://voice.twilio.com",
] as const;

/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
export const VoiceMethod = {
  Get: "GET",
  Post: "POST",
} as const;
/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
export type VoiceMethod = ClosedEnum<typeof VoiceMethod>;

/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export const VoiceFallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export type VoiceFallbackMethod = ClosedEnum<typeof VoiceFallbackMethod>;

/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export const StatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export type StatusCallbackMethod = ClosedEnum<typeof StatusCallbackMethod>;

export type CreateByocTrunkCreateByocTrunkRequest = {
  /**
   * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
   */
  friendlyName?: string | undefined;
  /**
   * The URL we should call when the BYOC Trunk receives a call.
   */
  voiceUrl?: string | undefined;
  /**
   * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
   */
  voiceMethod?: VoiceMethod | undefined;
  /**
   * The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`.
   */
  voiceFallbackUrl?: string | undefined;
  /**
   * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
   */
  voiceFallbackMethod?: VoiceFallbackMethod | undefined;
  /**
   * The URL that we should call to pass status parameters (such as call ended) to your application.
   */
  statusCallbackUrl?: string | undefined;
  /**
   * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
   */
  statusCallbackMethod?: StatusCallbackMethod | undefined;
  /**
   * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
   */
  cnamLookupEnabled?: boolean | undefined;
  /**
   * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
   */
  connectionPolicySid?: string | undefined;
  /**
   * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
   */
  fromDomainSid?: string | undefined;
};

export type CreateByocTrunkResponse = {
  headers: { [k: string]: Array<string> };
  result: components.VoiceV1ByocTrunk;
};

/** @internal */
export const VoiceMethod$inboundSchema: z.ZodNativeEnum<typeof VoiceMethod> = z
  .nativeEnum(VoiceMethod);

/** @internal */
export const VoiceMethod$outboundSchema: z.ZodNativeEnum<typeof VoiceMethod> =
  VoiceMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoiceMethod$ {
  /** @deprecated use `VoiceMethod$inboundSchema` instead. */
  export const inboundSchema = VoiceMethod$inboundSchema;
  /** @deprecated use `VoiceMethod$outboundSchema` instead. */
  export const outboundSchema = VoiceMethod$outboundSchema;
}

/** @internal */
export const VoiceFallbackMethod$inboundSchema: z.ZodNativeEnum<
  typeof VoiceFallbackMethod
> = z.nativeEnum(VoiceFallbackMethod);

/** @internal */
export const VoiceFallbackMethod$outboundSchema: z.ZodNativeEnum<
  typeof VoiceFallbackMethod
> = VoiceFallbackMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoiceFallbackMethod$ {
  /** @deprecated use `VoiceFallbackMethod$inboundSchema` instead. */
  export const inboundSchema = VoiceFallbackMethod$inboundSchema;
  /** @deprecated use `VoiceFallbackMethod$outboundSchema` instead. */
  export const outboundSchema = VoiceFallbackMethod$outboundSchema;
}

/** @internal */
export const StatusCallbackMethod$inboundSchema: z.ZodNativeEnum<
  typeof StatusCallbackMethod
> = z.nativeEnum(StatusCallbackMethod);

/** @internal */
export const StatusCallbackMethod$outboundSchema: z.ZodNativeEnum<
  typeof StatusCallbackMethod
> = StatusCallbackMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusCallbackMethod$ {
  /** @deprecated use `StatusCallbackMethod$inboundSchema` instead. */
  export const inboundSchema = StatusCallbackMethod$inboundSchema;
  /** @deprecated use `StatusCallbackMethod$outboundSchema` instead. */
  export const outboundSchema = StatusCallbackMethod$outboundSchema;
}

/** @internal */
export const CreateByocTrunkCreateByocTrunkRequest$inboundSchema: z.ZodType<
  CreateByocTrunkCreateByocTrunkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  FriendlyName: z.string().optional(),
  VoiceUrl: z.string().optional(),
  VoiceMethod: VoiceMethod$inboundSchema.optional(),
  VoiceFallbackUrl: z.string().optional(),
  VoiceFallbackMethod: VoiceFallbackMethod$inboundSchema.optional(),
  StatusCallbackUrl: z.string().optional(),
  StatusCallbackMethod: StatusCallbackMethod$inboundSchema.optional(),
  CnamLookupEnabled: z.boolean().optional(),
  ConnectionPolicySid: z.string().optional(),
  FromDomainSid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "FriendlyName": "friendlyName",
    "VoiceUrl": "voiceUrl",
    "VoiceMethod": "voiceMethod",
    "VoiceFallbackUrl": "voiceFallbackUrl",
    "VoiceFallbackMethod": "voiceFallbackMethod",
    "StatusCallbackUrl": "statusCallbackUrl",
    "StatusCallbackMethod": "statusCallbackMethod",
    "CnamLookupEnabled": "cnamLookupEnabled",
    "ConnectionPolicySid": "connectionPolicySid",
    "FromDomainSid": "fromDomainSid",
  });
});

/** @internal */
export type CreateByocTrunkCreateByocTrunkRequest$Outbound = {
  FriendlyName?: string | undefined;
  VoiceUrl?: string | undefined;
  VoiceMethod?: string | undefined;
  VoiceFallbackUrl?: string | undefined;
  VoiceFallbackMethod?: string | undefined;
  StatusCallbackUrl?: string | undefined;
  StatusCallbackMethod?: string | undefined;
  CnamLookupEnabled?: boolean | undefined;
  ConnectionPolicySid?: string | undefined;
  FromDomainSid?: string | undefined;
};

/** @internal */
export const CreateByocTrunkCreateByocTrunkRequest$outboundSchema: z.ZodType<
  CreateByocTrunkCreateByocTrunkRequest$Outbound,
  z.ZodTypeDef,
  CreateByocTrunkCreateByocTrunkRequest
> = z.object({
  friendlyName: z.string().optional(),
  voiceUrl: z.string().optional(),
  voiceMethod: VoiceMethod$outboundSchema.optional(),
  voiceFallbackUrl: z.string().optional(),
  voiceFallbackMethod: VoiceFallbackMethod$outboundSchema.optional(),
  statusCallbackUrl: z.string().optional(),
  statusCallbackMethod: StatusCallbackMethod$outboundSchema.optional(),
  cnamLookupEnabled: z.boolean().optional(),
  connectionPolicySid: z.string().optional(),
  fromDomainSid: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    friendlyName: "FriendlyName",
    voiceUrl: "VoiceUrl",
    voiceMethod: "VoiceMethod",
    voiceFallbackUrl: "VoiceFallbackUrl",
    voiceFallbackMethod: "VoiceFallbackMethod",
    statusCallbackUrl: "StatusCallbackUrl",
    statusCallbackMethod: "StatusCallbackMethod",
    cnamLookupEnabled: "CnamLookupEnabled",
    connectionPolicySid: "ConnectionPolicySid",
    fromDomainSid: "FromDomainSid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateByocTrunkCreateByocTrunkRequest$ {
  /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateByocTrunkCreateByocTrunkRequest$inboundSchema;
  /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateByocTrunkCreateByocTrunkRequest$outboundSchema;
  /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$Outbound` instead. */
  export type Outbound = CreateByocTrunkCreateByocTrunkRequest$Outbound;
}

export function createByocTrunkCreateByocTrunkRequestToJSON(
  createByocTrunkCreateByocTrunkRequest: CreateByocTrunkCreateByocTrunkRequest,
): string {
  return JSON.stringify(
    CreateByocTrunkCreateByocTrunkRequest$outboundSchema.parse(
      createByocTrunkCreateByocTrunkRequest,
    ),
  );
}

export function createByocTrunkCreateByocTrunkRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateByocTrunkCreateByocTrunkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateByocTrunkCreateByocTrunkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateByocTrunkCreateByocTrunkRequest' from JSON`,
  );
}

/** @internal */
export const CreateByocTrunkResponse$inboundSchema: z.ZodType<
  CreateByocTrunkResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.VoiceV1ByocTrunk$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type CreateByocTrunkResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.VoiceV1ByocTrunk$Outbound;
};

/** @internal */
export const CreateByocTrunkResponse$outboundSchema: z.ZodType<
  CreateByocTrunkResponse$Outbound,
  z.ZodTypeDef,
  CreateByocTrunkResponse
> = z.object({
  headers: z.record(z.array(z.string())),
  result: components.VoiceV1ByocTrunk$outboundSchema,
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
export namespace CreateByocTrunkResponse$ {
  /** @deprecated use `CreateByocTrunkResponse$inboundSchema` instead. */
  export const inboundSchema = CreateByocTrunkResponse$inboundSchema;
  /** @deprecated use `CreateByocTrunkResponse$outboundSchema` instead. */
  export const outboundSchema = CreateByocTrunkResponse$outboundSchema;
  /** @deprecated use `CreateByocTrunkResponse$Outbound` instead. */
  export type Outbound = CreateByocTrunkResponse$Outbound;
}

export function createByocTrunkResponseToJSON(
  createByocTrunkResponse: CreateByocTrunkResponse,
): string {
  return JSON.stringify(
    CreateByocTrunkResponse$outboundSchema.parse(createByocTrunkResponse),
  );
}

export function createByocTrunkResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateByocTrunkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateByocTrunkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateByocTrunkResponse' from JSON`,
  );
}
