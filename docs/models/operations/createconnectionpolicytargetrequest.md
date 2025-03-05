# CreateConnectionPolicyTargetRequest

## Example Usage

```typescript
import { CreateConnectionPolicyTargetRequest } from "twilio-voice/models/operations";

let value: CreateConnectionPolicyTargetRequest = {
  connectionPolicySid: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionPolicySid`                                                                                                                                                    | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The SID of the Connection Policy that owns the Target.                                                                                                                   |
| `requestBody`                                                                                                                                                            | [operations.CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest](../../models/operations/createconnectionpolicytargetcreateconnectionpolicytargetrequest.md) | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |