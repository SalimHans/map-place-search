import { StyleSheet } from "react-native"

import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(12)
  },
  loadingRow: {
    backgroundColor: "white",
    paddingVertical: normalize(8)
  }
})
