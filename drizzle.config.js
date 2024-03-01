export default {
  schema: "./app/database/drizzle/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.SUPABASE_DB_URL
  }
}
