import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'

const Profile = () => (
  <View style={styles.containerCenter}>
    <Text>Profile</Text>
  </View>
)

Profile.navigationOptions = {
  tabBarIcon: <Icon name='md-person' size={25} />
}