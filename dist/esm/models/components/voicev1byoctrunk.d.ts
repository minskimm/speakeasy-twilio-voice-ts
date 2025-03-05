import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
 */
export declare const VoiceMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
 */
export type VoiceMethod = ClosedEnum<typeof VoiceMethod>;
/**
 * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare const VoiceFallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export type VoiceFallbackMethod = ClosedEnum<typeof VoiceFallbackMethod>;
/**
 * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
 */
export declare const StatusCallbackMethod: {
    readonly Get: "GET";
    readonly Post: "POST";
};
/**
 * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
 */
export type StatusCallbackMethod = ClosedEnum<typeof StatusCallbackMethod>;
export type VoiceV1ByocTrunk = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the BYOC Trunk resource.
     */
    accountSid?: string | null | undefined;
    /**
     * The unique string that that we created to identify the BYOC Trunk resource.
     */
    sid?: string | null | undefined;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string | null | undefined;
    /**
     * The URL we call using the `voice_method` when the BYOC Trunk receives a call.
     */
    voiceUrl?: string | null | undefined;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: VoiceMethod | null | undefined;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
     */
    voiceFallbackUrl?: string | null | undefined;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: VoiceFallbackMethod | null | undefined;
    /**
     * The URL that we call to pass status parameters (such as call ended) to your application.
     */
    statusCallbackUrl?: string | null | undefined;
    /**
     * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
     */
    statusCallbackMethod?: StatusCallbackMethod | null | undefined;
    /**
     * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
     */
    cnamLookupEnabled?: boolean | null | undefined;
    /**
     * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
     */
    connectionPolicySid?: string | null | undefined;
    /**
     * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
     */
    fromDomainSid?: string | null | undefined;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date | null | undefined;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date | null | undefined;
    /**
     * The absolute URL of the resource.
     */
    url?: string | null | undefined;
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
export declare const VoiceV1ByocTrunk$inboundSchema: z.ZodType<VoiceV1ByocTrunk, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1ByocTrunk$Outbound = {
    account_sid?: string | null | undefined;
    sid?: string | null | undefined;
    friendly_name?: string | null | undefined;
    voice_url?: string | null | undefined;
    voice_method?: string | null | undefined;
    voice_fallback_url?: string | null | undefined;
    voice_fallback_method?: string | null | undefined;
    status_callback_url?: string | null | undefined;
    status_callback_method?: string | null | undefined;
    cnam_lookup_enabled?: boolean | null | undefined;
    connection_policy_sid?: string | null | undefined;
    from_domain_sid?: string | null | undefined;
    date_created?: string | null | undefined;
    date_updated?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1ByocTrunk$outboundSchema: z.ZodType<VoiceV1ByocTrunk$Outbound, z.ZodTypeDef, VoiceV1ByocTrunk>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1ByocTrunk$ {
    /** @deprecated use `VoiceV1ByocTrunk$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1ByocTrunk, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1ByocTrunk$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1ByocTrunk$Outbound, z.ZodTypeDef, VoiceV1ByocTrunk>;
    /** @deprecated use `VoiceV1ByocTrunk$Outbound` instead. */
    type Outbound = VoiceV1ByocTrunk$Outbound;
}
export declare function voiceV1ByocTrunkToJSON(voiceV1ByocTrunk: VoiceV1ByocTrunk): string;
export declare function voiceV1ByocTrunkFromJSON(jsonString: string): SafeParseResult<VoiceV1ByocTrunk, SDKValidationError>;
//# sourceMappingURL=voicev1byoctrunk.d.ts.map