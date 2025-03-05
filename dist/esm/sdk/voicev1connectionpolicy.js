/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { voiceV1ConnectionPolicyCreateConnectionPolicy } from "../funcs/voiceV1ConnectionPolicyCreateConnectionPolicy.js";
import { voiceV1ConnectionPolicyDeleteConnectionPolicy } from "../funcs/voiceV1ConnectionPolicyDeleteConnectionPolicy.js";
import { voiceV1ConnectionPolicyFetchConnectionPolicy } from "../funcs/voiceV1ConnectionPolicyFetchConnectionPolicy.js";
import { voiceV1ConnectionPolicyListConnectionPolicy } from "../funcs/voiceV1ConnectionPolicyListConnectionPolicy.js";
import { voiceV1ConnectionPolicyUpdateConnectionPolicy } from "../funcs/voiceV1ConnectionPolicyUpdateConnectionPolicy.js";
import { ClientSDK } from "../lib/sdks.js";
import { unwrapAsync } from "../types/fp.js";
export class VoiceV1ConnectionPolicy extends ClientSDK {
    async createConnectionPolicy(request, options) {
        return unwrapAsync(voiceV1ConnectionPolicyCreateConnectionPolicy(this, request, options));
    }
    async listConnectionPolicy(request, options) {
        return unwrapAsync(voiceV1ConnectionPolicyListConnectionPolicy(this, request, options));
    }
    async fetchConnectionPolicy(request, options) {
        return unwrapAsync(voiceV1ConnectionPolicyFetchConnectionPolicy(this, request, options));
    }
    async updateConnectionPolicy(request, options) {
        return unwrapAsync(voiceV1ConnectionPolicyUpdateConnectionPolicy(this, request, options));
    }
    async deleteConnectionPolicy(request, options) {
        return unwrapAsync(voiceV1ConnectionPolicyDeleteConnectionPolicy(this, request, options));
    }
}
//# sourceMappingURL=voicev1connectionpolicy.js.map