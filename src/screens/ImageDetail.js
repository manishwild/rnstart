import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

const ImageDetail = ({imageSource,score,title} ) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>score - {score}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ImageDetail
