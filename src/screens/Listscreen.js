import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

// this is for Flatlist Element
// key must be string and unique
const Listscreen = () => {
  let friends = [
    { name: 'friends#1' },
    { name: 'friends#2' },
    { name: 'friends#3' },
    { name: 'friends#4' },
    { name: 'friends#5' },
    { name: 'friends#6' },
    { name: 'friends#7' },
    { name: 'friends#8' },
    { name: 'friends#9' },
    { name: 'friends#10' },
  ]
  return (
    <FlatList
     horizontal
     showsHorizontalScrollIndicator={false}
      keyExtractor={(f) => f.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>
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

export default Listscreen
