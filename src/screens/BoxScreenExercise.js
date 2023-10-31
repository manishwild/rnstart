import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const BoxScreenExercise = () => {
  return (
    <View style={styles.boxStyles}>
      <Text style={styles.textOneStyles}>BoxScreen#1</Text>
      <Text style={styles.textTwoStyles}>BoxScreen#2</Text>
      <Text style={styles.textThreeStyles}>BoxScreen#3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  boxStyles: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center',
    // alignItems: 'stretch',
    alignItems: 'flex-start',
    // alignItems: 'flex-end',
    flexDirection: 'row',
    // flexDirection:'column',
    height: 200,

    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // justifyContent:'center',
  },
  textOneStyles: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    // alignSelf: 'flex-start',
    // margin:20,
    // padding:10,
    height: 100,
    width: 100,
  },
  textTwoStyles: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    // alignSelf: 'stretch',
    // margin:20,
    // padding:10,
    // position:'absolute',
    // fontSize: 15,
    marginTop:95,
    // top: 95,
    // bottom:10,
    // right:10,
    // left:10,
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    //samelike top right bootom left 0
    // ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 100,
    // alignSelf: 'flex-end',
  },
  textThreeStyles: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2,
    // alignSelf: 'flex-end',
    // margin:20,
    // padding:10,
    height: 100,
    width: 100,
  },
})
export default BoxScreenExercise

// 77
