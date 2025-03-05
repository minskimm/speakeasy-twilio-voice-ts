# ListByocTrunkRequest

## Example Usage

```typescript
import { ListByocTrunkRequest } from "twilio-voice/models/operations";

let value: ListByocTrunkRequest = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | How many resources to return in each list page. The default is 50, and the maximum is 1000. |
| `page`                                                                                      | *number*                                                                                    | :heavy_minus_sign:                                                                          | The page index. This value is simply for client state.                                      |
| `pageToken`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | The page token. This is provided by the API.                                                |