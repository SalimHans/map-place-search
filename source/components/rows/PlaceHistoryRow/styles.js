import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  row: {
    backgroundColor: "white",
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(8)
  },
  placeTitle: {
    fontSize: normalize(14),
    fontWeight: "500",
    marginBottom: normalize(2)
  }
})
