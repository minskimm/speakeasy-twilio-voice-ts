import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1ConnectionPolicyConnectionPolicyTarget = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Target resource.
     */
    accountSid?: string | null | undefined;
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid?: string | null | undefined;
    /**
     * The unique string that we created to identify the Target resource.
     */
    sid?: string | null | undefined;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string | null | undefined;
    /**
     * The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
     */
    target?: string | null | undefined;
    /**
     * The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.
     */
    priority?: number | undefined;
    /**
     * The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number | undefined;
    /**
     * Whether the target is enabled. The default is `true`.
     */
    enabled?: boolean | null | undefined;
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
};
/** @internal */
export declare const VoiceV1ConnectionPolicyConnectionPolicyTarget$inboundSchema: z.ZodType<VoiceV1ConnectionPolicyConnectionPolicyTarget, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound = {
    account_sid?: string | null | undefined;
    connection_policy_sid?: string | null | undefined;
    sid?: string | null | undefined;
    friendly_name?: string | null | undefined;
    target?: string | null | undefined;
    priority: number;
    weight: number;
    enabled?: boolean | null | undefined;
    date_created?: string | null | undefined;
    date_updated?: string | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1ConnectionPolicyConnectionPolicyTarget$outboundSchema: z.ZodType<VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound, z.ZodTypeDef, VoiceV1ConnectionPolicyConnectionPolicyTarget>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1ConnectionPolicyConnectionPolicyTarget$ {
    /** @deprecated use `VoiceV1ConnectionPolicyConnectionPolicyTarget$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1ConnectionPolicyConnectionPolicyTarget, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1ConnectionPolicyConnectionPolicyTarget$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound, z.ZodTypeDef, VoiceV1ConnectionPolicyConnectionPolicyTarget>;
    /** @deprecated use `VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound` instead. */
    type Outbound = VoiceV1ConnectionPolicyConnectionPolicyTarget$Outbound;
}
export declare function voiceV1ConnectionPolicyConnectionPolicyTargetToJSON(voiceV1ConnectionPolicyConnectionPolicyTarget: VoiceV1ConnectionPolicyConnectionPolicyTarget): string;
export declare function voiceV1ConnectionPolicyConnectionPolicyTargetFromJSON(jsonString: string): SafeParseResult<VoiceV1ConnectionPolicyConnectionPolicyTarget, SDKValidationError>;
//# sourceMappingURL=voicev1connectionpolicyconnectionpolicytarget.d.ts.map