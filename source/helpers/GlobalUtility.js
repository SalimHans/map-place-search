import { Dimensions, PixelRatio } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

function normalize(size) {
  const scale = SCREEN_WIDTH / 411 // Based on Nexus 5X scale
  const newSize = size * scale

  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

function isObjectEmpty(obj) {
  if (!obj || (Object.keys(obj).length === 0 && obj.constructor === Object)) {
    return true
  }
}

export { normalize, isObjectEmpty }
