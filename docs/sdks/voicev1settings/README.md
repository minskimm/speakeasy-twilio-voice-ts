# VoiceV1Settings
(*voiceV1Settings*)

## Overview

### Available Operations

* [fetchDialingPermissionsSettings](#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [updateDialingPermissionsSettings](#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account

## fetchDialingPermissionsSettings

Retrieve voice dialing permissions inheritance for the sub-account

### Example Usage

```typescript
import { TwilioVoice } from "twilio-voice";

const twilioVoice = new TwilioVoice({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await twilioVoice.voiceV1Settings.fetchDialingPermissionsSettings();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1SettingsFetchDialingPermissionsSettings } from "twilio-voice/funcs/voiceV1SettingsFetchDialingPermissionsSettings.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1SettingsFetchDialingPermissionsSettings(twilioVoice);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.FetchDialingPermissionsSettingsResponse](../../models/operations/fetchdialingpermissionssettingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateDialingPermissionsSettings

Update voice dialing permissions inheritance for the sub-account

### Example Usage

```typescript
import { TwilioVoice } from "twilio-voice";

const twilioVoice = new TwilioVoice({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const result = await twilioVoice.voiceV1Settings.updateDialingPermissionsSettings({
    dialingPermissionsInheritance: true,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1SettingsUpdateDialingPermissionsSettings } from "twilio-voice/funcs/voiceV1SettingsUpdateDialingPermissionsSettings.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1SettingsUpdateDialingPermissionsSettings(twilioVoice, {
    dialingPermissionsInheritance: true,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest](../../models/operations/updatedialingpermissionssettingsupdatedialingpermissionssettingsrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |
| `options.serverURL`                                                                                                                                                                      | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | An optional server URL to use.                                                                                                                                                           |

### Response

**Promise\<[operations.UpdateDialingPermissionsSettingsResponse](../../models/operations/updatedialingpermissionssettingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |