import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Rock Archery Challenge (Spring 2024)",
		date: "April 6th & 7th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "trac",
		published: isBefore(Date.now(), new Date("2024-04-07T03:59:59.000Z")),
	}
]
