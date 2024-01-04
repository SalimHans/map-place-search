import React from "react"
import { SafeAreaView, View } from "react-native"

import MapView, { Marker } from "react-native-maps"

import styles from "./styles"
import { GlobalStyles } from "~helpers/GlobalStyles"
import Utils from "~constants/Utils"
import { isObjectEmpty } from "~helpers/GlobalUtility"
import { constructGooglePhotoUrlByReference } from "~helpers/PlaceUtility"

import usePlacesSearch from "~redux/hooks/usePlacesSearch"

import { PlaceSearchList } from "~components/others"
import { PlaceCard } from "~components/cards"

export default function Home() {
  const { selectedPlaceDetails, isFetchingPlaceDetails } = usePlacesSearch()

  const {
    name: selectedPlaceName,
    formatted_address: selectedPlaceAddress,
    photos: listPhotos = [],
    geometry
  } = selectedPlaceDetails || {}
  const { lat, lng } = geometry?.location || {}
  const selectedPlaceCoordinate = { latitude: lat, longitude: lng }

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
    if (isObjectEmpty(selectedPlaceDetails) && !isFetchingPlaceDetails) {
      return null
    }

    const firstPhoto = listPhotos[0]
    const placeImage = constructGooglePhotoUrlByReference(firstPhoto?.photo_reference)

    return (
      <PlaceCard
        style={styles.placeCard}
        isLoading={isFetchingPlaceDetails}
        placeName={selectedPlaceName}
        placeAddress={selectedPlaceAddress}
        placeImageSource={{ uri: placeImage.toString() }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.map} initialRegion={Utils.DEFAULT_MAP_REGION}>
        {selectedPlaceCoordinate ? (
          <Marker key={"locationMarker"} coordinate={selectedPlaceCoordinate} />
        ) : null}
      </MapView>
      {renderMapOverlay()}
    </View>
  )
}
