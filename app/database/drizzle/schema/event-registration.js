import { pgTable, bigserial, bigint, boolean, date, numeric, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { customer } from "./customer"
import { event } from "./event"

export const eventRegistration = pgTable("event_registration", {
	id: bigserial("id", { mode: "number" }).primaryKey(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	eventId: bigint("event_id", { mode: "number" }).notNull().references(() => event.id),
	customerId: bigint("customer_id", { mode: "number" }).notNull().references(() => customer.id),
	registrationDateTime: timestamp("registration_date_time").notNull(),
	eventOptionId: text("event_option_id").notNull(),
	eventOptionDescription: text("event_option_description").notNull(),
	purchaseQuantity: numeric("purchase_quantity").notNull(),
	amountPaid: numeric("amount_paid").notNull(),
	registrationType: text("registration_type"),
	onlinePaymentId: text("online_payment_id"),
	checkedIn: boolean("checked_in").notNull().default(false),
	checkedInTime: timestamp("checked_in_time"),
	notes: text("notes"),
})
