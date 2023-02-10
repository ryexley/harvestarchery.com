import { useState, useEffect } from "react"
import { Bullseye, Chevron, Pause, Play } from "~/components/icons"
import { Button } from "~/components/button"
import { customerQuotes } from "~/data"
import { TIME } from "~/enums"
import { useInterval } from "~/hooks/use-interval"
import { isNotEmpty, withWindow } from "~/util"
import { styled, breakpointPx } from "~/styles"
import {
  CloseButton,
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  StaticModal,
  StaticModalContent
} from "~/components/modal"

const quotesBackgroundColor = "$slate1"
const QuoteSection = styled("section", {
  alignItems: "center",
  background: quotesBackgroundColor,
  backgroundImage: "url(/images/contour-lines.webp)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  overflowY: "scroll",
  padding: "2rem",
  position: "relative",
  smoothTransition: "all",
})

const nextPreviousButtonColor = "$slate11"
const nextPreviousButtonSize = "2rem"
const nextPreviousButtonStyle = {
  bottom: "0",
  color: nextPreviousButtonColor,
  cursor: "pointer",
  height: "100%", // `calc(100% - calc(${nextPreviousButtonSize} * 0.5))`,
  margin: "0 1.5rem",
  position: "absolute",
  top: "0",
  width: nextPreviousButtonSize,
  smoothTransition: "all",

  "&:hover": {
    color: "$themePrimary"
  }
}

const PreviousQuote = styled(Chevron, {
  ...nextPreviousButtonStyle,
  left: "0",
  transform: "rotate(180deg)",
})

const NextQuote = styled(Chevron, {
  ...nextPreviousButtonStyle,
  right: "0"
})

const Heading = styled("h2", {
  color: "$slate12",
  fontSize: "2rem",
  fontStyle: "italic",
  fontWeight: "500",
  margin: "0 0 2rem 0",
  textAlign: "center"
})

const PauseButton = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  top: "1rem",
  right: "1.25rem",
  zIndex: "10",
})

const PauseIcon = styled(Pause, {
  color: "$white",
  height: "2rem",
  width: "2rem",
})

const PlayIcon = styled(Play, {
  color: "$white",
  height: "2rem",
  width: "2rem",
})

const QuoteBox = styled("div", {
  display: "flex",
  flexDirection: "column"
})

const quoteBubbleBackgroundColor = "$slate12"
const quoteBubbleBorderColor = "$slate9"

const QuoteContainer = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  marginBottom: "1rem",
})

const StyledQuote = styled("blockquote", {
  alignItems: "center",
  backgroundColor: quoteBubbleBackgroundColor,
  border: `0.125rem solid ${quoteBubbleBorderColor}`,
  borderRadius: "0.625rem",
  // display: "flex",
  fontSize: "1rem",
  fontStyle: "italic",
  height: "15rem",
  marginBottom: "2rem",
  padding: "1.5rem 2rem",
  position: "relative",
  smoothTransition: "all",

  "&::after": {
    "--bubble-source-size": "2rem",
    background: quoteBubbleBackgroundColor,
    borderBottom: "inherit",
    borderRight: "inherit",
    content: `""`,
    height: "var(--bubble-source-size)",
    position: "absolute",
    top: "calc(100% - calc(1rem - 0.75px))",
    transform: "rotate(45deg)",
    left: "calc(50% - calc(var(--bubble-source-size) * 0.5))",
    width: "var(--bubble-source-size)"
  },

  "@sm": {
    fontSize: "1.25rem"
  },

  "@ml": {
    fontSize: "1.5rem",
    maxWidth: breakpointPx.m
  }
})

const QuoteMoreButton = styled(Button, {
  color: "$themePrimary",
  fontSize: "1.25rem",
  fontStyle: "italic",
  margin: "0 0.5rem",
  padding: "0"
})

const QuoteSource = styled("cite", {
  color: "$slate12",
  display: "flex",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "500",
  justifyContent: "center"
})

const [Content, StaticContent] = (() => {
  const style = {
    maxWidth: "40rem",
    overflow: "hidden scroll",
    padding: "1rem 2rem",

    ["@s"]: {
      padding: "1.75rem 2rem",
    },

    ["@sm"]: {
      padding: "2.5rem",
    },
  }

  return [styled(ModalContent, style), styled(StaticModalContent, style)]
})()

const Title = styled(ModalTitle, {
  fontSize: "2rem",
})

const Description = styled(ModalDescription)

function Quote({
  quote,
  sourceName,
  onShowMore,
  ...props
}) {
  const MAX_QUOTE_LENGTH = 300
  const truncateQuote = quote.length >= MAX_QUOTE_LENGTH
  const showMoreButton = truncateQuote
  const displayedQuote = truncateQuote
    ? `${quote.substring(0, MAX_QUOTE_LENGTH)}...`
    : quote

  return (
    <QuoteBox>
      <QuoteContainer>
        <StyledQuote {...props}>
          {displayedQuote}
          {showMoreButton ? (
            <QuoteMoreButton asLink ghost={false} onClick={onShowMore}>
              Read more
            </QuoteMoreButton>
          ) : null}
        </StyledQuote>
      </QuoteContainer>
      <QuoteSource>{sourceName}</QuoteSource>
    </QuoteBox>
  )
}

const PagerContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  margin: "2rem 0 0 0"
})

const QuoteLink = styled(Bullseye, {
  color: "$slate11",
  cursor: "pointer",
  height: "1rem",
  width: "1rem",
  smoothTransition: "all",

  "&:hover": {
    color: "$themePrimary"
  }
})

function Pager({ onButtonClick, currentQuoteIndex, ...props }) {
  return (
    <PagerContainer>
      {customerQuotes.map((_, index) => {
        const quoteLinkProps = {
          key: `quote-pager-link-${index}`,
          role: "button",
          onClick: () => onButtonClick(index),
          ...(
            (index === currentQuoteIndex)
              ? { css: { color: "$themePrimary" } }
              : {}
          )
        }

        return <QuoteLink {...quoteLinkProps} />
      })}
    </PagerContainer>
  )
}

export function CustomerQuotes() {
  const quoteCount = customerQuotes.length
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [rotationInterval, setRotationInterval] = useState(TIME.TEN_SECONDS)
  const [showMore, setShowMore] = useState(false)
  const [paused, setPaused] = useState(false)
  const currentQuote = customerQuotes[quoteIndex]

  const [firstRender, setFirstRender] = useState(true)
  const [ModalClass, ContentClass] = firstRender ? [Modal, Content] : [StaticModal, StaticContent]

  useEffect(() => setFirstRender(false), [])

  const incrementQuoteIndex = () => {
    const targetIndex = quoteIndex + 1
    setQuoteIndex((targetIndex >= quoteCount) ? 0 : targetIndex)
    setRotationInterval(TIME.TEN_SECONDS)
  }

  const decrementQuoteIndex = () => {
    const targetIndex = quoteIndex - 1
    setQuoteIndex((targetIndex < 0) ? quoteCount - 1 : targetIndex)
    setRotationInterval(TIME.TEN_SECONDS)
  }

  useInterval(
    () => incrementQuoteIndex(),
    paused ? null : rotationInterval
  )

  const onQuoteShowMore = () => {
    setShowMore(true)
    setPaused(true)
  }

  const onFullQuoteModalClose = () => {
    setShowMore(false)
    setPaused(false)
  }

  const onQuoteMouseOver = () => {
    setPaused(true)
  }

  const onQuoteMouseOut = () => {
    setPaused(showMore ? true : false)
  }

  return (
    <QuoteSection>
      <Heading>What our customers say about us...</Heading>
      <PreviousQuote
        role="button"
        onClick={decrementQuoteIndex} />
      <Quote
        {...currentQuote}
        onShowMore={onQuoteShowMore}
        onMouseEnter={onQuoteMouseOver}
        onMouseLeave={onQuoteMouseOut} />
      <Pager
        onButtonClick={index => setQuoteIndex(index)}
        currentQuoteIndex={quoteIndex} />
      <NextQuote
        role="button"
        onClick={incrementQuoteIndex} />
      <ModalClass open={showMore} onOpenChange={onFullQuoteModalClose}>
        <ContentClass>
          <CloseButton />
          <Title>{currentQuote.sourceName}</Title>
          <Description>{currentQuote.quote}</Description>
        </ContentClass>
      </ModalClass>
    </QuoteSection>
  )
}
