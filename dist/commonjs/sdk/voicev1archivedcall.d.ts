import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1ArchivedCall extends ClientSDK {
    /**
     * Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
     */
    deleteArchivedCall(request: operations.DeleteArchivedCallRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1archivedcall.d.ts.map