import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { isNotEmpty } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { events } from "~/data/events"
import { styled, breakpointPx as sizes } from "~/styles"

const Event = styled("div")
const EventTitle = styled("h3")
const EventDate = styled("h4")
const EventTime = styled("h4")
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

export default function Events() {
	const heroProps = {
    dark: true,
    blur: false,
    image: "/images/harvest-crew-at-tac-2022",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
    ]
  }

	const showEvents = events.length > 0

  return (
    <MainLayout offsetMainContent={false}>
      <Hero imageBoxProps={heroProps} headingText="Events" />
			<PageContent>
				{showEvents ? (
					<>
						<h1>Upcoming Events</h1>
						{events.length > 0 ? events.map(event => {
							return (
								<Event>
									<EventTitle>{event.title}</EventTitle>
									<EventDate>{event.date}</EventDate>
									{isNotEmpty(event.time) ? (
										<EventTime>{event.time}</EventTime>
									) : null}
									{event.description.map(content => <EventDescription>{content}</EventDescription>)}
								</Event>
							)
						}) : (
							<NoEvents>There are no upcoming events scheduled at this time.</NoEvents>
						)}
						<Divider />
					</>
				) : null}
				<h2>Hosted Events</h2>
				<p>At the Harvest Archery Pro Shop we frequently host events at our facility. ...</p>
				<h2>Sponsored/Partner Events</h2>
				<p>We also regularly join with other organization's events in both joint and sponsored roles. ...</p>
				<h2>Your Event</h2>
				<p>We can accomodate a wide variety of different kinds of events for you and/or your organization. ...</p>
			</PageContent>
    </MainLayout>
  )
}
