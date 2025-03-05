import { TwilioVoiceCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update voice dialing permissions inheritance for the sub-account
 */
export declare function voiceV1SettingsUpdateDialingPermissionsSettings(client: TwilioVoiceCore, request?: operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest | undefined, options?: RequestOptions): APIPromise<Result<operations.UpdateDialingPermissionsSettingsResponse, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=voiceV1SettingsUpdateDialingPermissionsSettings.d.ts.map