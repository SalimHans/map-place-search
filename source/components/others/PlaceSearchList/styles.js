import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(12)
  },
  searchTextInput: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GREY_BORDER
  },
  searchHistory: {
    fontSize: normalize(14),
    color: Colors.DARK_TEXT_COLOR,
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8)
  },
  placeFlatList: {
    backgroundColor: "white"
  },
  loadingRow: {
    backgroundColor: "white",
    paddingVertical: normalize(8)
  }
})
