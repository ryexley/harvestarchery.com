import { pgTable, bigserial, text, json, timestamp } from "drizzle-orm/pg-core"

export const customer = pgTable("customer", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	name: text("name"),
	email: text("email").unique(),
	alternateEmail: text("email_alternate"),
	phone: text("phone"),
	alternatePhone: text("phone_alternate"),
	addressLine1: text("address_line_1"),
	addressLine2: text("address_line_2"),
	city: text("city"),
	state: text("state"),
	postalCode: text("postal_code"),
	waiverData: json("waiver_data"),
	notes: text("notes"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at"),
})
