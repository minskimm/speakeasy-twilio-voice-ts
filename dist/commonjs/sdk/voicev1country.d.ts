import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1Country extends ClientSDK {
    /**
     * Retrieve voice dialing country permissions identified by the given ISO country code
     */
    fetchDialingPermissionsCountry(request: operations.FetchDialingPermissionsCountryRequest, options?: RequestOptions): Promise<operations.FetchDialingPermissionsCountryResponse>;
    /**
     * Retrieve all voice dialing country permissions for this account
     */
    listDialingPermissionsCountry(request: operations.ListDialingPermissionsCountryRequest, options?: RequestOptions): Promise<operations.ListDialingPermissionsCountryResponse>;
}
//# sourceMappingURL=voicev1country.d.ts.map