import React from "react"
import { SafeAreaView, View } from "react-native"

import MapView from "react-native-maps"

import styles from "./styles"
import { GlobalStyles } from "~helpers/GlobalStyles"
import Utils from "~constants/Utils"
import { isObjectEmpty } from "~helpers/GlobalUtility"
import { constructGooglePhotoUrlByReference } from "~helpers/PlaceUtility"

import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceSearchList } from "~components/others"
import { PlaceCard } from "~components/cards"

export default function Home() {
  const { selectedPlaceDetails } = usePlacesSearch()

  // MARK: Render Methods
  function renderMapOverlay() {
    return (
      <SafeAreaView style={styles.mapOverlay}>
        <PlaceSearchList />
        <View style={GlobalStyles.flex} />
        {renderPlaceDetailsCard()}
      </SafeAreaView>
    )
  }

  function renderPlaceDetailsCard() {
    if (isObjectEmpty(selectedPlaceDetails)) {
      return null
    }

    const {
      name: selectedPlaceName,
      formatted_address: selectedPlaceAddress,
      photos: listPhotos = []
    } = selectedPlaceDetails || {}

    const firstPhoto = listPhotos[0]
    const placeImage = constructGooglePhotoUrlByReference(firstPhoto?.photo_reference)

    return (
      <PlaceCard
        style={styles.placeCard}
        placeName={selectedPlaceName}
        placeAddress={selectedPlaceAddress}
        placeImageSource={{ uri: placeImage.toString() }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} initialRegion={Utils.DEFAULT_MAP_REGION} />
      {renderMapOverlay()}
    </View>
  )
}
