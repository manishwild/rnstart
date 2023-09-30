import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Testcomponent = () => {
  // this exercise for view  and text
  let message = <Text>Manish!</Text>
  return (
    <View>
      <Text style={styles.text}>React Native!</Text>
      <Text style={styles.text1}>My name is {message}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    display: 'flex',
  },
  text1: {
    fontSize: 20,
  },
})
export default Testcomponent
