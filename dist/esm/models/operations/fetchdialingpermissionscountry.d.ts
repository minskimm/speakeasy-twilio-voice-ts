import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FetchDialingPermissionsCountryServerList: readonly ["https://voice.twilio.com"];
export type FetchDialingPermissionsCountryRequest = {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the DialingPermissions Country resource to fetch
     */
    isoCode: string;
};
export type FetchDialingPermissionsCountryResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1DialingPermissionsDialingPermissionsCountryInstance;
};
/** @internal */
export declare const FetchDialingPermissionsCountryRequest$inboundSchema: z.ZodType<FetchDialingPermissionsCountryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchDialingPermissionsCountryRequest$Outbound = {
    IsoCode: string;
};
/** @internal */
export declare const FetchDialingPermissionsCountryRequest$outboundSchema: z.ZodType<FetchDialingPermissionsCountryRequest$Outbound, z.ZodTypeDef, FetchDialingPermissionsCountryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchDialingPermissionsCountryRequest$ {
    /** @deprecated use `FetchDialingPermissionsCountryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchDialingPermissionsCountryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchDialingPermissionsCountryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchDialingPermissionsCountryRequest$Outbound, z.ZodTypeDef, FetchDialingPermissionsCountryRequest>;
    /** @deprecated use `FetchDialingPermissionsCountryRequest$Outbound` instead. */
    type Outbound = FetchDialingPermissionsCountryRequest$Outbound;
}
export declare function fetchDialingPermissionsCountryRequestToJSON(fetchDialingPermissionsCountryRequest: FetchDialingPermissionsCountryRequest): string;
export declare function fetchDialingPermissionsCountryRequestFromJSON(jsonString: string): SafeParseResult<FetchDialingPermissionsCountryRequest, SDKValidationError>;
/** @internal */
export declare const FetchDialingPermissionsCountryResponse$inboundSchema: z.ZodType<FetchDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FetchDialingPermissionsCountryResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1DialingPermissionsDialingPermissionsCountryInstance$Outbound;
};
/** @internal */
export declare const FetchDialingPermissionsCountryResponse$outboundSchema: z.ZodType<FetchDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, FetchDialingPermissionsCountryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FetchDialingPermissionsCountryResponse$ {
    /** @deprecated use `FetchDialingPermissionsCountryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FetchDialingPermissionsCountryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FetchDialingPermissionsCountryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FetchDialingPermissionsCountryResponse$Outbound, z.ZodTypeDef, FetchDialingPermissionsCountryResponse>;
    /** @deprecated use `FetchDialingPermissionsCountryResponse$Outbound` instead. */
    type Outbound = FetchDialingPermissionsCountryResponse$Outbound;
}
export declare function fetchDialingPermissionsCountryResponseToJSON(fetchDialingPermissionsCountryResponse: FetchDialingPermissionsCountryResponse): string;
export declare function fetchDialingPermissionsCountryResponseFromJSON(jsonString: string): SafeParseResult<FetchDialingPermissionsCountryResponse, SDKValidationError>;
//# sourceMappingURL=fetchdialingpermissionscountry.d.ts.map