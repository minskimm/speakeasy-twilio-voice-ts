# VoiceV1ArchivedCall
(*voiceV1ArchivedCall*)

## Overview

### Available Operations

* [deleteArchivedCall](#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

## deleteArchivedCall

Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

### Example Usage

```typescript
import { TwilioVoice } from "twilio-voice";
import { RFCDate } from "twilio-voice/types";

const twilioVoice = new TwilioVoice({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  await twilioVoice.voiceV1ArchivedCall.deleteArchivedCall({
    date: new RFCDate("2024-07-27"),
    sid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1ArchivedCallDeleteArchivedCall } from "twilio-voice/funcs/voiceV1ArchivedCallDeleteArchivedCall.js";
import { RFCDate } from "twilio-voice/types";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ArchivedCallDeleteArchivedCall(twilioVoice, {
    date: new RFCDate("2024-07-27"),
    sid: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteArchivedCallRequest](../../models/operations/deletearchivedcallrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |