import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1SourceIpMapping = {
    /**
     * The unique string that we created to identify the IP Record resource.
     */
    sid?: string | null | undefined;
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
     */
    ipRecordSid?: string | null | undefined;
    /**
     * The SID of the SIP Domain that the IP Record is mapped to.
     */
    sipDomainSid?: string | null | undefined;
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
export declare const VoiceV1SourceIpMapping$inboundSchema: z.ZodType<VoiceV1SourceIpMapping, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1SourceIpMapping$Outbound = {
    sid?: string | null | undefined;
    ip_record_sid?: string | null | undefined;
    sip_domain_sid?: string | null | undefined;
    date_created?: string | null | undefined;
    date_updated?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1SourceIpMapping$outboundSchema: z.ZodType<VoiceV1SourceIpMapping$Outbound, z.ZodTypeDef, VoiceV1SourceIpMapping>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1SourceIpMapping$ {
    /** @deprecated use `VoiceV1SourceIpMapping$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1SourceIpMapping, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1SourceIpMapping$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1SourceIpMapping$Outbound, z.ZodTypeDef, VoiceV1SourceIpMapping>;
    /** @deprecated use `VoiceV1SourceIpMapping$Outbound` instead. */
    type Outbound = VoiceV1SourceIpMapping$Outbound;
}
export declare function voiceV1SourceIpMappingToJSON(voiceV1SourceIpMapping: VoiceV1SourceIpMapping): string;
export declare function voiceV1SourceIpMappingFromJSON(jsonString: string): SafeParseResult<VoiceV1SourceIpMapping, SDKValidationError>;
//# sourceMappingURL=voicev1sourceipmapping.d.ts.map