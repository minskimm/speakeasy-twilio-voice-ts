import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1ByocTrunk extends ClientSDK {
    createByocTrunk(request?: operations.CreateByocTrunkCreateByocTrunkRequest | undefined, options?: RequestOptions): Promise<operations.CreateByocTrunkResponse>;
    listByocTrunk(request: operations.ListByocTrunkRequest, options?: RequestOptions): Promise<operations.ListByocTrunkResponse>;
    fetchByocTrunk(request: operations.FetchByocTrunkRequest, options?: RequestOptions): Promise<operations.FetchByocTrunkResponse>;
    updateByocTrunk(request: operations.UpdateByocTrunkRequest, options?: RequestOptions): Promise<operations.UpdateByocTrunkResponse>;
    deleteByocTrunk(request: operations.DeleteByocTrunkRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1byoctrunk.d.ts.map