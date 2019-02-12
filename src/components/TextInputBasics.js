/**
 *  Basic Text input demo
 */
import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'


class TextInputBasics extends Component {
  state = {
    name: ''
  }
  handleInput = name => {
    this.setState({ name })
  }
  handleClear = () => {
    this.setState({ name: '' })
  }
  render() {
    const { name } = this.state
    return (
      <View style={{flex:1, padding: 10, backgroundColor: '#eee'}}>
        <View>
          <Text style={{ fontWeight: 'bold'}}>Text Input Basics: </Text>
        </View>

        <View style={{ padding: 10}}>
          
          <TextInput
            value={name}
            placeholder='Please enter your name'
            onChangeText={this.handleInput}
          />
          
          <Button color='#666' title='Clear' onPress={this.handleClear}/>
        </View>
        { name.length > 0 &&
          <View style={{marginTop: 40}}>
            <Text>Your name is: <Text style={{fontWeight: 'bold'}}>{name}</Text></Text>
            <Text>
              { name.split(' ').map(word => word && '🍕').join(' ')}
            </Text>
          </View>
        }
      </View>
    )
  }
}

export default TextInputBasics