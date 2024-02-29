import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

export * from "./schema"

const connectionString = process.env.SUPABASE_DB_URL

export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)
