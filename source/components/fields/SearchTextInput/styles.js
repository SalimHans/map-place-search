import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  searchInput: {
    backgroundColor: "white",
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(8),
    borderRadius: normalize(6)
  }
})
