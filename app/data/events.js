import isBefore from "date-fns/isBefore"

export const events = [
	{
		title: "The Rock Archery Challenge (aka \"Mini TAC\")",
		date: "March 25th & 26th (Saturday & Sunday)",
		time: "8:00am to 4:00pm each day",
		detailsKey: "trac",
		published: isBefore(Date.now(), new Date("2023-03-24T11:59:59")),
	}
]
