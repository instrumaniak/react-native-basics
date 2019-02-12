import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'
import TextInputBasics from '../components/TextInputBasics'
import ButtonBasics from '../components/ButtonBasics'

const Profile = () => (
  <View style={{ flex: 1 }}>
   <TextInputBasics />
   <ButtonBasics />   
  </View>
)


Profile.navigationOptions = {
  tabBarIcon: <Icon name='md-person' size={25} />
}

export default Profile