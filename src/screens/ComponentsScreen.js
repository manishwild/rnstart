import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentsScreen = () => {
  // this exercise for view  and text
  let greeting = <Text>How R U?</Text>
  return (
    <View>
      <Text style={styles.text}>Manish Component</Text>
      <Text>Componet Screen!</Text>
      {greeting}
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})
export default ComponentsScreen
