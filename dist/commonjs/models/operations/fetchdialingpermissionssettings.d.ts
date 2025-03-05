import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchDialingPermissionsSettingsServerList: readonly ["https://voice.twilio.com"];
export type FetchDialingPermissionsSettingsResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1DialingPermissionsDialingPermissionsSettings;
};
/** @internal */
export declare const FetchDialingPermissionsSettingsResponse$inboundSchema: z.ZodType<FetchDialingPermissionsSettingsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchDialingPermissionsSettingsResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1DialingPermissionsDialingPermissionsSettings$Outbound;
};
/** @internal */
export declare const FetchDialingPermissionsSettingsResponse$outboundSchema: z.ZodType<FetchDialingPermissionsSettingsResponse$Outbound, z.ZodTypeDef, FetchDialingPermissionsSettingsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchDialingPermissionsSettingsResponse$ {
    /** @deprecated use `FetchDialingPermissionsSettingsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchDialingPermissionsSettingsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchDialingPermissionsSettingsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchDialingPermissionsSettingsResponse$Outbound, z.ZodTypeDef, FetchDialingPermissionsSettingsResponse>;
    /** @deprecated use `FetchDialingPermissionsSettingsResponse$Outbound` instead. */
    type Outbound = FetchDialingPermissionsSettingsResponse$Outbound;
}
export declare function fetchDialingPermissionsSettingsResponseToJSON(fetchDialingPermissionsSettingsResponse: FetchDialingPermissionsSettingsResponse): string;
export declare function fetchDialingPermissionsSettingsResponseFromJSON(jsonString: string): SafeParseResult<FetchDialingPermissionsSettingsResponse, SDKValidationError>;
//# sourceMappingURL=fetchdialingpermissionssettings.d.ts.map