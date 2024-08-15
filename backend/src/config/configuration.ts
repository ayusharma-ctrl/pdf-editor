// access env variables
export const AppConfig = () => ({
  port: process.env.PORT,
  app_secret: process.env.APP_SECRET,
  allowed_origins: process.env.ALLOWED_ORIGINS,
});
