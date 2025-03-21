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
exports.ListDialingPermissionsCountryResponse$ = exports.ListDialingPermissionsCountryResponse$outboundSchema = exports.ListDialingPermissionsCountryResponse$inboundSchema = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$ = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema = exports.ListDialingPermissionsCountryMeta$ = exports.ListDialingPermissionsCountryMeta$outboundSchema = exports.ListDialingPermissionsCountryMeta$inboundSchema = exports.ListDialingPermissionsCountryRequest$ = exports.ListDialingPermissionsCountryRequest$outboundSchema = exports.ListDialingPermissionsCountryRequest$inboundSchema = exports.ListDialingPermissionsCountryServerList = void 0;
exports.listDialingPermissionsCountryRequestToJSON = listDialingPermissionsCountryRequestToJSON;
exports.listDialingPermissionsCountryRequestFromJSON = listDialingPermissionsCountryRequestFromJSON;
exports.listDialingPermissionsCountryMetaToJSON = listDialingPermissionsCountryMetaToJSON;
exports.listDialingPermissionsCountryMetaFromJSON = listDialingPermissionsCountryMetaFromJSON;
exports.listDialingPermissionsCountryListDialingPermissionsCountryResponseToJSON = listDialingPermissionsCountryListDialingPermissionsCountryResponseToJSON;
exports.listDialingPermissionsCountryListDialingPermissionsCountryResponseFromJSON = listDialingPermissionsCountryListDialingPermissionsCountryResponseFromJSON;
exports.listDialingPermissionsCountryResponseToJSON = listDialingPermissionsCountryResponseToJSON;
exports.listDialingPermissionsCountryResponseFromJSON = listDialingPermissionsCountryResponseFromJSON;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const schemas_js_1 = require("../../lib/schemas.js");
const components = __importStar(require("../components/index.js"));
exports.ListDialingPermissionsCountryServerList = [
    "https://voice.twilio.com",
];
/** @internal */
exports.ListDialingPermissionsCountryRequest$inboundSchema = z.object({
    IsoCode: z.string().optional(),
    Continent: z.string().optional(),
    CountryCode: z.string().optional(),
    LowRiskNumbersEnabled: z.boolean().optional(),
    HighRiskSpecialNumbersEnabled: z.boolean().optional(),
    HighRiskTollfraudNumbersEnabled: z.boolean().optional(),
    PageSize: z.number().int().optional(),
    Page: z.number().int().optional(),
    PageToken: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "IsoCode": "isoCode",
        "Continent": "continent",
        "CountryCode": "countryCode",
        "LowRiskNumbersEnabled": "lowRiskNumbersEnabled",
        "HighRiskSpecialNumbersEnabled": "highRiskSpecialNumbersEnabled",
        "HighRiskTollfraudNumbersEnabled": "highRiskTollfraudNumbersEnabled",
        "PageSize": "pageSize",
        "Page": "page",
        "PageToken": "pageToken",
    });
});
/** @internal */
exports.ListDialingPermissionsCountryRequest$outboundSchema = z.object({
    isoCode: z.string().optional(),
    continent: z.string().optional(),
    countryCode: z.string().optional(),
    lowRiskNumbersEnabled: z.boolean().optional(),
    highRiskSpecialNumbersEnabled: z.boolean().optional(),
    highRiskTollfraudNumbersEnabled: z.boolean().optional(),
    pageSize: z.number().int().optional(),
    page: z.number().int().optional(),
    pageToken: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        isoCode: "IsoCode",
        continent: "Continent",
        countryCode: "CountryCode",
        lowRiskNumbersEnabled: "LowRiskNumbersEnabled",
        highRiskSpecialNumbersEnabled: "HighRiskSpecialNumbersEnabled",
        highRiskTollfraudNumbersEnabled: "HighRiskTollfraudNumbersEnabled",
        pageSize: "PageSize",
        page: "Page",
        pageToken: "PageToken",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ListDialingPermissionsCountryRequest$;
(function (ListDialingPermissionsCountryRequest$) {
    /** @deprecated use `ListDialingPermissionsCountryRequest$inboundSchema` instead. */
    ListDialingPermissionsCountryRequest$.inboundSchema = exports.ListDialingPermissionsCountryRequest$inboundSchema;
    /** @deprecated use `ListDialingPermissionsCountryRequest$outboundSchema` instead. */
    ListDialingPermissionsCountryRequest$.outboundSchema = exports.ListDialingPermissionsCountryRequest$outboundSchema;
})(ListDialingPermissionsCountryRequest$ || (exports.ListDialingPermissionsCountryRequest$ = ListDialingPermissionsCountryRequest$ = {}));
function listDialingPermissionsCountryRequestToJSON(listDialingPermissionsCountryRequest) {
    return JSON.stringify(exports.ListDialingPermissionsCountryRequest$outboundSchema.parse(listDialingPermissionsCountryRequest));
}
function listDialingPermissionsCountryRequestFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.ListDialingPermissionsCountryRequest$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListDialingPermissionsCountryRequest' from JSON`);
}
/** @internal */
exports.ListDialingPermissionsCountryMeta$inboundSchema = z.object({
    first_page_url: z.string().optional(),
    key: z.string().optional(),
    next_page_url: z.nullable(z.string()).optional(),
    page: z.number().int().optional(),
    page_size: z.number().int().optional(),
    previous_page_url: z.nullable(z.string()).optional(),
    url: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "first_page_url": "firstPageUrl",
        "next_page_url": "nextPageUrl",
        "page_size": "pageSize",
        "previous_page_url": "previousPageUrl",
    });
});
/** @internal */
exports.ListDialingPermissionsCountryMeta$outboundSchema = z.object({
    firstPageUrl: z.string().optional(),
    key: z.string().optional(),
    nextPageUrl: z.nullable(z.string()).optional(),
    page: z.number().int().optional(),
    pageSize: z.number().int().optional(),
    previousPageUrl: z.nullable(z.string()).optional(),
    url: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        firstPageUrl: "first_page_url",
        nextPageUrl: "next_page_url",
        pageSize: "page_size",
        previousPageUrl: "previous_page_url",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ListDialingPermissionsCountryMeta$;
(function (ListDialingPermissionsCountryMeta$) {
    /** @deprecated use `ListDialingPermissionsCountryMeta$inboundSchema` instead. */
    ListDialingPermissionsCountryMeta$.inboundSchema = exports.ListDialingPermissionsCountryMeta$inboundSchema;
    /** @deprecated use `ListDialingPermissionsCountryMeta$outboundSchema` instead. */
    ListDialingPermissionsCountryMeta$.outboundSchema = exports.ListDialingPermissionsCountryMeta$outboundSchema;
})(ListDialingPermissionsCountryMeta$ || (exports.ListDialingPermissionsCountryMeta$ = ListDialingPermissionsCountryMeta$ = {}));
function listDialingPermissionsCountryMetaToJSON(listDialingPermissionsCountryMeta) {
    return JSON.stringify(exports.ListDialingPermissionsCountryMeta$outboundSchema.parse(listDialingPermissionsCountryMeta));
}
function listDialingPermissionsCountryMetaFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.ListDialingPermissionsCountryMeta$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListDialingPermissionsCountryMeta' from JSON`);
}
/** @internal */
exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema = z.object({
    content: z.array(components
        .VoiceV1DialingPermissionsDialingPermissionsCountry$inboundSchema).optional(),
    meta: z.lazy(() => exports.ListDialingPermissionsCountryMeta$inboundSchema)
        .optional(),
});
/** @internal */
exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema = z.object({
    content: z.array(components
        .VoiceV1DialingPermissionsDialingPermissionsCountry$outboundSchema).optional(),
    meta: z.lazy(() => exports.ListDialingPermissionsCountryMeta$outboundSchema)
        .optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ListDialingPermissionsCountryListDialingPermissionsCountryResponse$;
(function (ListDialingPermissionsCountryListDialingPermissionsCountryResponse$) {
    /** @deprecated use `ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema` instead. */
    ListDialingPermissionsCountryListDialingPermissionsCountryResponse$.inboundSchema = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema;
    /** @deprecated use `ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema` instead. */
    ListDialingPermissionsCountryListDialingPermissionsCountryResponse$.outboundSchema = exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema;
})(ListDialingPermissionsCountryListDialingPermissionsCountryResponse$ || (exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$ = ListDialingPermissionsCountryListDialingPermissionsCountryResponse$ = {}));
function listDialingPermissionsCountryListDialingPermissionsCountryResponseToJSON(listDialingPermissionsCountryListDialingPermissionsCountryResponse) {
    return JSON.stringify(exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema
        .parse(listDialingPermissionsCountryListDialingPermissionsCountryResponse));
}
function listDialingPermissionsCountryListDialingPermissionsCountryResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema
        .parse(JSON.parse(x)), `Failed to parse 'ListDialingPermissionsCountryListDialingPermissionsCountryResponse' from JSON`);
}
/** @internal */
exports.ListDialingPermissionsCountryResponse$inboundSchema = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.lazy(() => exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$inboundSchema),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "Headers": "headers",
        "Result": "result",
    });
});
/** @internal */
exports.ListDialingPermissionsCountryResponse$outboundSchema = z.object({
    headers: z.record(z.array(z.string())),
    result: z.lazy(() => exports.ListDialingPermissionsCountryListDialingPermissionsCountryResponse$outboundSchema),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        headers: "Headers",
        result: "Result",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ListDialingPermissionsCountryResponse$;
(function (ListDialingPermissionsCountryResponse$) {
    /** @deprecated use `ListDialingPermissionsCountryResponse$inboundSchema` instead. */
    ListDialingPermissionsCountryResponse$.inboundSchema = exports.ListDialingPermissionsCountryResponse$inboundSchema;
    /** @deprecated use `ListDialingPermissionsCountryResponse$outboundSchema` instead. */
    ListDialingPermissionsCountryResponse$.outboundSchema = exports.ListDialingPermissionsCountryResponse$outboundSchema;
})(ListDialingPermissionsCountryResponse$ || (exports.ListDialingPermissionsCountryResponse$ = ListDialingPermissionsCountryResponse$ = {}));
function listDialingPermissionsCountryResponseToJSON(listDialingPermissionsCountryResponse) {
    return JSON.stringify(exports.ListDialingPermissionsCountryResponse$outboundSchema.parse(listDialingPermissionsCountryResponse));
}
function listDialingPermissionsCountryResponseFromJSON(jsonString) {
    return (0, schemas_js_1.safeParse)(jsonString, (x) => exports.ListDialingPermissionsCountryResponse$inboundSchema.parse(JSON.parse(x)), `Failed to parse 'ListDialingPermissionsCountryResponse' from JSON`);
}
//# sourceMappingURL=listdialingpermissionscountry.js.map