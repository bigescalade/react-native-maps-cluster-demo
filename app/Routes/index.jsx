import React from 'react'
import { Text } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import colors from '../styles/colors'
import Map from '../views/Map'

const TabNavigator = createBottomTabNavigator(
  {
    Tab1: {
      navigationOptions: {
        tabBarLabel: 'Map',
      },
      screen: Map,
    },
    Tab2: {
      navigationOptions: {
        tabBarLabel: 'Native View',
      },
      screen: Map,
    },
  },
  {
    initialRouteName: 'Tab1',
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.gray,
    },
  },
)

export default createAppContainer(TabNavigator)
