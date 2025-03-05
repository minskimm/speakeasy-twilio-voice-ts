"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReadableStream = isReadableStream;
function isReadableStream(val) {
    if (typeof val !== "object" || val === null) {
        return false;
    }
    // Check for the presence of methods specific to ReadableStream
    const stream = val;
    // ReadableStream has methods like getReader, cancel, and tee
    return (typeof stream.getReader === "function" &&
        typeof stream.cancel === "function" &&
        typeof stream.tee === "function");
}
//# sourceMappingURL=streams.js.map