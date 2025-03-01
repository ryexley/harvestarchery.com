import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Harvest Spring Primer at Quarry Rock",
		date: "April 26th & 27th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "primer",
		published: isBefore(Date.now(), new Date("2025-04-27T03:59:59.000Z")),
	}
]
