/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
/**
 * Base class for all HTTP errors.
 */
export class HTTPClientError extends Error {
    constructor(message, opts) {
        let msg = message;
        if (opts?.cause) {
            msg += `: ${opts.cause}`;
        }
        super(msg, opts);
        this.name = "HTTPClientError";
        // In older runtimes, the cause field would not have been assigned through
        // the super() call.
        if (typeof this.cause === "undefined") {
            this.cause = opts?.cause;
        }
    }
}
/**
 * An error to capture unrecognised or unexpected errors when making HTTP calls.
 */
export class UnexpectedClientError extends HTTPClientError {
    constructor() {
        super(...arguments);
        this.name = "UnexpectedClientError";
    }
}
/**
 * An error that is raised when any inputs used to create a request are invalid.
 */
export class InvalidRequestError extends HTTPClientError {
    constructor() {
        super(...arguments);
        this.name = "InvalidRequestError";
    }
}
/**
 * An error that is raised when a HTTP request was aborted by the client error.
 */
export class RequestAbortedError extends HTTPClientError {
    constructor() {
        super(...arguments);
        this.name = "RequestAbortedError";
    }
}
/**
 * An error that is raised when a HTTP request timed out due to an AbortSignal
 * signal timeout.
 */
export class RequestTimeoutError extends HTTPClientError {
    constructor() {
        super(...arguments);
        this.name = "RequestTimeoutError";
    }
}
/**
 * An error that is raised when a HTTP client is unable to make a request to
 * a server.
 */
export class ConnectionError extends HTTPClientError {
    constructor() {
        super(...arguments);
        this.name = "ConnectionError";
    }
}
//# sourceMappingURL=httpclienterrors.js.map