export const IMAGE_TYPE = {
  JPG: ".jpg",
  PNG: ".png"
}

export const renderSrcSet = ({ img, ext, sizes}) => {
  const srcs = sizes.map(size => `${img}-${size}${ext} ${size}w`)
  return srcs.join(", ")
}

export const renderSizes = viewportWidthSizeMap => {
  const sizes = viewportWidthSizeMap.map(({ width, size }) => `(min-width: ${width}) ${size}`)
  return sizes.join(", ")
}
