import React from 'react'
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation"

import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import Details from '../screens/Details'
import MyModal from '../screens/MyModal'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Extra from '../screens/Extra'

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


const DetailsStackNavigator = createStackNavigator(
  {
    DetailsTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation, tintColor }) => ({
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name='md-menu'
          size={30}
          color={ tintColor}
          style={{ paddingLeft: 10 }}
        />
      )
    })
  }
)

const ExtraStackNavigator = createStackNavigator(
  {
    Extra
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
  Extra: {
    screen: ExtraStackNavigator
  }
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
  headerMode: 'none',

})

export const AppContainer = createAppContainer(RootStack)