/**
 *  Buttons demo
 */

import React, { Component } from 'react'
import { Alert, View, Button, StyleSheet } from 'react-native'


class ButtonBasics extends Component {
  handleButtonPress() {
    Alert.alert('You tapped a button!')
  }
  render() {
    return (
      <View>
      <View style={styles.buttons}>
        <Button title='Button#1' color='pink' onPress={this.handleButtonPress}/>
        <Button title='Button#2' color='skyblue' onPress={this.handleButtonPress}/>
        <Button title='Button#3' color='steelblue' onPress={this.handleButtonPress}/>
        <Button title='Button#4' onPress={this.handleButtonPress} />
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default ButtonBasics