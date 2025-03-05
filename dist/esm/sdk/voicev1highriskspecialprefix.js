/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes } from "../funcs/voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.js";
import { ClientSDK } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
export class VoiceV1HighriskSpecialPrefix extends ClientSDK {
    /**
     * Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    async listDialingPermissionsHrsPrefixes(request, options) {
        return unwrapAsync(voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes(this, request, options));
    }
}
//# sourceMappingURL=voicev1highriskspecialprefix.js.map