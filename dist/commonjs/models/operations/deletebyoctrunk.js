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
exports.DeleteByocTrunkRequest$ = exports.DeleteByocTrunkRequest$outboundSchema = exports.DeleteByocTrunkRequest$inboundSchema = exports.DeleteByocTrunkServerList = void 0;
exports.deleteByocTrunkRequestToJSON = deleteByocTrunkRequestToJSON;
exports.deleteByocTrunkRequestFromJSON = deleteByocTrunkRequestFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
exports.DeleteByocTrunkServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.DeleteByocTrunkRequest$inboundSchema = z.object({
    Sid: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Sid": "sid",
    });
});
/** @internal */
exports.DeleteByocTrunkRequest$outboundSchema = z.object({
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
var DeleteByocTrunkRequest$;
(function (DeleteByocTrunkRequest$) {
    /** @deprecated use `DeleteByocTrunkRequest$inboundSchema` instead. */
    DeleteByocTrunkRequest$.inboundSchema = exports.DeleteByocTrunkRequest$inboundSchema;
    /** @deprecated use `DeleteByocTrunkRequest$outboundSchema` instead. */
    DeleteByocTrunkRequest$.outboundSchema = exports.DeleteByocTrunkRequest$outboundSchema;
})(DeleteByocTrunkRequest$ || (exports.DeleteByocTrunkRequest$ = DeleteByocTrunkRequest$ = {}));
function deleteByocTrunkRequestToJSON(deleteByocTrunkRequest) {
    return JSON.stringify(exports.DeleteByocTrunkRequest$outboundSchema.parse(deleteByocTrunkRequest));
}
function deleteByocTrunkRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.DeleteByocTrunkRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'DeleteByocTrunkRequest' from JSON`);
}
//# sourceMappingURL=deletebyoctrunk.js.map