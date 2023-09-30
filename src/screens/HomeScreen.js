import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Manish</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Component Screen"
      />
      <Button onPress={() => navigation.navigate('Test')} title="test" />
      <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text>Image</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate('Counter')} title="Counter" />
      <Button onPress={() => navigation.navigate('Colors')} title="Colors" />
      <Button onPress={() => navigation.navigate('Square')} title="Square" />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignItems:'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
