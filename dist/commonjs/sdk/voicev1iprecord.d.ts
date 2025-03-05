import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1IpRecord extends ClientSDK {
    createIpRecord(request?: operations.CreateIpRecordCreateIpRecordRequest | undefined, options?: RequestOptions): Promise<operations.CreateIpRecordResponse>;
    listIpRecord(request: operations.ListIpRecordRequest, options?: RequestOptions): Promise<operations.ListIpRecordResponse>;
    fetchIpRecord(request: operations.FetchIpRecordRequest, options?: RequestOptions): Promise<operations.FetchIpRecordResponse>;
    updateIpRecord(request: operations.UpdateIpRecordRequest, options?: RequestOptions): Promise<operations.UpdateIpRecordResponse>;
    deleteIpRecord(request: operations.DeleteIpRecordRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1iprecord.d.ts.map