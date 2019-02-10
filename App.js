import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import MyModal from './src/screens/MyModal'

const MainStack = createStackNavigator({
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

const RootStack = createStackNavigator({
  Main: MainStack,
  MyModal
},{
  mode: 'modal',
  headerMode: 'none'
})

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App