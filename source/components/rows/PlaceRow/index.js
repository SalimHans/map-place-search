import React from "react"
import { Text, TouchableOpacity } from "react-native"

import styles from "./styles"

export default function PlaceRow({ style, title = "", address = "", onPress = () => {} }) {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <Text style={styles.placeTitle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.placeAddress} numberOfLines={2}>
        {address}
      </Text>
    </TouchableOpacity>
  )
}
