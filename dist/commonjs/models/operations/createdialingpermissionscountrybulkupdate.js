"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDialingPermissionsCountryBulkUpdateResponse$ = exports.CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ = exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateServerList = void 0;
exports.createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestToJSON = createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestToJSON;
exports.createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestFromJSON = createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestFromJSON;
exports.createDialingPermissionsCountryBulkUpdateResponseToJSON = createDialingPermissionsCountryBulkUpdateResponseToJSON;
exports.createDialingPermissionsCountryBulkUpdateResponseFromJSON = createDialingPermissionsCountryBulkUpdateResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.CreateDialingPermissionsCountryBulkUpdateServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema = z.object({
    UpdateRequest: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "UpdateRequest": "updateRequest",
    });
});
/** @internal */
exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema = z.object({
    updateRequest: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        updateRequest: "UpdateRequest",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$;
(function (CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$) {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$.inboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$.outboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema;
})(CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ || (exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ = CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$ = {}));
function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestToJSON(createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest) {
    return JSON.stringify(exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$outboundSchema
        .parse(createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest));
}
function createDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest$inboundSchema
        .parse(JSON.parse(x)), `Failed to parse 'CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest' from JSON`);
}
/** @internal */
exports.CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components
        .VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components
        .VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        headers: "Headers",
        result: "Result",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CreateDialingPermissionsCountryBulkUpdateResponse$;
(function (CreateDialingPermissionsCountryBulkUpdateResponse$) {
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateResponse$.inboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema;
    /** @deprecated use `CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema` instead. */
    CreateDialingPermissionsCountryBulkUpdateResponse$.outboundSchema = exports.CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema;
})(CreateDialingPermissionsCountryBulkUpdateResponse$ || (exports.CreateDialingPermissionsCountryBulkUpdateResponse$ = CreateDialingPermissionsCountryBulkUpdateResponse$ = {}));
function createDialingPermissionsCountryBulkUpdateResponseToJSON(createDialingPermissionsCountryBulkUpdateResponse) {
    return JSON.stringify(exports.CreateDialingPermissionsCountryBulkUpdateResponse$outboundSchema.parse(createDialingPermissionsCountryBulkUpdateResponse));
}
function createDialingPermissionsCountryBulkUpdateResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.CreateDialingPermissionsCountryBulkUpdateResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'CreateDialingPermissionsCountryBulkUpdateResponse' from JSON`);
}
//# sourceMappingURL=createdialingpermissionscountrybulkupdate.js.map