import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  mapOverlay: {
    flex: 1
  },
  placeCard: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(12)
  }
})
