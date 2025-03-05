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
exports.FetchSourceIpMappingResponse$ = exports.FetchSourceIpMappingResponse$outboundSchema = exports.FetchSourceIpMappingResponse$inboundSchema = exports.FetchSourceIpMappingRequest$ = exports.FetchSourceIpMappingRequest$outboundSchema = exports.FetchSourceIpMappingRequest$inboundSchema = exports.FetchSourceIpMappingServerList = void 0;
exports.fetchSourceIpMappingRequestToJSON = fetchSourceIpMappingRequestToJSON;
exports.fetchSourceIpMappingRequestFromJSON = fetchSourceIpMappingRequestFromJSON;
exports.fetchSourceIpMappingResponseToJSON = fetchSourceIpMappingResponseToJSON;
exports.fetchSourceIpMappingResponseFromJSON = fetchSourceIpMappingResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.FetchSourceIpMappingServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.FetchSourceIpMappingRequest$inboundSchema = z.object({
    Sid: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Sid": "sid",
    });
});
/** @internal */
exports.FetchSourceIpMappingRequest$outboundSchema = z.object({
    sid: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        sid: "Sid",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FetchSourceIpMappingRequest$;
(function (FetchSourceIpMappingRequest$) {
    /** @deprecated use `FetchSourceIpMappingRequest$inboundSchema` instead. */
    FetchSourceIpMappingRequest$.inboundSchema = exports.FetchSourceIpMappingRequest$inboundSchema;
    /** @deprecated use `FetchSourceIpMappingRequest$outboundSchema` instead. */
    FetchSourceIpMappingRequest$.outboundSchema = exports.FetchSourceIpMappingRequest$outboundSchema;
})(FetchSourceIpMappingRequest$ || (exports.FetchSourceIpMappingRequest$ = FetchSourceIpMappingRequest$ = {}));
function fetchSourceIpMappingRequestToJSON(fetchSourceIpMappingRequest) {
    return JSON.stringify(exports.FetchSourceIpMappingRequest$outboundSchema.parse(fetchSourceIpMappingRequest));
}
function fetchSourceIpMappingRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.FetchSourceIpMappingRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'FetchSourceIpMappingRequest' from JSON`);
}
/** @internal */
exports.FetchSourceIpMappingResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1SourceIpMapping$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.FetchSourceIpMappingResponse$outboundSchema = z.object({
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
var FetchSourceIpMappingResponse$;
(function (FetchSourceIpMappingResponse$) {
    /** @deprecated use `FetchSourceIpMappingResponse$inboundSchema` instead. */
    FetchSourceIpMappingResponse$.inboundSchema = exports.FetchSourceIpMappingResponse$inboundSchema;
    /** @deprecated use `FetchSourceIpMappingResponse$outboundSchema` instead. */
    FetchSourceIpMappingResponse$.outboundSchema = exports.FetchSourceIpMappingResponse$outboundSchema;
})(FetchSourceIpMappingResponse$ || (exports.FetchSourceIpMappingResponse$ = FetchSourceIpMappingResponse$ = {}));
function fetchSourceIpMappingResponseToJSON(fetchSourceIpMappingResponse) {
    return JSON.stringify(exports.FetchSourceIpMappingResponse$outboundSchema.parse(fetchSourceIpMappingResponse));
}
function fetchSourceIpMappingResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.FetchSourceIpMappingResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'FetchSourceIpMappingResponse' from JSON`);
}
//# sourceMappingURL=fetchsourceipmapping.js.map