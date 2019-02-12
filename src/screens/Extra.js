import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'

const Extra = ({ navigation }) => (
  <View style={styles.containerCenter}>
    <Text>Extra</Text>
  </View>
)

Extra.navigationOptions = {
  headerTitle: 'Extra'
}

export default Extra