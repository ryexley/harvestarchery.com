import { useState, useEffect } from "react"
import { TIME } from "~/enums"
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
import { styled, keyframes, breakpointPx } from "~/styles"

const Rotator = styled("section", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  height: "10rem",
  overflow: "hidden",
  padding: "1rem 2rem",
  transition: "all 1s ease-in-out",

  ["@s"]: { height: "12rem" },
  ["@ml"]: { height: "15rem", padding: "2rem 5rem" },
  ["@l"]: { height: "20rem" },
})

const fadeInOut = keyframes({
  "0%": { opacity: 0 },
  "20%": { opacity: 1 },
  "80%": { opacity: 1 },
  "100%": { opacity: 0 }
})

const logoStyle = {
  animation: `${fadeInOut} 5s ease-in-out 1 0s`,
  blockSize: "auto",
  height: "100%",
  maxInlineSize: "100%",
  objectFit: "contain",
  opacity: "0",
  smoothTransition: "all"
}

const EliteLogo = styled(Elite, {
  ...logoStyle,
  height: "calc(100% + 5rem)",

  ["@ml"]: {
    height: "calc(100% + 10rem)"
  }
})

const HoytLogo = styled(Hoyt, { ...logoStyle, color: "#d71821", height: "100%" })
const BowtechLogo = styled(Bowtech, { ...logoStyle })
const DiamondLogo = styled(Diamond, { ...logoStyle })
const EastonLogo = styled(Easton, { ...logoStyle, ["@m"]: { width: breakpointPx.m } })
const BeeStingerLogo = styled(BeeStinger, { ...logoStyle })
const BowfingerLogo = styled(Bowfinger, { ...logoStyle, borderRadius: "1.5rem", })
const CBELogo = styled(CBE, { ...logoStyle })
const TruballAxcelLogo = styled(TruballAxcel, { ...logoStyle, borderRadius: "1.5rem", })
const QADLogo = styled(QAD, { ...logoStyle, ["@sm"]: { width: breakpointPx.m } })
const BlackGoldLogo = styled(BlackGold, { ...logoStyle })
const SpotHoggLogo = styled(SpotHogg, { ...logoStyle, ["@s"]: { width: breakpointPx.s }  })

const brandImages = [
  { Logo: HoytLogo, backgroundColor: "$slate1" },
  { Logo: EliteLogo, backgroundColor: "$slate12" },
  { Logo: BowtechLogo, backgroundColor: "$slate12" },
  { Logo: DiamondLogo, backgroundColor: "$slate1" },
  { Logo: EastonLogo, backgroundColor: "$slate12" },
  { Logo: BowfingerLogo, backgroundColor: "#feffff" },
  { Logo: TruballAxcelLogo, backgroundColor: "#000" },
  { Logo: BeeStingerLogo, backgroundColor: "$slate1" },
  { Logo: CBELogo, backgroundColor: "$slate12" },
  { Logo: QADLogo, backgroundColor: "$slate12" },
  { Logo: BlackGoldLogo, backgroundColor: "$slate12" },
  { Logo: SpotHoggLogo, backgroundColor: "$slate12" }
]

export function BrandRotator() {
  const [logoIndex, setLogoIndex] = useState(0)
  const { Logo, backgroundColor } = brandImages[logoIndex]
  const ROTATION_INTERVAL = TIME.FIVE_SECONDS

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
