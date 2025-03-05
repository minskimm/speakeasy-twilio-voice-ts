import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1HighriskSpecialPrefix extends ClientSDK {
    /**
     * Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    listDialingPermissionsHrsPrefixes(request: operations.ListDialingPermissionsHrsPrefixesRequest, options?: RequestOptions): Promise<operations.ListDialingPermissionsHrsPrefixesResponse>;
}
//# sourceMappingURL=voicev1highriskspecialprefix.d.ts.map