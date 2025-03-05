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
exports.tool$voiceV1ArchivedCallDeleteArchivedCall = void 0;
const voiceV1ArchivedCallDeleteArchivedCall_js_1 = require("../../funcs/voiceV1ArchivedCallDeleteArchivedCall.js");
const operations = __importStar(require("../../models/operations/index.js"));
const tools_js_1 = require("../tools.js");
const args = {
    request: operations.DeleteArchivedCallRequest$inboundSchema,
};
exports.tool$voiceV1ArchivedCallDeleteArchivedCall = {
    name: "voice-v1-archived-call_delete-archived-call",
    description: `Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.`,
    args,
    tool: async (client, args, ctx) => {
        const [result, apiCall] = await (0, voiceV1ArchivedCallDeleteArchivedCall_js_1.voiceV1ArchivedCallDeleteArchivedCall)(client, args.request, { fetchOptions: { signal: ctx.signal } }).$inspect();
        if (!result.ok) {
            return {
                content: [{ type: "text", text: result.error.message }],
                isError: true,
            };
        }
        return (0, tools_js_1.formatResult)(void 0, apiCall);
    },
};
//# sourceMappingURL=voiceV1ArchivedCallDeleteArchivedCall.js.map