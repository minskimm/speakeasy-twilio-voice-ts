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
exports.UpdateSourceIpMappingResponse$ = exports.UpdateSourceIpMappingResponse$outboundSchema = exports.UpdateSourceIpMappingResponse$inboundSchema = exports.UpdateSourceIpMappingRequest$ = exports.UpdateSourceIpMappingRequest$outboundSchema = exports.UpdateSourceIpMappingRequest$inboundSchema = exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$ = exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema = exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema = exports.UpdateSourceIpMappingServerList = void 0;
exports.updateSourceIpMappingUpdateSourceIpMappingRequestToJSON = updateSourceIpMappingUpdateSourceIpMappingRequestToJSON;
exports.updateSourceIpMappingUpdateSourceIpMappingRequestFromJSON = updateSourceIpMappingUpdateSourceIpMappingRequestFromJSON;
exports.updateSourceIpMappingRequestToJSON = updateSourceIpMappingRequestToJSON;
exports.updateSourceIpMappingRequestFromJSON = updateSourceIpMappingRequestFromJSON;
exports.updateSourceIpMappingResponseToJSON = updateSourceIpMappingResponseToJSON;
exports.updateSourceIpMappingResponseFromJSON = updateSourceIpMappingResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.UpdateSourceIpMappingServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema = z.object({
    SipDomainSid: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "SipDomainSid": "sipDomainSid",
    });
});
/** @internal */
exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema = z.object({
    sipDomainSid: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        sipDomainSid: "SipDomainSid",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var UpdateSourceIpMappingUpdateSourceIpMappingRequest$;
(function (UpdateSourceIpMappingUpdateSourceIpMappingRequest$) {
    /** @deprecated use `UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema` instead. */
    UpdateSourceIpMappingUpdateSourceIpMappingRequest$.inboundSchema = exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema;
    /** @deprecated use `UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema` instead. */
    UpdateSourceIpMappingUpdateSourceIpMappingRequest$.outboundSchema = exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema;
})(UpdateSourceIpMappingUpdateSourceIpMappingRequest$ || (exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$ = UpdateSourceIpMappingUpdateSourceIpMappingRequest$ = {}));
function updateSourceIpMappingUpdateSourceIpMappingRequestToJSON(updateSourceIpMappingUpdateSourceIpMappingRequest) {
    return JSON.stringify(exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema.parse(updateSourceIpMappingUpdateSourceIpMappingRequest));
}
function updateSourceIpMappingUpdateSourceIpMappingRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateSourceIpMappingUpdateSourceIpMappingRequest' from JSON`);
}
/** @internal */
exports.UpdateSourceIpMappingRequest$inboundSchema = z.object({
    Sid: z.string(),
    RequestBody: z.lazy(() => exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$inboundSchema).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Sid": "sid",
        "RequestBody": "requestBody",
    });
});
/** @internal */
exports.UpdateSourceIpMappingRequest$outboundSchema = z.object({
    sid: z.string(),
    requestBody: z.lazy(() => exports.UpdateSourceIpMappingUpdateSourceIpMappingRequest$outboundSchema).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        sid: "Sid",
        requestBody: "RequestBody",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var UpdateSourceIpMappingRequest$;
(function (UpdateSourceIpMappingRequest$) {
    /** @deprecated use `UpdateSourceIpMappingRequest$inboundSchema` instead. */
    UpdateSourceIpMappingRequest$.inboundSchema = exports.UpdateSourceIpMappingRequest$inboundSchema;
    /** @deprecated use `UpdateSourceIpMappingRequest$outboundSchema` instead. */
    UpdateSourceIpMappingRequest$.outboundSchema = exports.UpdateSourceIpMappingRequest$outboundSchema;
})(UpdateSourceIpMappingRequest$ || (exports.UpdateSourceIpMappingRequest$ = UpdateSourceIpMappingRequest$ = {}));
function updateSourceIpMappingRequestToJSON(updateSourceIpMappingRequest) {
    return JSON.stringify(exports.UpdateSourceIpMappingRequest$outboundSchema.parse(updateSourceIpMappingRequest));
}
function updateSourceIpMappingRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateSourceIpMappingRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateSourceIpMappingRequest' from JSON`);
}
/** @internal */
exports.UpdateSourceIpMappingResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1SourceIpMapping$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.UpdateSourceIpMappingResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components.VoiceV1SourceIpMapping$outboundSchema,
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
var UpdateSourceIpMappingResponse$;
(function (UpdateSourceIpMappingResponse$) {
    /** @deprecated use `UpdateSourceIpMappingResponse$inboundSchema` instead. */
    UpdateSourceIpMappingResponse$.inboundSchema = exports.UpdateSourceIpMappingResponse$inboundSchema;
    /** @deprecated use `UpdateSourceIpMappingResponse$outboundSchema` instead. */
    UpdateSourceIpMappingResponse$.outboundSchema = exports.UpdateSourceIpMappingResponse$outboundSchema;
})(UpdateSourceIpMappingResponse$ || (exports.UpdateSourceIpMappingResponse$ = UpdateSourceIpMappingResponse$ = {}));
function updateSourceIpMappingResponseToJSON(updateSourceIpMappingResponse) {
    return JSON.stringify(exports.UpdateSourceIpMappingResponse$outboundSchema.parse(updateSourceIpMappingResponse));
}
function updateSourceIpMappingResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateSourceIpMappingResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateSourceIpMappingResponse' from JSON`);
}
//# sourceMappingURL=updatesourceipmapping.js.map