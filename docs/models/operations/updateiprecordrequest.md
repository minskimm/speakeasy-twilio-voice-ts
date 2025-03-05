# UpdateIpRecordRequest

## Example Usage

```typescript
import { UpdateIpRecordRequest } from "twilio-voice/models/operations";

let value: UpdateIpRecordRequest = {
  sid: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `sid`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The Twilio-provided string that uniquely identifies the IP Record resource to update.                            |
| `requestBody`                                                                                                    | [operations.UpdateIpRecordUpdateIpRecordRequest](../../models/operations/updateiprecordupdateiprecordrequest.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |