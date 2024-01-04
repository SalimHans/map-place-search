import React from "react"
import { Image, Text, View } from "react-native"

import { ActivityIndicator, Flex } from "@ant-design/react-native"

import styles from "./styles"
import { Images } from "~assets/images"

export default function PlaceCard({
  style,
  isLoading = false,
  placeName = "",
  placeAddress = "",
  placeImageSource
}) {
  return (
    <View style={[styles.card, style]}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Flex align="start">
          <Image style={styles.placeImage} source={placeImageSource ?? Images.EMPTY_IMAGE_PLACEHOLDER} />
          <View style={styles.placeDetails}>
            <Text style={styles.placeName} numberOfLines={2}>
              {placeName}
            </Text>
            <Text style={styles.placeAddress} numberOfLines={3}>
              {placeAddress}
            </Text>
          </View>
        </Flex>
      )}
    </View>
  )
}
