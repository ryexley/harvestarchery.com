import { useState, useEffect } from "react"
import { useViewport } from "~/hooks/use-viewport"
import {
  Hoyt,
  Elite,
  Bowtech,
  Diamond,
  Easton,
  BeeStinger,
  SpotHogg,
  BlackGold,
  Bowfinger,
  TruballAxcel,
  CBE,
  QAD
} from "~/components/brand-images"
import { styled, keyframes } from "~/styles"

const Rotator = styled("section", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  // height: "15rem",
  overflow: "hidden",
  padding: "1rem 2rem",
  transition: "all 1s ease-in-out"
})

const fadeInOut = keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 1 },
  "80%": { opacity: 1 },
  "100%": { opacity: 0 }
})

const imageHeight = "8rem"
const logoStyle = {
  // animation: `${fadeInOut} 5s ease-in-out 1 0s`,
  blockSize: "auto",
  maxInlineSize: "100%",
  objectFit: "contain",
  // opacity: "0",
  smoothTransition: "all"
}

const HoytLogo = styled(Hoyt, {
  ...logoStyle,
  color: "#d71821",
  height: imageHeight
})

const EliteLogo = styled(Elite, {
  ...logoStyle,
  height: `calc(${imageHeight} + 15rem)`
})

const BowtechLogo = styled(Bowtech, {
  ...logoStyle,
  // height: imageHeight,
  // width: "47.6875rem"
})

const DiamondLogo = styled(Diamond, {
  ...logoStyle,
  height: imageHeight,
  width: "100%"
})

const EastonLogo = styled(Easton, {
  ...logoStyle,
  height: "6.25rem",
})

const BeeStingerLogo = styled(BeeStinger, {
  ...logoStyle,
  height: imageHeight,
  width: "100%"
})

const BowfingerLogo = styled(Bowfinger, {
  ...logoStyle,
  borderRadius: "1.5rem",
  height: imageHeight
})

const CBELogo = styled(CBE, {
  ...logoStyle,
  height: imageHeight
})

const TruballAxcelLogo = styled(TruballAxcel, {
  ...logoStyle,
  borderRadius: "1.5rem",
  height: imageHeight
})

const QADLogo = styled(QAD, {
  ...logoStyle,
  height: imageHeight
})

const BlackGoldLogo = styled(BlackGold, {
  ...logoStyle,
  height: "12.1875rem"
})

const SpotHoggLogo = styled(SpotHogg, {
  ...logoStyle,
  height: "5.375rem"
})

const brandImages = [
  // { Logo: HoytLogo, backgroundColor: "$slate1" },
  // { Logo: EliteLogo, backgroundColor: "$slate12" },
  { Logo: BowtechLogo, backgroundColor: "$slate12" },
  // { Logo: DiamondLogo, backgroundColor: "$slate1" },
  // { Logo: EastonLogo, backgroundColor: "$slate12" },
  // { Logo: BowfingerLogo, backgroundColor: "#feffff" },
  // { Logo: TruballAxcelLogo, backgroundColor: "#000" },
  // { Logo: BeeStingerLogo, backgroundColor: "$slate1" },
  // { Logo: CBELogo, backgroundColor: "$slate12" },
  // { Logo: QADLogo, backgroundColor: "$slate12" },
  // { Logo: BlackGoldLogo, backgroundColor: "$slate12" },
  // { Logo: SpotHoggLogo, backgroundColor: "$slate12" }
]

export function BrandRotator() {
  const { width: viewportWidth } = useViewport()
  const [logoIndex, setLogoIndex] = useState(0)
  const { Logo, backgroundColor } = brandImages[logoIndex]
  const FIVE_SECONDS = (5 * 1000)
  const ROTATION_INTERVAL = FIVE_SECONDS

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      const nextIndex = logoIndex + 1
      setLogoIndex((nextIndex >= brandImages.length) ? 0 : nextIndex)
    }, ROTATION_INTERVAL)

    return () => clearInterval(rotationInterval)
  }, [logoIndex])

  return (
     <Rotator css={{ backgroundColor }}>
      <Logo />
    </Rotator>
  )
}
