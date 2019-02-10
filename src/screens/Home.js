import React, { Component, Fragment } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import TextInputBasics from '../components/TextInputBasics'
import ButtonBasics from '../components/ButtonBasics'
import ScrolledDownView from '../components/ScrolledDownView'

import { styles } from '../../Styles'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //title: 'Home',
      headerLeft: (
        <View style={{
          paddingLeft: 5
        }}>
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title='Modal'
            color='#666'
          />
        </View>
      )
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
        <Button
          title='Details'
          onPress={() => navigate('Details')}
        />
      </View>
    );
  }
}


export default Home