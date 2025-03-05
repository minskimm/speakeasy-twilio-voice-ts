"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceV1Settings = void 0;
const voiceV1SettingsFetchDialingPermissionsSettings_js_1 = require("../funcs/voiceV1SettingsFetchDialingPermissionsSettings.js");
const voiceV1SettingsUpdateDialingPermissionsSettings_js_1 = require("../funcs/voiceV1SettingsUpdateDialingPermissionsSettings.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class VoiceV1Settings extends sdks_js_1.ClientSDK {
    /**
     * Retrieve voice dialing permissions inheritance for the sub-account
     */
    async fetchDialingPermissionsSettings(options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SettingsFetchDialingPermissionsSettings_js_1.voiceV1SettingsFetchDialingPermissionsSettings)(this, options));
    }
    /**
     * Update voice dialing permissions inheritance for the sub-account
     */
    async updateDialingPermissionsSettings(request, options) {
        return (0, fp_js_1.unwrapAsync)((0, voiceV1SettingsUpdateDialingPermissionsSettings_js_1.voiceV1SettingsUpdateDialingPermissionsSettings)(this, request, options));
    }
}
exports.VoiceV1Settings = VoiceV1Settings;
//# sourceMappingURL=voicev1settings.js.map