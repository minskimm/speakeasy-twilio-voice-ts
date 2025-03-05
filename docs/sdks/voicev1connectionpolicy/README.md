# VoiceV1ConnectionPolicy
(*voiceV1ConnectionPolicy*)

## Overview

### Available Operations

* [createConnectionPolicy](#createconnectionpolicy)
* [listConnectionPolicy](#listconnectionpolicy)
* [fetchConnectionPolicy](#fetchconnectionpolicy)
* [updateConnectionPolicy](#updateconnectionpolicy)
* [deleteConnectionPolicy](#deleteconnectionpolicy)

## createConnectionPolicy

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
  const result = await twilioVoice.voiceV1ConnectionPolicy.createConnectionPolicy({
    friendlyName: "friendly_name",
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
import { voiceV1ConnectionPolicyCreateConnectionPolicy } from "twilio-voice/funcs/voiceV1ConnectionPolicyCreateConnectionPolicy.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyCreateConnectionPolicy(twilioVoice, {
    friendlyName: "friendly_name",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateConnectionPolicyCreateConnectionPolicyRequest](../../models/operations/createconnectionpolicycreateconnectionpolicyrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateConnectionPolicyResponse](../../models/operations/createconnectionpolicyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listConnectionPolicy

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
  const result = await twilioVoice.voiceV1ConnectionPolicy.listConnectionPolicy({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1ConnectionPolicyListConnectionPolicy } from "twilio-voice/funcs/voiceV1ConnectionPolicyListConnectionPolicy.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyListConnectionPolicy(twilioVoice, {});

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
| `request`                                                                                                                                                                      | [operations.ListConnectionPolicyRequest](../../models/operations/listconnectionpolicyrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListConnectionPolicyResponse](../../models/operations/listconnectionpolicyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## fetchConnectionPolicy

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
  const result = await twilioVoice.voiceV1ConnectionPolicy.fetchConnectionPolicy({
    sid: "<id>",
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
import { voiceV1ConnectionPolicyFetchConnectionPolicy } from "twilio-voice/funcs/voiceV1ConnectionPolicyFetchConnectionPolicy.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyFetchConnectionPolicy(twilioVoice, {
    sid: "<id>",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FetchConnectionPolicyRequest](../../models/operations/fetchconnectionpolicyrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.FetchConnectionPolicyResponse](../../models/operations/fetchconnectionpolicyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateConnectionPolicy

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
  const result = await twilioVoice.voiceV1ConnectionPolicy.updateConnectionPolicy({
    sid: "<id>",
    requestBody: {
      friendlyName: "updated_name",
    },
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
import { voiceV1ConnectionPolicyUpdateConnectionPolicy } from "twilio-voice/funcs/voiceV1ConnectionPolicyUpdateConnectionPolicy.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyUpdateConnectionPolicy(twilioVoice, {
    sid: "<id>",
    requestBody: {
      friendlyName: "updated_name",
    },
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConnectionPolicyRequest](../../models/operations/updateconnectionpolicyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.UpdateConnectionPolicyResponse](../../models/operations/updateconnectionpolicyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteConnectionPolicy

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
  await twilioVoice.voiceV1ConnectionPolicy.deleteConnectionPolicy({
    sid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1ConnectionPolicyDeleteConnectionPolicy } from "twilio-voice/funcs/voiceV1ConnectionPolicyDeleteConnectionPolicy.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyDeleteConnectionPolicy(twilioVoice, {
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
| `request`                                                                                                                                                                      | [operations.DeleteConnectionPolicyRequest](../../models/operations/deleteconnectionpolicyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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