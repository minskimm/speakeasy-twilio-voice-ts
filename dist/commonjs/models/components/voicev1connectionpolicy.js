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
exports.VoiceV1ConnectionPolicy$ = exports.VoiceV1ConnectionPolicy$outboundSchema = exports.VoiceV1ConnectionPolicy$inboundSchema = exports.Links$ = exports.Links$outboundSchema = exports.Links$inboundSchema = void 0;
exports.linksToJSON = linksToJSON;
exports.linksFromJSON = linksFromJSON;
exports.voiceV1ConnectionPolicyToJSON = voiceV1ConnectionPolicyToJSON;
exports.voiceV1ConnectionPolicyFromJSON = voiceV1ConnectionPolicyFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
/** @internal */
exports.Links$inboundSchema = z
    .object({});
/** @internal */
exports.Links$outboundSchema = z.object({});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Links$;
(function (Links$) {
    /** @deprecated use `Links$inboundSchema` instead. */
    Links$.inboundSchema = exports.Links$inboundSchema;
    /** @deprecated use `Links$outboundSchema` instead. */
    Links$.outboundSchema = exports.Links$outboundSchema;
})(Links$ || (exports.Links$ = Links$ = {}));
function linksToJSON(links) {
    return JSON.stringify(exports.Links$outboundSchema.parse(links));
}
function linksFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.Links$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'Links' from JSON`);
}
/** @internal */
exports.VoiceV1ConnectionPolicy$inboundSchema = z.object({
    account_sid: z.nullable(z.string()).optional(),
    sid: z.nullable(z.string()).optional(),
    friendly_name: z.nullable(z.string()).optional(),
    date_created: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    date_updated: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    url: z.nullable(z.string()).optional(),
    links: z.nullable(z.lazy(() => exports.Links$inboundSchema)).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_sid": "accountSid",
        "friendly_name": "friendlyName",
        "date_created": "dateCreated",
        "date_updated": "dateUpdated",
    });
});
/** @internal */
exports.VoiceV1ConnectionPolicy$outboundSchema = z.object({
    accountSid: z.nullable(z.string()).optional(),
    sid: z.nullable(z.string()).optional(),
    friendlyName: z.nullable(z.string()).optional(),
    dateCreated: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    dateUpdated: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    url: z.nullable(z.string()).optional(),
    links: z.nullable(z.lazy(() => exports.Links$outboundSchema)).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountSid: "account_sid",
        friendlyName: "friendly_name",
        dateCreated: "date_created",
        dateUpdated: "date_updated",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var VoiceV1ConnectionPolicy$;
(function (VoiceV1ConnectionPolicy$) {
    /** @deprecated use `VoiceV1ConnectionPolicy$inboundSchema` instead. */
    VoiceV1ConnectionPolicy$.inboundSchema = exports.VoiceV1ConnectionPolicy$inboundSchema;
    /** @deprecated use `VoiceV1ConnectionPolicy$outboundSchema` instead. */
    VoiceV1ConnectionPolicy$.outboundSchema = exports.VoiceV1ConnectionPolicy$outboundSchema;
})(VoiceV1ConnectionPolicy$ || (exports.VoiceV1ConnectionPolicy$ = VoiceV1ConnectionPolicy$ = {}));
function voiceV1ConnectionPolicyToJSON(voiceV1ConnectionPolicy) {
    return JSON.stringify(exports.VoiceV1ConnectionPolicy$outboundSchema.parse(voiceV1ConnectionPolicy));
}
function voiceV1ConnectionPolicyFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.VoiceV1ConnectionPolicy$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'VoiceV1ConnectionPolicy' from JSON`);
}
//# sourceMappingURL=voicev1connectionpolicy.js.map