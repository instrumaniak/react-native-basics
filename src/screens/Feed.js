import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'

import ScrolledDownView from '../components/ScrolledDownView'

const Feed = ({ navigation }) => <ScrolledDownView />

Feed.navigationOptions = {
  tabBarIcon: <Icon name='md-list' size={25} />
}

export default Feed