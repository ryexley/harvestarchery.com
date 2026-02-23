import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Harvest Spring Primer at Quarry Rock",
		date: "April 18th & 19th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "primer",
		published: isBefore(Date.now(), new Date("2026-04-20T03:59:59.000Z")),
	}
]
