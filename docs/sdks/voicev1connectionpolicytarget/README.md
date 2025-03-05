# VoiceV1ConnectionPolicyTarget
(*voiceV1ConnectionPolicyTarget*)

## Overview

### Available Operations

* [createConnectionPolicyTarget](#createconnectionpolicytarget)
* [listConnectionPolicyTarget](#listconnectionpolicytarget)
* [fetchConnectionPolicyTarget](#fetchconnectionpolicytarget)
* [updateConnectionPolicyTarget](#updateconnectionpolicytarget)
* [deleteConnectionPolicyTarget](#deleteconnectionpolicytarget)

## createConnectionPolicyTarget

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
  const result = await twilioVoice.voiceV1ConnectionPolicyTarget.createConnectionPolicyTarget({
    connectionPolicySid: "<id>",
    requestBody: {
      target: "sip:sip-box.com:1234",
      friendlyName: "friendly_name",
      priority: 1,
      weight: 20,
      enabled: true,
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
import { voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget } from "twilio-voice/funcs/voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget(twilioVoice, {
    connectionPolicySid: "<id>",
    requestBody: {
      target: "sip:sip-box.com:1234",
      friendlyName: "friendly_name",
      priority: 1,
      weight: 20,
      enabled: true,
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
| `request`                                                                                                                                                                      | [operations.CreateConnectionPolicyTargetRequest](../../models/operations/createconnectionpolicytargetrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateConnectionPolicyTargetResponse](../../models/operations/createconnectionpolicytargetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listConnectionPolicyTarget

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
  const result = await twilioVoice.voiceV1ConnectionPolicyTarget.listConnectionPolicyTarget({
    connectionPolicySid: "<id>",
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
import { voiceV1ConnectionPolicyTargetListConnectionPolicyTarget } from "twilio-voice/funcs/voiceV1ConnectionPolicyTargetListConnectionPolicyTarget.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyTargetListConnectionPolicyTarget(twilioVoice, {
    connectionPolicySid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListConnectionPolicyTargetRequest](../../models/operations/listconnectionpolicytargetrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListConnectionPolicyTargetResponse](../../models/operations/listconnectionpolicytargetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## fetchConnectionPolicyTarget

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
  const result = await twilioVoice.voiceV1ConnectionPolicyTarget.fetchConnectionPolicyTarget({
    connectionPolicySid: "<id>",
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
import { voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget } from "twilio-voice/funcs/voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget(twilioVoice, {
    connectionPolicySid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.FetchConnectionPolicyTargetRequest](../../models/operations/fetchconnectionpolicytargetrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.FetchConnectionPolicyTargetResponse](../../models/operations/fetchconnectionpolicytargetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateConnectionPolicyTarget

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
  const result = await twilioVoice.voiceV1ConnectionPolicyTarget.updateConnectionPolicyTarget({
    connectionPolicySid: "<id>",
    sid: "<id>",
    requestBody: {
      friendlyName: "updated_name",
      target: "sip:sip-updated.com:4321",
      priority: 2,
      weight: 10,
      enabled: false,
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
import { voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget } from "twilio-voice/funcs/voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget(twilioVoice, {
    connectionPolicySid: "<id>",
    sid: "<id>",
    requestBody: {
      friendlyName: "updated_name",
      target: "sip:sip-updated.com:4321",
      priority: 2,
      weight: 10,
      enabled: false,
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
| `request`                                                                                                                                                                      | [operations.UpdateConnectionPolicyTargetRequest](../../models/operations/updateconnectionpolicytargetrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.UpdateConnectionPolicyTargetResponse](../../models/operations/updateconnectionpolicytargetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteConnectionPolicyTarget

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
  await twilioVoice.voiceV1ConnectionPolicyTarget.deleteConnectionPolicyTarget({
    connectionPolicySid: "<id>",
    sid: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { TwilioVoiceCore } from "twilio-voice/core.js";
import { voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget } from "twilio-voice/funcs/voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget.js";

// Use `TwilioVoiceCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const twilioVoice = new TwilioVoiceCore({
  security: {
    username: "",
    password: "",
  },
});

async function run() {
  const res = await voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget(twilioVoice, {
    connectionPolicySid: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteConnectionPolicyTargetRequest](../../models/operations/deleteconnectionpolicytargetrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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