# CreateSourceIpMappingCreateSourceIpMappingRequest

## Example Usage

```typescript
import { CreateSourceIpMappingCreateSourceIpMappingRequest } from "twilio-voice/models/operations";

let value: CreateSourceIpMappingCreateSourceIpMappingRequest = {
  ipRecordSid: "<id>",
  sipDomainSid: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ipRecordSid`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | The Twilio-provided string that uniquely identifies the IP Record resource to map from. |
| `sipDomainSid`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | The SID of the SIP Domain that the IP Record should be mapped to.                       |