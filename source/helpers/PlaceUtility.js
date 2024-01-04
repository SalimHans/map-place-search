import Config from "react-native-config"
import { URL } from "react-native-url-polyfill"

function constructGooglePhotoUrlByReference(photoReference, maxWidth = 300) {
  let baseUrl = new URL("https://maps.googleapis.com/maps/api/place/photo")

  baseUrl.searchParams.append("maxwidth", maxWidth)
  baseUrl.searchParams.append("photo_reference", photoReference)
  baseUrl.searchParams.append("key", Config.GOOGLE_MAPS_API_KEY)

  return baseUrl
}

export { constructGooglePhotoUrlByReference }
