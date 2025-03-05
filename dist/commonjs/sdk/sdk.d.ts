import { ClientSDK } from "../lib/sdks.js";
import { VoiceV1ArchivedCall } from "./voicev1archivedcall.js";
import { VoiceV1BulkCountryUpdate } from "./voicev1bulkcountryupdate.js";
import { VoiceV1ByocTrunk } from "./voicev1byoctrunk.js";
import { VoiceV1ConnectionPolicy } from "./voicev1connectionpolicy.js";
import { VoiceV1ConnectionPolicyTarget } from "./voicev1connectionpolicytarget.js";
import { VoiceV1Country } from "./voicev1country.js";
import { VoiceV1HighriskSpecialPrefix } from "./voicev1highriskspecialprefix.js";
import { VoiceV1IpRecord } from "./voicev1iprecord.js";
import { VoiceV1Settings } from "./voicev1settings.js";
import { VoiceV1SourceIpMapping } from "./voicev1sourceipmapping.js";
export declare class TwilioVoice extends ClientSDK {
    private _voiceV1ArchivedCall?;
    get voiceV1ArchivedCall(): VoiceV1ArchivedCall;
    private _voiceV1ByocTrunk?;
    get voiceV1ByocTrunk(): VoiceV1ByocTrunk;
    private _voiceV1ConnectionPolicy?;
    get voiceV1ConnectionPolicy(): VoiceV1ConnectionPolicy;
    private _voiceV1ConnectionPolicyTarget?;
    get voiceV1ConnectionPolicyTarget(): VoiceV1ConnectionPolicyTarget;
    private _voiceV1Country?;
    get voiceV1Country(): VoiceV1Country;
    private _voiceV1BulkCountryUpdate?;
    get voiceV1BulkCountryUpdate(): VoiceV1BulkCountryUpdate;
    private _voiceV1HighriskSpecialPrefix?;
    get voiceV1HighriskSpecialPrefix(): VoiceV1HighriskSpecialPrefix;
    private _voiceV1Settings?;
    get voiceV1Settings(): VoiceV1Settings;
    private _voiceV1IpRecord?;
    get voiceV1IpRecord(): VoiceV1IpRecord;
    private _voiceV1SourceIpMapping?;
    get voiceV1SourceIpMapping(): VoiceV1SourceIpMapping;
}
//# sourceMappingURL=sdk.d.ts.map