import React, { Component } from "react"
import { View, Text, Button } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../Styles'

const Feed = ({ navigation }) => (
  <View style={styles.containerCenter}>
    <Text>Feed</Text>
  </View>
)

Feed.navigationOptions = {
  tabBarIcon: <Icon name='md-list' size={25} />
}