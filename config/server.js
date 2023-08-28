module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  url: env("PUBLIC_URL", "https://okraina.qk7p.ru/cms"),
  port: env.int("PORT", 1334),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
