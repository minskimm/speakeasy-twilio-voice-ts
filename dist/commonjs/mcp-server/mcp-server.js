"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const core_1 = require("@stricli/core");
const node_process_1 = __importDefault(require("node:process"));
const cli_js_1 = require("./cli.js");
const command_js_1 = require("./cli/start/command.js");
const routes = (0, core_1.buildRouteMap)({
    routes: {
        start: command_js_1.startCommand,
    },
    docs: {
        brief: "MCP server CLI",
    },
});
exports.app = (0, core_1.buildApplication)(routes, {
    name: "mcp",
    versionInfo: {
        currentVersion: "0.0.2",
    },
});
(0, core_1.run)(exports.app, node_process_1.default.argv.slice(2), (0, cli_js_1.buildContext)(node_process_1.default));
//# sourceMappingURL=mcp-server.js.map