import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1BulkCountryUpdate extends ClientSDK {
    /**
     * Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    createDialingPermissionsCountryBulkUpdate(request?: operations.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest | undefined, options?: RequestOptions): Promise<operations.CreateDialingPermissionsCountryBulkUpdateResponse>;
}
//# sourceMappingURL=voicev1bulkcountryupdate.d.ts.map