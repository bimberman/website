type Environment = "development" | "staging" | "production";

interface ProjectConfig {
    subdomain: string;
    port: number;
    path?: string;
}

interface EnvironmentConfig {
    protocol: "http" | "https";
    domain: string;
    useSubdomains: boolean;
    usePorts: boolean;
    defaultPort?: number;
}

// Safely determine environment
const environment: Environment = (() => {
    if (import.meta.env.DEV) return "development";
    if (import.meta.env.MODE === "staging") return "staging";
    return "production";
})();

const getEnvironmentConfig = (): EnvironmentConfig => {
    switch (environment) {
        case "development":
            return {
                protocol: "http",
                domain: "localhost",
                useSubdomains: false,
                usePorts: true,
                defaultPort: 5173, // Vite's default port
            };
        case "staging":
            return {
                protocol: "https",
                domain: "staging.benimberman.com",
                useSubdomains: true,
                usePorts: false,
            };
        case "production":
            return {
                protocol: "https",
                domain: "benimberman.com",
                useSubdomains: true,
                usePorts: false,
            };
        default:
            // Fallback to development config if something goes wrong
            return {
                protocol: "http",
                domain: "localhost",
                useSubdomains: false,
                usePorts: true,
                defaultPort: 5173, // Vite's default port
            };
    }
};

const buildProjectUrl = (config: ProjectConfig): string => {
    try {
        const envConfig = getEnvironmentConfig();
        const { protocol, domain, useSubdomains, usePorts, defaultPort } =
            envConfig;

        // Build the hostname
        let hostname = domain;
        if (useSubdomains) {
            hostname = `${config.subdomain}.${domain}`;
        }

        // Add port if needed (only in development)
        if (usePorts && environment === "development") {
            // Use the project's port for the project URL, but default to Vite's port for the main app
            const port = config.subdomain === "app" ? defaultPort : config.port;
            hostname = `${hostname}:${port}`;
        }

        // Add path if provided
        const path = config.path ? `/${config.path}` : "";

        return `${protocol}://${hostname}${path}`;
    } catch (error) {
        // Fallback to a safe URL if something goes wrong
        console.error("Error building project URL:", error);
        return `http://localhost:${config.port}`;
    }
};

export const env = {
    environment,
    getProjectUrl: (subdomain: string, port: number, path?: string) =>
        buildProjectUrl({ subdomain, port, path }),
    isDevelopment: environment === "development",
    isProduction: environment === "production",
    isStaging: environment === "staging",
} as const;

export default env;
