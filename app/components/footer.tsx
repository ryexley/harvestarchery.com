import { styled } from "~/styles"

const StyledFooter = styled("footer", {
  background: "$slate4",
  color: "$slate12",
  padding: "1rem"
})

export function Footer() {
  return (
    <StyledFooter>
      Footer
    </StyledFooter>
  )
}
