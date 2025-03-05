import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateByocTrunkServerList: readonly ["https://voice.twilio.com"];
/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
export declare const VoiceMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
export type VoiceMethod = ClosedEnum<typeof VoiceMethod>;
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare const VoiceFallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export type VoiceFallbackMethod = ClosedEnum<typeof VoiceFallbackMethod>;
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export declare const StatusCallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
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
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1ByocTrunk;
};
/** @internal */
export declare const VoiceMethod$inboundSchema: z.ZodNativeEnum<typeof VoiceMethod>;
/** @internal */
export declare const VoiceMethod$outboundSchema: z.ZodNativeEnum<typeof VoiceMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceMethod$ {
    /** @deprecated use `VoiceMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `VoiceMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const VoiceFallbackMethod$inboundSchema: z.ZodNativeEnum<typeof VoiceFallbackMethod>;
/** @internal */
export declare const VoiceFallbackMethod$outboundSchema: z.ZodNativeEnum<typeof VoiceFallbackMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceFallbackMethod$ {
    /** @deprecated use `VoiceFallbackMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `VoiceFallbackMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const StatusCallbackMethod$inboundSchema: z.ZodNativeEnum<typeof StatusCallbackMethod>;
/** @internal */
export declare const StatusCallbackMethod$outboundSchema: z.ZodNativeEnum<typeof StatusCallbackMethod>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StatusCallbackMethod$ {
    /** @deprecated use `StatusCallbackMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
    /** @deprecated use `StatusCallbackMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<{
        readonly Get: "GET";
        readonly Post: "POST";
    }>;
}
/** @internal */
export declare const CreateByocTrunkCreateByocTrunkRequest$inboundSchema: z.ZodType<CreateByocTrunkCreateByocTrunkRequest, z.ZodTypeDef, unknown>;
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
export declare const CreateByocTrunkCreateByocTrunkRequest$outboundSchema: z.ZodType<CreateByocTrunkCreateByocTrunkRequest$Outbound, z.ZodTypeDef, CreateByocTrunkCreateByocTrunkRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateByocTrunkCreateByocTrunkRequest$ {
    /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateByocTrunkCreateByocTrunkRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateByocTrunkCreateByocTrunkRequest$Outbound, z.ZodTypeDef, CreateByocTrunkCreateByocTrunkRequest>;
    /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$Outbound` instead. */
    type Outbound = CreateByocTrunkCreateByocTrunkRequest$Outbound;
}
export declare function createByocTrunkCreateByocTrunkRequestToJSON(createByocTrunkCreateByocTrunkRequest: CreateByocTrunkCreateByocTrunkRequest): string;
export declare function createByocTrunkCreateByocTrunkRequestFromJSON(jsonString: string): SafeParseResult<CreateByocTrunkCreateByocTrunkRequest, SDKValidationError>;
/** @internal */
export declare const CreateByocTrunkResponse$inboundSchema: z.ZodType<CreateByocTrunkResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateByocTrunkResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1ByocTrunk$Outbound;
};
/** @internal */
export declare const CreateByocTrunkResponse$outboundSchema: z.ZodType<CreateByocTrunkResponse$Outbound, z.ZodTypeDef, CreateByocTrunkResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateByocTrunkResponse$ {
    /** @deprecated use `CreateByocTrunkResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateByocTrunkResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateByocTrunkResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateByocTrunkResponse$Outbound, z.ZodTypeDef, CreateByocTrunkResponse>;
    /** @deprecated use `CreateByocTrunkResponse$Outbound` instead. */
    type Outbound = CreateByocTrunkResponse$Outbound;
}
export declare function createByocTrunkResponseToJSON(createByocTrunkResponse: CreateByocTrunkResponse): string;
export declare function createByocTrunkResponseFromJSON(jsonString: string): SafeParseResult<CreateByocTrunkResponse, SDKValidationError>;
//# sourceMappingURL=createbyoctrunk.d.ts.map