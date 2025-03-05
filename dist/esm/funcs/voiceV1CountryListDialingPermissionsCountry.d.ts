import { TwilioVoiceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve all voice dialing country permissions for this account
 */
export declare function voiceV1CountryListDialingPermissionsCountry(client: TwilioVoiceCore, request: operations.ListDialingPermissionsCountryRequest, options?: RequestOptions): APIPromise<Result<operations.ListDialingPermissionsCountryResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=voiceV1CountryListDialingPermissionsCountry.d.ts.map