import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
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
  },
  placeAddress: {
    fontSize: normalize(14),
    color: Colors.DARK_TEXT_COLOR,
    marginBottom: normalize(2)
  }
})
