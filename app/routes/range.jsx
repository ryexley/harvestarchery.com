import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { CallUs } from "~/components/call-us-link"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { breakpointPx as sizes, breaks as bp } from "~/styles"

export const meta = () => ({
	title: windowTitle("Indoor Range")
})

export default function IndoorRange() {
  const heroProps = {
    dark: false,
    blur: true,
    image: "/images/harvest-archery-indoor-range",
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
      <Hero imageBoxProps={heroProps} headingText="Indoor Range" />
      <PageContent>
        <p>
					Our indoor archery range is 14 lanes at 20 yards. We have mobile targets that can and often are moved closer for equipment tuning and beginner lessons, etc. We sell paper <strong>targets</strong> with both Vegas and Lancaster style target faces for <strong>$1.00 each</strong>. We also have the ability to support shooting broadheads and crossbows on the range.
        </p>
				<p>
					Our range is used to support the the maintenance and setup work that we do for our customers, but we also host regular indoor competition shoots for both youth and adult archers at our range. We provide archery lessons for shooters of all ages and experience levels, and the range gives us the facility we need to be able to provide the best service possible for you, our customer.
				</p>
				<p>
					<strong>The range is available for use by the general public</strong> for recreational use anytime that we don't have a hosted shoot in progress. The cost to use the range is <strong>$10.00 per hour</strong>, plus any targets you wish to use, which are available for $1.00 each. Feel free to <CallUs>call us</CallUs> if you have any questions or would like any additional information about the range.
				</p>
      </PageContent>
    </MainLayout>
  )
}
