import { StyleSheet } from "react-native"

import Colors from "~constants/Colors"
import { normalize } from "~helpers/GlobalUtility"

export default styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: normalize(8)
  },
  placeImage: {
    width: normalize(100),
    height: undefined,
    aspectRatio: 1 / 1
  },
  placeDetails: {
    flex: 1,
    marginHorizontal: normalize(8)
  },
  placeName: {
    fontSize: normalize(19),
    fontWeight: "bold"
  },
  placeAddress: {
    fontSize: normalize(14),
    color: Colors.GREY_TEXT_COLOR
  }
})
