# UpdateSourceIpMappingRequest

## Example Usage

```typescript
import { UpdateSourceIpMappingRequest } from "twilio-voice/models/operations";

let value: UpdateSourceIpMappingRequest = {
  sid: "<id>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sid`                                                                                                                                        | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The Twilio-provided string that uniquely identifies the IP Record resource to update.                                                        |
| `requestBody`                                                                                                                                | [operations.UpdateSourceIpMappingUpdateSourceIpMappingRequest](../../models/operations/updatesourceipmappingupdatesourceipmappingrequest.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |