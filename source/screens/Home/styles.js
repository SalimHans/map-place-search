import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    paddingVertical: normalize(12)
  },
  placeCard: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(4)
  }
})
