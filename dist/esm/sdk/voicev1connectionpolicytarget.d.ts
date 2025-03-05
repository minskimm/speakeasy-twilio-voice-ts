import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1ConnectionPolicyTarget extends ClientSDK {
    createConnectionPolicyTarget(request: operations.CreateConnectionPolicyTargetRequest, options?: RequestOptions): Promise<operations.CreateConnectionPolicyTargetResponse>;
    listConnectionPolicyTarget(request: operations.ListConnectionPolicyTargetRequest, options?: RequestOptions): Promise<operations.ListConnectionPolicyTargetResponse>;
    fetchConnectionPolicyTarget(request: operations.FetchConnectionPolicyTargetRequest, options?: RequestOptions): Promise<operations.FetchConnectionPolicyTargetResponse>;
    updateConnectionPolicyTarget(request: operations.UpdateConnectionPolicyTargetRequest, options?: RequestOptions): Promise<operations.UpdateConnectionPolicyTargetResponse>;
    deleteConnectionPolicyTarget(request: operations.DeleteConnectionPolicyTargetRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1connectionpolicytarget.d.ts.map