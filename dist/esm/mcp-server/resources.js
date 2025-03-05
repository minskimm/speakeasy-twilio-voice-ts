/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { isAsyncIterable, isBinaryData, valueToBase64 } from "./shared.js";
export async function formatResult(result, uri, init) {
    if (!result.ok) {
        throw result.error;
    }
    const { value } = result;
    if (typeof value === "undefined") {
        return { contents: [] };
    }
    const { response } = init;
    const mimeType = response?.headers.get("content-type") ?? "";
    let contents = [];
    if (mimeType.search(/\bjson\b/g)) {
        contents = [{ uri: uri.toString(), mimeType, text: JSON.stringify(value) }];
    }
    else if (mimeType.startsWith("text/event-stream")
        && isAsyncIterable(value)) {
        contents = [
            {
                uri: uri.toString(),
                mimeType: "application/json",
                text: await stringifySSEToJSON(value),
            },
        ];
    }
    else if (mimeType.startsWith("text/") && typeof value === "string") {
        contents = [{ uri: uri.toString(), mimeType, text: value }];
    }
    else if (isBinaryData(value)) {
        const blob = await valueToBase64(value);
        contents = blob == null ? [] : [{ uri: uri.toString(), blob, mimeType }];
    }
    else {
        throw new Error(`Unsupported content type: "${mimeType}"`);
    }
    return { contents };
}
async function stringifySSEToJSON(value) {
    const payloads = [];
    for await (const chunk of value) {
        payloads.push(chunk);
    }
    return JSON.stringify(payloads);
}
//# sourceMappingURL=resources.js.map