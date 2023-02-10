import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { square } from "~/urls"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle(`The Rock Archery Challenge (aka "Mini TAC")`)
})

const List = styled("ul", {
	marginLeft: "1.5rem"
})

export default function TheRockArcheryChallengePage() {
	const heroProps = {
    dark: true,
    blur: false,
    image: "/images/tyler-bailey-archery",
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

  return (
    <MainLayout offsetMainContent={false}>
      <Hero imageBoxProps={heroProps} headingText="The Rock Archery Challenge" />
			<PageContent>
				<p>Also known as <em>"<strong>Mini TAC</strong>"</em>, this event is a partnership between The Harvest Archery Pro Shop and Quarry Rock Archery Range.</p>
				<p>Put your archery skills to the test at long ranges, steep angles and tight windows. Join us for a weekend of fun, fellowship and challenging archery shots. This shoot is a great way to get yourself prepared for the upcoming Total Archery Challenge.</p>
				<p>Quarry Rock will offer <strong>two different courses of 15 targets each</strong>, with a practice range at the facility for warm up. There will also be novelty shots and games for prizes available as well. <strong>Costs for the event</strong> will be as follows:</p>
				<List>
					<li><em><strong>One Course</strong></em> - $30.00</li>
					<li><em><strong>Both Courses</strong></em> - $50.00</li>
					<li><em><strong>All Day, Unlimited Shoot</strong></em> - $60.00</li>
					<li><em><strong>All Weekend, Unlimited Shoot</strong></em> - $100.00</li>
				</List>
				<p>If you'd like to make a weekend of it, camping will be available on-site, free of charge. We only ask that you be responsible and respectful of the facility. Concessions will be available for purchase at the event. Children are welcome, but must be accompanied by an adult at all times, both on and off the range, no exceptions.</p>
				<p><a href={square.theRockArcheryChallenge} target="_blank">Click here to register for the event</a>.</p>
			</PageContent>
		</MainLayout>
	)
}
