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
exports.CreateByocTrunkResponse$ = exports.CreateByocTrunkResponse$outboundSchema = exports.CreateByocTrunkResponse$inboundSchema = exports.CreateByocTrunkCreateByocTrunkRequest$ = exports.CreateByocTrunkCreateByocTrunkRequest$outboundSchema = exports.CreateByocTrunkCreateByocTrunkRequest$inboundSchema = exports.StatusCallbackMethod$ = exports.StatusCallbackMethod$outboundSchema = exports.StatusCallbackMethod$inboundSchema = exports.VoiceFallbackMethod$ = exports.VoiceFallbackMethod$outboundSchema = exports.VoiceFallbackMethod$inboundSchema = exports.VoiceMethod$ = exports.VoiceMethod$outboundSchema = exports.VoiceMethod$inboundSchema = exports.StatusCallbackMethod = exports.VoiceFallbackMethod = exports.VoiceMethod = exports.CreateByocTrunkServerList = void 0;
exports.createByocTrunkCreateByocTrunkRequestToJSON = createByocTrunkCreateByocTrunkRequestToJSON;
exports.createByocTrunkCreateByocTrunkRequestFromJSON = createByocTrunkCreateByocTrunkRequestFromJSON;
exports.createByocTrunkResponseToJSON = createByocTrunkResponseToJSON;
exports.createByocTrunkResponseFromJSON = createByocTrunkResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.CreateByocTrunkServerList = [
    "https://voice.twilio.com",
];
/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
exports.VoiceMethod = {
    Get: "GET",
    Post: "POST",
};
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
exports.VoiceFallbackMethod = {
    Get: "GET",
    Post: "POST",
};
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
exports.StatusCallbackMethod = {
    Get: "GET",
    Post: "POST",
};
/** @internal */
exports.VoiceMethod$inboundSchema = z
    .nativeEnum(exports.VoiceMethod);
/** @internal */
exports.VoiceMethod$outboundSchema = exports.VoiceMethod$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var VoiceMethod$;
(function (VoiceMethod$) {
    /** @deprecated use `VoiceMethod$inboundSchema` instead. */
    VoiceMethod$.inboundSchema = exports.VoiceMethod$inboundSchema;
    /** @deprecated use `VoiceMethod$outboundSchema` instead. */
    VoiceMethod$.outboundSchema = exports.VoiceMethod$outboundSchema;
})(VoiceMethod$ || (exports.VoiceMethod$ = VoiceMethod$ = {}));
/** @internal */
exports.VoiceFallbackMethod$inboundSchema = z.nativeEnum(exports.VoiceFallbackMethod);
/** @internal */
exports.VoiceFallbackMethod$outboundSchema = exports.VoiceFallbackMethod$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var VoiceFallbackMethod$;
(function (VoiceFallbackMethod$) {
    /** @deprecated use `VoiceFallbackMethod$inboundSchema` instead. */
    VoiceFallbackMethod$.inboundSchema = exports.VoiceFallbackMethod$inboundSchema;
    /** @deprecated use `VoiceFallbackMethod$outboundSchema` instead. */
    VoiceFallbackMethod$.outboundSchema = exports.VoiceFallbackMethod$outboundSchema;
})(VoiceFallbackMethod$ || (exports.VoiceFallbackMethod$ = VoiceFallbackMethod$ = {}));
/** @internal */
exports.StatusCallbackMethod$inboundSchema = z.nativeEnum(exports.StatusCallbackMethod);
/** @internal */
exports.StatusCallbackMethod$outboundSchema = exports.StatusCallbackMethod$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var StatusCallbackMethod$;
(function (StatusCallbackMethod$) {
    /** @deprecated use `StatusCallbackMethod$inboundSchema` instead. */
    StatusCallbackMethod$.inboundSchema = exports.StatusCallbackMethod$inboundSchema;
    /** @deprecated use `StatusCallbackMethod$outboundSchema` instead. */
    StatusCallbackMethod$.outboundSchema = exports.StatusCallbackMethod$outboundSchema;
})(StatusCallbackMethod$ || (exports.StatusCallbackMethod$ = StatusCallbackMethod$ = {}));
/** @internal */
exports.CreateByocTrunkCreateByocTrunkRequest$inboundSchema = z.object({
    FriendlyName: z.string().optional(),
    VoiceUrl: z.string().optional(),
    VoiceMethod: exports.VoiceMethod$inboundSchema.optional(),
    VoiceFallbackUrl: z.string().optional(),
    VoiceFallbackMethod: exports.VoiceFallbackMethod$inboundSchema.optional(),
    StatusCallbackUrl: z.string().optional(),
    StatusCallbackMethod: exports.StatusCallbackMethod$inboundSchema.optional(),
    CnamLookupEnabled: z.boolean().optional(),
    ConnectionPolicySid: z.string().optional(),
    FromDomainSid: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "FriendlyName": "friendlyName",
        "VoiceUrl": "voiceUrl",
        "VoiceMethod": "voiceMethod",
        "VoiceFallbackUrl": "voiceFallbackUrl",
        "VoiceFallbackMethod": "voiceFallbackMethod",
        "StatusCallbackUrl": "statusCallbackUrl",
        "StatusCallbackMethod": "statusCallbackMethod",
        "CnamLookupEnabled": "cnamLookupEnabled",
        "ConnectionPolicySid": "connectionPolicySid",
        "FromDomainSid": "fromDomainSid",
    });
});
/** @internal */
exports.CreateByocTrunkCreateByocTrunkRequest$outboundSchema = z.object({
    friendlyName: z.string().optional(),
    voiceUrl: z.string().optional(),
    voiceMethod: exports.VoiceMethod$outboundSchema.optional(),
    voiceFallbackUrl: z.string().optional(),
    voiceFallbackMethod: exports.VoiceFallbackMethod$outboundSchema.optional(),
    statusCallbackUrl: z.string().optional(),
    statusCallbackMethod: exports.StatusCallbackMethod$outboundSchema.optional(),
    cnamLookupEnabled: z.boolean().optional(),
    connectionPolicySid: z.string().optional(),
    fromDomainSid: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        friendlyName: "FriendlyName",
        voiceUrl: "VoiceUrl",
        voiceMethod: "VoiceMethod",
        voiceFallbackUrl: "VoiceFallbackUrl",
        voiceFallbackMethod: "VoiceFallbackMethod",
        statusCallbackUrl: "StatusCallbackUrl",
        statusCallbackMethod: "StatusCallbackMethod",
        cnamLookupEnabled: "CnamLookupEnabled",
        connectionPolicySid: "ConnectionPolicySid",
        fromDomainSid: "FromDomainSid",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CreateByocTrunkCreateByocTrunkRequest$;
(function (CreateByocTrunkCreateByocTrunkRequest$) {
    /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$inboundSchema` instead. */
    CreateByocTrunkCreateByocTrunkRequest$.inboundSchema = exports.CreateByocTrunkCreateByocTrunkRequest$inboundSchema;
    /** @deprecated use `CreateByocTrunkCreateByocTrunkRequest$outboundSchema` instead. */
    CreateByocTrunkCreateByocTrunkRequest$.outboundSchema = exports.CreateByocTrunkCreateByocTrunkRequest$outboundSchema;
})(CreateByocTrunkCreateByocTrunkRequest$ || (exports.CreateByocTrunkCreateByocTrunkRequest$ = CreateByocTrunkCreateByocTrunkRequest$ = {}));
function createByocTrunkCreateByocTrunkRequestToJSON(createByocTrunkCreateByocTrunkRequest) {
    return JSON.stringify(exports.CreateByocTrunkCreateByocTrunkRequest$outboundSchema.parse(createByocTrunkCreateByocTrunkRequest));
}
function createByocTrunkCreateByocTrunkRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.CreateByocTrunkCreateByocTrunkRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'CreateByocTrunkCreateByocTrunkRequest' from JSON`);
}
/** @internal */
exports.CreateByocTrunkResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: components.VoiceV1ByocTrunk$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.CreateByocTrunkResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: components.VoiceV1ByocTrunk$outboundSchema,
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
var CreateByocTrunkResponse$;
(function (CreateByocTrunkResponse$) {
    /** @deprecated use `CreateByocTrunkResponse$inboundSchema` instead. */
    CreateByocTrunkResponse$.inboundSchema = exports.CreateByocTrunkResponse$inboundSchema;
    /** @deprecated use `CreateByocTrunkResponse$outboundSchema` instead. */
    CreateByocTrunkResponse$.outboundSchema = exports.CreateByocTrunkResponse$outboundSchema;
})(CreateByocTrunkResponse$ || (exports.CreateByocTrunkResponse$ = CreateByocTrunkResponse$ = {}));
function createByocTrunkResponseToJSON(createByocTrunkResponse) {
    return JSON.stringify(exports.CreateByocTrunkResponse$outboundSchema.parse(createByocTrunkResponse));
}
function createByocTrunkResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.CreateByocTrunkResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'CreateByocTrunkResponse' from JSON`);
}
//# sourceMappingURL=createbyoctrunk.js.map