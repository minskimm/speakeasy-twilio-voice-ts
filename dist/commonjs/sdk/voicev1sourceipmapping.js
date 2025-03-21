"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceV1SourceIpMapping = void 0;
const voiceV1SourceIpMappingCreateSourceIpMapping_js_1 = require("../funcs/voiceV1SourceIpMappingCreateSourceIpMapping.js");
const voiceV1SourceIpMappingDeleteSourceIpMapping_js_1 = require("../funcs/voiceV1SourceIpMappingDeleteSourceIpMapping.js");
const voiceV1SourceIpMappingFetchSourceIpMapping_js_1 = require("../funcs/voiceV1SourceIpMappingFetchSourceIpMapping.js");
const voiceV1SourceIpMappingListSourceIpMapping_js_1 = require("../funcs/voiceV1SourceIpMappingListSourceIpMapping.js");
const voiceV1SourceIpMappingUpdateSourceIpMapping_js_1 = require("../funcs/voiceV1SourceIpMappingUpdateSourceIpMapping.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class VoiceV1SourceIpMapping extends sdks_js_1.ClientSDK {
    async createSourceIpMapping(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SourceIpMappingCreateSourceIpMapping_js_1.voiceV1SourceIpMappingCreateSourceIpMapping)(this, request, options));
    }
    async listSourceIpMapping(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SourceIpMappingListSourceIpMapping_js_1.voiceV1SourceIpMappingListSourceIpMapping)(this, request, options));
    }
    async fetchSourceIpMapping(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SourceIpMappingFetchSourceIpMapping_js_1.voiceV1SourceIpMappingFetchSourceIpMapping)(this, request, options));
    }
    async updateSourceIpMapping(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SourceIpMappingUpdateSourceIpMapping_js_1.voiceV1SourceIpMappingUpdateSourceIpMapping)(this, request, options));
    }
    async deleteSourceIpMapping(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SourceIpMappingDeleteSourceIpMapping_js_1.voiceV1SourceIpMappingDeleteSourceIpMapping)(this, request, options));
    }
}
exports.VoiceV1SourceIpMapping = VoiceV1SourceIpMapping;
//# sourceMappingURL=voicev1sourceipmapping.js.map