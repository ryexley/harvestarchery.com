import React from "react"
import { styled, keyframes } from "@stitches/react"
import { violet, blackA, mauve } from "@radix-ui/colors"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
})

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
})

const StyledAccordion = styled(AccordionPrimitive.Root, {
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
})

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
  },

  "&:last-child": {},

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: `0 0.0625rem 0 transparent`,
  color: "$white",
  cursor: "pointer",
  display: "flex",
  flex: 1,
  fontFamily: "inherit",
  fontSize: "1rem",
  height: "2.8125rem",
  justifyContent: "space-between",
  lineHeight: 1,
  padding: "0 1.25rem",
  "&[data-state='closed']": { backgroundColor: "transparent" },
  "&[data-state='open']": { backgroundColor: "transparent" },
  "&:hover": { backgroundColor: "transparent" },
})

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",

  "&[data-state='open']": {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  "&[data-state='closed']": {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
})

const StyledInnerContent = styled("div")

const StyledChevron = styled(ChevronDownIcon, {
  color: "$white",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state='open'] &": { transform: "rotate(180deg)" },
})

// Exports
export const Accordion = StyledAccordion
export const AccordionItem = StyledItem

export const AccordionTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
))

export const AccordionContent = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledInnerContent>{children}</StyledInnerContent>
  </StyledContent>
))
