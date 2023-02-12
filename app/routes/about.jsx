import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { CallUs } from "~/components/call-us-link"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { breakpointPx as sizes, breaks as bp } from "~/styles"

export const meta = () => ({
	title: windowTitle("About")
})

export default function About() {
  const heroProps = {
    dark: false,
    blur: true,
    image: "/images/inside-harvest-archery-pro-shop",
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

  return (
    <MainLayout offsetMainContent={false}>
      <Hero imageBoxProps={heroProps} headingText="About Harvest Archery" />
      <PageContent>
        <p>
          Since it opened in 2013 in Dayton, Tennessee, the Harvest Archery Pro
          Shop has served the archery needs of East Tennessee with a welcoming
          smile and the warm, friendly service that are trademarks of the southern
          hospitality in which the proprietors are rooted.
        </p>
        <p>
        	Having come into ownership in 2015, and bringing with him more than 15
					years of experience in archery equipment manufacturing, Doc Crowe has
					been a key part of the growth and success of Harvest Archery over the
					years. Doc's background in manufacturing and connections in the industry
					has given him a breadth of knowledge and understanding of both the science
					<em>and the art</em> of archery that's difficult to find anywhere in
        	the industry.
        </p>
        <p>
        	This knowledge and understanding is what you're getting when you bring
        	your archery questions and needs to The Harvest Archery Pro shop. Doc and
        	his friendly, professional staff bring decades of experience and a
        	home-town atmosphere to the shop every day to help you become the best
        	archer you can be.
        </p>
        <p>
        	So whether you're curious about how to get started with archery, looking
        	to get in to a new bow, or if you're an ole pro that needs a new set of strings
        	for your bow, or maybe a set of custom arrows built, come on down to the
        	shop or <CallUs>give us a call</CallUs>, we'll be able to help you out, or
        	we can put you in touch with someone who can, and send you on your way with
        	some fun shop talk.
        </p>
      </PageContent>
    </MainLayout>
  )
}
