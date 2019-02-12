import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'

const Settings = () => (
  <View style={styles.containerCenter}>
    <Text>Settings</Text>
  </View>
)

Settings.navigationOptions = {
  tabBarIcon: <Icon name='md-settings' size={25}/>
}