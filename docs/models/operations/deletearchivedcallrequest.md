# DeleteArchivedCallRequest

## Example Usage

```typescript
import { DeleteArchivedCallRequest } from "twilio-voice/models/operations";
import { RFCDate } from "twilio-voice/types";

let value: DeleteArchivedCallRequest = {
  date: new RFCDate("2024-08-24"),
  sid: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `date`                                                                            | [RFCDate](../../types/rfcdate.md)                                                 | :heavy_check_mark:                                                                | The date of the Call in UTC.                                                      |
| `sid`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The Twilio-provided Call SID that uniquely identifies the Call resource to delete |