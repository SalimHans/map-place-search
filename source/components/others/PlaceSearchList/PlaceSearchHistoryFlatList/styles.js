import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8)
  },
  searchHistory: {
    fontSize: normalize(14),
    color: Colors.DARK_TEXT_COLOR
  },
  clearHistoryButtonText: {
    color: Colors.LIGHT_BLUE_TEXT
  },
  flatList: {
    maxHeight: normalize(300),
    backgroundColor: "white"
  }
})
