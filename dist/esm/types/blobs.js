/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";
export const blobLikeSchema = z.custom(isBlobLike, {
    message: "expected a Blob, File or Blob-like object",
    fatal: true,
});
export function isBlobLike(val) {
    if (val instanceof Blob) {
        return true;
    }
    if (typeof val !== "object" || val == null || !(Symbol.toStringTag in val)) {
        return false;
    }
    const name = val[Symbol.toStringTag];
    if (typeof name !== "string") {
        return false;
    }
    if (name !== "Blob" && name !== "File") {
        return false;
    }
    return "stream" in val && typeof val.stream === "function";
}
//# sourceMappingURL=blobs.js.map