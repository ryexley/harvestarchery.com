const fs = require("fs")
const path = require("path")
const walk = require("walk-sync")
const Jimp = require("jimp")

// https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3#9fca

const imageSourceDir = "app/images"
const imageTargetDir = "public/images"
const imageSizes = [1920, 1600, 1366, 1024, 768, 640, 320]

async function optimizeImage({
  imageName,
  sourcePath,
  targetPath,
  width
}) {
  if (!fs.existsSync(targetPath)) {
    const image = await Jimp.read(sourcePath)
    if (image?.bitmap?.width >= width) {
      await image.resize(width, Jimp.AUTO)
      await image.quality(100)
      await image.writeAsync(targetPath)

      console.log(`✅ Resized "${imageName}" (width: ${width}px)`)
    }
  }
}

async function optimizeImages() {
  const entries = walk(imageSourceDir)
  for (const item of entries) {
    try {
      const sourcePath = path.resolve(`${imageSourceDir}/${item}`)
      for (const size of imageSizes) {
        const extIndex = item.lastIndexOf(".")
        const resizedItemName = [item.slice(0, extIndex), `-${size}`, item.slice(-((item.length - extIndex)))].join("")
        const targetPath = path.resolve(`${imageTargetDir}/${resizedItemName}`)
        await optimizeImage({
          imageName: item,
          sourcePath,
          targetPath,
          width: size
        })
      }
    } catch (err) {
      console.error(`❌ ${item} is not a valid image type, skipping`)
    }
  }
}

optimizeImages()
