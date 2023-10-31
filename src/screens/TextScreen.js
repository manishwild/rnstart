import React, { useReducer, useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'first':
//       return { ...state, first: action.value }
//     default:
//       return state
//   }
// }
const TextScreen = () => {
  // const [state, dispatch] = useReducer(reducer, { first: '' })
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => {
          setName(text)
        }}
      />
      <TextInput
        onChangeText={(value) => setPassword(value)}
        value={password}
        placeholder="Password"
        secure={true}
        style={styles.input}
        secureTextEntry={true}
      />
      <Text>Your Name is {name} </Text>
      {password.length < 5 ? (
        <Text>password must be longer than 5 charachter</Text>
      ) : (
        null
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
})

export default TextScreen
