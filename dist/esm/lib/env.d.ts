import * as z from "zod";
export interface Env {
    TWILIOVOICE_USERNAME?: string | undefined;
    TWILIOVOICE_PASSWORD?: string | undefined;
    TWILIOVOICE_DEBUG?: boolean | undefined;
}
export declare const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown>;
/**
 * Reads and validates environment variables.
 */
export declare function env(): Env;
/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export declare function resetEnv(): void;
//# sourceMappingURL=env.d.ts.map