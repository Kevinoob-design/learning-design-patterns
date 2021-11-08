namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "staging"
        PORT: string
        DB_HOST: string
        DB_NAME: string
        DB_USR: string
        DB_PASS: string
        DB_URL: string
        CORS_ORIGINS: string
        BCRYPT_SALT_OR_ROUNDS: string
        JSON_WEB_TOKEN_SECRET: string
    }
}
