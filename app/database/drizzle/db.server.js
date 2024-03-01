import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

export * from "drizzle-orm"
export * as schema from "./schema"

const connectionString = process.env.SUPABASE_DB_URL

export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)

/**
* Adapted from: https://github.com/drizzle-team/drizzle-orm/discussions/1499#discussioncomment-8208985
*/
export function one(values = []) {
  return (values.length !== 1) ? null : values[0]
}
