import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Button } from "~/components/button"
import { CloseX } from "~/components/icons"
import { isNotEmpty } from "~/util"
import { styled, keyframes } from "~/styles"

const Root = DialogPrimitive.Root
const Trigger = DialogPrimitive.Trigger
const Close = DialogPrimitive.Close
const Title = DialogPrimitive.Title
const Description = DialogPrimitive.Description

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" }
})

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" }
})

const slideIn = keyframes({
  from: { transform: "$$transformValue" },
  to: { transform: "translate3d(0,0,0)" }
})

const slideOut = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "$$transformValue" }
})

const Overlay = styled(DialogPrimitive.Overlay, {
	backgroundColor: "rgba(0, 0, 0, 0.15)",
	position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
	bottom: 0,
  boxShadow:
    "$colors$shadowLight 0 0 2.375rem -0.625rem, $colors$shadowDark 0 0 2.1875rem -0.9375rem",
	overflowY: "scroll",
  position: "fixed",
  top: 0,
  width: "100%",
	zIndex: 5,

  // Among other things, prevents text alignment inconsistencies when dialog cant be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: "transform",
	smoothTransition: "all",

	["@s"]: {
		width: "16rem",
	},

  "&:focus": {
    outline: "none",
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
  },

  variants: {
    side: {
      top: {
        $$transformValue: "translate3d(0,-100%,0)",
        width: "100%",
        height: "0.9375rem",
        bottom: "auto"
      },
      right: {
        $$transformValue: "translate3d(100%,0,0)",
        right: 0
      },
      bottom: {
        $$transformValue: "translate3d(0,100%,0)",
        width: "100%",
        height: "0.9375rem",
        bottom: 0,
        top: "auto"
      },
      left: {
        $$transformValue: "translate3d(-100%,0,0)",
        left: 0
      }
    }
  },

  defaultVariants: {
    side: "right"
  }
})

const CloseButton = styled(DialogPrimitive.Close, {
  ["--size"]: "1.5rem",
  background: "$gray2",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  margin: "$1 0",
  padding: "0.125rem",
  position: "absolute",
  smoothTransition: "all",
  height: "var(--size)",
  right: "0.8rem",
  top: "0.5rem",
  width: "var(--size)",
  zIndex: "2",

  "&:hover": {
    transform: "rotate(180deg)"
  }
})

const CloseButtonIcon = styled(CloseX, {
  color: "$white"
})

const Content = React.forwardRef(
  ({
		children,
		side = "right",
		showCloseButton = true,
		closeButton,
		...props
	}, forwardedRef) => {
		const CloseTrigger = () => {
      if (isNotEmpty(closeButton) && typeof closeButton === "function") {
        return closeButton();
      }

      return (
        <CloseButton>
					<CloseButtonIcon />
				</CloseButton>
      );
    };

		return (
			<DialogPrimitive.Portal>
				<Overlay />
				<StyledContent side={side} {...props} ref={forwardedRef}>
					{children}
					<CloseTrigger asChild>
						{showCloseButton ? <CloseButton /> : null}
					</CloseTrigger>
				</StyledContent>
			</DialogPrimitive.Portal>
		)
	}
)
Content.displayName = "SheetContent"

export { Root, Trigger, Close, Title, Description, Content }
