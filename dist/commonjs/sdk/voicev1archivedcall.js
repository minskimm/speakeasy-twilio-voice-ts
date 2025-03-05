"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceV1ArchivedCall = void 0;
const voiceV1ArchivedCallDeleteArchivedCall_js_1 = require("../funcs/voiceV1ArchivedCallDeleteArchivedCall.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class VoiceV1ArchivedCall extends sdks_js_1.ClientSDK {
    /**
     * Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
     */
    async deleteArchivedCall(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1ArchivedCallDeleteArchivedCall_js_1.voiceV1ArchivedCallDeleteArchivedCall)(this, request, options));
    }
}
exports.VoiceV1ArchivedCall = VoiceV1ArchivedCall;
//# sourceMappingURL=voicev1archivedcall.js.map