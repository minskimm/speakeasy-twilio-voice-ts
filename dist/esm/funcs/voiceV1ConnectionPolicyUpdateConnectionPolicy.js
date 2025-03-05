/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { encodeBodyForm, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as operations from "../models/operations/index.js";
import { UpdateConnectionPolicyServerList } from "../models/operations/updateconnectionpolicy.js";
import { APIPromise } from "../types/async.js";
export function voiceV1ConnectionPolicyUpdateConnectionPolicy(client, request, options) {
    return new APIPromise($do(client, request, options));
}
async function $do(client, request, options) {
    const parsed = safeParse(request, (value) => operations.UpdateConnectionPolicyRequest$outboundSchema.parse(value), "Input validation failed");
    if (!parsed.ok) {
        return [parsed, { status: "invalid" }];
    }
    const payload = parsed.value;
    const body = Object.entries(payload.RequestBody || {}).map(([k, v]) => {
        return encodeBodyForm(k, v, { charEncoding: "percent" });
    }).join("&");
    const baseURL = options?.serverURL
        || pathToFunc(UpdateConnectionPolicyServerList[0], {
            charEncoding: "percent",
        })();
    const pathParams = {
        Sid: encodeSimple("Sid", payload.Sid, {
            explode: false,
            charEncoding: "percent",
        }),
    };
    const path = pathToFunc("/v1/ConnectionPolicies/{Sid}")(pathParams);
    const headers = new Headers(compactMap({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
    }));
    const securityInput = await extractSecurity(client._options.security);
    const requestSecurity = resolveGlobalSecurity(securityInput);
    const context = {
        baseURL: baseURL ?? "",
        operationID: "UpdateConnectionPolicy",
        oAuth2Scopes: [],
        resolvedSecurity: requestSecurity,
        securitySource: client._options.security,
        retryConfig: options?.retries
            || client._options.retryConfig
            || { strategy: "none" },
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    };
    const requestRes = client._createRequest(context, {
        security: requestSecurity,
        method: "POST",
        baseURL: baseURL,
        path: path,
        headers: headers,
        body: body,
        timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
    }, options);
    if (!requestRes.ok) {
        return [requestRes, { status: "invalid" }];
    }
    const req = requestRes.value;
    const doResult = await client._do(req, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: context.retryConfig,
        retryCodes: context.retryCodes,
    });
    if (!doResult.ok) {
        return [doResult, { status: "request-error", request: req }];
    }
    const response = doResult.value;
    const responseFields = {
        HttpMeta: { Response: response, Request: req },
    };
    const [result] = await M.match(M.json(200, operations.UpdateConnectionPolicyResponse$inboundSchema, {
        hdrs: true,
        key: "Result",
    }), M.fail("4XX"), M.fail("5XX"))(response, { extraFields: responseFields });
    if (!result.ok) {
        return [result, { status: "complete", request: req, response }];
    }
    return [result, { status: "complete", request: req, response }];
}
//# sourceMappingURL=voiceV1ConnectionPolicyUpdateConnectionPolicy.js.map