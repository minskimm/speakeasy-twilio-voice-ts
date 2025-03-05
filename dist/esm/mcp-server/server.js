/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TwilioVoiceCore } from "../core.js";
import { mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$voiceV1ArchivedCallDeleteArchivedCall } from "./tools/voiceV1ArchivedCallDeleteArchivedCall.js";
import { tool$voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate } from "./tools/voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js";
import { tool$voiceV1ByocTrunkCreateByocTrunk } from "./tools/voiceV1ByocTrunkCreateByocTrunk.js";
import { tool$voiceV1ByocTrunkDeleteByocTrunk } from "./tools/voiceV1ByocTrunkDeleteByocTrunk.js";
import { tool$voiceV1ByocTrunkFetchByocTrunk } from "./tools/voiceV1ByocTrunkFetchByocTrunk.js";
import { tool$voiceV1ByocTrunkListByocTrunk } from "./tools/voiceV1ByocTrunkListByocTrunk.js";
import { tool$voiceV1ByocTrunkUpdateByocTrunk } from "./tools/voiceV1ByocTrunkUpdateByocTrunk.js";
import { tool$voiceV1ConnectionPolicyCreateConnectionPolicy } from "./tools/voiceV1ConnectionPolicyCreateConnectionPolicy.js";
import { tool$voiceV1ConnectionPolicyDeleteConnectionPolicy } from "./tools/voiceV1ConnectionPolicyDeleteConnectionPolicy.js";
import { tool$voiceV1ConnectionPolicyFetchConnectionPolicy } from "./tools/voiceV1ConnectionPolicyFetchConnectionPolicy.js";
import { tool$voiceV1ConnectionPolicyListConnectionPolicy } from "./tools/voiceV1ConnectionPolicyListConnectionPolicy.js";
import { tool$voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget } from "./tools/voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget.js";
import { tool$voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget } from "./tools/voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget.js";
import { tool$voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget } from "./tools/voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget.js";
import { tool$voiceV1ConnectionPolicyTargetListConnectionPolicyTarget } from "./tools/voiceV1ConnectionPolicyTargetListConnectionPolicyTarget.js";
import { tool$voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget } from "./tools/voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget.js";
import { tool$voiceV1ConnectionPolicyUpdateConnectionPolicy } from "./tools/voiceV1ConnectionPolicyUpdateConnectionPolicy.js";
import { tool$voiceV1CountryFetchDialingPermissionsCountry } from "./tools/voiceV1CountryFetchDialingPermissionsCountry.js";
import { tool$voiceV1CountryListDialingPermissionsCountry } from "./tools/voiceV1CountryListDialingPermissionsCountry.js";
import { tool$voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes } from "./tools/voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.js";
import { tool$voiceV1IpRecordCreateIpRecord } from "./tools/voiceV1IpRecordCreateIpRecord.js";
import { tool$voiceV1IpRecordDeleteIpRecord } from "./tools/voiceV1IpRecordDeleteIpRecord.js";
import { tool$voiceV1IpRecordFetchIpRecord } from "./tools/voiceV1IpRecordFetchIpRecord.js";
import { tool$voiceV1IpRecordListIpRecord } from "./tools/voiceV1IpRecordListIpRecord.js";
import { tool$voiceV1IpRecordUpdateIpRecord } from "./tools/voiceV1IpRecordUpdateIpRecord.js";
import { tool$voiceV1SettingsFetchDialingPermissionsSettings } from "./tools/voiceV1SettingsFetchDialingPermissionsSettings.js";
import { tool$voiceV1SettingsUpdateDialingPermissionsSettings } from "./tools/voiceV1SettingsUpdateDialingPermissionsSettings.js";
import { tool$voiceV1SourceIpMappingCreateSourceIpMapping } from "./tools/voiceV1SourceIpMappingCreateSourceIpMapping.js";
import { tool$voiceV1SourceIpMappingDeleteSourceIpMapping } from "./tools/voiceV1SourceIpMappingDeleteSourceIpMapping.js";
import { tool$voiceV1SourceIpMappingFetchSourceIpMapping } from "./tools/voiceV1SourceIpMappingFetchSourceIpMapping.js";
import { tool$voiceV1SourceIpMappingListSourceIpMapping } from "./tools/voiceV1SourceIpMappingListSourceIpMapping.js";
import { tool$voiceV1SourceIpMappingUpdateSourceIpMapping } from "./tools/voiceV1SourceIpMappingUpdateSourceIpMapping.js";
export function createMCPServer(deps) {
    const server = new McpServer({
        name: "TwilioVoice",
        version: "0.0.2",
    });
    const client = new TwilioVoiceCore({
        security: deps.security,
        serverURL: deps.serverURL,
        serverIdx: deps.serverIdx,
    });
    const scopes = new Set(deps.scopes ?? mcpScopes);
    const tool = createRegisterTool(deps.logger, server, client, scopes);
    tool(tool$voiceV1ArchivedCallDeleteArchivedCall);
    tool(tool$voiceV1ByocTrunkCreateByocTrunk);
    tool(tool$voiceV1ByocTrunkListByocTrunk);
    tool(tool$voiceV1ByocTrunkFetchByocTrunk);
    tool(tool$voiceV1ByocTrunkUpdateByocTrunk);
    tool(tool$voiceV1ByocTrunkDeleteByocTrunk);
    tool(tool$voiceV1ConnectionPolicyCreateConnectionPolicy);
    tool(tool$voiceV1ConnectionPolicyListConnectionPolicy);
    tool(tool$voiceV1ConnectionPolicyFetchConnectionPolicy);
    tool(tool$voiceV1ConnectionPolicyUpdateConnectionPolicy);
    tool(tool$voiceV1ConnectionPolicyDeleteConnectionPolicy);
    tool(tool$voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget);
    tool(tool$voiceV1ConnectionPolicyTargetListConnectionPolicyTarget);
    tool(tool$voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget);
    tool(tool$voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget);
    tool(tool$voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget);
    tool(tool$voiceV1CountryFetchDialingPermissionsCountry);
    tool(tool$voiceV1CountryListDialingPermissionsCountry);
    tool(tool$voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate);
    tool(tool$voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes);
    tool(tool$voiceV1SettingsFetchDialingPermissionsSettings);
    tool(tool$voiceV1SettingsUpdateDialingPermissionsSettings);
    tool(tool$voiceV1IpRecordCreateIpRecord);
    tool(tool$voiceV1IpRecordListIpRecord);
    tool(tool$voiceV1IpRecordFetchIpRecord);
    tool(tool$voiceV1IpRecordUpdateIpRecord);
    tool(tool$voiceV1IpRecordDeleteIpRecord);
    tool(tool$voiceV1SourceIpMappingCreateSourceIpMapping);
    tool(tool$voiceV1SourceIpMappingListSourceIpMapping);
    tool(tool$voiceV1SourceIpMappingFetchSourceIpMapping);
    tool(tool$voiceV1SourceIpMappingUpdateSourceIpMapping);
    tool(tool$voiceV1SourceIpMappingDeleteSourceIpMapping);
    return server;
}
//# sourceMappingURL=server.js.map