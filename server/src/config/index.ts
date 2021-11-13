import { config } from "dotenv"

config()

process.env.NODE_ENV = process.env.NODE_ENV || "development"

if (process.env.NODE_ENV === "development") {

    process.env.PORT = process.env.PORT || "8080"

    process.env.DB_HOST = process.env.DB_HOST || "18.221.70.83:27000/test-affinis-medicalcore"

    process.env.DB_NAME = process.env.DB_NAME || "test-affinis-medicalcore"

    process.env.DB_USR = process.env.DB_USR || "affinis"

    process.env.DB_PASS = process.env.DB_PASS || "S1metric4#2018AF"

    process.env.DB_URL = `${process.env.DB_URL}?auto_reconnect=true&connectTimeoutMS=1800000&socketTimeoutMS=1800000`

    process.env.CORS_ORIGINS = process.env.CORS_ORIGINS || "*"

    process.env.SALT_OR_ROUNDS = process.env.SALT_OR_ROUNDS || "10"

    process.env.JSON_WEB_TOKEN_SECRET = process.env.JSON_WEB_TOKEN_SECRET || ".secret!@123"
}
