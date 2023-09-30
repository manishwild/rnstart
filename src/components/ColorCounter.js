import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
      {/* 50 */}
      {/* <Text>Green</Text>
      <Button
        title="Increase Green" m
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <Button
        title="Decrease Green"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <Text>BLUE</Text>
      <Button
        title="Increase Blue"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <Button
        title="Decrease Blue"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter
