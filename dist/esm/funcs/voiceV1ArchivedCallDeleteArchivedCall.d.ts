import { TwilioVoiceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
 */
export declare function voiceV1ArchivedCallDeleteArchivedCall(client: TwilioVoiceCore, request: operations.DeleteArchivedCallRequest, options?: RequestOptions): APIPromise<Result<void, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=voiceV1ArchivedCallDeleteArchivedCall.d.ts.map