/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
import { bytesToBase64 } from "../lib/base64.js";
export async function consumeStream(stream) {
    const reader = stream.getReader();
    const chunks = [];
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (value != null)
                chunks.push(value);
            if (done)
                break;
        }
    }
    finally {
        reader.releaseLock();
    }
    return new Uint8Array(await new Blob(chunks).arrayBuffer());
}
export function isAsyncIterable(value) {
    return (typeof value === "object" && value != null && Symbol.asyncIterator in value);
}
export function isBinaryData(value) {
    return (value instanceof Uint8Array
        || value instanceof ArrayBuffer
        || value instanceof Blob
        || value instanceof ReadableStream
        || value instanceof Response
        || typeof value === "string");
}
const base64Schema = z.string().base64();
export async function valueToBase64(value) {
    if (value == null) {
        return null;
    }
    else if (value instanceof Uint8Array) {
        return bytesToBase64(value);
    }
    else if (value instanceof ArrayBuffer) {
        return bytesToBase64(new Uint8Array(value));
    }
    else if (value instanceof Response || value instanceof Blob) {
        return bytesToBase64(new Uint8Array(await value.arrayBuffer()));
    }
    else if (value instanceof ReadableStream) {
        return bytesToBase64(await consumeStream(value));
    }
    else if (typeof value === "string") {
        return base64Schema.parse(value);
    }
    else {
        value;
        throw new Error(`Unsupported image value type: ${typeof value}`);
    }
}
//# sourceMappingURL=shared.js.map