import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Rock Archery Challenge (Fall 2024)",
		date: "September 14th & 15th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "trac",
		published: isBefore(Date.now(), new Date("2024-09-15T03:59:59.000Z")),
	}
]
