import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1IpRecord = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IP Record resource.
     */
    accountSid?: string | null | undefined;
    /**
     * The unique string that we created to identify the IP Record resource.
     */
    sid?: string | null | undefined;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string | null | undefined;
    /**
     * An IP address in dotted decimal notation, IPv4 only.
     */
    ipAddress?: string | null | undefined;
    /**
     * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
     */
    cidrPrefixLength?: number | undefined;
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
export declare const VoiceV1IpRecord$inboundSchema: z.ZodType<VoiceV1IpRecord, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1IpRecord$Outbound = {
    account_sid?: string | null | undefined;
    sid?: string | null | undefined;
    friendly_name?: string | null | undefined;
    ip_address?: string | null | undefined;
    cidr_prefix_length: number;
    date_created?: string | null | undefined;
    date_updated?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1IpRecord$outboundSchema: z.ZodType<VoiceV1IpRecord$Outbound, z.ZodTypeDef, VoiceV1IpRecord>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1IpRecord$ {
    /** @deprecated use `VoiceV1IpRecord$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1IpRecord, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1IpRecord$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1IpRecord$Outbound, z.ZodTypeDef, VoiceV1IpRecord>;
    /** @deprecated use `VoiceV1IpRecord$Outbound` instead. */
    type Outbound = VoiceV1IpRecord$Outbound;
}
export declare function voiceV1IpRecordToJSON(voiceV1IpRecord: VoiceV1IpRecord): string;
export declare function voiceV1IpRecordFromJSON(jsonString: string): SafeParseResult<VoiceV1IpRecord, SDKValidationError>;
//# sourceMappingURL=voicev1iprecord.d.ts.map