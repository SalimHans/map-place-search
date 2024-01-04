import React from "react"
import { Image, Text, View } from "react-native"

import { Flex } from "@ant-design/react-native"

import styles from "./styles"
import { Images } from "~assets/images"

export default function PlaceCard({ style, placeName = "", placeAddress = "" }) {
  return (
    <View style={[styles.card, style]}>
      <Flex align="start">
        <Image style={styles.placeImage} source={Images.EMPTY_IMAGE_PLACEHOLDER} />
        <View style={styles.placeDetails}>
          <Text style={styles.placeName} numberOfLines={2}>
            {placeName}
          </Text>
          <Text style={styles.placeAddress} numberOfLines={3}>
            {placeAddress}
          </Text>
        </View>
      </Flex>
    </View>
  )
}
