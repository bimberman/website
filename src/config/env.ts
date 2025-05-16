interface EnvConfig {
    apiUrl: string;
    environment: string;
}

const env: EnvConfig = {
    apiUrl: import.meta.env.VITE_API_URL || "http://192.168.1.79:5253",
    environment: import.meta.env.VITE_ENV || "development",
};

export default env;
