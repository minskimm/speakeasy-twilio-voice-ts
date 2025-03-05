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
exports.UpdateConnectionPolicyResponse$ = exports.UpdateConnectionPolicyResponse$outboundSchema = exports.UpdateConnectionPolicyResponse$inboundSchema = exports.UpdateConnectionPolicyRequest$ = exports.UpdateConnectionPolicyRequest$outboundSchema = exports.UpdateConnectionPolicyRequest$inboundSchema = exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$ = exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema = exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema = exports.UpdateConnectionPolicyServerList = void 0;
exports.updateConnectionPolicyUpdateConnectionPolicyRequestToJSON = updateConnectionPolicyUpdateConnectionPolicyRequestToJSON;
exports.updateConnectionPolicyUpdateConnectionPolicyRequestFromJSON = updateConnectionPolicyUpdateConnectionPolicyRequestFromJSON;
exports.updateConnectionPolicyRequestToJSON = updateConnectionPolicyRequestToJSON;
exports.updateConnectionPolicyRequestFromJSON = updateConnectionPolicyRequestFromJSON;
exports.updateConnectionPolicyResponseToJSON = updateConnectionPolicyResponseToJSON;
exports.updateConnectionPolicyResponseFromJSON = updateConnectionPolicyResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.UpdateConnectionPolicyServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema = z.object({
    FriendlyName: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "FriendlyName": "friendlyName",
    });
});
/** @internal */
exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema = z.object({
    friendlyName: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        friendlyName: "FriendlyName",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var UpdateConnectionPolicyUpdateConnectionPolicyRequest$;
(function (UpdateConnectionPolicyUpdateConnectionPolicyRequest$) {
    /** @deprecated use `UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema` instead. */
    UpdateConnectionPolicyUpdateConnectionPolicyRequest$.inboundSchema = exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema;
    /** @deprecated use `UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema` instead. */
    UpdateConnectionPolicyUpdateConnectionPolicyRequest$.outboundSchema = exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema;
})(UpdateConnectionPolicyUpdateConnectionPolicyRequest$ || (exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$ = UpdateConnectionPolicyUpdateConnectionPolicyRequest$ = {}));
function updateConnectionPolicyUpdateConnectionPolicyRequestToJSON(updateConnectionPolicyUpdateConnectionPolicyRequest) {
    return JSON.stringify(exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema.parse(updateConnectionPolicyUpdateConnectionPolicyRequest));
}
function updateConnectionPolicyUpdateConnectionPolicyRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateConnectionPolicyUpdateConnectionPolicyRequest' from JSON`);
}
/** @internal */
exports.UpdateConnectionPolicyRequest$inboundSchema = z.object({
    Sid: z.string(),
    RequestBody: z.lazy(() => exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$inboundSchema).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Sid": "sid",
        "RequestBody": "requestBody",
    });
});
/** @internal */
exports.UpdateConnectionPolicyRequest$outboundSchema = z.object({
    sid: z.string(),
    requestBody: z.lazy(() => exports.UpdateConnectionPolicyUpdateConnectionPolicyRequest$outboundSchema).optional(),
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
var UpdateConnectionPolicyRequest$;
(function (UpdateConnectionPolicyRequest$) {
    /** @deprecated use `UpdateConnectionPolicyRequest$inboundSchema` instead. */
    UpdateConnectionPolicyRequest$.inboundSchema = exports.UpdateConnectionPolicyRequest$inboundSchema;
    /** @deprecated use `UpdateConnectionPolicyRequest$outboundSchema` instead. */
    UpdateConnectionPolicyRequest$.outboundSchema = exports.UpdateConnectionPolicyRequest$outboundSchema;
})(UpdateConnectionPolicyRequest$ || (exports.UpdateConnectionPolicyRequest$ = UpdateConnectionPolicyRequest$ = {}));
function updateConnectionPolicyRequestToJSON(updateConnectionPolicyRequest) {
    return JSON.stringify(exports.UpdateConnectionPolicyRequest$outboundSchema.parse(updateConnectionPolicyRequest));
}
function updateConnectionPolicyRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateConnectionPolicyRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateConnectionPolicyRequest' from JSON`);
}
/** @internal */
exports.UpdateConnectionPolicyResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1ConnectionPolicy$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.UpdateConnectionPolicyResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components.VoiceV1ConnectionPolicy$outboundSchema,
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
var UpdateConnectionPolicyResponse$;
(function (UpdateConnectionPolicyResponse$) {
    /** @deprecated use `UpdateConnectionPolicyResponse$inboundSchema` instead. */
    UpdateConnectionPolicyResponse$.inboundSchema = exports.UpdateConnectionPolicyResponse$inboundSchema;
    /** @deprecated use `UpdateConnectionPolicyResponse$outboundSchema` instead. */
    UpdateConnectionPolicyResponse$.outboundSchema = exports.UpdateConnectionPolicyResponse$outboundSchema;
})(UpdateConnectionPolicyResponse$ || (exports.UpdateConnectionPolicyResponse$ = UpdateConnectionPolicyResponse$ = {}));
function updateConnectionPolicyResponseToJSON(updateConnectionPolicyResponse) {
    return JSON.stringify(exports.UpdateConnectionPolicyResponse$outboundSchema.parse(updateConnectionPolicyResponse));
}
function updateConnectionPolicyResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.UpdateConnectionPolicyResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'UpdateConnectionPolicyResponse' from JSON`);
}
//# sourceMappingURL=updateconnectionpolicy.js.map