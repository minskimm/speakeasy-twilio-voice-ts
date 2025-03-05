<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->