import React from "react"
import { Text, TouchableOpacity } from "react-native"

import styles from "./styles"

export default function TextButton({ text, onPress = () => {}, textStyle, style, ...rest }) {
  return (
    <TouchableOpacity onPress={onPress} style={style} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}
