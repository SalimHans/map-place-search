import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  mapOverlay: {
    flex: 1,
    paddingVertical: normalize(12)
  },
  placeCard: {
    marginHorizontal: normalize(12),
    marginBottom: normalize(4)
  }
})
