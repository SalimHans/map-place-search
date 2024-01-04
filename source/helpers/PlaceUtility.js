import Config from "react-native-config"

function constructGooglePhotoUrlByReference(photoReference, maxWidth) {
  let baseUrl = new URLSearchParams("https://maps.googleapis.com/maps/api/place/photo")
  baseUrl.set("maxwidth", maxWidth)
  baseUrl.set("photo_reference", photoReference)
  baseUrl.set("key", Config.GOOGLE_MAPS_API_KEY)

  return baseUrl
}

export { constructGooglePhotoUrlByReference }
