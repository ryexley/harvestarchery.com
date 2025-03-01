import { Link } from "@remix-run/react"
import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { CallUs } from "~/components/call-us-link"
import { useId } from "~/hooks/use-id"
import { pages } from "~/urls"
import { isNotEmpty, windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { events } from "~/data/events"
import { styled, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle("Events")
})

const EventList = styled("ul", {
	listStyle: "none",
	margin: "2rem 0",
	padding: "0",
})
const Event = styled("li", {
	borderLeft: `0.3125rem solid $blackA7`,
	paddingLeft: "2rem",

	ul: {
		marginLeft: "1.5rem",
	}
})
const EventTitle = styled("h3")
const EventDate = styled("h4", {
	fontSize: "1.5rem",
	fontWeight: "normal"
})
const EventTime = styled("h4", {
	fontSize: "1.25rem",
	fontWeight: "normal"
})
const EventDescription = styled("p")
const NoEvents = styled("p", {
	color: "$blackA9",
	fontStyle: "italic"
})
const Divider = styled("hr", {
	border: "none",
	borderBottom: "0.0625rem solid $blackA7",
	height: "0.0625rem",
	margin: "5rem 0",
})

const eventDetails = {
	primer: () => <a href={pages.events.primer}>Full event details and registration information.</a>
}

export default function Events() {
	const heroProps = {
    dark: false,
    blur: true,
    image: "/images/wild-game-dinner-event-setup",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
      sizes.xxl,
      sizes.xxxl,
    ]
  }

	const showEvents = events.length > 0 && events.some(event => event.published)

  return (
    <MainLayout offsetMainContent={false}>
      <Hero imageBoxProps={heroProps} headingText="Events" />
			<PageContent>
				{showEvents ? (
					<>
						<h1>Upcoming Events</h1>
						<EventList>
							{events.length > 0 ? events.map(event => {
								const id = useId()
								const EventDetails = eventDetails[event.detailsKey]

								return event.published ? (
									<Event key={id}>
										<EventTitle>{event.title}</EventTitle>
										<EventDate>{event.date}</EventDate>
										{isNotEmpty(event.time) ? (
											<EventTime>{event.time}</EventTime>
										) : null}
										<EventDetails />
									</Event>
								) : null
							}) : (
								<NoEvents>There are no upcoming events scheduled at this time.</NoEvents>
							)}
						</EventList>
						<Divider />
					</>
				) : null}
				<h2>Hosted Events</h2>
				<p>We host events at the shop on a regular basis. From one-and-one and group lessons, to indoor competition shoots, to league shoots for both you and adults, we actively support the needs of both local and regional archers with events that help challenge and hone their archery skills. When there are upcoming events scheduled, they will be listed above. Check back here regularly, or <CallUs>give us a call at the shop</CallUs> if you have questions about specific events.</p>
				<h2>Sponsored/Partner Events</h2>
				<p>We also regularly join with other organizations in both partnership and support roles to help ensure the mutual success of the event itself, all of the organizations involved and the sport of archery as a whole. Want to get Harvest Archery involved in your event? <CallUs>Give us a call</CallUs> and we'll be happy to discuss your needs and how we can best support you and your event.</p>
				<h2>Your Event</h2>
				<p>We can accomodate a wide variety of different kinds of events for you and/or your organization. We can organize and facilitate a great team-building activity for your corporate team. Looking for an for something new and different and exciting for a date night with your spouse or significant other? Give archery a try! Cost for these kinds of events will vary greatly depending on the number of people involved and what you'd like to accomplish. <CallUs>Give us a call</CallUs> and let us know what you're looking for, and we'll help you plan the perfect event, and give you a quote.</p>
			</PageContent>
    </MainLayout>
  )
}
