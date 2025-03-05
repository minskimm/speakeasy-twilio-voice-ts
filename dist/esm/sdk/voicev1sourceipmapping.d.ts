import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class VoiceV1SourceIpMapping extends ClientSDK {
    createSourceIpMapping(request?: operations.CreateSourceIpMappingCreateSourceIpMappingRequest | undefined, options?: RequestOptions): Promise<operations.CreateSourceIpMappingResponse>;
    listSourceIpMapping(request: operations.ListSourceIpMappingRequest, options?: RequestOptions): Promise<operations.ListSourceIpMappingResponse>;
    fetchSourceIpMapping(request: operations.FetchSourceIpMappingRequest, options?: RequestOptions): Promise<operations.FetchSourceIpMappingResponse>;
    updateSourceIpMapping(request: operations.UpdateSourceIpMappingRequest, options?: RequestOptions): Promise<operations.UpdateSourceIpMappingResponse>;
    deleteSourceIpMapping(request: operations.DeleteSourceIpMappingRequest, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=voicev1sourceipmapping.d.ts.map