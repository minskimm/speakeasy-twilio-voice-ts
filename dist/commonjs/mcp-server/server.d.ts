import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope } from "./scopes.js";
export declare function createMCPServer(deps: {
    logger: ConsoleLogger;
    scopes?: MCPScope[] | undefined;
    serverURL?: string | undefined;
    security?: SDKOptions["security"] | undefined;
    serverIdx?: SDKOptions["serverIdx"] | undefined;
}): McpServer;
//# sourceMappingURL=server.d.ts.map