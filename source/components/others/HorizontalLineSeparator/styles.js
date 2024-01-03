import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  line: {
    height: normalize(2),
    backgroundColor: Colors.LIGHT_GREY_BORDER
  }
})
