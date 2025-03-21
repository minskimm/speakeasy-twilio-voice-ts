import { SDKOptions } from "../../../lib/config.js";
import { LocalContext } from "../../cli.js";
import { ConsoleLoggerLevel } from "../../console-logger.js";
import { MCPScope } from "../../scopes.js";
interface StartCommandFlags {
    readonly transport: "stdio" | "sse";
    readonly port: number;
    readonly scope?: MCPScope[];
    readonly username?: string | undefined;
    readonly password?: string | undefined;
    readonly "server-url"?: string;
    readonly "server-index"?: SDKOptions["serverIdx"];
    readonly "log-level": ConsoleLoggerLevel;
    readonly env?: [string, string][];
}
export declare function main(this: LocalContext, flags: StartCommandFlags): Promise<void>;
export {};
//# sourceMappingURL=impl.d.ts.map