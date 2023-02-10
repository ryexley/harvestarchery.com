import { Parallax, Background } from "react-parallax"
import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { CallUs } from "~/components/call-us-link"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes, breaks as bp } from "~/styles"

export const meta = () => ({
	title: windowTitle("Services We Offer")
})

const contentStyles = {
	fontSize: "1.2rem",
  padding: "1rem 1rem 3rem 1rem",
  smoothTransition: "all",

  p: {
  	margin: "2rem 0",

  	"&:first-child": {
  		marginTop: "0"
  	},

  	"&:last-child": {
  		marginBottom: "0"
  	}
  },

  "@m": {
  	fontSize: "1.5rem",
  	margin: "0 auto",
  	padding: "2rem 2rem 3rem 2rem",
  	width: bp.m
  }
}

const PageInfo = styled("section", contentStyles)

const serviceSectionImageProps = {
  bgImage: "/images/doc-fixing-a-bow-1920.png",
	strength: 500,
}

const Service = styled("section", {})

const ServiceSectionImage = styled("div", {
	height: "50vh",
	width: "100vw",
	border: "1px solid red",
})

const serviceImageProps = {
	// blur: {
	// 	min: -5,
	// 	max: 10,
	// },
  strength: 500,
}

const ServiceImageContainer = styled("div", {
	alignItems: "flex-end",
	display: "flex",
  height: 500,
	justifyContent: "flex-end",
	minHeight: "50vh",
	padding: "1rem",

	h2: {
		color: "$white",
		fontSize: "2.5rem",
		fontStyle: "italic",
		fontWeight: "600",
		textShadow: "0.25rem 0.25rem 0.25rem $colors$blackA12",
		textTransform: "uppercase"
	}
})

// TODO: replace bgImage with the use of the bgImageSrcSet prop
// and pass in a srcset, using util/renderSrcSet instead
// https://github.com/rrutsche/react-parallax#props
const ServiceHeader = ({ imageSource, heading }) => (
  <Parallax {...serviceImageProps} bgImage={imageSource}>
    <ServiceImageContainer>
			<h2>{heading}</h2>
		</ServiceImageContainer>
  </Parallax>
)

const ServiceInfo = styled("section", {})

const ServiceHeading = styled("h2", {})

const ServiceDetail = styled("div", {
	...contentStyles,
	minHeight: "50vh",
})

const BowEquipmentSalesDetail = () => (
	<ServiceDetail>
		<p>
			In the market for a new bow? Need a a quiver or a new backbar? We got ya covered. We sell new bows from all of the best brands in the industry. We also carry used bows that we sell on consignment. We can help you pick out the right one for you, and then get it setup and tuned specifically for you.
		</p>
		<p>
			We carry the full range of archery equipment and bow accessories in stock in our store from targets to quivers, from stabilizers to handheld and wrist-strap releases. If we don't have what you need in stock, we can order it for you and save you the cost of shipping.
		</p>
		<p>
			Have questions about, or wondering if we carry a specific item that you're looking for? <CallUs>Give us a call</CallUs> and we'll let you know what we've got and what we can do.
		</p>
	</ServiceDetail>
)

const BowSetupAndTuningDetail = () => (
	<ServiceDetail>
		<p>
			Whether you bought your bow from us, or got it somewhere else and need help getting it tuned, we can help. Bring it in to the shop and we'll take a look at the setup you have, and make the adjustments necessary to have you slingin' tight groups in no time.
		</p>
		<p>
			We stock the latest bows from BowTech, Elite, Hoyt and Diamond. Our certified technicians can work on any brand available on the market, past or present. Whatever bow you have, bring it in and we can re-string, setup and tune to meet your needs.
		</p>
		<p>
			Youth bow tuning costs $50.00. Standard setup/tune starts at $100.00. Full service cost may vary depending on your individual and equipment needs. We offer a package that we call "The Ultimate", which includes a full breakdown and custom built tune of your bow, everything from shimming to bare shaft tuning, laser tune, all to get you the most efficient and accurate setup matched to you and your shooting style. This package typically runs $150.00.
		</p>
	</ServiceDetail>
)

const CustomArrowBuildsDetail = () => (
	<ServiceDetail>
		<p>
			We are a certified dealer for Easton, Gold Tip, Victory and Black Eagle arrows. We are also able to build any brand on the market that you bring in to the shop. We have the tools and experience to measure, cut, fletch, wrap and tip whatever arrow build you want. We have the knowledge and experience that we can help you decide what's going to work best for your setup, and custom build them for you.
		</p>
		<p>
			For the DIY archer, we can also sell you the components and tools you need to do whatever you want.
		</p>
	</ServiceDetail>
)

const BowRestringDetail = () => (
	<ServiceDetail>
		<p>
			We don't carry bow strings in stock, but we can order and install strings for compound, traditional and crossbows. We order from GAS, Vapor Trail, Winner's Choice, Threadz and 60X. Prices vary based on your choice of color-combination and material. We also stock the most popular sizes of Flemish and Endless traditional bow strings. We can also install and tune any string that you bring to us.
		</p>
		<p>
			Full string setup for compound bows starts at $140.00 plus tax. Crossbow new string prices start at $115.00 plus tax.
		</p>
	</ServiceDetail>
)

const BroadheadTuningDetail = () => (
	<ServiceDetail>
		<p>
			Whether you shoot fixed or mechanical broadheads, our goal is to help you get your arrows flying as true as possible. We can setup, match and tune any broadhead on the market. Using our indoor range and all of the gear available in our shop, we will make the adjustments necessary to have all of your arrows shooting the same with both field tips and broadheads alike.
		</p>
	</ServiceDetail>
)

const SightSetupDetail = () => (
	<ServiceDetail>
		<p>
			From shooting out of a treestand, to long-distance mountain-style shots, we want your arrow to find it's mark. We offer first, second and third-axis adjustments and custom sight tape builds, utilizing all of the technology that your sight has to offer. Bring your rig in and we'll get you ready to shoot from any distance, at any angle, with pin-point precision accuracy.
		</p>
		<p>
			First, second and third-axis setup costs $25.00. Custom sight tape setup starts at $20.00.
		</p>
	</ServiceDetail>
)

const LessonsAndTrainingDetail = () => (
	<ServiceDetail>
		<p>
			Indoor range time costs $10.00 per hour. Equipment rental is $10.00 per hour. We offer 1-on-1 lessons from introductory to advanced archers. We can do personalized lessons working on release execution, stamina, stance. We can customize your lessons to meet your personal needs. Personal 1-on-1 lessons cost $75 per hour.
		</p>
		<p>
			If you have questions about customized group lessons, call us to discuss the details and we will work out a plan that fits your needs.
		</p>
	</ServiceDetail>
)

const IndoorRangeDetail = () => (
	<ServiceDetail>
		<p>
			We have a 14 lane, 20-yard indoor range with Vegas and Lancaster 3-spot target faces, as well as the ability to shoot broadheads and crossbows. Our range not only supports the maintenance and setup work that we do on-site, but we also host regular indoor competition shoots at both the youth and adult levels.
		</p>
		<p>
			Casual shooters can use the range for recreational use anytime that we don't have a hosted shoot in progress for $10.00 per hour, plus $1.00 per paper target.
		</p>
	</ServiceDetail>
)

const services = [
	{
		key: "bow-and-equipment-sales",
		image: "/images/services/bow-and-equipment-sales-1920.jpg",
		heading: "Bow and Equipment Sales",
		details: () => <BowEquipmentSalesDetail />
	},
	{
		key: "bow-setup-and-tuning",
		image: "/images/services/custom-bow-setup-and-tuning-1920.jpg",
		heading: "Custom Bow Setup and Tuning",
		details: () => <BowSetupAndTuningDetail />
	},
	{
		key: "custom-arrow-builds",
		image: "/images/services/custom-arrow-builds-1920.jpg",
		heading: "Custom Arrow Builds",
		details: () => <CustomArrowBuildsDetail />
	},
	{
		key: "bow-re-string",
		image: "/images/services/new-bow-strings-1920.jpg",
		heading: "New Bow Strings",
		details: () => <BowRestringDetail />
	},
	{
		key: "broadhead-tuning",
		image: "/images/services/broadhead-tuning-1920.jpg",
		heading: "Broadhead Tuning",
		details: () => <BroadheadTuningDetail />
	},
	{
		key: "sight-setup",
		image: "/images/services/full-sight-setup-1920.jpg",
		heading: "Full Sight Setup",
		details: () => <SightSetupDetail />
	},
	{
		key: "lessons-and-training",
		image: "/images/services/shooting-lessons-and-training-1920.jpg",
		heading: "Shooting Lessons and Training",
		details: () => <LessonsAndTrainingDetail />
	},
	{
		key: "indoor-range",
		image: "/images/services/indoor-range-960.jpg",
		heading: "Indoor Range",
		details: () => <IndoorRangeDetail />
	}
]

export default function Services() {
  const heroProps = {
    dark: false,
    blur: true,
    image: "/images/doc-fixing-a-bow",
    imgType: IMAGE_TYPE.PNG,
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
      <Hero imageBoxProps={heroProps} headingText="Services We Offer" />
			<PageInfo>
				<p>
					Harvest Archery is a full-service archery shop, and we want to partner with you through all of your archery adventures. Serving the needs of archers of every level, we've seen it all and can help you with just about anything you might need.
				</p>
				<p>
					If you're just curious about archery and have questions, or maybe you're wondering how to get started with it, <CallUs>give us a call</CallUs> or stop by the shop and ask any questions you have. We're happy to answer your questions and have a conversation. We can help get you setup with everything you need to get on your way to becoming a world-class archer (and we mean that, some of our customers have done just that).
				</p>
				<p>
					Maybe you're a competitive 3D shooter and are traveling for a shoot or a tournament, and forgot something, or need some kind of equipment repair. Come on by and we can help. We have all of the gear that professional shooters need, and can help with nearly any maintenance needs that come up for you.
				</p>
				<p>
					Bow hunters will also find everything they need for a successful hunt at our shop. Beyond the needs of your bow and accessories, we also stock and carry the hunting gear that you need to put yourself on the trail of those deer and turkeys we all love to chase. Stop by and share your stories and pictures.
				</p>
				<p>
					Check out the full details below of all of the services that we offer at Harvest Archery. If you don't see what you're looking for here, <CallUs>call us and ask about it</CallUs>, and we'll be happy to help figure out a way to get you what you need.
				</p>
			</PageInfo>
			{services.map(({
				key,
				image,
				heading,
				details,
			}) => (
				<Service key={key}>
					<ServiceHeader
						imageSource={image}
						heading={heading} />
					<ServiceInfo>
						{details()}
					</ServiceInfo>
				</Service>
			))}
    </MainLayout>
  )
}
