"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget = voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget;
const encodings_js_1 = require("../lib/encodings.js");
const M = __importStar(require("../lib/matchers.js"));
const primitives_js_1 = require("../lib/primitives.js");
const schemas_js_1 = require("../lib/schemas.js");
const security_js_1 = require("../lib/security.js");
const url_js_1 = require("../lib/url.js");
const fetchconnectionpolicytarget_js_1 = require("../models/operations/fetchconnectionpolicytarget.js");
const operations = __importStar(require("../models/operations/index.js"));
const async_js_1 = require("../types/async.js");
function voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget(client, request, options) {
    return new async_js_1.APIPromise($do(client, request, options));
}
async function $do(client, request, options) {
    const parsed = (0, schemas_js_1.safeParse)(request, (value) => operations.FetchConnectionPolicyTargetRequest$outboundSchema.parse(value), "Input validation failed");
    if (!parsed.ok) {
        return [parsed, { status: "invalid" }];
    }
    const payload = parsed.value;
    const body = null;
    const baseURL = options?.serverURL
        || (0, url_js_1.pathToFunc)(fetchconnectionpolicytarget_js_1.FetchConnectionPolicyTargetServerList[0], {
            charEncoding: "percent",
        })();
    const pathParams = {
        ConnectionPolicySid: (0, encodings_js_1.encodeSimple)("ConnectionPolicySid", payload.ConnectionPolicySid, { explode: false, charEncoding: "percent" }),
        Sid: (0, encodings_js_1.encodeSimple)("Sid", payload.Sid, {
            explode: false,
            charEncoding: "percent",
        }),
    };
    const path = (0, url_js_1.pathToFunc)("/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}")(pathParams);
    const headers = new Headers((0, primitives_js_1.compactMap)({
        Accept: "application/json",
    }));
    const securityInput = await (0, security_js_1.extractSecurity)(client._options.security);
    const requestSecurity = (0, security_js_1.resolveGlobalSecurity)(securityInput);
    const context = {
        baseURL: baseURL ?? "",
        operationID: "FetchConnectionPolicyTarget",
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
        method: "GET",
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
    const [result] = await M.match(M.json(200, operations.FetchConnectionPolicyTargetResponse$inboundSchema, {
        hdrs: true,
        key: "Result",
    }), M.fail("4XX"), M.fail("5XX"))(response, { extraFields: responseFields });
    if (!result.ok) {
        return [result, { status: "complete", request: req, response }];
    }
    return [result, { status: "complete", request: req, response }];
}
//# sourceMappingURL=voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget.js.map