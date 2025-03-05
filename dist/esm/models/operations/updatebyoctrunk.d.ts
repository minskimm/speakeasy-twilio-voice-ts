import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateByocTrunkServerList: readonly ["https://voice.twilio.com"];
/**
 * The HTTP method we should use to call `voice_url`
 */
export declare const UpdateByocTrunkVoiceMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we should use to call `voice_url`
 */
export type UpdateByocTrunkVoiceMethod = ClosedEnum<typeof UpdateByocTrunkVoiceMethod>;
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare const UpdateByocTrunkVoiceFallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export type UpdateByocTrunkVoiceFallbackMethod = ClosedEnum<typeof UpdateByocTrunkVoiceFallbackMethod>;
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export declare const UpdateByocTrunkStatusCallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export type UpdateByocTrunkStatusCallbackMethod = ClosedEnum<typeof UpdateByocTrunkStatusCallbackMethod>;
export type UpdateByocTrunkUpdateByocTrunkRequest = {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string | undefined;
    /**
     * The URL we should call when the BYOC Trunk receives a call.
     */
    voiceUrl?: string | undefined;
    /**
     * The HTTP method we should use to call `voice_url`
     */
    voiceMethod?: UpdateByocTrunkVoiceMethod | undefined;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`.
     */
    voiceFallbackUrl?: string | undefined;
    /**
     * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: UpdateByocTrunkVoiceFallbackMethod | undefined;
    /**
     * The URL that we should call to pass status parameters (such as call ended) to your application.
     */
    statusCallbackUrl?: string | undefined;
    /**
     * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: UpdateByocTrunkStatusCallbackMethod | undefined;
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
export type UpdateByocTrunkRequest = {
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to update.
     */
    sid: string;
    requestBody?: UpdateByocTrunkUpdateByocTrunkRequest | undefined;
};
export type UpdateByocTrunkResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ByocTrunk;
};
/** @internal */
export declare const UpdateByocTrunkVoiceMethod$inboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkVoiceMethod>;
/** @internal */
export declare const UpdateByocTrunkVoiceMethod$outboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkVoiceMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkVoiceMethod$ {
    /** @deprecated use `UpdateByocTrunkVoiceMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `UpdateByocTrunkVoiceMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const UpdateByocTrunkVoiceFallbackMethod$inboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkVoiceFallbackMethod>;
/** @internal */
export declare const UpdateByocTrunkVoiceFallbackMethod$outboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkVoiceFallbackMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkVoiceFallbackMethod$ {
    /** @deprecated use `UpdateByocTrunkVoiceFallbackMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `UpdateByocTrunkVoiceFallbackMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const UpdateByocTrunkStatusCallbackMethod$inboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkStatusCallbackMethod>;
/** @internal */
export declare const UpdateByocTrunkStatusCallbackMethod$outboundSchema: z.ZodNativeEnum<typeof UpdateByocTrunkStatusCallbackMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkStatusCallbackMethod$ {
    /** @deprecated use `UpdateByocTrunkStatusCallbackMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `UpdateByocTrunkStatusCallbackMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const UpdateByocTrunkUpdateByocTrunkRequest$inboundSchema: z.ZodType<UpdateByocTrunkUpdateByocTrunkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateByocTrunkUpdateByocTrunkRequest$Outbound = {
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
export declare const UpdateByocTrunkUpdateByocTrunkRequest$outboundSchema: z.ZodType<UpdateByocTrunkUpdateByocTrunkRequest$Outbound, z.ZodTypeDef, UpdateByocTrunkUpdateByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkUpdateByocTrunkRequest$ {
    /** @deprecated use `UpdateByocTrunkUpdateByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateByocTrunkUpdateByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateByocTrunkUpdateByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateByocTrunkUpdateByocTrunkRequest$Outbound, z.ZodTypeDef, UpdateByocTrunkUpdateByocTrunkRequest>;
    /** @deprecated use `UpdateByocTrunkUpdateByocTrunkRequest$Outbound` instead. */
    type Outbound = UpdateByocTrunkUpdateByocTrunkRequest$Outbound;
}
export declare function updateByocTrunkUpdateByocTrunkRequestToJSON(updateByocTrunkUpdateByocTrunkRequest: UpdateByocTrunkUpdateByocTrunkRequest): string;
export declare function updateByocTrunkUpdateByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<UpdateByocTrunkUpdateByocTrunkRequest, SDKValidationError>;
/** @internal */
export declare const UpdateByocTrunkRequest$inboundSchema: z.ZodType<UpdateByocTrunkRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateByocTrunkRequest$Outbound = {
    Sid: string;
    RequestBody?: UpdateByocTrunkUpdateByocTrunkRequest$Outbound | undefined;
};
/** @internal */
export declare const UpdateByocTrunkRequest$outboundSchema: z.ZodType<UpdateByocTrunkRequest$Outbound, z.ZodTypeDef, UpdateByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkRequest$ {
    /** @deprecated use `UpdateByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateByocTrunkRequest$Outbound, z.ZodTypeDef, UpdateByocTrunkRequest>;
    /** @deprecated use `UpdateByocTrunkRequest$Outbound` instead. */
    type Outbound = UpdateByocTrunkRequest$Outbound;
}
export declare function updateByocTrunkRequestToJSON(updateByocTrunkRequest: UpdateByocTrunkRequest): string;
export declare function updateByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<UpdateByocTrunkRequest, SDKValidationError>;
/** @internal */
export declare const UpdateByocTrunkResponse$inboundSchema: z.ZodType<UpdateByocTrunkResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateByocTrunkResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ByocTrunk$Outbound;
};
/** @internal */
export declare const UpdateByocTrunkResponse$outboundSchema: z.ZodType<UpdateByocTrunkResponse$Outbound, z.ZodTypeDef, UpdateByocTrunkResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateByocTrunkResponse$ {
    /** @deprecated use `UpdateByocTrunkResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateByocTrunkResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateByocTrunkResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateByocTrunkResponse$Outbound, z.ZodTypeDef, UpdateByocTrunkResponse>;
    /** @deprecated use `UpdateByocTrunkResponse$Outbound` instead. */
    type Outbound = UpdateByocTrunkResponse$Outbound;
}
export declare function updateByocTrunkResponseToJSON(updateByocTrunkResponse: UpdateByocTrunkResponse): string;
export declare function updateByocTrunkResponseFromJSON(jsonString: string): SafeParseResult<UpdateByocTrunkResponse, SDKValidationError>;
//# sourceMappingURL=updatebyoctrunk.d.ts.map