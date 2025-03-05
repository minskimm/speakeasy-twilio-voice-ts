import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1Settings extends ClientSDK {
    /**
     * Retrieve voice dialing permissions inheritance for the sub-account
     */
    fetchDialingPermissionsSettings(options?: RequestOptions): Promise<operations.FetchDialingPermissionsSettingsResponse>;
    /**
     * Update voice dialing permissions inheritance for the sub-account
     */
    updateDialingPermissionsSettings(request?: operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest | undefined, options?: RequestOptions): Promise<operations.UpdateDialingPermissionsSettingsResponse>;
}
//# sourceMappingURL=voicev1settings.d.ts.map