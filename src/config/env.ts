type Environment = "development" | "staging" | "production";

// Safely determine environment
const environment: Environment = (() => {
    if (import.meta.env.DEV) return "development";
    if (import.meta.env.MODE === "staging") return "staging";
    return "production";
})();

export const env = {
    environment,
    isDevelopment: environment === "development",
    isProduction: environment === "production",
    isStaging: environment === "staging",
} as const;

export default env;
