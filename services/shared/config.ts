const {
  MONGO_DB_CONN_STRING,
  MONGO_DB_DATABASE,
  MONGO_DB_PASSWORD,
  MONGO_DB_USER,
  TWITCH_CLIENT_ID,
  TWITCH_CLIENT_TOKEN,
  TWITCH_CLIENT_USERNAME,
  TWITCH_CLIENT_USER_ID,
  TWITCH_BOT_USERNAME,
  TWITCH_BOT_TOKEN,
  GITHUB_EMAIL_ADDRESS,
  GITHUB_NAME,
  GITHUB_AUTH_TOKEN,
  GITHUB_REPO,
  GITHUB_USERNAME,
  NGROK_AUTH_TOKEN,
  AV_COMMAND_THROTTLE_SECONDS
} = process.env;

const requireConfigMessage = 'REQUIRED CONFIGURATION WAS NOT PROVIDED';

export const mongoDBConnectionString: string =
  MONGO_DB_CONN_STRING || requireConfigMessage;

export const mongoDBDatabase: string =
  MONGO_DB_DATABASE || requireConfigMessage;

export const mongoDBUser: string =
  MONGO_DB_USER || requireConfigMessage;

export const mongoDBPassword: string =
  MONGO_DB_PASSWORD || requireConfigMessage;

export const twitchClientId: string =
  TWITCH_CLIENT_ID || requireConfigMessage;

export const twitchClientToken: string =
  TWITCH_CLIENT_TOKEN || requireConfigMessage;

export const twitchClientUsername: string =
  TWITCH_CLIENT_USERNAME || 'themichaeljolley';

export const twitchClientUserId: string =
  TWITCH_CLIENT_USER_ID || '279965339';

export const twitchBotUsername: string =
  TWITCH_BOT_USERNAME || 'b3_bot';

export const twitchBotToken: string =
  TWITCH_BOT_TOKEN || requireConfigMessage;

export const githubEmailAddress: string =
  GITHUB_EMAIL_ADDRESS || requireConfigMessage;

export const githubName: string =
  GITHUB_NAME || requireConfigMessage;

export const githubAuthToken: string =
  GITHUB_AUTH_TOKEN || requireConfigMessage;

export const githubRepo: string =
  GITHUB_REPO || requireConfigMessage;

export const githubUsername: string =
  GITHUB_USERNAME || requireConfigMessage;

export const ngrokAuthToken: string =
  NGROK_AUTH_TOKEN || requireConfigMessage;

export const avCommandThrottleInSeconds: string =
  AV_COMMAND_THROTTLE_SECONDS  || '5';
