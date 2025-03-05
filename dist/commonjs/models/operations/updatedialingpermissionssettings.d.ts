import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const UpdateDialingPermissionsSettingsServerList: readonly ["https://voice.twilio.com"];
export type UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest = {
    /**
     * `true` for the sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`.
     */
    dialingPermissionsInheritance?: boolean | undefined;
};
export type UpdateDialingPermissionsSettingsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1DialingPermissionsDialingPermissionsSettings;
};
/** @internal */
export declare const UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$inboundSchema: z.ZodType<UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$Outbound = {
    DialingPermissionsInheritance?: boolean | undefined;
};
/** @internal */
export declare const UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$outboundSchema: z.ZodType<UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$Outbound, z.ZodTypeDef, UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$ {
    /** @deprecated use `UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$Outbound, z.ZodTypeDef, UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest>;
    /** @deprecated use `UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$Outbound` instead. */
    type Outbound = UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest$Outbound;
}
export declare function updateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequestToJSON(updateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest: UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest): string;
export declare function updateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequestFromJSON(jsonString: string): SafeParseResult<UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest, SDKValidationError>;
/** @internal */
export declare const UpdateDialingPermissionsSettingsResponse$inboundSchema: z.ZodType<UpdateDialingPermissionsSettingsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateDialingPermissionsSettingsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound;
};
/** @internal */
export declare const UpdateDialingPermissionsSettingsResponse$outboundSchema: z.ZodType<UpdateDialingPermissionsSettingsResponse$Outbound, z.ZodTypeDef, UpdateDialingPermissionsSettingsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateDialingPermissionsSettingsResponse$ {
    /** @deprecated use `UpdateDialingPermissionsSettingsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateDialingPermissionsSettingsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateDialingPermissionsSettingsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateDialingPermissionsSettingsResponse$Outbound, z.ZodTypeDef, UpdateDialingPermissionsSettingsResponse>;
    /** @deprecated use `UpdateDialingPermissionsSettingsResponse$Outbound` instead. */
    type Outbound = UpdateDialingPermissionsSettingsResponse$Outbound;
}
export declare function updateDialingPermissionsSettingsResponseToJSON(updateDialingPermissionsSettingsResponse: UpdateDialingPermissionsSettingsResponse): string;
export declare function updateDialingPermissionsSettingsResponseFromJSON(jsonString: string): SafeParseResult<UpdateDialingPermissionsSettingsResponse, SDKValidationError>;
//# sourceMappingURL=updatedialingpermissionssettings.d.ts.map