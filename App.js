import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/screens/Home'
import Details from './src/screens/Details'


const AppNavigator = createStackNavigator({
  Home,
  Details
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'normal'
    }

  }
})

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App