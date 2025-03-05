import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type VoiceV1DialingPermissionsDialingPermissionsSettings = {
    /**
     * `true` if the sub-account will inherit voice dialing permissions from the Master Project; otherwise `false`.
     */
    dialingPermissionsInheritance?: boolean | null | undefined;
    /**
     * The absolute URL of this resource.
     */
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsSettings$inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound = {
    dialing_permissions_inheritance?: boolean | null | undefined;
    url?: string | null | undefined;
};
/** @internal */
export declare const VoiceV1DialingPermissionsDialingPermissionsSettings$outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VoiceV1DialingPermissionsDialingPermissionsSettings$ {
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound, z.ZodTypeDef, VoiceV1DialingPermissionsDialingPermissionsSettings>;
    /** @deprecated use `VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound` instead. */
    type Outbound = VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound;
}
export declare function voiceV1DialingPermissionsDialingPermissionsSettingsToJSON(voiceV1DialingPermissionsDialingPermissionsSettings: VoiceV1DialingPermissionsDialingPermissionsSettings): string;
export declare function voiceV1DialingPermissionsDialingPermissionsSettingsFromJSON(jsonString: string): SafeParseResult<VoiceV1DialingPermissionsDialingPermissionsSettings, SDKValidationError>;
//# sourceMappingURL=voicev1dialingpermissionsdialingpermissionssettings.d.ts.map