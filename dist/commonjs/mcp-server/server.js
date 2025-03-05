"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMCPServer = createMCPServer;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const core_js_1 = require("../core.js");
const scopes_js_1 = require("./scopes.js");
const tools_js_1 = require("./tools.js");
const voiceV1ArchivedCallDeleteArchivedCall_js_1 = require("./tools/voiceV1ArchivedCallDeleteArchivedCall.js");
const voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate_js_1 = require("./tools/voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate.js");
const voiceV1ByocTrunkCreateByocTrunk_js_1 = require("./tools/voiceV1ByocTrunkCreateByocTrunk.js");
const voiceV1ByocTrunkDeleteByocTrunk_js_1 = require("./tools/voiceV1ByocTrunkDeleteByocTrunk.js");
const voiceV1ByocTrunkFetchByocTrunk_js_1 = require("./tools/voiceV1ByocTrunkFetchByocTrunk.js");
const voiceV1ByocTrunkListByocTrunk_js_1 = require("./tools/voiceV1ByocTrunkListByocTrunk.js");
const voiceV1ByocTrunkUpdateByocTrunk_js_1 = require("./tools/voiceV1ByocTrunkUpdateByocTrunk.js");
const voiceV1ConnectionPolicyCreateConnectionPolicy_js_1 = require("./tools/voiceV1ConnectionPolicyCreateConnectionPolicy.js");
const voiceV1ConnectionPolicyDeleteConnectionPolicy_js_1 = require("./tools/voiceV1ConnectionPolicyDeleteConnectionPolicy.js");
const voiceV1ConnectionPolicyFetchConnectionPolicy_js_1 = require("./tools/voiceV1ConnectionPolicyFetchConnectionPolicy.js");
const voiceV1ConnectionPolicyListConnectionPolicy_js_1 = require("./tools/voiceV1ConnectionPolicyListConnectionPolicy.js");
const voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget_js_1 = require("./tools/voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget.js");
const voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget_js_1 = require("./tools/voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget.js");
const voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget_js_1 = require("./tools/voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget.js");
const voiceV1ConnectionPolicyTargetListConnectionPolicyTarget_js_1 = require("./tools/voiceV1ConnectionPolicyTargetListConnectionPolicyTarget.js");
const voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget_js_1 = require("./tools/voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget.js");
const voiceV1ConnectionPolicyUpdateConnectionPolicy_js_1 = require("./tools/voiceV1ConnectionPolicyUpdateConnectionPolicy.js");
const voiceV1CountryFetchDialingPermissionsCountry_js_1 = require("./tools/voiceV1CountryFetchDialingPermissionsCountry.js");
const voiceV1CountryListDialingPermissionsCountry_js_1 = require("./tools/voiceV1CountryListDialingPermissionsCountry.js");
const voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes_js_1 = require("./tools/voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes.js");
const voiceV1IpRecordCreateIpRecord_js_1 = require("./tools/voiceV1IpRecordCreateIpRecord.js");
const voiceV1IpRecordDeleteIpRecord_js_1 = require("./tools/voiceV1IpRecordDeleteIpRecord.js");
const voiceV1IpRecordFetchIpRecord_js_1 = require("./tools/voiceV1IpRecordFetchIpRecord.js");
const voiceV1IpRecordListIpRecord_js_1 = require("./tools/voiceV1IpRecordListIpRecord.js");
const voiceV1IpRecordUpdateIpRecord_js_1 = require("./tools/voiceV1IpRecordUpdateIpRecord.js");
const voiceV1SettingsFetchDialingPermissionsSettings_js_1 = require("./tools/voiceV1SettingsFetchDialingPermissionsSettings.js");
const voiceV1SettingsUpdateDialingPermissionsSettings_js_1 = require("./tools/voiceV1SettingsUpdateDialingPermissionsSettings.js");
const voiceV1SourceIpMappingCreateSourceIpMapping_js_1 = require("./tools/voiceV1SourceIpMappingCreateSourceIpMapping.js");
const voiceV1SourceIpMappingDeleteSourceIpMapping_js_1 = require("./tools/voiceV1SourceIpMappingDeleteSourceIpMapping.js");
const voiceV1SourceIpMappingFetchSourceIpMapping_js_1 = require("./tools/voiceV1SourceIpMappingFetchSourceIpMapping.js");
const voiceV1SourceIpMappingListSourceIpMapping_js_1 = require("./tools/voiceV1SourceIpMappingListSourceIpMapping.js");
const voiceV1SourceIpMappingUpdateSourceIpMapping_js_1 = require("./tools/voiceV1SourceIpMappingUpdateSourceIpMapping.js");
function createMCPServer(deps) {
    const server = new mcp_js_1.McpServer({
        name: "TwilioVoice",
        version: "0.0.2",
    });
    const client = new core_js_1.TwilioVoiceCore({
        security: deps.security,
        serverURL: deps.serverURL,
        serverIdx: deps.serverIdx,
    });
    const scopes = new Set(deps.scopes ?? scopes_js_1.mcpScopes);
    const tool = (0, tools_js_1.createRegisterTool)(deps.logger, server, client, scopes);
    tool(voiceV1ArchivedCallDeleteArchivedCall_js_1.tool$voiceV1ArchivedCallDeleteArchivedCall);
    tool(voiceV1ByocTrunkCreateByocTrunk_js_1.tool$voiceV1ByocTrunkCreateByocTrunk);
    tool(voiceV1ByocTrunkListByocTrunk_js_1.tool$voiceV1ByocTrunkListByocTrunk);
    tool(voiceV1ByocTrunkFetchByocTrunk_js_1.tool$voiceV1ByocTrunkFetchByocTrunk);
    tool(voiceV1ByocTrunkUpdateByocTrunk_js_1.tool$voiceV1ByocTrunkUpdateByocTrunk);
    tool(voiceV1ByocTrunkDeleteByocTrunk_js_1.tool$voiceV1ByocTrunkDeleteByocTrunk);
    tool(voiceV1ConnectionPolicyCreateConnectionPolicy_js_1.tool$voiceV1ConnectionPolicyCreateConnectionPolicy);
    tool(voiceV1ConnectionPolicyListConnectionPolicy_js_1.tool$voiceV1ConnectionPolicyListConnectionPolicy);
    tool(voiceV1ConnectionPolicyFetchConnectionPolicy_js_1.tool$voiceV1ConnectionPolicyFetchConnectionPolicy);
    tool(voiceV1ConnectionPolicyUpdateConnectionPolicy_js_1.tool$voiceV1ConnectionPolicyUpdateConnectionPolicy);
    tool(voiceV1ConnectionPolicyDeleteConnectionPolicy_js_1.tool$voiceV1ConnectionPolicyDeleteConnectionPolicy);
    tool(voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget_js_1.tool$voiceV1ConnectionPolicyTargetCreateConnectionPolicyTarget);
    tool(voiceV1ConnectionPolicyTargetListConnectionPolicyTarget_js_1.tool$voiceV1ConnectionPolicyTargetListConnectionPolicyTarget);
    tool(voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget_js_1.tool$voiceV1ConnectionPolicyTargetFetchConnectionPolicyTarget);
    tool(voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget_js_1.tool$voiceV1ConnectionPolicyTargetUpdateConnectionPolicyTarget);
    tool(voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget_js_1.tool$voiceV1ConnectionPolicyTargetDeleteConnectionPolicyTarget);
    tool(voiceV1CountryFetchDialingPermissionsCountry_js_1.tool$voiceV1CountryFetchDialingPermissionsCountry);
    tool(voiceV1CountryListDialingPermissionsCountry_js_1.tool$voiceV1CountryListDialingPermissionsCountry);
    tool(voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate_js_1.tool$voiceV1BulkCountryUpdateCreateDialingPermissionsCountryBulkUpdate);
    tool(voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes_js_1.tool$voiceV1HighriskSpecialPrefixListDialingPermissionsHrsPrefixes);
    tool(voiceV1SettingsFetchDialingPermissionsSettings_js_1.tool$voiceV1SettingsFetchDialingPermissionsSettings);
    tool(voiceV1SettingsUpdateDialingPermissionsSettings_js_1.tool$voiceV1SettingsUpdateDialingPermissionsSettings);
    tool(voiceV1IpRecordCreateIpRecord_js_1.tool$voiceV1IpRecordCreateIpRecord);
    tool(voiceV1IpRecordListIpRecord_js_1.tool$voiceV1IpRecordListIpRecord);
    tool(voiceV1IpRecordFetchIpRecord_js_1.tool$voiceV1IpRecordFetchIpRecord);
    tool(voiceV1IpRecordUpdateIpRecord_js_1.tool$voiceV1IpRecordUpdateIpRecord);
    tool(voiceV1IpRecordDeleteIpRecord_js_1.tool$voiceV1IpRecordDeleteIpRecord);
    tool(voiceV1SourceIpMappingCreateSourceIpMapping_js_1.tool$voiceV1SourceIpMappingCreateSourceIpMapping);
    tool(voiceV1SourceIpMappingListSourceIpMapping_js_1.tool$voiceV1SourceIpMappingListSourceIpMapping);
    tool(voiceV1SourceIpMappingFetchSourceIpMapping_js_1.tool$voiceV1SourceIpMappingFetchSourceIpMapping);
    tool(voiceV1SourceIpMappingUpdateSourceIpMapping_js_1.tool$voiceV1SourceIpMappingUpdateSourceIpMapping);
    tool(voiceV1SourceIpMappingDeleteSourceIpMapping_js_1.tool$voiceV1SourceIpMappingDeleteSourceIpMapping);
    return server;
}
//# sourceMappingURL=server.js.map