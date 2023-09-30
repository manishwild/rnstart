import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'



const ListTestScreen = () => {
  // this is for Flatlist Element
  // key must be string and unique
  let friends = [
    { name: 'friends 1', age: 10 },
    { name: 'friends 2', age: 20 },
    { name: 'friends 3', age: 30 },
    { name: 'friends 4', age: 45 },
    { name: 'friends 5', age: 55 },
    { name: 'friends 6', age: 65 },
    { name: 'friends 7', age: 75 },
    { name: 'friends 8', age: 88 },
    { name: 'friends 9', age: 19 },
    { name: 'friends 10', age: 21 },
  ]
  return (
    <FlatList
      keyExtractor={(f) => f.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name} - AGE {item.age}</Text>
      }}
    />
  )
}
const styles = StyleSheet.create({
  text: {
    marginVertical:50,
    fontSize:20
  },
})
export default ListTestScreen