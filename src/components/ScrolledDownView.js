/**
 *  ScrollView demo test
 */

import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'


class ScrolledDownView extends Component {
  render() {
    const tiles = new Array(10).fill('')

    return (
      <ScrollView contentContainerStyle={styles.scrl_container}>
        { tiles.map((item, index) => (
            <View style={styles.scrl_block} key={index}>
              <Text>Tile # {index + 1}</Text>
            </View>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrl_container: {
    marginTop: 2,
    padding: 5
  },
  scrl_block: {
    height: 100,
    padding: 5,
    margin: 2,
    backgroundColor: 'steelblue',
    opacity: 0.7,
    borderRadius: 5
  }
})

export default ScrolledDownView