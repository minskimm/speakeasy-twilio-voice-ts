import { TwilioVoiceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Retrieve voice dialing country permissions identified by the given ISO country code
 */
export declare function voiceV1CountryFetchDialingPermissionsCountry(client: TwilioVoiceCore, request: operations.FetchDialingPermissionsCountryRequest, options?: RequestOptions): APIPromise<Result<operations.FetchDialingPermissionsCountryResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=voiceV1CountryFetchDialingPermissionsCountry.d.ts.map