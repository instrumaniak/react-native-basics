import React, { Component, Fragment } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import TextInputBasics from '../components/TextInputBasics'
import ButtonBasics from '../components/ButtonBasics'
import ScrolledDownView from '../components/ScrolledDownView'

import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from '../../Styles'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {   
      header: null
    }
  }
  render() {
    const { navigation: { navigate }} = this.props
    return (
      <View style={styles.containerSpaced}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>React Native Lab</Text>
          <Text style={{ width: 250, marginTop: 20, fontStyle: 'italic', textAlign: 'center' }}>
          In this Lab we experiment with basics of
          React Native, Creating Components & Styling them,
          Creating App Screens & Navigating to/from one another!
          </Text>
        </View>
        <View>
          <Icon name='github-alt' size={100} color='darkgray' />
        </View>
        
        <TouchableOpacity
          style={s.button}
          onPress={() => navigate('Details')}
        >
          <Text style={s.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  button: {
    paddingHorizontal: 65,
    paddingVertical: 10,
    backgroundColor: 'cadetblue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  }
})

export default Home