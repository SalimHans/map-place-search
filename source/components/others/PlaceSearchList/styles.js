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
  placeFlatList: {
    backgroundColor: "white"
  }
})
