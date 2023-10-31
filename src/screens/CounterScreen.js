import React, { useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

// state managing in react native

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return
  }
}
const CounterScreen = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // const { count } = state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 })
        }}
      />
      <Text>Current Count:{state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
