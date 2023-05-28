import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Rock Archery Challenge",
		date: "August 19th & 20th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "trac",
		published: isBefore(Date.now(), new Date("2023-08-21T03:59:59.000Z")),
	}
]
