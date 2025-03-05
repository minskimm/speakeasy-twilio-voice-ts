import { TwilioVoiceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
 */
export declare function voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes(client: TwilioVoiceCore, request: operations.ListDialingPermissionsHrsPrefixesRequest, options?: RequestOptions): APIPromise<Result<operations.ListDialingPermissionsHrsPrefixesResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.d.ts.map