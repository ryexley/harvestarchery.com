import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { DataError } from "~/errors/data-error"

export * from "drizzle-orm"
export * as schema from "./schema"

const connectionString = process.env.SUPABASE_DB_URL

export const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client)

export function one(values = []) {
	if (values.length !== 1) {
		return null
	}

	return values[0]
}
