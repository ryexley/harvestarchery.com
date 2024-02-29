import { pgTable, bigserial, date, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const event = pgTable("event", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	name: varchar("name").notNull().unique(),
	description: text("description"),
	startDate: date("start_date").notNull(),
	endDate: date("end_date").notNull(),
	venueName: varchar("venue_name"),
	venueAddress: varchar("venue_address"),
	venueAddressLine2: varchar("venue_address_line2"),
	venueCity: varchar("venue_city"),
	venueState: varchar("venue_state"),
	venuePostalCode: varchar("venue_zip_code"),
	venueWebsiteUrl: varchar("venue_website_url"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at"),
})
