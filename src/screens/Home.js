import React, { Component, Fragment } from 'react'
import { View, Text } from 'react-native'

import TextInputBasics from '../components/TextInputBasics'
import ButtonBasics from '../components/ButtonBasics'
import ScrolledDownView from '../components/ScrolledDownView'



class Home extends Component {
  render() {

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <TextInputBasics />
        </View>

        <View style={{flex: 0.5}}>
          <ButtonBasics />
        </View>

        {/*<Touchables />*/}
        
        <View style={{flex: 1}}>
          <Text>Scrollable View:</Text>
          <ScrolledDownView />
        </View>
      </View>
    )
  }
}

export default Home