import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Harvest Fall Primer at Quarry Rock",
		date: "August 2nd & 3rd (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "primer",
		published: isBefore(Date.now(), new Date("2025-08-03T03:59:59.000Z")),
	}
]
