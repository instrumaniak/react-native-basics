import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './src/screens/Home'
import Details from './src/screens/Details'
import MyModal from './src/screens/MyModal'

import { styles } from './Styles'

//--
const Feed = ({ navigation }) => (
  <View style={styles.containerCenter}>
    <Text>Feed</Text>
  </View>
)

Feed.navigationOptions = {
  tabBarIcon: <Icon name='md-list' size={25} />
}

const FeedDetails = () => (
  <View style={styles.containerCenter}>
    <Text>Feed Details</Text>
  </View>
)

const Settings = () => (
  <View style={styles.containerCenter}>
    <Text>Settings</Text>
  </View>
)

Settings.navigationOptions = {
  tabBarIcon: <Icon name='md-settings' size={25}/>
}

const Profile = () => (
  <View style={styles.containerCenter}>
    <Text>Profile</Text>
  </View>
)

Profile.navigationOptions = {
  tabBarIcon: <Icon name='md-person' size={25} />
}

//--
const DetailsTabNavigator = createBottomTabNavigator(
  {
     Feed,
     Profile,
     Settings   
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[
        navigation.state.index
      ]

      return {
        //header: null,
        headerTitle: routeName
      }
    }
  }
)

const Extra = ({ navigation }) => (
  <View style={styles.containerCenter}>
    <Text>Extra</Text>
  </View>
)

const DetailsStackNavigator = createStackNavigator(
  {
    DetailsTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name='md-menu'
          size={30}
          style={{ paddingLeft: 10 }}
        />
      )
    })
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  Details: {
    screen: DetailsStackNavigator
  },
  Extra
})

//--
const MainStack = createSwitchNavigator({
  Home,
  Details: AppDrawerNavigator
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'steelblue',
    // },
    //headerTintColor: '#fff',
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