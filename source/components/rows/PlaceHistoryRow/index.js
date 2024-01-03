import React from "react"
import { Text, TouchableOpacity } from "react-native"

import styles from "./styles"

export default function PlaceHistoryRow({ style, title = "", onPress = () => {} }) {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <Text style={styles.placeTitle}>{title}</Text>
    </TouchableOpacity>
  )
}
