/**
 *  ScrollView demo test
 */

import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'


class ScrolledDownView extends Component {
  render() {
    const tiles = new Array(100).fill('')

    return (
      <ScrollView style={styles.scrl_container}>
        <View style={styles.scrl_block}></View>
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
  t_container: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eee'
  },
  scrl_container: {
    marginTop: 20
  },
  scrl_block: {
    height: 100,
    backgroundColor: '#ddd',
    padding: 5,
    margin: 2
  }
})

export default ScrolledDownView