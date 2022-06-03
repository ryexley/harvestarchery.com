import * as RadixUiDialogPrimitive from "@radix-ui/react-dialog"
import { CloseX } from "~/components/icons"
import { styled, keyframes } from "~/styles"

const animationTime = "500ms"

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
})

const StaticOverlay = styled(RadixUiDialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,

  ["@media (prefers-reduced-motion: no-preference)"]: {
    animation: `${overlayShow} ${animationTime} cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const StyledOverlay = styled(StaticOverlay)

const StaticContent = styled(RadixUiDialogPrimitive.Content, {
  backgroundColor: "$white",
  borderRadius: "0.375rem",
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  left: "50%",
  maxHeight: "85vh",
  maxWidth: "30rem",
  padding: "1.5rem",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",

  ["&:focus"]: {
    outline: "none",
  },

  ["@media (prefers-reduced-motion: no-preference)"]: {
    animation: `${contentShow} ${animationTime} cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
})

const StyledContent = styled(StaticContent)

const StyledTitle = styled(RadixUiDialogPrimitive.Title, {
  color: "$black",
  fontSize: "1.0625rem",
  fontWeight: 500,
  margin: 0,
})

const StyledDescription = styled(RadixUiDialogPrimitive.Description, {
  margin: "0.625rem 0 1.25rem",
  color: "$black",
  fontSize: "1rem",
  lineHeight: "1.5rem",
})

const closeButtonSize = "1.5rem"
const StyledModalClose = styled(RadixUiDialogPrimitive.Close, {
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "50%",
  display: "flex",
  height: closeButtonSize,
  justifyContent: "center",
  padding: "2px",
  position: "absolute",
  right: "1rem",
  top: "1rem",
  width: closeButtonSize,
  smoothTransition: "all",

  ["&:hover"]: {
    boxShadow: "0 0 0 0.0625rem $colors$gray11",
    cursor: "pointer",

    ["> svg"]: {
      color: "$black",
      transform: "rotate(180deg)",
    },
  },

  ["&:focus, &:focus-visible"]: {
    boxShadow: "0 0 0 0.0625rem $colors$gray11",

    ["> svg"]: {
      color: "$black",
    },
  },

  ["> svg"]: {
    borderRadius: "50%",
    color: "$darkGray",
    height: closeButtonSize,
    width: closeButtonSize,
    smoothTransition: "all",
  },
})

function Modal({ children, ...props }) {
  const StyledDialog = styled(RadixUiDialogPrimitive.Root, {
    overflow: "hidden scroll",
  })

  return (
    <StyledDialog {...props}>
      <StyledOverlay />
      {children}
    </StyledDialog>
  )
}

function StaticModal({ children, ...props }) {
  const StyledDialog = styled(RadixUiDialogPrimitive.Root, {
    overflow: "hidden scroll",
  })

  return (
    <StyledDialog {...props}>
      <StaticOverlay />
      {children}
    </StyledDialog>
  )
}

export { Modal, StaticModal }
export const ModalTrigger = RadixUiDialogPrimitive.Trigger
export const StaticModalContent = StaticContent
export const ModalContent = StyledContent
export const ModalTitle = StyledTitle
export const ModalDescription = StyledDescription
export const CloseButton = () => (
  <StyledModalClose aria-label="Close">
    <CloseX />
  </StyledModalClose>
)
