const fs = require("fs")
const path = require("path")
const walk = require("walk-sync")
const Jimp = require("jimp")

// https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3#9fca

const imageSourceDir = "app/images"
const imageTargetDir = "public/images"
const imageSizes = [320, 512, 640, 768, 960, 1024, 1280, 1600, 1920]

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
  const entries = walk(imageSourceDir, { directories: false, includeBasePath: false })
  for (const item of entries) {
		// ADD: Skip .DS_Store and hidden files
    if (item.startsWith('.') || item === '.DS_Store') {
      console.log(`Skipping hidden/system file: ${item}`);
      continue;
    }

		const sourcePath = path.resolve(`${imageSourceDir}/${item}`);
    const stats = fs.statSync(sourcePath);

    // Skip directories (walk should already do this, but double-check)
    if (stats.isDirectory()) {
      console.log(`Skipping directory: ${item}`);
      continue;
    }

    try {
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
      console.error(`➖ ${item} is not a valid image type, skipping optimization`)
      // if it can't be resized/optimized, then just copy it out to the
      // /public folder as-is
      const sourcePath = path.resolve(`${imageSourceDir}/${item}`);
      const targetPath = path.resolve(`${imageTargetDir}/${item}`);

      // Create parent directory if needed
      const targetDir = path.dirname(targetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`Created directory: ${targetDir}`);
      }

      if (fs.statSync(sourcePath).isFile()) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Copied "${item}" to ${imageTargetDir}`);
      }
    }
  }
}

optimizeImages()
