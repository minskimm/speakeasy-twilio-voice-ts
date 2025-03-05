import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1ConnectionPolicy extends ClientSDK {
    createConnectionPolicy(request?: operations.CreateConnectionPolicyCreateConnectionPolicyRequest | undefined, options?: RequestOptions): Promise<operations.CreateConnectionPolicyResponse>;
    listConnectionPolicy(request: operations.ListConnectionPolicyRequest, options?: RequestOptions): Promise<operations.ListConnectionPolicyResponse>;
    fetchConnectionPolicy(request: operations.FetchConnectionPolicyRequest, options?: RequestOptions): Promise<operations.FetchConnectionPolicyResponse>;
    updateConnectionPolicy(request: operations.UpdateConnectionPolicyRequest, options?: RequestOptions): Promise<operations.UpdateConnectionPolicyResponse>;
    deleteConnectionPolicy(request: operations.DeleteConnectionPolicyRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1connectionpolicy.d.ts.map