# VoiceV1BulkCountryUpdate
(*voiceV1BulkCountryUpdate*)

## Overview

### Available Operations

* [createDialingPermissionsCountryBulkUpdate](#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

## createDialingPermissionsCountryBulkUpdate

Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

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
  const result = await twilioVoice.voiceV1BulkCountryUpdate.createDialingPermissionsCountryBulkUpdate({
    updateRequest: "[ { \"iso_code\": \"GB\", \"low_risk_numbers\": \"Enabled\", \"high_risk_special_numbers\":\"Enabled\", \"high_risk_irsf_numbers\": \"Enabled\" } ]",
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
import { voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate } from "twilio-voice/funcs/voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate(twilioVoice, {
    updateRequest: "[ { \"iso_code\": \"GB\", \"low_risk_numbers\": \"Enabled\", \"high_risk_special_numbers\":\"Enabled\", \"high_risk_irsf_numbers\": \"Enabled\" } ]",
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

| Parameter                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                    | [operations.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest](../../models/operations/createdialingpermissionscountrybulkupdatecreatedialingpermissionscountrybulkupdaterequest.md) | :heavy_check_mark:                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                               |
| `options.retries`                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                             |
| `options.serverURL`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | An optional server URL to use.                                                                                                                                                                                               |

### Response

**Promise\<[operations.CreateDialingPermissionsCountryBulkUpdateResponse](../../models/operations/createdialingpermissionscountrybulkupdateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |