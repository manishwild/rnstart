import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score={8}
      />
      <ImageDetail
        title="City"
        imageSource={require('../../assets/forest.jpg')}
        score={7}
      />
      <ImageDetail
        title="Temple"
        imageSource={require('../../assets/mountain.jpg')}
        score={10}
      />
    </View>
  )
}
const imgStyles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})
export default ImageScreen