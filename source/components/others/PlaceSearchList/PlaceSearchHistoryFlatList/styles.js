import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  searchHistory: {
    fontSize: normalize(14),
    color: Colors.DARK_TEXT_COLOR,
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8)
  },
  flatList: {
    backgroundColor: "white"
  }
})
