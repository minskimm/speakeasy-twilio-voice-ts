import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const CreateDialingPermissionsCountryBulkUpdateServerList: readonly ["https://voice.twilio.com"];
export type CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest = {
    /**
     * URL encoded JSON array of update objects. example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
     */
    updateRequest: string;
};
export type CreateDialingPermissionsCountryBulkUpdateResponse = {
    headers: {
        [k: string]: Array<string>;
    };
    result: components.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
};
/** @internal */
export declare const CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$Outbound = {
    UpdateRequest: string;
};
/** @internal */
export declare const CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$Outbound, z.ZodTypeDef, CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$Outbound, z.ZodTypeDef, CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest>;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$Outbound` instead. */
    type Outbound = CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$Outbound;
}
export declare function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestToJSON(createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest: CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest): string;
export declare function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestFromJSON(jsonString: string): SafeParseResult<CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest, SDKValidationError>;
/** @internal */
export declare const CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateDialingPermissionsCountryBulkUpdateResponse$Outbound = {
    Headers: {
        [k: string]: Array<string>;
    };
    Result: components.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$Outbound;
};
/** @internal */
export declare const CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateResponse$Outbound, z.ZodTypeDef, CreateDialingPermissionsCountryBulkUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateDialingPermissionsCountryBulkUpdateResponse$ {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateDialingPermissionsCountryBulkUpdateResponse$Outbound, z.ZodTypeDef, CreateDialingPermissionsCountryBulkUpdateResponse>;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$Outbound` instead. */
    type Outbound = CreateDialingPermissionsCountryBulkUpdateResponse$Outbound;
}
export declare function createDialingPermissionsCountryBulkUpdateResponseToJSON(createDialingPermissionsCountryBulkUpdateResponse: CreateDialingPermissionsCountryBulkUpdateResponse): string;
export declare function createDialingPermissionsCountryBulkUpdateResponseFromJSON(jsonString: string): SafeParseResult<CreateDialingPermissionsCountryBulkUpdateResponse, SDKValidationError>;
//# sourceMappingURL=createdialingpermissionscountrybulkupdate.d.ts.map