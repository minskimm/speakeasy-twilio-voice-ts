# DeleteConnectionPolicyTargetRequest

## Example Usage

```typescript
import { DeleteConnectionPolicyTargetRequest } from "twilio-voice/models/operations";

let value: DeleteConnectionPolicyTargetRequest = {
  connectionPolicySid: "<id>",
  sid: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `connectionPolicySid`                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The SID of the Connection Policy that owns the Target.                       |
| `sid`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The unique string that we created to identify the Target resource to delete. |