"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceV1BulkCountryUpdate = void 0;
const voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate_js_1 = require("../funcs/voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class VoiceV1BulkCountryUpdate extends sdks_js_1.ClientSDK {
    /**
     * Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    async createDialingPermissionsCountryBulkUpdate(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate_js_1.voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate)(this, request, options));
    }
}
exports.VoiceV1BulkCountryUpdate = VoiceV1BulkCountryUpdate;
//# sourceMappingURL=voicev1bulkcountryupdate.js.map