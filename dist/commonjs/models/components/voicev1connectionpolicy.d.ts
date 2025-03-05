import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The URLs of related resources.
 */
export type Links = {};
export type VoiceV1ConnectionPolicy = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Connection Policy resource.
     */
    accountSid?: string | null | undefined;
    /**
     * The unique string that we created to identify the Connection Policy resource.
     */
    sid?: string | null | undefined;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string | null | undefined;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date | null | undefined;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date | null | undefined;
    /**
     * The absolute URL of the resource.
     */
    url?: string | null | undefined;
    /**
     * The URLs of related resources.
     */
    links?: Links | null | undefined;
};
/** @internal */
export declare const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown>;
/** @internal */
export type Links$Outbound = {};
/** @internal */
export declare const Links$outboundSchema: z.ZodType<Links$Outbound, z.ZodTypeDef, Links>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Links$ {
    /** @deprecated use `Links$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown>;
    /** @deprecated use `Links$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Links$Outbound, z.ZodTypeDef, Links>;
    /** @deprecated use `Links$Outbound` instead. */
    type Outbound = Links$Outbound;
}
export declare function linksToJSON(links: Links): string;
export declare function linksFromJSON(jsonString: string): SafeParseResult<Links, SDKValidationError>;
/** @internal */
export declare const VoiceV1ConnectionPolicy$inboundSchema: z.ZodType<VoiceV1ConnectionPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1ConnectionPolicy$Outbound = {
    account_sid?: string | null | undefined;
    sid?: string | null | undefined;
    friendly_name?: string | null | undefined;
    date_created?: string | null | undefined;
    date_updated?: string | null | undefined;
    url?: string | null | undefined;
    links?: Links$Outbound | null | undefined;
};
/** @internal */
export declare const VoiceV1ConnectionPolicy$outboundSchema: z.ZodType<VoiceV1ConnectionPolicy$Outbound, z.ZodTypeDef, VoiceV1ConnectionPolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1ConnectionPolicy$ {
    /** @deprecated use `VoiceV1ConnectionPolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1ConnectionPolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1ConnectionPolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1ConnectionPolicy$Outbound, z.ZodTypeDef, VoiceV1ConnectionPolicy>;
    /** @deprecated use `VoiceV1ConnectionPolicy$Outbound` instead. */
    type Outbound = VoiceV1ConnectionPolicy$Outbound;
}
export declare function voiceV1ConnectionPolicyToJSON(voiceV1ConnectionPolicy: VoiceV1ConnectionPolicy): string;
export declare function voiceV1ConnectionPolicyFromJSON(jsonString: string): SafeParseResult<VoiceV1ConnectionPolicy, SDKValidationError>;
//# sourceMappingURL=voicev1connectionpolicy.d.ts.map