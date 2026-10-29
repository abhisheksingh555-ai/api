import "dotenv/config";

const requiredEnvVars = ["PORT", "MONGODB_URI", "JWT_SECRET", "JWT_EXPIRES_IN"];

const config = {};

for (const key of requiredEnvVars) {
  const value = process.env[key]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  config[key] = value;
}

const port = Number(config.PORT);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid port number");
}

if (config.JWT_SECRET.length < 32) {
  throw new Error("JWT_SECRET must be at least 32 characters");
}

export default Object.freeze({
  PORT: port,
  MONGODB_URI: config.MONGODB_URI,
  JWT_SECRET: config.JWT_SECRET,
  JWT_EXPIRES_IN: config.JWT_EXPIRES_IN,
});
